import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImagesAsync = async (searchText, currentPage) => {
  const response = await axios.get(
    `/search/photos?query=${searchText}&page=${currentPage}&per_page=12&orientation=landscape&client_id=2KbPjCexKAkvZ-hfRES_cQq0WejpaRfqyViAWj-K8z4`
  );

  return response.data;
};
