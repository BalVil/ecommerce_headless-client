import { Link } from 'react-router-dom';
import styles from './Categories.module.scss';

const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="photo 1"
          />
          <Link to="/products/4" className={styles.link}>
            Sale
          </Link>
        </div>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="photo 2"
          />
          <Link to="/products/5" className={styles.link}>
            Women
          </Link>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="photo 3"
          />
          <Link to="/products/6" className={styles.link}>
            New Season
          </Link>
        </div>
      </div>
      <div className={`${styles.col} ${styles.colLarge}`}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.row}>
              <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="photo 4"
              />
              <Link to="/products/7" className={styles.link}>
                Men
              </Link>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.row}>
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="photo 5"
              />
              <Link to="/products/8" className={styles.link}>
                Accessories
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="photo 6"
          />
          <Link to="/products/9" className={styles.link}>
            Shoes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
