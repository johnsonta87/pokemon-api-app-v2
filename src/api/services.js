import API from './api';

export const getPokemons = async () => {
  try {
    const data = await API.get(`/pokemon/?limit=151`);
    return data;
  } catch (e) {
    console.log('We have the error in services', e);
  }
};

export const getDetails = async (id) => {
  try {
    if (id) {
      const data = await API.get(`/${id}`);
      return data;
    }
  } catch (e) {
    console.log('We have the error in services', e);
  }
};
