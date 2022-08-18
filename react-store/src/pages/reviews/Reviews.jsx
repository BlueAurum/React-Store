import React from "react";
import styles from "./Reviews.module.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Reviews = () => {
  const { reviews } = useSelector((state) => state);
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);
  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((item) => (
          <div key={item.id} className={styles.reviewsItem}>
            <div className={styles.commentHeader}>
              <div>
                <img
                  className={styles.image}
                  src={item.image}
                  alt={item.title}
                />
                <div className={styles.title}>{item.title}</div>
              </div>
              <div className={styles.date}>{item.date}</div>
            </div>
            <div className={styles.mainText}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.surname}>{item.surname}</div>
              <div className={styles.message}>{item.message}</div>
            </div>
          </div>
        ))
      ) : (
        <p className={styles.notReviews}>отзывов пока нет 😕</p>
      )}
    </div>
  );
};

export default Reviews;
