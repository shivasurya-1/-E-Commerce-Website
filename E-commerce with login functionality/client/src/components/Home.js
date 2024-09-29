import React from "react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  let storeObj = useSelector((store) => {
    return store;
  });
  let [products, setProducts] = useState([]);
  let [searcchTerm, setSearchTerm] = useState("");
  let [originalProducts, setOriginalProducts] = useState([]);

  let gettingProducts = async () => {
    let reqOptions = {
      method: "GET",
    };
    let JSONData = await fetch("https://fakestoreapi.com/products", reqOptions);
    let JSData = await JSONData.json();
    setProducts(JSData);
    setOriginalProducts(JSData);
    console.log(JSData);
  };
  useEffect(() => {
    gettingProducts();
  }, []);

  let gettingProductsByCategory = (selectedCategory) => {
    let filteredData = originalProducts.filter((product) => {
      return product.category === selectedCategory;
    });
    setProducts(filteredData);
  };
  return (
    <div>
      <div className="topNavigation">
        <div className="logo">
          <img alt="" src="./Images/logo.png"></img>
        </div>
        <div>
          <Link to={"/home"}>Home</Link>
        </div>
        <div className="searchBar">
          <input
            className="input-search"
            type="text"
            placeholder="Search"
            onChange={(eo) => {
              setSearchTerm(eo.target.value);
            }}
          ></input>
        </div>
        <div>
          <Link to={"/aboutus"}>About Us</Link>
        </div>
        <div>
          <Link to={"/"}>Logout</Link>
        </div>
      </div>

      <div>
        <div className="titleDiv">
          <h1 className="welcomeTitle">
            Welcome to the Store {storeObj.userDetails.firstName}{" "}
            {storeObj.userDetails.lastName}
          </h1>
          <p className="titleP">
            Clearance sale is now <b>LIVE</b>
          </p>
        </div>
        <br></br>
        <div className="button-div">
          <button
            onClick={() => {
              gettingProducts();
            }}
          >
            Get All Products
          </button>
          <button
            className="styled-button"
            onClick={() => gettingProductsByCategory("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="styled-button"
            onClick={() => gettingProductsByCategory("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="styled-button"
            onClick={() => gettingProductsByCategory("electronics")}
          >
            Electronics
          </button>
          <button
            className="styled-button"
            onClick={() => gettingProductsByCategory("women's clothing")}
          >
            Women's Clothing
          </button>
        </div>
        <br></br>
        {products
          .filter((val) => {
            if (searcchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searcchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((ele) => {
            return (
              <div className="productsStyling">
                <h1 className="productsTitle"> {ele.title} </h1> <br></br>
                <img className=" productsImage" src={ele.image}></img>
                <br></br>
                <h1>${ele.price}</h1>
                <br></br>
                <p>{ele.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
