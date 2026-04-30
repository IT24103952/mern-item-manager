import axios from "axios";

const API = axios.create({baseURL: "https://863303c8-f53f-4bf5-b4b2-43acae85e109-00-3sj3nuh9ltkzu.pike.replit.dev/api"
  ,
});

export const getItems = () => API.get("/items");
export const getItemById = (id) => API.get(`/items/${id}`);
export const createItem = (itemData) => API.post("/items", itemData);
export const updateItem = (id, itemData) => API.put(`/items/${id}`, itemData);
export const deleteItem = (id) => API.delete(`/items/${id}`);

export default API;