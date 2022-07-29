import s from './CabbageJump.module.css'
import cabbage from '../../images/one-kapusta-bottom-of-bg-min.png'
import ellipse from '../../images/ellipse.png'

export default function CabbageJump() {
    return (
        <>
      <div className={s.animbox}>
        <div className={s.kap1}>
          <img className={s.icon} src={cabbage} alt="" />
        </div>
        <div className={s.el1}>
          <img className={s.iconElp} src={ellipse} alt="" />
        </div>
      </div>
      <div className={s.animbox}>
        <div className={s.kap}>
          <img className={s.icon} src={cabbage} alt="" />
        </div>
        <div className={s.el}>
          <img className={s.iconElp} src={ellipse} alt="" />
        </div>
      </div>
    </>
    )

}