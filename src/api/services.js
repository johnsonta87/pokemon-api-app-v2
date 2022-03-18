import API from './api';

export const getPokemons = async () => {
  try {
    const data = await API.get(`/pokemon/?limit=151`);
    return data;
  } catch (e) {
    console.log('We have the error in services', e);
  }
};
