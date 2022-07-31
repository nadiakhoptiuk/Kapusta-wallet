import { NavLink } from 'react-router-dom';
import s from './Personage.module.css';

const Personage = () => {
  return (
    <>
      <NavLink aria-label="personage" to="/" className={s.personage}>
        <img
          src={require('./png/Bob-Minion-PNG-Image.png')}
          alt="personage"
          width={80}
          height={80}
        />
      </NavLink>
    </>
  );
};
export default Personage;
