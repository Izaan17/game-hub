import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "52cd2dae81764ac08c4890df43bf7bd5",
  },
});
