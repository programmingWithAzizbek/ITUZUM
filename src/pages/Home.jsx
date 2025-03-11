import React from "react";
import Header from "../components/Header.jsx";
import Carousel from "../components/Carousel.jsx";
import Products from "../components/Products.jsx";
import { NavLink } from "react-router-dom";
import image1 from "../assets/images/carouselBottom-1.png";
import image2 from "../assets/images/carouselBottom-2.png";
import image3 from "../assets/images/carouselBottom-3.png";
import image4 from "../assets/images/carouselBottom-4.png";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-5 rounded-xl">
          <div>
            <Carousel />
            <div className="flex justify-between items-center mt-3">
              <NavLink
                to={"/category/sizning-gozalligingiz--676"}
                className={
                  "max-w-[301px] w-full flex justify-center items-center gap-x-3 py-2.5 pl-2 pr-3 hover:bg-[#dee0e5] transition-all bg-[#efefef] rounded-2xl"
                }
              >
                <img src={image1} alt="" width={40} />
                <span className="text-sm font-medium">
                  Sizning go'zalligingiz
                </span>
              </NavLink>
              <NavLink
                to={"/category/sizning-gozalligingiz--676"}
                className={
                  "max-w-[301px] w-full flex justify-center items-center gap-x-3 py-2.5 pl-2 pr-3 hover:bg-[#dee0e5] transition-all bg-[#efefef] rounded-2xl"
                }
              >
                <img src={image2} alt="" width={40} />
                <span className="text-sm font-medium">Hammasi avto uchun</span>
              </NavLink>
              <NavLink
                to={"/category/sizning-gozalligingiz--676"}
                className={
                  "max-w-[301px] w-full flex justify-center items-center gap-x-3 py-2.5 pl-2 pr-3 hover:bg-[#dee0e5] transition-all bg-[#efefef] rounded-2xl"
                }
              >
                <img src={image3} alt="" width={40} />
                <span className="text-sm font-medium">Yosh malikalarga</span>
              </NavLink>
              <NavLink
                to={"/category/sizning-gozalligingiz--676"}
                className={
                  "max-w-[301px] w-full flex justify-center items-center gap-x-3 py-2.5 pl-2 pr-3 hover:bg-[#dee0e5] transition-all bg-[#efefef] rounded-2xl"
                }
              >
                <img src={image4} alt="" width={40} />
                <span className="text-sm font-medium">
                  Garderobni yangilaymiz
                </span>
              </NavLink>
            </div>
          </div>
          <div>
            <Products />
          </div>
          <div className="mt-10">
            <Carousel />
          </div>
          <div>
            <Products />
          </div>
          <div className="mt-10">
            <Carousel />
          </div>
          <div>
            <Products />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
