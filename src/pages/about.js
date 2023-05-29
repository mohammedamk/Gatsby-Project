import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/about-details.css"




export default function About({ data }) {

  const [about1, setAbout1] = useState();
  const [about2, setAbout2] = useState();


  const getAboutData = async () => {
    let fetchdata = await fetch("http://localhost:1337/api/aboutpages?populate=*");
    let jsondata = await fetchdata.json();

    let finalAboutData1 = jsondata.data[0];
    console.log("finalAboutData1", finalAboutData1);

    let finalAboutData2 = jsondata.data[1];
    console.log("finalAboutData2", finalAboutData2)

    setAbout1(finalAboutData1);
    setAbout2(finalAboutData2)
  }
  useEffect(() => {
    getAboutData()
  }, []);




  return (
    <Layout>
      <div className="container">
        <div className="heading">
          <p>We’re innovative. We’re passionate.</p>
          <p>We’re VowelWeb.</p>
        </div>

        <div className="about-section">
          <div className="row-1">
            <div className="row-1-image">
              <img src="http://localhost:1337/uploads/about_1_36d9244734.png" />
            </div>
            <div className="row-1-details">
              <h2>{about1?.attributes.TitleMain}</h2>
              <p>{about1?.attributes.body}</p>
            </div>
          </div>

          <div className="row-2">
            <div className="row-2-details">
              <h2>{about2?.attributes.TitleMain}</h2>
              <p> {about2?.attributes.body} </p>
            </div>
            <div className="row-2-image">
              <img src="http://localhost:1337/uploads/about_2_38e9985738.jpg"/>
            </div>
          </div>

        </div>

      </div>
    </Layout>
  )
}


