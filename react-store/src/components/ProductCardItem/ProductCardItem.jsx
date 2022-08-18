import React from "react";
import styles from "./ProductCardItem.module.scss";
import Button from "../UI/button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/productPageSlice/productPageSlice";
import { addProdoctItem } from "../../redux/slices/basketSlice/basketSlice";
import {
  addFovoritesItem,
  removeFavorites,
} from "../../redux/slices/fovoritesSlice/fovoritesSlice";
import { useEffect } from "react";

const ProductCardItem = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fovoritesItem } = useSelector((state) => state);

  const toProductPage = () => {
    dispatch(
      addItem({ id, title, price, description, category, image, rating })
    );
    navigate("/productPage");
  };

  const addToBasket = () => {
    const productItem = {
      id,
      title,
      price,
      image,
      count: 1,
    };
    dispatch(addProdoctItem(productItem));
  };

  const addFovorites = () => {
    const productItem = {
      id,
      title,
      price,
      image,
      count: 1,
    };
    dispatch(addFovoritesItem(productItem));
  };

  const removeFavoritesItem = (id) => {
    dispatch(removeFavorites(id));
  };

  useEffect(() => {
    localStorage.setItem("fovorites", JSON.stringify(fovoritesItem));
  }, [fovoritesItem]);

  const existFovorites = fovoritesItem.includes(
    fovoritesItem.find((item) => item.id === id)
  );

  return (
    <div className={styles.cardItem}>
      {existFovorites ? (
        <span
          className={styles.favoritesIcon}
          onClick={() => removeFavoritesItem(id)}
        >
          💗
        </span>
      ) : (
        <span className={styles.favoritesIcon} onClick={addFovorites}>
          🤍
        </span>
      )}
      <img className={styles.cardImage} src={image} alt={image} />
      <div className={styles.productTitile}>{title}</div>
      <div className={styles.productPrice}>{price} usd</div>
      <div className={styles.cardBtns}>
        <Button onClick={() => addToBasket()} className="btn-by">
          купить
        </Button>
        <Button onClick={() => toProductPage()} className="btn-more">
          подробнее
        </Button>
      </div>
    </div>
  );
};

export default ProductCardItem;
