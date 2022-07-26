import s from './AutorisationForm.module.css';

const AutorisationForm = () => {
  return (
    <>
      <div className={s.wrap}>
        <img src={require('../../img/Union.jpg')} alt="hero" width={183} />
        <h1 className={s.h1}>SMART FINANCE</h1>
      </div>
      <div className={s.WrapForm}>
        <form
          // onSubmit={handleSubmit}
          className={s.form}
        >
          <div className={s.googleText}>
            <p>You can log in with your Google Account:</p>
          </div>
          <div className={s.btnWrap}>
            <button type="submit" className={s.btnGoogle}>
              <img
                src={require('../../img/google-symbol 1.jpg')}
                alt="logo-google"
                width={18}
                className={s.imgGoogle}
              />
              Google
            </button>
          </div>
          <div className={s.text}>
            <p>Or log in using an email and password, after registering:</p>
          </div>

          <label className={s.label}>
            Email:
            <input
              className={s.input}
              type="text"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              // value={email}
              // onChange={handleChange}
            />
          </label>
          <label className={s.label}>
            Password:
            <input
              className={s.input}
              type="password"
              name="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
              // value={}
              // onChange={}
            />
          </label>
          <div className={s.wrapBTN}>
            <div className={s.btnWrap}>
              <button type="submit" className={s.btn}>
                LOG IN
              </button>
            </div>
            <div className={s.btnWrapNoActive}>
              <button type="submit" className={s.btn}>
                REGISTRATION
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default AutorisationForm;
