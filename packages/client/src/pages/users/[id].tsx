import React, { FC } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router'
import { useUserQuery } from '../../../graphql/generated';

const UserPage: NextPage = () => {
  const router = useRouter()
  const { pid } = router.query
  console.log(pid);

  return (
    <div>
      <Head>
        <title>ユーザー詳細</title>
      </Head>
      <h1>ユーザー詳細</h1>
      <p>Post: {pid}</p>  
      <User />
    </div>
  )
}

const User = () => {
  const { data, error, loading } = useUserQuery({ variables: {id: '1'} } );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>`Error! ${error.message}`</div>
  }

  if(data.user === null) {
    return <div>Nothing</div>;
  }

  return (  
    <div>{data.user.firstName}</div>
  );
};

export default UserPage;