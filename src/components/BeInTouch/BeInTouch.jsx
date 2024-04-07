import { useRef } from 'react';
import { MdOutlineFacebook } from 'react-icons/md';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { RiPinterestLine } from 'react-icons/ri';
import styles from './BeInTouch.module.scss';
import { IconContext } from 'react-icons';

const BeInTouch = () => {
  const emailRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    const email = emailRef.current.value;

    if (email) {
      console.log(email);
    }

    e.target.reset();
  };

  return (
    <div className={styles.beInTouch}>
      <div className={styles.wrapper}>
        <p>BE IN TOUCH WITH US:</p>
        <form onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter your e-mail"
            className={styles.input}
          />
          <button
            type="submit"
            aria-label="beInTouch button"
            className={styles.button}
          >
            JOIN US
          </button>
        </form>
        <div className={styles.icons}>
          <IconContext.Provider value={{ className: styles.icon }}>
            <div
              onClick={() => window.open('https://www.facebook.com', '_blank')}
            >
              <MdOutlineFacebook />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: styles.icon }}>
            <div
              onClick={() => window.open('https://www.instagram.com', '_blank')}
            >
              <AiOutlineInstagram />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: styles.icon }}>
            <div
              onClick={() => window.open('https://www.twitter.com', '_blank')}
            >
              <AiOutlineTwitter />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: styles.icon }}>
            <div
              onClick={() => window.open('https://www.pinterest.com', '_blank')}
            >
              <RiPinterestLine />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default BeInTouch;
