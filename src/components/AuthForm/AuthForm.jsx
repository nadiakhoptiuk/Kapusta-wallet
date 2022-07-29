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

    if (checkValidData()) {
      return;
    }

    dispatch(authOperations.login({ email, password }));
  };

  const handleRegister = () => {
    if (checkValidData()) {
      return;
    }

    dispatch(authOperations.register({ email, password }));
  };

  const handleGoogleLogin = () => {
    // dispatch(authOperations.googleLogin());
  };

  const checkValidData = () => {
    let key = false;

    if (email === '') {
      setEmptyInput(true);
      key = true;
    }

    if (!email.includes('@')) {
      setInvalidEmail(true);
      key = true;
    }

    if (password.length < 8) {
      setSmallLengthPassword(true);
      key = true;
    }

    return key;
  };

  return (
    <>
      <div className={s.box}>
        <p className={s.googleText}>You can log in with your Google Account:</p>
        <button
          onClick={handleGoogleLogin}
          className={s.googleBtn}
          type="button"
        >
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
              {emptyInput
                ? 'This is a required field'
                : invalidEmail && 'Email must contain the symbol "@"'}
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
    </>
  );
}
