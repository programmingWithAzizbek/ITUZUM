import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../app/cartSlice";
import { toast } from "react-toastify";
import Products from "../components/Products";

const Cart = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      dispatch({ type: "cart/setCartItems", payload: JSON.parse(storedCart) });
    }
  }, [dispatch]);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    toast.info("Mahsulot savatdan olib tashlandi");
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    setSelectedItems([]);
    toast.warn("Savat bo‘shatildi");
  };

  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const selectedProducts = cartItems.filter((item) =>
    selectedItems.includes(item.id)
  );

  const totalPrice = selectedProducts
    .reduce(
      (total, item) =>
        total +
        parseFloat(item.price) *
          (1 - (item.discountPercentage || 0) / 100) *
          10000,
      0
    )
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const totalDiscount = selectedProducts
    .reduce(
      (total, item) =>
        total +
        parseFloat(item.price) * 10000 -
        parseFloat(item.price) *
          (1 - (item.discountPercentage || 0) / 100) *
          10000,
      0
    )
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <div className="max-w-7xl mx-auto px-5">
      <h2 className="text-3xl font-bold mb-5">Savat</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Savatda hech narsa yo‘q</p>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={selectedItems.length === cartItems.length}
                onChange={() =>
                  setSelectedItems(
                    selectedItems.length === cartItems.length
                      ? []
                      : cartItems.map((item) => item.id)
                  )
                }
              />
              <span className="text-lg font-medium">Hammasini tanlash</span>
            </label>
          </div>

          <div className="space-y-4">
            {cartItems.map((item) => {
              const discountPrice = (
                parseFloat(item.price) *
                (1 - (item.discountPercentage || 0) / 100) *
                10000
              )
                .toFixed(0)
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

              const originalPrice = (parseFloat(item.price) * 10000)
                .toFixed(0)
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white"
                >
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                    className="mr-3 cursor-pointer"
                  />

                  <div className="flex items-center gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-20 h-20 object-contain bg-gray-100 p-2"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                      <p className="text-lg font-bold text-purple-600">
                        {discountPrice} so‘m{" "}
                        <span className="text-gray-400 line-through text-sm">
                          {originalPrice} so‘m
                        </span>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-gray-500 hover:text-red-600 cursor-pointer"
                  >
                    O'chirish
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-5 p-4 bg-gray-50 border rounded-lg">
            <h3 className="text-xl font-semibold">Buyurtmangiz</h3>
            <p className="text-lg">
              Mahsulotlar: <span className="font-bold">{totalPrice} so‘m</span>
            </p>
            <p className="text-green-500">
              Tejov: <span>{totalDiscount} so‘m</span>
            </p>
            <button
              className="w-full mt-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 cursor-pointer"
              disabled={selectedItems.length === 0}
            >
              Rasmiylashtirishga o‘tish
            </button>
          </div>

          <button
            onClick={handleClearCart}
            className="mt-5 bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-900 cursor-pointer"
          >
            Savatni bo‘shatish
          </button>
        </>
      )}
      <Products searchQuery={searchQuery} />
    </div>
  );
};

export default Cart;
