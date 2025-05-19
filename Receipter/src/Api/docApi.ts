import type { Login, LoginResponseTokenData } from '@/Interface/auth';
import axiosClient from './axiosClient';

export const docApi = {
  Login: async (body: Login): Promise<LoginResponseTokenData> => {
        const url = `/account/log-in`
        const res = await axiosClient.post(url, body)
        return res.data
    },

}