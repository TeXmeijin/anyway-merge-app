import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { contributors } from '../constants';
import { VFXSpan, VFXImg } from 'react-vfx';
import { signIn, signOut, useSession } from 'next-auth/react';
import Navbar from '../components/atoms/navbar';
import Auth from '../components/Auth';
import { selectUser } from '../features/userSlice';
import { useAppSelector } from '../hooks/useRTK';

const Dashboard: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const user = useAppSelector(selectUser);
  return (
    <Auth>
      <Head>
        <title>ダッシュボード</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div>ログインユーザーしか閲覧できない秘密のページ</div>
      <div>{user.displayName}さん！こんにちは！</div>
    </Auth>
  );
};

export default Dashboard;
