import React from 'react';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from '../styles/singIn.module.css';

const singInForm: React.FC = () => (
  <div className={classes.formDiv}>
    <h3>Registration</h3>
    <div className={classes.FormInput}>
      <form>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Name" />
        <input type="password" placeholder="Password" />
        <div className={classes.buttonsForm}>
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
  </div>
);

export default singInForm;
