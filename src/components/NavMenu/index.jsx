import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MenuOpen, Close } from '@material-ui/icons';
import cx from 'classnames';
import styles from './NavMenu.module.scss';

const NavMenu = props => {
  const [isOpen, setIsOpen] = useState(false);
  const refContainer = useRef(null);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClick = ({ target }) => {
      if (isOpen && !refContainer.current.contains(target)) {
        closeMenu();
      }
    };
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [isOpen, refContainer.current]);

  const classNames = useMemo(
    () =>
      cx(styles.menu, styles.container, {
        [styles.open]: isOpen,
      }),
    [isOpen]
  );

  return (
    <div>
      <MenuOpen
        tabindex='1'
        onKeyDown={e => {
          if (e.key === 'Enter') {
            closeMenu();
          }
        }}
        onClick={openMenu}
        fontSize='large'
      />
      <nav ref={refContainer} className={classNames}>
        <Close
          tabindex='1'
          onKeyDown={e => {
            if (e.key === 'Enter') {
              closeMenu();
            }
          }}
          onClick={closeMenu}
          htmlColor='white'
          fontSize='large'
          classes={{ root: styles.closeIcon }}
        />
        <ul className={styles.list}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/sign-up'>Sign Up</Link>
          </li>
          <li>
            <Link to='/chat'>Chat</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
