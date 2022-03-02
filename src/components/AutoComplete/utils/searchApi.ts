import axios from 'axios';

export const searchApi = async (name: string) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/search-conditions/?name=${name}`,
    );
    return data;
  } catch (e) {
    console.error(e);
  }
};
