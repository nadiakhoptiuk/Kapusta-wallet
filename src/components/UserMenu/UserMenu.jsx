import { useSelector, useDispatch } from 'react-redux';

import { getUserData } from '../../redux/auth/auth-selectors';
import { authOperations } from '../../redux/auth/auth-operations';
import { Avatar } from '@mui/material';
import React, { Fragment } from 'react';
import Media from 'react-media';
import stringAvatar from '../../utils/Avatar';
import s from './UserMenu.module.css';
import Sprite from '../../images/sprite.svg';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  const name = userData.email;
  console.log(name);

  return (
    <div className={s.menu}>
      <Avatar {...stringAvatar(name.toUpperCase())} />
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && (
              <button
                className={s.logout}
                onClick={() => dispatch(authOperations.logout())}
              >
                <svg alt="logout" width={16} height={16}>
                  <use href={`${Sprite}#logout-icon`}></use>
                </svg>
              </button>
            )}
            {matches.medium && (
              <>
                <span className={s.email}>{name}</span>
                <span className={s.line}></span>
                <button
                  className={s.btnExit}
                  onClick={() => dispatch(authOperations.logout())}
                >
                  Exit
                </button>
              </>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
};

export default UserMenu;
