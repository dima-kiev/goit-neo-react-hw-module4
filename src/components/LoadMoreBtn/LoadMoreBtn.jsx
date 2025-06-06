import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ callbackOnClick }) => {
  return (
    <div className={css.btnContainer}>
      <button onClick={callbackOnClick} className={css.loadMoreBtn}>
        LOAD MORE
      </button>
    </div>
  );
};

export default LoadMoreBtn;
