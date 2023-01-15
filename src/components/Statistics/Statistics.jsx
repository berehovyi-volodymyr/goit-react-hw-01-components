import styles from './statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomHexColor } from './color';

const Statistics = ({ title, stats }) => {
  const elements = stats.map(stat => (
    <li
      style={{
        backgroundColor: getRandomHexColor(),
      }}
      className={styles.item}
      key={stat.id}
    >
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}%</span>
    </li>
  ));
  return (
    <>
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.stat_list}>{elements}</ul>
      </section>
    </>
  );
};

export default Statistics;

Statistics.defaultProps = {
  title: '',
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
