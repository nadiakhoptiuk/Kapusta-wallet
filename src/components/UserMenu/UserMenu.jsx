// import { useSelector, useDispatch } from 'react-redux';
// import authSelectors from 'redux/auth/auth-selectors';
// import authOperations from 'redux/auth/auth-operations';
import { Avatar } from '@mui/material';
import stringAvatar from '../../utils/Avatar';
import s from './UserMenu.module.css';

const UserMenu = () => {
  //   const userEmail = useSelector(authSelectors.userEmail);
  //   const dispatch = useDispatch();
  const name = 'iuliia@gmail.com';
  return (
    <div className={s.menu}>
      <Avatar {...stringAvatar(name.toUpperCase())} />

      <span className={s.email}>iuliia@gmail.com</span>

      <button
        className={s.logout}
        // onClick={() => dispatch(authOperations.logout())}
      >
        <img
          src={require('../../images/logout.jpg')}
          alt="logout"
          width={16}
          height={16}
        />
      </button>
      <button className={s.btnExit}>Exit</button>
    </div>
  );
};

export default UserMenu;
