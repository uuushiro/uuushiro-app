import React, { FC } from 'react'  // {FC} をimport対象に追加
import Head from 'next/head'
import styles from '../../styles/Home.module.css' // srcディレクトリに移したことで階層が1つ深くなったので、「../」を追加
import { useUserQuery } from "../../graphql/generated";

// Homeコンポーネントの型としてFC（FunctionalComponent）を定義
const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Countries GraphQL</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Countries</h1>
      <div>
        <h3>Countries go here</h3>
      </div>
      <UserList />
    </div>
  );
} 

const UserList = () => {
  const { data, error, loading } = useUserQuery({ variables: {id: '1'} } );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>`Error! ${error.message}`</div>
  }

  return (  
    <div>{data.user.firstName}</div>
  );
};

export default Home;