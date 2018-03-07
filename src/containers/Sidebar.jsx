import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFire from '@fortawesome/fontawesome-free-solid/faFire';
import faEdit from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faMenu from '@fortawesome/fontawesome-free-solid/faUtensils';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.scss';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.headerIcon}>
          <FontAwesomeIcon icon={faMenu} /><br />
        </div>
        <div className={styles.itemList}>
          <div className={styles.item}>
            <NavLink to="/ff" href="/ff" activeClassName={styles.selected}>
              <FontAwesomeIcon icon={faFire} className={styles.icon} /><br />
              FF
            </NavLink>
          </div>
          <div className={styles.item}>
            <NavLink to="/" href="/" activeClassName={styles.selected}>
              <FontAwesomeIcon icon={faEdit} className={styles.icon} /><br />
              Editor
            </NavLink>
          </div>
          <div className={styles.item}>
            <NavLink to="/player" href="/player" activeClassName={styles.selected}>
              <img className={styles.iconImg} src="https://i.gyazo.com/039386199d8e9838dbab33bb69bbe9f5.png" alt="player" />
              Player
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
