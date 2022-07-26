// import { useSelector, useDispatch } from 'react-redux';
// import authSelectors from 'redux/auth/auth-selectors';
// import authOperations from 'redux/auth/auth-operations';
import { Avatar } from '@mui/material';
import s from './UserMenu.module.css';

const UserMenu = () => {
  //   const userEmail = useSelector(authSelectors.userEmail);
  //   const dispatch = useDispatch();
  return (
    <div className={s.menu}>
      <Avatar />
      <span>userEmail</span>

      <button
        className={s.logout}
        // onClick={() => dispatch(authOperations.logout())}
      >
        Exit
      </button>
    </div>
  );
};

export default UserMenu;
