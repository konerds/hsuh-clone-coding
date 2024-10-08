import axios, { AxiosInstance } from 'axios';
import {
  IObjAbout,
  IObjCTA,
  IObjClient,
  IObjFeature,
  IObjFooter,
  IObjHeader,
  IObjHeaderHome,
} from '../interface';

const instanceAxios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_URL_API_SERVER || '/api',
});

export const getObjHeader = async () => {
  try {
    const response = await instanceAxios.get<IObjHeader>('/resource/header');
    return response.data;
  } catch (e) {}
};

export const getObjHeaderHome = async () => {
  try {
    const response = await instanceAxios.get<IObjHeaderHome>(
      '/resource/header-home',
    );
    return response.data;
  } catch (e) {}
};

export const getObjClient = async () => {
  try {
    const response = await instanceAxios.get<IObjClient>('/resource/client');
    return response.data;
  } catch (e) {}
};

export const getObjFeature = async () => {
  try {
    const response = await instanceAxios.get<IObjFeature>('/resource/feature');
    return response.data;
  } catch (e) {}
};

export const getListObjAbout = async () => {
  try {
    const response = await instanceAxios.get<IObjAbout[]>('/resource/about');
    return response.data;
  } catch (e) {}
};

export const getObjCTA = async () => {
  try {
    const response = await instanceAxios.get<IObjCTA>('/resource/cta');
    return response.data;
  } catch (e) {}
};

export const getObjFooter = async () => {
  try {
    const response = await instanceAxios.get<IObjFooter>('/resource/footer');
    return response.data;
  } catch (e) {}
};
