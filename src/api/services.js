import axios from 'axios';
import API from './api';

export const getPokemons = async () => {
  try {
    const data = await API.get(`/pokemon/?limit=151`);
    return data;
  } catch (e) {
    console.log('We have the error in services', e);
  }
};

export const getDetails = async (param) => {
  try {
    const data = await API.get(`/${param}`);

    return data;
  } catch (e) {
    console.log('We have the error in services', e);
  }
};

export const getSpecies = async (param) => {
  try {
    const data = await API.get(`/pokemon-species/${param}`);

    return data;
  } catch (e) {
    console.log('We have the error in services', e);
  }
};

export const queryUrl = async (url) => {
  try {
    const data = await API.get(url);

    return data;
  } catch (e) {
    console.log('We have the error in services', e);
  }
};
