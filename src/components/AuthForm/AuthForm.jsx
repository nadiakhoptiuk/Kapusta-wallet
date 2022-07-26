import { useState } from 'react';
import s from './AuthForm.module.css';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = e => {
    switch (e.currentTarget.name) {
      case 'email':
        setEmail(e.currentTarget.value);
        break;

      case 'password':
        setPassword(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleLogin = () => {
    formReset();
  };

  const handleRegister = () => {
    formReset();
  };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.box}>
      <p className={s.googleText}>You can log in with your Google Account:</p>
      <button className={s.googleBtn} type="button">
        Google
      </button>
      <p className={s.authText}>
        Or log in using an email and password, after registering:
      </p>
      <label className={s.label}>
        Email:
        <input
          className={s.input}
          autoComplete="off"
          type="email"
          placeholder="your@email.com"
          value={email}
          name="email"
          required
          onChange={onChange}
        />
      </label>
      <label className={s.label}>
        Password:
        <input
          className={s.input}
          autoComplete="off"
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          required
          onChange={onChange}
        />
      </label>
      <div className={s.authBtnBox}>
        <button onClick={handleLogin} className={s.loginBtn} type="button">
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
    </div>
  );
}
