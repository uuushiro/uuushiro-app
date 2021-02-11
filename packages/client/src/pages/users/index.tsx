import React, { FC } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useUsersQuery } from '../../../graphql/generated';

const UserListPage: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>ユーザーリスト</title>
        </Head>
      </div>
      <h1>ユーザーリストです</h1>
      <div>
        <h3>ほげほげ</h3>
      </div>
      <UserList />
    </>
  )
}

const UserList = () => {
  const { data, error, loading } = useUsersQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>`Error! ${error.message}`</div>
  }

  if(data.users === null) {
    return <div>Nothing</div>;
  }

  return (
    <div>
      {data.users.map((user) => {
     const {
      id,
      firstName
     } = user;

    return (
      <div>{firstName}</div>
    );
  })}
    </div>
  );
};

export default UserListPage;