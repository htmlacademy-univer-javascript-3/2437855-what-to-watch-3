import React, { useMemo, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';

import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { AuthorizationStatus, LogInError } from '../../types/authorization';
import { login } from '../../store/api-action';
import { setLoginError } from '../../store/user-reducer/user-reducer';
import {
  getAuthStatus,
  getLoginError,
} from '../../store/user-reducer/user-selector';
import { RE_EMAIL, RE_PASSWORD } from '../../components/const';

function SignInPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordField] = useState<string>('');

  const authStatus = useAppSelector(getAuthStatus);
  const loginError = useAppSelector(getLoginError);
  const formRef = useRef(null);


  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const isValidEmail = () =>
      !emailField || !RE_EMAIL.test(emailField);
    const isValidPassword = () =>
      !passwordField || !RE_PASSWORD.test(passwordField);

    if (formRef.current) {
      if (isValidEmail() && isValidPassword()) {
        dispatch(setLoginError(LogInError.NotValidEmailAndPasswordCombination));
      } else if (isValidEmail()) {
        dispatch(setLoginError(LogInError.NotValidEmail));
      } else if (isValidPassword()) {
        dispatch(setLoginError(LogInError.NotValidPassword));
      } else {
        dispatch(login({ email: emailField, password: passwordField }));
      }
    }
  };

  const showErrMessage = (logInError: LogInError) => {
    switch (logInError) {
      case LogInError.NotValidEmail:
        return <p>Email не корректный</p>;
      case LogInError.NotValidPassword:
        return (
          <p>
            Пароль не корректный: он должен содержать как минимум 1 цифру и 1
            букву
          </p>
        );
      case LogInError.NotValidEmailAndPasswordCombination:
        return <p>Email и пароль не корректные</p>;
      default:
        return null;
    }
  };

  const errorMessage = useMemo(() => showErrMessage(loginError), [loginError]);

  return authStatus === AuthorizationStatus.Auth ? (
    <Navigate to={'/'} />
  ) : (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLight={false} />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          {errorMessage}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                value={emailField}
                onChange={(event) => setEmailField(event.target.value)}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                value={passwordField}
                onChange={(event) => setPasswordField(event.target.value)}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignInPage;
