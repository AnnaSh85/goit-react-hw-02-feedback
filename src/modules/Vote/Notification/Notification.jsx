import propTypes from 'prop-types';
import styles from './notification.module.css'

const Notification = ({ message }) => <p className={styles.message}>{message}</p>;

export default Notification; 

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

