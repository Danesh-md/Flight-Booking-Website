import { useState, useEffect } from "react";
import axios from "axios";
import gif from "../img/process.gif";
import green from "../img/icons8-checkmark-240.png";
const DownloadTicket = () => {
  const [isVisible, setIsVisible] = useState(true);

  const fetchPDF = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:3000/openpdf", {
        responseType: "blob",
      });

      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(pdfBlob);

      window.open(url, "_blank");
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {isVisible && (
        <div>
          <img src={gif} alt="gif" />
          <h2 style={{ color: "#F2AB2C", textAlign: "center" }}>
            Processing Payment...
          </h2>
          <p style={{ textAlign: "center" }}>
            Please wait while we are processing your payment.
          </p>
        </div>
      )}
      {!isVisible && (
        <div style={{ marginTop: "70px", marginLeft: "7%" }}>
          <img src={green} alt="green" />
          <button
            style={{
              marginTop: "40px",
              marginRight: "45%",
              marginLeft: "13%",
              backgroundColor: "white",
              border: "3px solid #4D74AF",
              width: "150px",
              height: "30px",
              color: "#4D74AF",
              cursor: "pointer",
              borderRadius: "5px",
            }}
            type="button"
            onClick={fetchPDF}
          >
            Print Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default DownloadTicket;
