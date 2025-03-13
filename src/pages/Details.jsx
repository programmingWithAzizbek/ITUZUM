import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../app/cartSlice";
import { addItem, removeItem } from "../app/selectedSlice";
import { toast } from "react-toastify";
import Products from "../components/Products.jsx";
import { fetchProductById } from "../api";

function Details() {
  let { id } = useParams();
  let [data, setData] = useState(null);
  let dispatch = useDispatch();

  const selectedList = useSelector((store) => store.selected.selectedList);
  const isSelected = selectedList.some((item) => item.id === +id);

  useEffect(() => {
    if (id) {
      const getProduct = async () => {
        try {
          const product = await fetchProductById(id);
          setData(product);
        } catch (err) {
          console.error("Mahsulotni yuklashda xatolik", err);
        }
      };
      getProduct();
    }
  }, [id]);

  function handleAddToCart() {
    dispatch(addToCart(data));
    toast.success("Mahsulot savatga qo‘shildi");
  }

  function handleToggleSelected() {
    if (isSelected) {
      dispatch(removeItem({ id: data.id }));
      toast.info("Mahsulot tanlanganlardan olib tashlandi");
    } else {
      dispatch(addItem(data));
      toast.success("Mahsulot tanlanganlarga qo‘shildi");
    }
  }

  return (
    <>
      {data && (
        <div className="max-w-7xl mx-auto px-5 flex gap-5">
          <div className="w-[65%]">
            <h2 className="text-xl font-semibold">{data.title}</h2>
            <div className="flex gap-10">
              <img
                src={data?.images?.[0]}
                className="w-[500px]"
                alt={data.title}
              />
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={handleAddToCart}
                  className="w-3xs bg-[#7000FF] h-10 rounded-md cursor-pointer text-white"
                >
                  Savatga qoʻshish
                </button>
                <button
                  onClick={handleToggleSelected}
                  className={`w-3xs h-10 rounded-md cursor-pointer border ${
                    isSelected ? "bg-red-500 text-white" : "bg-gray-200"
                  }`}
                >
                  {isSelected
                    ? "Tanlanganlardan olib tashlash"
                    : "Tanlanganlarga qo‘shish"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-7xl w-full mx-auto px-5">
        <Products />
      </div>
    </>
  );
}

export default Details;
