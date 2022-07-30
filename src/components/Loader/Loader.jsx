import Sprite from '../../images/sprite.svg';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.wrapper}>
      <svg className={s.icon} width="50" height="50">
        <use href={`${Sprite}#icon-kapustina`}></use>
      </svg>
      <svg className={s.icon} width="50" height="50">
        <use href={`${Sprite}#icon-kapustina`}></use>
      </svg>
      <svg className={s.icon} width="50" height="50">
        <use href={`${Sprite}#icon-kapustina`}></use>
      </svg>
    </div>
  );
};

export default Loader;
