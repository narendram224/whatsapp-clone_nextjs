import { axiosGet } from './request';

export const getInfo = (courseCode: string) => axiosGet(`info/${courseCode}`);
