import React from "react";
import styles from "./Favorites.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorites } from "../../redux/slices/fovoritesSlice/fovoritesSlice";
import { clearBasket } from "../../redux/slices/basketSlice/basketSlice";
import { useEffect } from "react";

const Favorites = () => {
  const { fovoritesItem } = useSelector((state) => state);
  const dispatch = useDispatch();
  const removeFavoritesItem = (id) => {
    dispatch(removeFavorites(id));
  };

  useEffect(() => {
    localStorage.setItem("fovorites", JSON.stringify(fovoritesItem));
  }, [fovoritesItem]);

  const addFavoritesItem = () => {
    dispatch(clearBasket(fovoritesItem));
  };

  return (
    <>
      {fovoritesItem.length > 0 ? (
        fovoritesItem.map((item) => (
          <div className={styles.favoritesItem} key={item.id}>
            <span
              onClick={() => removeFavoritesItem(item.id)}
              className={styles.hearthIcon}
            >
              💗
            </span>
            <img
              className={styles.favoritesImage}
              src={item.image}
              alt={item.title}
            />
            <div className={styles.title}>{item.title}</div>
            <div className={styles.price}>{item.price} usd</div>
          </div>
        ))
      ) : (
        <p className={styles.notFavorites}>избранных товаров нет 😕</p>
      )}
      {fovoritesItem.length > 0 ? (
        <div onClick={() => addFavoritesItem()} className={styles.addToBasket}>
          добавить в карзину
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Favorites;
