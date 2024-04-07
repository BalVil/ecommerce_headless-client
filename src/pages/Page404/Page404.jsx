import { Link, useRouteError } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MdOutlineArrowBack } from 'react-icons/md';
import styles from './Page404.module.scss';

const Page404 = () => {
  const error = useRouteError();

  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <main>
        <div className={styles.wrapper}>
          <h1>{error.status == '404' ? '404' : ''}</h1>
          <h2>The page you’re looking for doesn’t exist.</h2>
          <div className={styles.linkWrapper}>
            <MdOutlineArrowBack />
            <Link to={'/'}>Back Home</Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page404;
