import React, { useRef } from 'react';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import ResetPasswordStyled from '../styles/resetPassword';
import api from '../../../services/api';

const resetPassword: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    api
      .post('/reset', { email: emailRef.current?.value })
      .then(() =>
        toast.success(
          'Um email foi enviado com um token de verificação. Cheque sua caixa postal'
        )
      );
  };
  return (
    <ResetPasswordStyled>
      <h3>Reset Password</h3>
      <div className="FormInput">
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" ref={emailRef} />
          <div className="buttonsForm">
            <button type="submit">
              Send Link <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </form>
      </div>

      <button type="button" onClick={() => history.push('/')}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </button>
    </ResetPasswordStyled>
  );
};
export default resetPassword;
