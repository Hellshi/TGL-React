/* eslint-disable no-console */
import React, { useRef } from 'react';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory, useParams } from 'react-router';
import ResetPasswordStyled from '../styles/resetPassword';
import api from '../../../services/api';

const Reset: React.FC = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const { token } = useParams<{ token: string }>();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post(`/reset/${token}`, {
        password: passwordRef.current?.value,
      });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ResetPasswordStyled>
      <h3>Reset Password</h3>
      <div className="FormInput">
        <form onSubmit={handleSubmit}>
          <input type="password" placeholder="New password" ref={passwordRef} />
          <div className="buttonsForm">
            <button type="submit">
              Send Link <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </form>
      </div>

      <button type="button">
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </button>
    </ResetPasswordStyled>
  );
};
export default Reset;
