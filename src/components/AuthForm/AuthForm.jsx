import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import s from './AuthForm.module.css';
import Sprite from '../../images/sprite.svg';

export default function AuthForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emptyInput, setEmptyInput] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [smallLengthPassword, setSmallLengthPassword] = useState(false);

  const onChange = e => {
    setEmptyInput(false);

    switch (e.currentTarget.name) {
      case 'email':
        setInvalidEmail(false);
        setEmail(e.currentTarget.value);
        break;

      case 'password':
        setSmallLengthPassword(false);
        setPassword(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleLogin = e => {
    e.preventDefault();

    if (checkForEmptyInput() || checkValidEmail() || checkLengthPassword()) {
      return;
    }

    dispatch(authOperations.login({ email, password }));
    formReset();
  };

  const handleRegister = () => {
    if (checkForEmptyInput() || checkValidEmail() || checkLengthPassword()) {
      return;
    }

    dispatch(authOperations.register({ email, password }));
    // formReset();
  };

  const handleGoogleLogin = () => {
    // dispatch(authOperations.googleLogin());
  };

  const checkForEmptyInput = () => {
    if (email === '' || password === '') {
      setEmptyInput(true);
      return true;
    }
    return false;
  };

  const checkValidEmail = () => {
    if (!email.includes('@')) {
      setInvalidEmail(true);
      return true;
    }
    return false;
  };

  const checkLengthPassword = () => {
    if (password.length < 8) {
      setSmallLengthPassword(true);
      return true;
    }
    return false;
  };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.box}>
      <p className={s.googleText}>You can log in with your Google Account:</p>
      <button onClick={handleGoogleLogin} className={s.googleBtn} type="button">
        <svg className={s.googleSvg} width="18" height="18">
          <use className={s.googleIcon} href={`${Sprite}#google-icon`} />
        </svg>
        Google
      </button>
      <p className={s.authText}>
        Or log in using an email and password, after registering:
      </p>
      <form onSubmit={handleLogin}>
        <label className={s.label}>
          {emptyInput ? (
            <>
              <span>
                <span className={s.labelStar}>*</span>
                Email:
              </span>
            </>
          ) : (
            'Email:'
          )}
          <input
            className={s.input}
            autoComplete="off"
            type="text"
            placeholder="your@email.com"
            value={email}
            name="email"
            onChange={onChange}
          />
          <p className={s.errorMsg}>
            {invalidEmail && 'Email must contain the symbol "@"'}
            {emptyInput && 'This is a required field'}
          </p>
        </label>
        <label className={s.label}>
          {emptyInput ? (
            <>
              <span>
                <span className={s.labelStar}>*</span>
                Password:
              </span>
            </>
          ) : (
            'Password:'
          )}
          <input
            className={s.input}
            autoComplete="off"
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={onChange}
          />
          <p className={s.errorMsg}>
            {smallLengthPassword &&
              'Password length must be at least 8 characters'}
            {emptyInput && 'This is a required field'}
          </p>
        </label>
        <div className={s.authBtnBox}>
          <button className={s.loginBtn} type="submit">
            Log in
          </button>
          <button
            onClick={handleRegister}
            className={s.registerBtn}
            type="button"
          >
            Registration
          </button>
        </div>
      </form>
    </div>
  );
}
