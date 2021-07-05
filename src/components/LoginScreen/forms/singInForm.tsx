import React from 'react';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SingInStyled from '../styles/singIn';

const singInForm: React.FC = () => (
  <SingInStyled>
    <h3>Registration</h3>
    <div className="FormInput">
      <form>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Name" />
        <input type="password" placeholder="Password" />
        <div className="buttonsForm">
          <button type="submit">
            Register <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </form>
    </div>

    <button type="button">
      <FontAwesomeIcon icon={faArrowLeft} />
      Back
    </button>
  </SingInStyled>
);

export default singInForm;
