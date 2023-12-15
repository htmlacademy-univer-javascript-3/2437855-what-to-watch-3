import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import { AppRoute, AuthorizationStatus } from '../../components/const';
import { useAppDispatch, useAppSelector } from '../../hook/useAppDispatch';
import { AuthData } from '../../types/authorization';
import { logInAction } from '../../store/api-action';

function SignInPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const { authorizationStatus } = useAppSelector((state) => state);
  if (authorizationStatus === AuthorizationStatus.Auth) {
    navigate(AppRoute.Main);
  }

  const onSubmit = (authData: AuthData) => {
    dispatch(logInAction(authData));
  };

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLight={false} />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={submitHandler}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                ref={emailRef}
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
                ref={passwordRef}
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
