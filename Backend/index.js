const express = require("express");
const fetchCodes = require("../Backend/CityCodes");
const fetchDomestic = require("../Backend/Domestic");
const cors = require("cors");
const fetchAirports = require("./Airports");
const app = express();
const path = require("path");
const uuid = require("uuid");

const puppeteer = require("puppeteer");
const User = require("./userModel");
const compile = require("./compile");
const { body, validationResult } = require("express-validator");
// const { error } = require("console");

const port = 3000;
const mongoConnect = require("./database").mongoConnect;
app.use(express.json());
app.use(cors());
const data = {};
const DUMMY_USERS = [
  {
    id: "u1",
    name: "danesh",
    email: "daneshmd2235@gmail.com",
    password: "danesh",
  },
];
app.get("/CityCodes", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  fetchCodes()
    .then((data) => {
      const codes = [];
      data.forEach((element) => {
        codes.push({ city: element.city, code: element.code });
      });
      res.send(JSON.stringify(codes));
    })
    .catch((err) => console.log(err));
});
app.get("/DomesticFlights", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  fetchDomestic()
    .then((data) => {
      const FlightDataDomestic = [];
      data.forEach((element) => {
        FlightDataDomestic.push({ ...element });
      });
      res.send(JSON.stringify(FlightDataDomestic));
    })
    .catch((err) => console.log(err));
});

app.get("/Airports", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  fetchAirports()
    .then((data) => {
      const Airports = [];
      data.forEach((element) => {
        Airports.push({ ...element });
      });
      res.send(JSON.stringify(Airports));
    })
    .catch((err) => console.log(err));
});
app.post("/details", async (req, res) => {
  const {
    name,
    gender,
    phoneNumber,
    countryCode,
    email,
    totalFare,
    classType,
    departureDate,
    flightDetails,
    airport1,
    airport2,
  } = req.body;

  data.name = name.toUpperCase();
  data.gender = gender.toUpperCase();
  data.phoneNumber = phoneNumber;
  data.countryCode = countryCode;
  data.email = email;
  data.currentDate = new Date()
    .toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();
  data.random = Math.floor(10000 + Math.random() * 90000);
  data.baseFare = totalFare - 100;
  data.totalFare = totalFare;
  data.classType = classType.toUpperCase().replace("_FARE", "");
  data.departureDate = departureDate.split("-").reverse().join("-");
  data.flightDetails = flightDetails;
  data.airport1 = airport1;
  data.airport2 = airport2;

  console.log(data);
  res.send("Received your data!");
  (async function () {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      const content = await compile("templateTicket", data);
      await page.setContent(content);
      await page.emulateMediaType("screen");
      await page.pdf({
        path: "ticket.pdf",
        format: "A4",
        printBackground: true,
      });
      console.log("done");
      await browser.close();
      process.exit();
    } catch (e) {
      console.log(e);
    }
  })();
});
app.get("/openpdf", async (req, res) => {
  const pdfPath = path.join(__dirname, "ticket.pdf");
  res.download(pdfPath, "ticket.pdf");
});
app.get("/getids", (req, res, next) => {
  res.json({ users: DUMMY_USERS });
});

app.post(
  "/signup",
  [
    body("name").not().isEmpty().withMessage("Name is required"),
    body("email")
      .normalizeEmail()
      .isEmail()
      .withMessage("Invalid email format"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(res.status(422).json({ errors: errors.array() }));
    }
    const { name, email, password } = req.body;
    let existingUser;
    try {
      existingUser = await User.findOne({ email: email });
    } catch (err) {
      console.log(err);
      return next(res.status(500).json({ message: "signing up failed" }));
    }

    if (existingUser) {
      return next(res.status(422).json({ message: "user exist already" }));
    }
    const createUser = new User({
      name,
      email,
      password,
    });
    try {
      await createUser.save();
    } catch (err) {
      return next(res.status(500).json({ message: "signup failed" }));
    }
    res.status(201).json({ user: createUser.toObject({ getters: true }) });
  }
);
app.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  const identifiedUser = DUMMY_USERS.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    res.status(404).json({ err: "error" });
  }
  res.json({ message: "loggedin" });
});
mongoConnect(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
