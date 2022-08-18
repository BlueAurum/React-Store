import React, { useEffect } from "react";
import Button from "../../components/UI/button/Button";
import styles from "./Basket.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProductItem,
  itemIncrement,
  itemDecrement,
} from "../../redux/slices/basketSlice/basketSlice";

const Basket = () => {
  const { basketSlice } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("basketItem", JSON.stringify(basketSlice));
  }, [basketSlice]);

  const navigateToHome = () => {
    navigate("/");
  };

  const removeItem = (id) => {
    dispatch(removeProductItem(id));
  };

  const itemInc = (id) => {
    dispatch(itemIncrement(id));
  };

  const itemDec = (id) => {
    dispatch(itemDecrement(id));
  };

  let sumItem = basketSlice.reduce((a, c) => {
    return a + c.price * c.count;
  }, 0);

  return (
    <div>
      {basketSlice.length <= 0 ? (
        <>
          <h1 className={styles.title}>
            Карзина пуста <span>😕</span>
          </h1>
          <p className={styles.subTitle}>
            Вероятней всего, вы не заказывали ещё товар. Для того, чтобы
            заказать товар, перейди на главную страницу.
          </p>
          <div className={styles.basketBtn}>
            <Button onClick={() => navigateToHome()} className="btn-basket">
              вернуться назад
            </Button>
          </div>
        </>
      ) : (
        basketSlice.map((item) => (
          <div className={styles.basketItem} key={item.id}>
            <img className={styles.image} src={item.image} alt="" />
            <div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.price}>
                {(item.price * item.count).toFixed(2)} usd
              </div>
            </div>
            <div className={styles.countBtns}>
              <Button
                onClick={() => itemDec(item.id)}
                className="btn-decrement"
              >
                -
              </Button>
              <div className={styles.countNumber}>{item.count}</div>
              <Button
                onClick={() => itemInc(item.id)}
                className="btn-increment"
              >
                +
              </Button>
            </div>
            <Button onClick={() => removeItem(item.id)} className="remove-item">
              удалить
            </Button>
          </div>
        ))
      )}
      {basketSlice.length > 0 ? (
        <div className={styles.totalSum}>
          <span className={styles.totalSumNum}>{sumItem.toFixed(2)} usd</span>
          <Button className="btn-by">купить</Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Basket;
