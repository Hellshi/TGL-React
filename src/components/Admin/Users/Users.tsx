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
  const loadUsers = async () => {
    const getResponse = await api.get('/admin/all-users');
    setUsers(getResponse.data);
  };
  useEffect(() => {
    loadUsers();
  }, []);

  const handlePromote = async (id: number, isAdmin: boolean) => {
    await api.put(`/admin/promote-user/${id}`);
    toast.warn(
      isAdmin
        ? 'Usuário removido do time de admin'
        : 'Usuário promovido a Admin'
    );
    loadUsers();
  };

  const handleDelete = async (id: number) => {
    await api.delete(`/admin/delete-user/${id}`);
    toast.warn('usuário deletado com sucesso');
    loadUsers();
  };

  return (
    <UsersMain>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id} className="user">
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
            {user.is_admin ? (
              <p
                style={{
                  color: '#8d990b',
                  fontWeight: 'bold',
                }}
              >
                Admin
              </p>
            ) : (
              ''
            )}
          </div>
          <div className="buttons">
            <button
              type="button"
              onClick={() => handlePromote(user.id, user.is_admin)}
            >
              {user.is_admin ? (
                <FontAwesomeIcon icon={faUserSlash} size="2x" />
              ) : (
                <FontAwesomeIcon icon={faUserTie} size="2x" />
              )}
            </button>{' '}
            <button type="button" onClick={() => handleDelete(user.id)}>
              <FontAwesomeIcon icon={faUserTimes} size="2x" />
            </button>
          </div>
        </div>
      ))}
    </UsersMain>
  );
};
export default Users;
