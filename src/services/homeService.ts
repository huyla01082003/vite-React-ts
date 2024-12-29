import axios from "axios";
import { IBodyLoginSocial, IUser, User } from "../type";
import { request } from "../common/config/reques";

export const HomeAPI = {
  getUser: async () => {
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response;
  },
  getUserById: async (address: string) => {
    const response = await axios.get<IUser>(
      `https://jsonplaceholder.typicode.com/users/${address}`
    );
    return response.data;
  },
  createUser: async (data: User) => {
    console.log(data);
    const response = await request.post(`https://betrasua.onrender.com/api/v1/user/createUser`, data);
    console.log(response);
    return response.data;
  },
  getUserByAddress: async (address: string) => {
    const response = await request.get(`https://betrasua.onrender.com/api/v1/user?address=${address}`);
    console.log(response);
    return response.data;
    
  },
  getVerifySocial: async (address: string) => {
    const response = await request.get(
      `https://betrasua.onrender.com/api/v1/user/social?address=${address}`
    );
    return response.data;
  },
  loginSocial: async (data: IBodyLoginSocial) => {
    const response = await request.put(`https://betrasua.onrender.com/api/v1/user`, data);
    return response.data;
  },
  verifySocial: async (data: IBodyLoginSocial) => {
    const response = await request.post(`https://betrasua.onrender.com/api/v1/user/verifySocial`, data);
    return response.data;
  },
};
