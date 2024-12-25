import axios from "axios";

export const request = axios.create({
  headers: {
    "content-type": "application/json;charset=UTF-8",
  },
});