import axios from "../../api/axiosconfig";

import {
  loadproducts,
  updateproduct,
  deleteproduct,
} from "../reducers/productSlice";


// LOAD PRODUCTS

export const asyncloadproducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/products");

    dispatch(loadproducts(data));
  } catch (error) {
    console.log("Load Products Error:", error);
  }
};


// CREATE PRODUCT

export const asynccreateproduct = (product) => async (dispatch) => {
  try {
    await axios.post("/products", product);

    dispatch(asyncloadproducts());
  } catch (error) {
    console.log("Create Product Error:", error);
  }
};


// UPDATE PRODUCT

export const asyncupdateproduct = (id, product) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      `/products/${id}`,
      product
    );

    console.log("Updated Product:", data);

    dispatch(updateproduct(data));
  } catch (error) {
    console.log("Update Product Error:", error);
  }
};


// DELETE PRODUCT

export const asyncdeleteproduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`/products/${id}`);

    console.log("Product Deleted:", id);

    dispatch(deleteproduct(id));
  } catch (error) {
    console.log("Delete Product Error:", error);
  }
};