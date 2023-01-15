import styles from './profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <>
      <div className={styles.profile}>
        <div className="description">
          <img src={avatar} alt={username} className={styles.avatar} />
          <p className={styles.name}>{username}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.stats_item}>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li className={styles.stats_item}>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li className={styles.stats_item}>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
