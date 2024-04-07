import { PuffLoader } from 'react-spinners';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.container}>
      <PuffLoader
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
