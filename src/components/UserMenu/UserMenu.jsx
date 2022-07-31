import { useSelector, useDispatch } from 'react-redux';
import Sprite from '../../images/sprite.svg';
import { getUserData } from '../../redux/auth/auth-selectors';
import { authOperations } from '../../redux/auth/auth-operations';
import { Avatar } from '@mui/material';
import React, { Fragment } from 'react';
import Media from 'react-media';
import stringAvatar from '../../utils/Avatar';
import s from './UserMenu.module.css';
import { useState } from 'react';
import ConfirmModal from 'components/ConfirmModal/ConfirmModal';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const name = userData.email;

  const handleClickYes = () => {
    dispatch(authOperations.logout());
    setShowConfirmModal(false);
  };

  const handleClickNo = () => {
    setShowConfirmModal(false);
  };

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
                aria-label="logout"
                className={s.logout}
                onClick={() => setShowConfirmModal(true)}
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
                  aria-label="exit"
                  className={s.btnExit}
                  onClick={() => setShowConfirmModal(true)}
                >
                  Exit
                </button>
              </>
            )}
          </Fragment>
        )}
      </Media>
      {showConfirmModal && (
        <ConfirmModal
          title="Do you really want to leave?"
          onClickYes={handleClickYes}
          onClickNo={handleClickNo}
        />
      )}
    </div>
  );
};

export default UserMenu;
