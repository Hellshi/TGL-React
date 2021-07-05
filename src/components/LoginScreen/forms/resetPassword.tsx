import React from 'react';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from '../styles/resetPassword.module.css';

const resetPassword: React.FC = () => (
  <div className={classes.formDiv}>
    <h3>Reset Password</h3>
    <div className={classes.FormInput}>
      <form>
        <input type="email" placeholder="Email" />
        <div className={classes.buttonsForm}>
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
  </div>
);

export default resetPassword;
