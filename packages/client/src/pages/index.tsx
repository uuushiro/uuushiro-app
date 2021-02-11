import React, { FC } from 'react'  // {FC} をimport対象に追加
import Head from 'next/head'
import styles from '../../styles/Home.module.css' // srcディレクトリに移したことで階層が1つ深くなったので、「../」を追加
import { NextPage } from 'next';
import Link from 'next/link'

// Homeコンポーネントの型としてFC（FunctionalComponent）を定義
const Home: NextPage = () => {
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
      <Link href='/users/2'>
        <a>this page!</a>
    </Link>
    </div>
  );
} 


export default Home;