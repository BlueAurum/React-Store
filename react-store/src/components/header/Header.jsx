import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { basketSlice, fovoritesItem, reviews } = useSelector((state) => state);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={"/"}>StoreReact</Link>
      </div>
      <div className={styles.navItems}>
        <nav className={styles.nav}>
          <div className={styles.fovoritesWrapper}>
            <Link to={"/favorites"}>избранные</Link>
            {fovoritesItem.length > 0 ? (
              <div className={styles.fovoritesCount}>
                {fovoritesItem.length}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.reviewsWrapper}>
            <Link to={"/reviews"}>отзывы</Link>
            {reviews.length > 0 ? (
              <div className={styles.reviewsCount}>
                {reviews.length}
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>
        <div className={styles.basketIcon}>
          {basketSlice.length > 0 ? (
            <div className={styles.ElementInBasket}>{basketSlice.length}</div>
          ) : (
            ""
          )}
          <Link to={"/baskets"}>🛒</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
