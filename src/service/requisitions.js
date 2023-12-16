import axios from "axios";

const HOST = "http://localhost:3001/";
const API = "api/email";
const URL = HOST + API;

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "Cache-Control": "no-cache",
    "Content-type": "application/json",
  },
});

const requisitions = {
  async get(endpoint) {
    try {
      const response = await axiosInstance.get();
      return response.data;
    } catch (error) {
      console.error("Erro na requisição GET:", error);
      throw error;
    }
  },

  async getByEmail(email) {
    try {
      const response = await axiosInstance.get(`/email/${email}`);
      return response.data;
    } catch (error) {
      console.error("Erro na requisição GET by Email:", error);
    }
  },

  async delete(endpoint) {
    try {
      const response = await axiosInstance.delete(endpoint);
      return response.data;
    } catch (error) {
      console.error("Erro na requisição DELETE:", error);
      throw error;
    }
  },

  async update(endpoint, data) {
    try {
      const response = await axiosInstance.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error("Erro na requisição UPDATE:", error);
      throw error;
    }
  },

  async save(endpoint, data) {
    try {
      const response = await axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error("Erro na requisição SAVE:", error);
      throw error;
    }
  },
};

export default requisitions;
