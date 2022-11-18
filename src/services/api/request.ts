import { AxiosResponse } from 'axios';
import Axios from './axios';

export function axiosPost(endPoint: string, payload: any) {
  return Axios.post(`/${endPoint}`, payload)
    .then((res) => {
      if (res?.data) return res.data;
      return res;
    })
    .catch((e) => {
      e.message = e.response?.data?.message || e.response?.data;
      return e;
    });
}

export function axiosPatch(endPoint: string, payload: any) {
  return Axios.patch(`/${endPoint}`, payload).then(
    (res: AxiosResponse) => res.data,
  );
}

export function axiosGet(endPoint: string) {
  return Axios.get(`/${endPoint}`).then((res: AxiosResponse) => res.data);
}
export function axiosDel(endPoint: string) {
  return Axios.delete(`/${endPoint}`).then((res: AxiosResponse) => res.data);
}
