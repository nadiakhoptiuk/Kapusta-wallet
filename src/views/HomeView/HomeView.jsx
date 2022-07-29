import sprite from '../../images/sprite.svg';
import AuthForm from 'components/AuthForm/';
import s from './HomeView.module.css';
import Animation from 'components/Animation';
import CabbageJump from 'components/CabbageJump';

const HomeView = () => {
  return (
    <>
      <div className={s.background}><Animation /></div>
       <div className={s.kapustaflay}>
        <div className={s.anim}>
          <CabbageJump />
        </div>
      </div>
      <div className={s.container}>
         <div className={s.name}>
           <svg className={s.title}>
             <use href={`${sprite}#icon-kapusta`}></use>
          </svg>
          <p className={s.subtitle}>SMART FINANCE</p>
        </div>
        <div className={s.auth}>
           <AuthForm />
         </div>
        </div>
    </>
  );
};

export default HomeView;
