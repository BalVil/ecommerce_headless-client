import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  MdOutlineAddShoppingCart,
  MdOutlineFavoriteBorder,
  MdOutlineBalance,
} from 'react-icons/md';
import styles from './Product.module.scss';
import useFetch from '../../hooks/useFetch';

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState('img');
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log(data?.attributes);

  return (
    <div className={styles.product}>
      {error && 'Something went wrong. Please, try again!'}
      {loading && 'loading'}
      {!error && !loading && (
        <>
          <div className={styles.gallery}>
            <div className={styles.thumb}>
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt={data?.attributes?.title}
                onClick={e => setSelectedImg('img')}
              />
              {data?.attributes?.img2.data && (
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt={data?.attributes?.title}
                  onClick={e => setSelectedImg('img2')}
                />
              )}
            </div>
            <div className={styles.mainImg}>
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.[selectedImg].data?.attributes?.url
                }
                alt={data?.attributes?.title}
              />
            </div>
          </div>
          <div className={styles.info}>
            <h1>{data?.attributes?.title}</h1>
            <span className={styles.price}>{data?.attributes?.price}€</span>
            <p className={styles.desc}>{data?.attributes?.desc}</p>
            <div className={styles.quantity}>
              <button
                onClick={() => setQuantity(prev => (prev === 1 ? 1 : prev - 1))}
              >
                -
              </button>
              <span className={styles.quantityValue}>{quantity}</span>
              <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
            </div>
            <button
              className={styles.cartButton}
              // onClick={() =>
              //   dispatch(
              //     addToCart({
              //       id: data.id,
              //       title: data.attributes.title,
              //       desc: data.attributes.desc,
              //       price: data.attributes.price,
              //       img: data.attributes.img.data.attributes.url,
              //       quantity,
              //     })
              //   )
              // }
            >
              <MdOutlineAddShoppingCart /> ADD TO CART
            </button>
            <div className={styles.links}>
              <div className={styles.linksItem}>
                <MdOutlineFavoriteBorder /> ADD TO WISH LIST
              </div>
              <div className={styles.linksItem}>
                <MdOutlineBalance /> ADD TO COMPARE
              </div>
            </div>
            <div className={styles.details}>
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className={styles.details}>
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
