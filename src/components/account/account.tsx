/* eslint-disable no-console */
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { AuthActions } from '../../store/auth-slice';
import { RootState } from '../../App';
import api from '../../services/api';
import AccountStyled from './AccountStyled';

interface data {
  id: number;
  email: string;
  is_admin: boolean;
  name: string;
  token: string;
}

const Account = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const oldPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const PutResponse = await api.put('/user/update', {
        email: emailRef.current?.value,
        oldPassword: oldPasswordRef.current?.value,
        password: passwordRef.current?.value,
        ConfirmPassword: confirmPasswordRef.current?.value,
        name: nameRef.current?.value,
      });
      toast.success('Dados atualizados con sucesso');
    } catch (error) {
      toast.error(error.response.data.error.message);
    }
  };

  const handleDeleteProfile = async () => {
    try {
      const response = await api.delete('/user/delete');
      dispatch(AuthActions.logout());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AccountStyled>
      <div className="main">
        <div className="picture">
          <h1>Profile</h1>
          <img
            src={
              user.picture
                ? user.picture.url
                : 'https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1'
            }
            alt="profilePic"
          />
        </div>
        <div className="informations">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button type="button" onClick={handleDeleteProfile}>
            Delete Profile
          </button>
        </div>
      </div>

      <div className="editProfile">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required ref={emailRef} />
          <input type="text" placeholder="Name" ref={nameRef} />
          <input
            type="password"
            placeholder="Old password"
            ref={oldPasswordRef}
          />
          <input type="password" placeholder="Password" ref={passwordRef} />
          <input
            type="password"
            placeholder="Confirm Password"
            ref={confirmPasswordRef}
          />
          <button type="submit">
            Submit <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>
      </div>
    </AccountStyled>
  );
};
export default Account;
