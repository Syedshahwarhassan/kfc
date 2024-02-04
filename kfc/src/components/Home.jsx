// import React from 'react'
import { useState } from "react";
import { circleimg } from "../Data/circle";
import { data } from "../Data/data";
import { top } from "../Data/Top"; 
import "../Style/Home.css";
const Home = () => {
  const [a, setA] = useState(1);
  const [name, setName] = useState("");
  const [x,setX] = useState(1);
  function increment() {
    setX(x+1)
    document.getElementById("total").innerHTML = x;
    document.getElementById("bucket").innerHTML = a * x;
  }
  function decrement() {
    if (x > 1) {
     setX(x-1)
      document.getElementById("total").innerHTML = x;
      document.getElementById("bucket").innerHTML = a * x;
    }
  }
  function xmark() {
    document.getElementById("detail").style.display = "none";
  setX(1);
  document.getElementById("total").innerHTML = x;
  document.getElementById("bucket").innerHTML = a * x;
  }
  return (
    <div style={{ backgroundColor: "black", height: "100%" }}>
      <div id="detail">
        <div id="detail2">
          <div className="dotdiv1">
            <span id="dot"></span>
            <span id="dot"></span> <span id="dot"></span>
          </div>
          <i
            id="xmark"
            onClick={() => xmark()}
            className="fa-solid fa-xmark "
            style={{ color: "#000000" }}
          />

          <div id="accd">
            <div className="accd1" id="scrol">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Chose an Option
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                    <div className="d-flex">
                    <input
                    type="radio"
                    className="m-2"
                    name="kfc"
                    value=""
                    checked="checked"
                    id="rad"
                  />
                  <h5      className="m-2">{name}</h5><h6      className="m-2">{`+${a}`}</h6>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Adds Soft Drinks (optional)
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <strong>This is the second items accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. Its also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Adds Ons (optonal)
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <strong>This is the third items accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. Its also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accd2" id="scrol">
              <img id="imgg" src="" style={{ height: "60%", width: "80%" }} />
              <h4 id="h44"></h4>
              <h5 id="h55"></h5>
              <div className="counter d-flex justify-content-center">
                <button id="in" onClick={() => increment()}>
                  +
                </button>
                <h6 id="total">1</h6>
                <button onClick={() => decrement()} id="de">
                  -
                </button>
              </div>

              <button id="btnn">
                <h6 id="bucket"></h6> ADD to Bucket{" "}
                <i
                  id="iii"
                  className="fa-solid fa-chevron-up fa-rotate-90"
                  style={{ color: "#000205" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.kfcpakistan.com/images/b527b2b0-87a7-11ee-8f64-8969f6610645-995x356_desktop_image-2023-11-20132126.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.kfcpakistan.com/images/71406210-99b1-11ee-a323-436534a2e21c-995x356(1)_desktop_image-2023-12-13121628.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <button id="rebtn">REORDER</button>
      </div>
      <div className="explore">
        <h1 className="h1exp">EXPLORE MENU</h1>

        <div
          className="circard"
          style={{
            height: "200px",
            width: "100%",
            display: "flex",
            padding: " 10px 100px",
          }}
        >
          <div
            className="row-md-5"
            id="scrol"
            style={{
              height: "200px",
              width: "100%",
              display: "flex",
              overflow: "auto",
            }}
          >
            {circleimg.map((c) => {
              return (
                <div
                  key={c.id}
                  className="col-md-3"
                  id="circleimg"
                  style={{ height: "150px", width: "150px" }}
                >
                  <img
                    id="cirimg"
                    src={c.image}
                    style={{ height: "80%", width: "80%" }}
                  />
                  <h6 id="cirh6">{c.title}</h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bestseller" style={{ padding: "10px 90px" }}>
        <h1 className="h1exp">Best Seller</h1>

        <div className="bestcard">
          <div
            className="row-md-3"
            id="scrol"
            style={{ overflow: "auto", display: "flex" }}
          >
            {data.map((c) => {
              return (
                <div
                  key={c.id}
                  className="col-md-3"
                  style={{ height: "400px", width: "300px" }}
                  id="cardbest"
                >
                  <div className="dotdiv">
                    <span id="dot"></span>
                    <span id="dot"></span> <span id="dot"></span>
                  </div>

                  <h6 id="besth6">{c.title}</h6>
                  <h5 id="besth5">{c.price}</h5>
                  <img
                    src={c.image}
                    onClick={() => {
                      
                      document.getElementById("detail").style.display = "block";
                      document.getElementById("imgg").src = c.image;
                      setName(c.title)
                      document.getElementById("h44").innerHTML = c.title;
                      document.getElementById("h55").innerHTML = c.des;
                      setA(c.price);
                      document.getElementById("bucket").innerHTML = c.price;
                    }}
                    style={{ height: "80%", width: "100%" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

       <div className="bestseller" style={{ padding: "10px 90px" }}>
        <h1 className="h1exp">TOPS DEALS</h1>
                <div className="bestcard">
          <div
            className="row-md-3"
            id="scrol"
            style={{ overflow: "auto", display: "flex"}}
          >
            {top.map((c) => {
              return (
                <div
                  key={c.id}
                  className="col-md-3"
                  style={{ height: "400px", width: "300px" }}
                  id="cardbest"
                >
                  <div className="dotdiv">
                    <span id="dot"></span>
                    <span id="dot"></span> <span id="dot"></span>
                  </div>
<i className="fa-regular fa-heart" id="heart-icon" />
<img
src={c.image}
className="scaleimg"
onClick={() => {
  
  document.getElementById("detail").style.display = "block";
  document.getElementById("imgg").src = c.image;
  setName(c.title)
  document.getElementById("h44").innerHTML = c.title;
  document.getElementById("h55").innerHTML = c.des;
  setA(c.price);
  document.getElementById("bucket").innerHTML = c.price;
}}
style={{ height: "60%", width: "100%" }}
/>
                  <h6 id="besth6">{c.title}</h6>
                  <h6 id="des">{c.des}</h6>
                  <h5 id="besth5" style={{backgroundColor:"transparent",left:"5px",fontWeight:"bold",margin:"5px"}}>{c.price}</h5>
              <button id="addbucket" >+ ADD TO BUCKET</button>
                </div>
              );
            })}
          </div>
        </div>
        </div>
    </div>
  );
};

export default Home;
