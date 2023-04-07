import React from "react";
import "./AddProduct.css";

//import "./Symptom";

import Carousel from "react-bootstrap/Carousel";
import poster1 from "../assets/poster1.png";
import poster2 from "../assets/poster2.png";
import poster3 from "../assets/poster3.png";

//import Chart from "./Chart";
 
function Starter() {
    let obj={
        width:"400px",
        padding: "5px 100px ",
        height: "630px",
      }
  return (
    <div>
    
      <Carousel>
        <Carousel.Item>
        <img style = {obj} className="d-block w-100" src={poster1} alt="Second slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style = {obj} className="d-block w-100" src={poster3} alt="Second slide" />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style = {obj} className="d-block w-100" src={poster2} alt="Third slide" />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
      
    <br/>
    <br/>
    
    
<div id="symptom-identification" className="page">
        <div id="symptom-card">
            <div id="symptom-card-header">
                <h3>SYMPTOM ANALYSIS</h3>
            </div>
            <div id="analysis-results">
                <img id="graph" src='https://cdn.discordapp.com/attachments/934079930583625750/965265257088057416/unknown.png' />
                <p>Disc: Image for now, will be updated in later versions.</p>
            </div>
        </div>
        <div id="symptom-page-image">
            <img id="symp-img" src="https://media.discordapp.net/attachments/934093506773938277/965133579812212736/image2.png" alt="sym-img" />
        </div>
    </div>

    <div id="contact-us" className='page'>
        <button type="button" className="contact-us-button">
            CONTACT US
        </button>
        <div id="contact-box">
            <br></br>
            <button type="button" className="call-now-button">
                CALL NOW
            </button>
            <br></br>
            <div className='info-box'>
                <div className='row-box'>
                    <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" height={50} width={50} alt="gmail-icon" className='contact-image'></img>
                    <input type="text" className='contact-input'></input>
                </div>
                <div className='row-box'>
                    <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" height={50} width={50} alt="phone-icon" className='contact-image'></img>
                    <input type="text" className='contact-input'></input>
                </div>
            </div>
        </div>
    </div>
    </div>
    




  );
}

export default Starter;
