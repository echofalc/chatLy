import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import styles from '../styles/Home.module.css'
import SignIn from "../components/SignInForm"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chatly</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Chatly
        </h1>
        <Avatar />
        <SignIn />

        <p className={styles.description}>
          a chat application that allows users to join a chat room something like slack. we can create chat rooms and share URLs. Each user should provide us with an email and name to join a chat.

        </p>
      </main>

      <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          By The hottest Dev Team
        </a>
      </footer>
    </div>
  )
}
