/* eslint-disable no-console */
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { RootState } from '../../App';
import api from '../../services/api';
import AccountStyled from './AccountStyled';

const Account = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.auth.user);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const oldPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    api
      .put('/user/update', {
        email: emailRef.current?.value,
        oldPassword: oldPasswordRef.current?.value,
        password: passwordRef.current?.value,
        ConfirmPassword: confirmPasswordRef.current?.value,
        name: nameRef.current?.value,
      })
      .then(() => {
        toast.success('Dados atualizados con sucesso');
      })
      .catch((error) => {
        console.log(error);
        toast.error(`Opps ${error}`);
      });
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
          <button type="button">Delete Profile</button>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </AccountStyled>
  );
};
export default Account;
