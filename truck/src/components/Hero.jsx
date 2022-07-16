import React from "react";
import "../css/Hero.css";
import NavScrollExample from "./NavScrollExample";
import reliability from "../reliability.jpg";
import rating from "../rating.jpg";
import recycling from "../recycling.jpg";
import clients from "../clients.jpg";
import ImageAndTextExample from "./ImageAndTextExample";
import IndividualIntervalsExample from "./IndividualIntervalsExample";
import Footer from "./Footer";

function Hero() {
  return (
    <div>
      <div className="container">
        <NavScrollExample />
        <div className="image-holder">
          <img src="heroBanner.jpg" className="hero-img" />
          <div class="centered">
            Truck on Logistics
            <div className="inside-centered">Tradition of Trust</div>
          </div>
        </div>
      </div>
      <p className="text">
        We having our own 58 vehicles including LCV,trucks, containers,
        trailers.Our regular routes are MH,GJ,MP,UP,UK, HR,
        DELHI,JH,BR,AP,TN,KA,CG,OR,Assam & Guwahati. And if origin place in
        Mumbai or nearby location then we are capable to provide service in all
        over India. Apart from this, we having 400+ attached vehicles across the
        country. We also deal in ODC 20,25+ft. Currently we are happily serving
        our services to Amar Ujala, Indian express,Offshore Infrastructure pvt
        ltd, Angel chemicals,TINCO chemicals,Manisha compositek Pvt ltd
        Pune,Sterlient blasting equipment Indore, CROMPTON greaves Bhopal and so
        many more
      </p>

      <p className="text">
        All drivers, and general workers are fully trained and all employees and
        trucks comply with the safety standards.
      </p>
      <p className="text">
        Our vision is to operate a disciplined company in the transport sector,
        leading the way to improvement for prompt and efficient service.
      </p>
      <div className="cards">
        <ImageAndTextExample
          image={reliability}
          text={
            "To uphold a reputation of reliability and strict business ethics"
          }
        />
        <ImageAndTextExample
          image={rating}
          text={"To provide an open‐minded, broad spectrum customised service"}
        />
        <ImageAndTextExample
          image={recycling}
          text={
            "To focus on sustainable growth and keep our visible assets immaculate."
          }
        />
      </div>
      <div className="section-heading">Our Offerings</div>
      <IndividualIntervalsExample />
      <div className="section-heading">Companies we are working with</div>
      <img src={clients} className="client-img" />
      <Footer />
    </div>
  );
}

export default Hero;
