import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          {item?.attributes.isNew && (
            <span className={styles.badge}>New Season</span>
          )}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt={item.img}
            className={styles.mainImage}
          />
          {item.attributes?.img2?.data && (
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item.attributes?.img2?.data?.attributes?.url
              }
              alt={item.img}
              className={styles.secondImage}
            />
          )}
        </div>
        <h3 className={styles.title}>{item?.attributes.title}</h3>
        <div className={styles.prices}>
          <p className={styles.oldPrice}>
            $
            {item.oldPrice ||
              Math.round(item?.attributes.price * 1.2).toFixed(2)}
          </p>
          <p>${(item?.attributes.price).toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
