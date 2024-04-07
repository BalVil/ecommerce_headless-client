import { IconContext } from 'react-icons';
import { MdDeleteOutline } from 'react-icons/md';
import styles from './Cart.module.scss';

const data = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/9214790/pexels-photo-9214790.jpeg',
    img2: 'https://images.pexels.com/photos/9214794/pexels-photo-9214794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'Long Sleeve Graphic T-shirt',
    title: 'Long',
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/16749838/pexels-photo-16749838/free-photo-of-woman-walking-in-coat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img2: 'https://images.pexels.com/photos/16749837/pexels-photo-16749837/free-photo-of-woman-dressed-in-black-leaning-against-the-black-wall-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'Coat Sleeve Graphic T-shirt',
    title: 'Coat',
    isNew: true,
    oldPrice: 30,
    price: 22,
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/16749838/pexels-photo-16749838/free-photo-of-woman-walking-in-coat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img2: 'https://images.pexels.com/photos/16749837/pexels-photo-16749837/free-photo-of-woman-dressed-in-black-leaning-against-the-black-wall-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'Skirt Sleeve Graphic T-shirt',
    title: 'Skirt',
    isNew: true,
    oldPrice: 39,
    price: 33,
  },
];

const Cart = () => {
  return (
    <div className={styles.cart}>
      <h1 className={styles.heading}>Products in your cart</h1>
      {data.map(item => (
        <div className={styles.item} key={item.id}>
          <img src={item.img} alt="" />
          <div className={styles.details}>
            <h2>{item.title}</h2>
            <p className={styles.desc}>{item.desc?.substring(0, 100)}</p>
            <div className={styles.price}>
              {item.quantity} x {item.price}€
            </div>
          </div>
          <IconContext.Provider value={{ className: styles.delete }}>
            <div>
              <MdDeleteOutline />
            </div>
          </IconContext.Provider>
        </div>
      ))}
      <div className={styles.total}>
        <span>SUBTOTAL</span>
        <span>total</span>
      </div>
      <button className={styles.checkout}>PROCEED TO CHECKOUT</button>
      <button
        className={styles.reset}
        // onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </button>
    </div>
  );
};

export default Cart;
