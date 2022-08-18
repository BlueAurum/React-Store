import React, { useState } from "react";
import styles from "./ProductPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/UI/button/Button";
import { addProdoctItem } from "../../redux/slices/basketSlice/basketSlice";
import ModalWin from "../../components/UI/modalWin/ModalWin";
import { useEffect } from "react";

const ProductPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { productSlice } = useSelector((item) => item);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(productSlice));
  }, [productSlice]);

  const addItem = () => {
    const items = productSlice.map((item) => ({ ...item, count: 1 }));
    dispatch(addProdoctItem(...items));
  };

  const openModal = () => {
    setShowModal((state) => !state);
  };

  return (
    <div>
      {showModal && <ModalWin onClick={openModal} value={productSlice} />}
      {productSlice.map((product) => {
        return (
          <div className={styles.productPageItem} key={product.id}>
            <img
              className={styles.productImage}
              src={product.image}
              alt={product.image}
            />
            <div>
              <p className={styles.title}>{product.title}</p>
              <p className={styles.price}>{product.price} usd</p>
              <p className={styles.description}>{product.description}</p>
              <p className={styles.category}>{product.category}</p>
              <p className={styles.rating}>rate: {product.rating.rate}</p>
              <div className={styles.wrapperBtns}>
                <Button onClick={() => addItem()} className="btn-by">
                  купить
                </Button>
                <Button onClick={() => openModal()} className="btn-primary">
                  добавить отзыв
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductPage;
