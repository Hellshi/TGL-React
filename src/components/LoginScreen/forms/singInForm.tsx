import React from 'react';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';
import SingInStyled from '../styles/singIn';

const singInForm: React.FC = () => {
  const history = useHistory();
  return (
    <SingInStyled>
      <h3>Registration</h3>
      <div className="FormInput">
        <form>
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Name" required />
          <input type="password" placeholder="Password" required />
          <div className="buttonsForm">
            <button type="submit" onClick={() => history.push('/create-game')}>
              Register <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </form>
      </div>

      <button type="button" onClick={() => history.push('/')}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </button>
    </SingInStyled>
  );
};
export default singInForm;
