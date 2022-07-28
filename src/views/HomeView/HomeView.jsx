import sprite from '../../images/sprite.svg';
import AuthForm from 'components/AuthForm/';
import s from './HomeView.module.css';
import Animation from 'components/Animation';

const HomeView = () => {
  return (
    <main className={s.view}>
      <div className={s.top}>
        <Animation />
        <div className={s.topWrapper}>
          <svg className={s.title}>
            <use href={`${sprite}#icon-kapusta`}></use>
          </svg>
          <p className={s.subtitle}>SMART FINANCE</p>
        </div>
      </div>
      <div className={s.bot}>
        <div className={s.auth}>
          <AuthForm />
        </div>
      </div>
    </main>
  );
};

export default HomeView;
