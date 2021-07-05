import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from '../styles/login.module.css';

const logginForm: React.FC = () => (
  <div className={classes.formDiv}>
    <h3>Authentication</h3>
    <div className={classes.FormInput}>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className={classes.buttonsForm}>
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
  </div>
);

export default logginForm;
