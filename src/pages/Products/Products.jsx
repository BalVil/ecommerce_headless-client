import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import List from '../../components/List/List';
import styles from './Products.module.scss';

const MAX_PRICE = 1000;

const Products = () => {
  const catId = useParams().id;
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [tempMaxPrice, setTempMaxPrice] = useState(MAX_PRICE); // Intermediate state for maxPrice
  const [sort, setSort] = useState('asc');
  const [subCategories, setSubCategories] = useState([]);
  const { data, loading, error } = useFetch(
    `/sub-categories?filters[categories][id][$eq]=${catId}`
  );

  const handleCategoryChange = e => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSubCategories(
      isChecked
        ? [...subCategories, value]
        : subCategories.filter(item => item !== value)
    );
  };

  const handleMaxPriceChange = value => {
    setTempMaxPrice(value); // Update temporary maxPrice
  };

  const handleRangeButton = () => {
    setMaxPrice(tempMaxPrice);
  };

  return (
    <div className={styles.products}>
      <ul className={styles.filter}>
        <li className={styles.filterItem}>
          <h3>Product Categories</h3>
          {data?.map(item => (
            <div className={styles.inputItem} key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleCategoryChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </li>

        <li className={styles.filterItem}>
          <h3>Filter by price</h3>
          <div className={styles.inputItem}>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              value={tempMaxPrice}
              onChange={e => handleMaxPriceChange(e.target.value)}
            />
            <span>{tempMaxPrice}</span>
            <button
              type="button"
              className={styles.button}
              onClick={handleRangeButton}
            >
              OK
            </button>
          </div>
        </li>
        <li className={styles.filterItem}>
          <h3>Sort by</h3>
          <div className={styles.inputItem}>
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              checked={sort === 'asc'}
              onChange={e => setSort('asc')}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className={styles.inputItem}>
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              checked={sort === 'desc'}
              onChange={e => setSort('desc')}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </li>
      </ul>
      <div className={styles.itemList}>
        <div className={styles.catImg}>
          <img
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="category"
          />
        </div>

        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          items={subCategories}
        />
      </div>
    </div>
  );
};

export default Products;
