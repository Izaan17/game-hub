import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1dd03624641848cebaf7daaa3bf8ddc6",
  },
});
