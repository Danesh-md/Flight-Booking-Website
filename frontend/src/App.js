import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StartPage from "./pages/StartPage";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/LoginPage";
import CitiesPage from "./pages/CitiesPage";
import FlightsPage from "./pages/FlightsPage";
import Paymentpage from "./pages/PaymentPage";
import CreditPage from "./pages/CreditPage";
import { CityContextProvider } from "./context/CityContext";
import { DomesticFlightsContextProvider } from "./context/FlightDataDomestic";
import { AirportsContextProvider } from "./context/AirportsContext";
import DownloadTicketPage from "./pages/DownloadTicketPage";
function App() {
  return (
    <AirportsContextProvider>
      <DomesticFlightsContextProvider>
        <CityContextProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <StartPage />
              </Route>
              <Route path="/booking" exact>
                <BookingPage />
              </Route>
              <Route path="/signIn" exact>
                <LoginPage />
              </Route>
              <Route path="/citiesAndCodes">
                <CitiesPage />
              </Route>
              <Route path="/flights">
                <FlightsPage />
              </Route>
              <Route path="/review">
                <Paymentpage />
              </Route>
              <Route path="/book">
                <CreditPage />
              </Route>
              <Route path="/downloadTicket">
                <DownloadTicketPage />
              </Route>

              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
        </CityContextProvider>
      </DomesticFlightsContextProvider>
    </AirportsContextProvider>
  );
}

export default App;
