import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import styles from './FeaturedProducts.module.scss';

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  );

  return (
    <div className={styles.featuredProducts}>
      <div className={styles.top}>
        <h2>{type} products</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className={styles.bottom}>
        {error && 'Something went wrong!'}
        {loading && 'loading'}
        {!error &&
          !loading &&
          data.map(item => <Card item={item} key={item.id} />)}
        {/* {error
          ? 'Something went wrong!'
          : loading
          ? 'loading'
          : data.map(item => <Card item={item} key={item.id} />)} */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
