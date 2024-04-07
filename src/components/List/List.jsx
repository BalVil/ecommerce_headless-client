import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import styles from './List.module.scss';

const List = ({ items, maxPrice, sort, catId }) => {
  const subCategoryFilters = items
    .map(item => `&filters[sub_categories][id][$eq]=${item}`)
    .join('');

  // Use the qs library directly to generate complex queries instead of creating them manually
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${catId}${subCategoryFilters}&filters[price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className={styles.list}>
      {error && 'Something went wrong. Please, try again!'}
      {loading && 'loading'}
      {!error &&
        !loading &&
        data?.map(item => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
