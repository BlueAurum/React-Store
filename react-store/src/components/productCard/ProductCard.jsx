import React from "react";
import styles from "./ProductCard.module.scss";
import ProductCardItem from "../ProductCardItem/ProductCardItem";

const ProductCard = ({ products }) => {
  return (
    <div className={styles.productsWrapper}>
      {products.map((product) => {
        return <ProductCardItem key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ProductCard;
