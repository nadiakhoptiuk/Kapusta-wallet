import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import s from './AuthForm.module.css';
import Sprite from '../../images/sprite.svg';
import PalyanytsyaModal from 'components/PalyanytsyaModal/PalyanytsyaModal';

export default function AuthForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emptyInput, setEmptyInput] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [smallLengthPassword, setSmallLengthPassword] = useState(false);
  const [showPalyanytsyaReg, setShowPalyanytsyaReg] = useState(false);
  const [showPalyanytsyaLog, setShowPalyanytsyaLog] = useState(false);

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

    setShowPalyanytsyaLog(true);
  };

  const handleRegister = () => {
    if (checkValidData()) {
      return;
    }

    setShowPalyanytsyaReg(true);
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

  const onClickYesReg = () => {
    dispatch(authOperations.register({ email, password }));
    setShowPalyanytsyaReg(false);
  };
  const onClickYesLog = () => {
    dispatch(authOperations.login({ email, password }));
    setShowPalyanytsyaLog(false);
  };

  const onClickNo = () => {
    setShowPalyanytsyaLog(false);
    setShowPalyanytsyaReg(false);
  };

  return (
    <>
      {showPalyanytsyaLog && (
        <PalyanytsyaModal onClickYes={onClickYesLog} onClickNo={onClickNo} />
      )}
      {showPalyanytsyaReg && (
        <PalyanytsyaModal onClickYes={onClickYesReg} onClickNo={onClickNo} />
      )}
      <div className={s.box}>
        <p className={s.googleText}>You can log in with your Google Account:</p>
        <a
          className={s.googleBtn}
          href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&client_id=665888736356-aq6fvfmau6mupt4nfbms5tfch0u2698i.apps.googleusercontent.com&prompt=consent&redirect_uri=https%3A%2F%2Fkapusta-backend.goit.global%2Fauth%2Fgoogle-redirect&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile"
        >
          <svg className={s.googleSvg} width="18" height="18">
            <use className={s.googleIcon} href={`${Sprite}#google-icon`} />
          </svg>
          Google
        </a>
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
