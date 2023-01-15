import styles from './transactionItem.module.css';
import PropTypes from 'prop-types';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={styles.data}>{type}</td>
      <td className={styles.data}>{amount}</td>
      <td className={styles.data}>{currency}</td>
    </tr>
  );
};

export default TransactionItem;

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
