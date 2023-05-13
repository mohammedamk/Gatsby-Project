import React from "react";
import Layout from "../components/Layout";
import "../styles/homepage.css"
import { Link } from "gatsby";
// import Img from "gatsby"

export default function Home() {
  return (
    <Layout>
      <div className="search-box">
        <div class="form-outline">
          <input id="search-input" type="search" class="form-control" />
          <button id="search-button" type="button" class="btn btn-primary">Search</button>
        </div>
      </div>

      <div className="middle-content">

        <div className="what-we-do-page">
          <h2>We help ambitious clients get more from web & mobile</h2>
          <p>At VowelWeb, we use the power of world-class design and the best online technology to craft fast-loading, engaging, and highly attractive web & mobile experiences that connect you and your customers more effectively than ever.</p>
          <p><b>Node.JS Development:</b> The Backbone of App Development. Make your web and mobile applications faster and easily scalable with Node.JS development</p>
        </div>
        <img src="/what-we-do.png" />
      </div>

      <div className="content-2">

        <div className="content-2-image">
          <img src="parallax-service1.png" />
        </div>
        <div className="content-2-details">
          <h2>Our Vision</h2>
          <p>Our prime focus is on the positive development of web-related technologies and making a global footprint with a seal of trust. We want to win the hearts of our national and international clients by providing the projects free of errors and that too in time. Client satisfaction holds a top priority because by the end of the day, we believe it is not only the revenue generation but the perfect accredited delivery that matters and your solution needs to have a long-lasting result.</p>
        </div>
      </div>

      <div className="content-3">
        <div className="content-3-details">
          <h2>Our Mission</h2>
          <p>Our mission is straightforward and our team does all the works based on the mission statement. We have a mission and the mission is to rise through the ladder for developing the finest web-related technologies through proper methods and discipline of the team. We do not put pressure on our team and our mission is to innovate with freeness of mind and self-discipline. We have indeed achieved more than expected results by following such ways and the results have come before expectation.</p>
        </div>
        <div className="content-2-image">
          <img src="creative-comunications.png" />
        </div>
      </div>


      <div className="timeline">
        <h1>The Mumbai Driven Timeline</h1>
        <h3>Our Journey Through the Years</h3>
        <img src="journey-vowelweb-removebg-preview.png" />
      </div>

      <div className="contact-homepage">

          <div className="details">
            <h4>Mumbai Driven</h4>
            <h2>Growing with technology</h2>
            <p>We are the finest Website and eCommerce development team of
              experts who will help you to achieve your exact requirements
              with top-notch delivery.</p>
              <Link to="/contact">Contact</Link>
          </div>
          <div className="contact-image">
            <img src="Agency-Illustration-1-removebg-preview.png"/>
          </div>
        </div>
    </Layout>
  )
}