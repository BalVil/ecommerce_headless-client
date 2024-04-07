import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.top}>
        <li className={styles.item}>
          <h2>Categories</h2>
          <p>Women</p>
          <p>Men</p>
          <p>Shoes</p>
          <p>Accessories</p>
          <p>New Arrivals</p>
        </li>
        <li className={styles.item}>
          <h2>Links</h2>
          <p>FAQ</p>
          <p>Pages</p>
          <p>Stores</p>
          <p>Compare</p>
          <p>Cookies</p>
        </li>
        <li className={styles.item}>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </p>
        </li>
        <li className={styles.item}>
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </p>
        </li>
      </ul>
      <ul className={styles.bottom}>
        <li className={styles.bottomFirst}>
          <p className={styles.logo}>ESHOPE</p>
          <p className={styles.copyright}>
            © Copyright 2024. All Rights Reserved
          </p>
        </li>
        <li className={styles.bottomSecond}>
          <img src="/img/payment.png" alt="payment options" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
