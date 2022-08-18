import React, { useState } from "react";
import Button from "../button/Button";
import styles from "./ModalWin.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { addReviews } from "../../../redux/slices/addReviews/addReviews";

const ModalWin = ({ onClick, value }) => {
  const [userValue, setUserValue] = useState({
    name: "",
    surname: "",
    message: "",
  });

  const dispatch = useDispatch();

  const addUserInfo = () => {
    if (
      userValue.name.trim().length > 0 &&
      userValue.surname.trim().length > 0 &&
      userValue.message.trim().length > 0
    ) {
      const newReviews = {
        ...userValue,
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        image: value[0].image,
        title: value[0].title,
      };
      onClick()
      dispatch(addReviews(newReviews));
    } else {
      alert("Заполните все поля");
    }
  };

  return (
    <div className={styles.modalWin}>
      <div className={styles.modalContent}>
        <span onClick={() => onClick()} className={styles.times}>
          &times;
        </span>
        <input
          onChange={(e) =>
            setUserValue((value) => ({ ...value, name: e.target.value }))
          }
          type="text"
          placeholder="введите ваше имя"
        />
        <input
          onChange={(e) =>
            setUserValue((value) => ({ ...value, surname: e.target.value }))
          }
          type="text"
          placeholder="введите вашу фамилию"
        />
        <textarea
          onChange={(e) =>
            setUserValue((value) => ({ ...value, message: e.target.value }))
          }
          placeholder="введите сообщение"
        ></textarea>
        <Button onClick={() => addUserInfo()} className="btn-primary">
          добавить отзыв
        </Button>
      </div>
    </div>
  );
};

export default ModalWin;
