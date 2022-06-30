import React from 'react';
import { useCookies } from 'react-cookie';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const GoogleAuth = () => {
  const [cookies, removeCookie] = useCookies(['token']);

  const googleLoginSuccess = () => {
    if (!cookies.token) window.open('http://localhost:3001/auth/google', '_blank');
  };

  //   const logout = () => {
  //     removeCookie('token');
  //   };

  //   const loginFail = (res) => {
  //     alert('로그인에 실패했습니다. 관리자에게 문의해주세요.', res);
  //   };

  return (
    <>
      <Button name="login" onClick={googleLoginSuccess}>
        <FontAwesomeIcon icon={faArrowRightToBracket} size="2xl" color="white" />
      </Button>
      {/* {!cookies.token === null ? (
        <Button name="login" onClick={googleLoginSuccess}>
          <FontAwesomeIcon icon={faArrowRightToBracket} size="2xl" color="white" />
        </Button>
      ) : (
        <Button name="logout" onClick={logout}>
          <FontAwesomeIcon icon={faTimes} size="2xl" color="white" />
        </Button>
      )} */}
    </>
  );
};

export default GoogleAuth;
