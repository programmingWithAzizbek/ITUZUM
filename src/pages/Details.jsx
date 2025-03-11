import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/cardSlice.js";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Products from "../components/Products.jsx";

function Details() {
  let { id } = useParams();
  let [data, setData] = useState(null);
  let dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  function notify() {
    toast.success("Mahsulot savatga qo‘shildi");
  }

  return (
    <>
      <Header />
      {data && (
        <div className="mx-auto container gap-5 flex w-[1200px]">
          <div className="w-[65%]">
            <h2 className="text-xl font-semibold">{data.title}</h2>
            <div className="flex gap-10">
              <img
                src={data?.images?.[0]}
                className="w-[500px]"
                alt={data.title}
              />
              <button
                onClick={() => {
                  dispatch(addToCart(data));
                  notify();
                }}
                className="w-3xs bg-[#7000FF] h-10 mt-40 rounded-md cursor-pointer text-white"
              >
                Savatga qoʻshish
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      )}
      <div className="max-w-7xl w-full mx-auto">
        <Products />
      </div>
      <Footer />
    </>
  );
}

export default Details;
