import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.products;
  } catch (error) {
    console.error("Mahsulotlarni yuklashda xatolik:", error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Mahsulotni yuklashda xatolik: ${id}`, error);
    throw error;
  }
};
