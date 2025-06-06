import css from "./ImageCard.module.css";

const ImageCard = ({ data: { description, urls }, callbackOnClick }) => {
  return (
    <div>
      <img
        src={urls.small}
        alt={description}
        onClick={() => callbackOnClick(description, urls.regular)}
        className={css.image}
      />
    </div>
  );
};

export default ImageCard;
