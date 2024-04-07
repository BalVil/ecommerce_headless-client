import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import {
  MdOutlineKeyboardArrowDown,
  MdSearch,
  MdOutlinePersonOutline,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import styles from './NavBar.module.scss';
import Cart from '../Cart/Cart';

const NavBar = () => {
  const [openCart, setOpenCart] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <ul className={styles.left}>
          <li className={styles.item}>
            <img src="/img/en.png" alt="uk flag" />
            <MdOutlineKeyboardArrowDown />
          </li>
          <li className={styles.item}>
            <span>USD</span>
            <MdOutlineKeyboardArrowDown />
          </li>
          <li className={styles.item}>
            <Link to="/products/1">Women</Link>
          </li>
          <li className={styles.item}>
            <Link to="/products/2">Men</Link>
          </li>
          <li className={styles.item}>
            <Link to="/products/3">Children</Link>
          </li>
        </ul>
        <div className={styles.center}>
          <Link to="/">ESHOPE</Link>
        </div>
        <ul className={styles.right}>
          <li className={styles.item}>
            <Link to="/">Homepage</Link>
          </li>
          <li className={styles.item}>
            <Link to="/">About</Link>
          </li>
          <li className={styles.item}>
            <Link to="/">Contact</Link>
          </li>
          <li className={styles.item}>
            <Link to="/">Stores</Link>
          </li>
          <li className={styles.icons}>
            <IconContext.Provider value={{ className: styles.icon }}>
              <div>
                <MdSearch />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: styles.icon }}>
              <div>
                <MdOutlinePersonOutline />
              </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ className: styles.icon }}>
              <div>
                <MdOutlineFavoriteBorder />
              </div>
            </IconContext.Provider>
            <div
              className={styles.cartIcon}
              onClick={() => setOpenCart(!openCart)}
            >
              <IconContext.Provider value={{ className: styles.icon }}>
                <div>
                  <MdOutlineShoppingCart />
                </div>
              </IconContext.Provider>
              <span>0</span>
            </div>
          </li>
        </ul>
      </div>
      {openCart && <Cart />}
    </div>
  );
};

export default NavBar;
