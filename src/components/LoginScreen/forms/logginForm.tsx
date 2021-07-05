import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormDiv from '../styles/login';

const logginForm: React.FC = () => (
  <FormDiv>
    <h3>Authentication</h3>
    <div className="FormInput">
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className="buttonsForm">
          <button type="button">Forget my password</button>
          <button type="submit">
            Log In <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </form>
    </div>

    <button type="button">
      Sing Up <FontAwesomeIcon icon={faArrowRight} />
    </button>
  </FormDiv>
);

export default logginForm;
