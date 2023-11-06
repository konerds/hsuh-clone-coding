import axios, { AxiosInstance } from 'axios';
import {
  IObjAbout,
  IObjClient,
  IObjFeature,
  IObjHeaderHome,
  IObjMenuHeader,
} from '../interface';

const instanceAxios: AxiosInstance = axios.create({
  baseURL:
    import.meta.env.NODE_ENV === 'development' ||
    import.meta.env.VITE_IS_USE_PROXY === 'true'
      ? '/api'
      : `${import.meta.env.VITE_URL_API_SERVER}/api`,
});

export const getListObjMenuHeader = async () => {
  try {
    const response = await instanceAxios.get<IObjMenuHeader[]>(
      '/resource/menu-header',
    );
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
