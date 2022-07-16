import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import companyLogo from "../companyLogo.jpg";
import "../css/Hero.css";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <div className="footer-container">
          <div>
            <img src={companyLogo} className="company-logo" />
          </div>

          <section>
            <MDBRow>
              <MDBCol lg="2" md="6" className="mb-4 mb-md-0 footer-column">
                <h5 className="text-uppercase">Director</h5>
                <h5>Shubham Ojha</h5>
              </MDBCol>

              <MDBCol lg="2" md="6" className="mb-4 mb-md-0 footer-column">
                <h5 className="text-uppercase">
                  <FaPhone />
                  +918109777083 +917974633760
                </h5>
              </MDBCol>
              <MDBCol lg="2" md="6" className="mb-4 mb-md-0 footer-column">
                <h5>
                  <FaEnvelope />
                  trucklogistics07@gmail.com
                </h5>
              </MDBCol>
            </MDBRow>
            <h5>
              <FaHome />
              A-20, Mahavir Market, Sector-18, Vashi, Navi Mumbai, 400705
            </h5>
          </section>
        </div>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright: Truck On Logistics
      </div>
    </MDBFooter>
  );
}
