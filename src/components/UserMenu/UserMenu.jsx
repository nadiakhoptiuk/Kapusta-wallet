import { useSelector, useDispatch } from 'react-redux';
// import authSelectors from 'redux/auth/auth-selectors';
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
  const userEmail = userData.email;
  console.log(userEmail);

  const name = 'alina@gmail.com';
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
                <svg alt="logout" className={s.svg} width={16} height={16}>
                  <use href={`${Sprite}#logout-icon`}></use>
                </svg>
              </button>
            )}
            {matches.medium && (
              <>
                <span className={s.email}>iuliia@gmail.com</span>
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
