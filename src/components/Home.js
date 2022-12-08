import React from "react";
import BgImg from '../assets/bg.jpg'
import Products from "./Products";

function Home() {
  return (
    <div className="home mt-4 pt-5">
      <div className="card text-bg-dark text-white border-0">
        <img src={BgImg} className="card-img" alt="Background" height='650px'/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-0">
                    NEW SEASON ARRIVALS
                </h5>
                <p className="card-text lead fs-2">
                    CHECK OUT ALL THE TRENDS
                </p>
            </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
