import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, callbackOnImageClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image_i) => (
        <li key={image_i.id}>
          <ImageCard data={image_i} callbackOnClick={callbackOnImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
