import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../app/selectedSlice";
import { addToCart } from "../app/cartSlice";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import star1 from "../assets/images/star1.svg";
import cartPlus from "../assets/images/cartPlus.svg";

function Selected() {
  const dispatch = useDispatch();
  const selectedList = useSelector((store) => store.selected.selectedList);

  useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(selectedList));
  }, [selectedList]);

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
    toast.info("Mahsulot tanlanganlardan olib tashlandi", {
      autoClose: 1500,
      toastId: `remove-${id}`,
    });
  };

  const handleAddToCart = (e, item) => {
    e.preventDefault();
    dispatch(addToCart(item));
    toast.success("Mahsulot savatga qo‘shildi", {
      toastId: `cart-${item.id}`,
    });
  };

  return (
    <main>
      <div className="max-w-7xl w-full mx-auto px-5">
        <h3 className="text-3xl font-bold mb-5">Tanlangan mahsulotlar</h3>
        {selectedList.length === 0 ? (
          <p className="text-gray-500 text-lg">
            Hozircha tanlangan mahsulot yo‘q
          </p>
        ) : (
          <div className="grid grid-cols-5 gap-5">
            {selectedList.map((item) => {
              let newRating = parseFloat(item.rating.toFixed(1));
              const discountPercentage = item.discountPercentage || 0;
              const discountPrice = (
                parseFloat(item.price) *
                (1 - discountPercentage / 100) *
                10000
              )
                .toFixed(0)
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
              const formattedPrice = (parseFloat(item.price) * 10000)
                .toLocaleString("ru-RU")
                .replace(",", " ");

              return (
                <NavLink
                  to={`/details/${item.id}`}
                  key={item.id}
                  className="mx-auto bg-white rounded-xl max-w-[232px] w-full cursor-pointer hover:shadow"
                >
                  <div className="overflow-hidden rounded-xl hover:rounded-t-xl hover:rounded-b-none relative">
                    <button
                      className="absolute z-10 right-3 top-2.5 cursor-pointer active:animate-ping"
                      onClick={(e) => {
                        e.preventDefault();
                        handleRemove(item.id);
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="select-none"
                      >
                        <path
                          d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                          fill="#7F4DFF"
                          fillOpacity="0.8"
                        />
                      </svg>
                    </button>
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-[310px] object-contain bg-[#EFEFEF] hover:transition-all hover:scale-105 hover:duration-300 hover:ease-in transition-all"
                    />
                  </div>
                  <div className="px-2 pb-2 pt-3">
                    <p className="text-xs line-clamp-2">{item.description}</p>
                    <div className="flex items-center gap-1">
                      <img src={star1} alt="" width={14} />
                      <p className="text-gray-600 text-sm">
                        {newRating} ({item.stock} ta izoh)
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="mt-3">
                        <p className="text-gray-400 text-sm line-through">
                          {formattedPrice}
                        </p>
                        <p className="text-lg font-bold">{discountPrice}</p>
                      </div>
                      <button
                        onClick={(e) => handleAddToCart(e, item)}
                        className="border mt-4 rounded-full flex justify-center items-center w-8 h-8 text-[#BDBEC4] transition-all hover:bg-[#dee0e5] cursor-pointer"
                      >
                        <img src={cartPlus} alt="Savatchaga qo‘shish" />
                      </button>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}

export default Selected;
