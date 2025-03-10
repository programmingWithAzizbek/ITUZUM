import React, { useState, useEffect } from "react";
import axios from "axios";
import cartPlus from "../assets/images/cartPlus.svg";
import star1 from "../assets/images/star1.svg";
import Like from "./Like";

function Products() {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((response) => {
        setData(response.data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <>
      <div className="mt-12">
        <h3 className="text-3xl font-bold mb-5">Tavsiya etamiz</h3>
        <div className="grid grid-cols-5 gap-5">
          {data.slice(0, visibleCount).map((product) => {
            let rating = product.rating;
            let newRating = parseFloat(rating.toFixed(1));
            const discountPercentage = product.discountPercentage || 0;
            const discountPrice = (
              parseFloat(product.price) *
              (1 - discountPercentage / 100) *
              10000
            )
              .toFixed(0)
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            const formattedPrice = (parseFloat(product.price) * 10000)
              .toLocaleString("ru-RU")
              .replace(",", " ");

            return (
              <div
                key={product.id}
                className="mx-auto bg-white rounded-xl max-w-[232px] w-full cursor-pointer hover:shadow"
              >
                <div className="overflow-hidden rounded-xl hover:rounded-t-xl hover:rounded-b-none relative">
                  <Like />
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-[310px] object-contain bg-[#EFEFEF] hover:scale-110 transition-all"
                  />
                </div>
                <div className="px-2 pb-2 pt-3">
                  <p className="text-xs line-clamp-2">{product.description}</p>
                  <div className="flex items-center gap-1">
                    <img src={star1} alt="" width={14} />
                    <p className="text-gray-600 text-sm">
                      {newRating} ({product.stock} ta izoh)
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="mt-3">
                      <p className="text-gray-400 text-sm line-through">
                        {formattedPrice}
                      </p>
                      <p className="text-lg font-bold">{discountPrice}</p>
                    </div>
                    <button className="border mt-4 rounded-full flex justify-center items-center w-8 h-8 text-[#BDBEC4] transition-all hover:bg-[#dee0e5] cursor-pointer">
                      <img src={cartPlus} alt="Savatchaga qo‘shish" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {visibleCount < data.length && (
          <div className="flex justify-center mt-5">
            <button
              onClick={loadMore}
              className="bg-[#e6e8ed] hover:bg-[#d0d3d9] transition-all rounded-tr-lg px-3.5 py-2 text-black h-14 max-w-[740px] w-full font-semibold text-base rounded-lg cursor-pointer"
            >
              Yana ko'rsatish 10
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
