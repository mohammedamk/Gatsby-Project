import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/homepage.css"
import { Link } from "gatsby";

export default function Home() {

  const [homepage1, setHomepage] = useState();
  const [homepage2, setHomepage2] = useState();
  const [homepage3, setHomepage3] = useState();
  const [timeline, setTimeline] = useState();
  const [contact, setContact] = useState();


  const getHomepageData = async () => {
    let fetchData = await fetch("http://localhost:1337/api/homepages?populate=*");
    let jsonData = await fetchData.json();

    console.log("data", jsonData);

    //-------content1------//
    let finalData1 = jsonData.data[0]
    console.log("finalData", finalData1);
    setHomepage(finalData1);


    //-------content2------//
    let finalData2 = jsonData.data[1];
    console.log("finalData2", finalData2)
    setHomepage2(finalData2);


    //-------content3------//
    let finalData3 = jsonData.data[2];
    console.log("finalData3", finalData3);
    setHomepage3(finalData3)


    //------timeline------//
    let timelineData = jsonData.data[3];
    console.log("timelineData", timelineData)
    setTimeline(timelineData);


    //--------contact---------//
    let contactData = jsonData.data[4];
    console.log("contactData",contactData)
    setContact(contactData);
  }
  useEffect(() => {
    getHomepageData();
  }, [])


  return (
    <Layout>

      <div className="middle-content">
        <div className="what-we-do-page">
          <h2> {homepage1?.attributes.title} </h2>
          <p>{homepage1?.attributes.body}</p>
          <p>{homepage1?.attributes.body2}</p>
        </div>
        <img src="http://localhost:1337/uploads/what_we_do_0083a2f7e0.png" />
      </div>


      <div className="content-2">
        <div className="content-2-image">
          <img src="http://localhost:1337/uploads/parallax_service1_07ee969be6.png" />
        </div>
        <div className="content-2-details">
          <h2> {homepage2?.attributes.title} </h2>
          <p> {homepage2?.attributes.body} </p>
        </div>
      </div>

      <div className="content-3">
        <div className="content-3-details">
          <h2> {homepage3?.attributes.title} </h2>
          <p> {homepage3?.attributes.body} </p>
        </div>
        <div className="content-2-image">
          <img src="http://localhost:1337/uploads/creative_comunications_2d88140d01.png" />
        </div>
      </div>


      <div className="timeline">
        <h1> {timeline?.attributes.titleSub} </h1>
        <h3> {timeline?.attributes.title} </h3>
        <img src="http://localhost:1337/uploads/thumbnail_ourrrrrr_journeyyyyy_removebg_preview_35ebb7480e.png" />
      </div>

      <div className="contact-homepage">
        <div className="details">
          <h4> {contact?.attributes.titleSub} </h4>
          <h2> {contact?.attributes.title} </h2>
          <p> {contact?.attributes.body} </p>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="contact-image">
          <img src="http://localhost:1337/uploads/Agency_Illustration_1_removebg_preview_e40aad85a8.png" />
        </div>
      </div>
    </Layout>
  )
}