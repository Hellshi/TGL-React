/* eslint-disable no-console */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import {
  faUserTimes,
  faUserTie,
  faUserSlash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import UsersMain from './UserStyled';
import api from '../../../services/api';

interface User {
  id: number;
  name: string;
  email: string;
  is_admin: boolean;
  picture: {
    created_at: string;
    file: string;
    id: number;
    name: string;
    subtype: string;
    type: string;
    updated_at: string;
    url: string;
    user_id: number;
  };
}

const Users = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    api.get('/admin/all-users').then(({ data }) => {
      setUsers(data);
    });
  }, [users]);

  const handlePromote = (id: number, isAdmin: boolean) => {
    api
      .put(`/admin/promote-user/${id}`)
      .then(() =>
        toast.warn(
          isAdmin
            ? 'Usuário removido do time de admin'
            : 'Usuário promovido a Admin'
        )
      );
  };

  const handleDelete = (id: number) => {
    api
      .delete(`/admin/delete-user/${id}`)
      .then(() => toast.warn('usuário deletado com sucesso'));
  };

  return (
    <UsersMain>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id} className="user">
          {user.is_admin ? <h2>Admin</h2> : ''}
          <img
            src={
              user.picture
                ? user.picture.url
                : 'https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1'
            }
            alt="profile picture"
          />
          <div className="content">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
          <button type="button" onClick={() => handleDelete(user.id)}>
            <FontAwesomeIcon icon={faUserTimes} size="2x" />
          </button>
          <button
            type="button"
            onClick={() => handlePromote(user.id, user.is_admin)}
          >
            {user.is_admin ? (
              <FontAwesomeIcon icon={faUserSlash} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faUserTie} size="2x" />
            )}
          </button>
        </div>
      ))}
    </UsersMain>
  );
};
export default Users;
