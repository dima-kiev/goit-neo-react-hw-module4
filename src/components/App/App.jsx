import { useState, useEffect } from "react";
import { fetchImagesAsync } from "../../images-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const App = () => {
  const INITIAL_PAGES_STATE = {
    currentPage: 1,
    totalPages: 0,
  };

  const INITIAL_MODAL_IMAGE_STATE = {
    alt: "",
    src: "",
  };

  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);
  const [pages, setPages] = useState(INITIAL_PAGES_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(INITIAL_MODAL_IMAGE_STATE);

  useEffect(() => {
    const fetchImages = async () => {
      if (!searchText || searchText.length === 0) return;
      try {
        setLoading(true);
        setError("");
        const response = await fetchImagesAsync(searchText, pages.currentPage);
        setImages((prevImages) => [...prevImages, ...response.results]);
        setPages((prevPages) => ({
          ...prevPages,
          totalPages: response.total_pages,
        }));
      } catch (error) {
        setError(
          `Oops... Something went wrong. The error encountered was: ${error.message}.`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [
    searchText,
    pages.currentPage,
    setPages,
    setLoading,
    setImages,
    setError,
  ]);

  const updateCurrentPage = () => {
    setPages((prevPages) => ({
      ...prevPages,
      currentPage: prevPages.currentPage + 1,
    }));
  };

  const updateSearchText = (newSearchText) => {
    setPages(INITIAL_PAGES_STATE);
    setImages([]);
    setSearchText(newSearchText);
  };

  const openModal = (newAlt, newSrc) => {
    setModalImage({
      alt: newAlt,
      src: newSrc,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(INITIAL_MODAL_IMAGE_STATE);
  };

  return (
    <>
      <SearchBar callbackOnSubmit={updateSearchText} />
      {error.length > 0 && <ErrorMessage message={error} />}
      {error.length === 0 && images.length > 0 && (
        <ImageGallery images={images} callbackOnImageClick={openModal} />
      )}
      {loading && <Loader />}
      {error.length === 0 &&
        images.length > 0 &&
        pages.currentPage < pages.totalPages &&
        !loading && <LoadMoreBtn callbackOnClick={updateCurrentPage} />}
      <ImageModal isOpen={isModalOpen} onClose={closeModal} img={modalImage} />
    </>
  );
};

export default App;
