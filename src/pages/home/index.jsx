import React from "react";
import { Row, Col } from "react-bootstrap";
import Partnerns from "./partners";
import Tray3DSlider from "./certification";
import AnimatedCounter from "./animateCounter";
import Whoweare from "./who-we-are";
import CustomButton from "../../Components/elements/button";

function Home() {
  return (
    <>
      <div className="homepage-container">
        {/* image section */}

        <img
          src="public\assets\images\IT SOLUTIONS.webp"
          alt=""
          className="img-style"
        />

        {/* content section */}
        <div className="content">
          <h1>
            The Right <span className="gradient-text">People</span> 
            with the Right <span className="gradient-text">Skill</span>
            at the Right <span className="gradient-text">Time</span>
          </h1>
          <p className="p-tag">
            Recruitment, Payroll, Staffing & Tech Solutions to take your
            business to the next level
          </p>
          {/* <span className="text-muted ">Want to talk?</span> */}
          <div className="d-flex gap-2">
            <CustomButton >Talk to us</CustomButton>
            <CustomButton>Apply Here</CustomButton>
          </div>
        </div>
      </div>
       <Whoweare/>
       <div className="counter-container">
      <AnimatedCounter target={2025} duration={160}  content="Happy Users"/>
      <AnimatedCounter target={150} duration={1000} content="Projects Done" />
      <AnimatedCounter target={150} duration={1000} content="Expert Consultant" />
       <AnimatedCounter target={880} duration={1000} content="Completed Casses" />
      </div>

      <h1 className="custom-heading">Our Services</h1>
      <div className="grid-container">
        <div className="card" data-aos="fade-left">
          <img
            src="src\assets\images\cardbox (1).jpg"
            className="card-img-top img-dimension"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <CustomButton variant="primary" >
              Go somewhere
            </CustomButton>
          </div>
        </div>
        <div className="card" data-aos="fade-in">
          <img
            src="src\assets\images\cardbox1 (1).jpg"
            className="card-img-top img-dimension"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" data-aos="fade-right">
          <img
            src="src\assets\images\cardbox1 (2).jpg"
            className="card-img-top img-dimension"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" data-aos="fade-left">
          <img
            src="src\assets\images\cardbox1 (3).jpg"
            className="card-img-top img-dimension"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" data-aos="fade-in">
          <img
            src="src\assets\images\cardbox1 (4).jpg"
            className="card-img-top img-dimension"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" data-aos="fade-right">
          <img
            src="src\assets\images\cardbox1 (2).jpg"
            className="card-img-top img-dimension"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <Partnerns />
      <h1 className="text-center my-4">Our Certifications</h1>
      <Tray3DSlider />
      <div>

      </div>
      
    </>
  );
}

export default Home;
