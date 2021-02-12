import Head from 'next/head'
import Link from 'next/link'
import { AppleIcon, Logo, Menubar, WindowsIcon } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Snipcode | Instantly save todos,bookmarks,screenshots</title>
      </Head>
      <header style={{ zIndex: 2, display: 'flex', maxWidth: '1080px', margin: '0 auto', width: '100%', alignItems: 'center' }}>
        <span style={{ flex: 1 }} />
        <nav style={{ display: 'flex', fontSize: '1.2em' }}>
          <Link href="/about"><a style={{ padding: '20px' }}>About</a></Link>
          <Link href="/download"><a style={{ padding: '20px' }}>Download</a></Link>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.main_heading}>
          <div style={{ display: 'flex', margin: '2em .2em', alignItems: 'center' }}>
            <span style={{ background: '#ffffff26', borderRadius: '1em', margin: '10px ' }}><Logo /></span><h1 className={styles.title}>Snipcode</h1>
          </div>
          <h1 className={styles.title}>
            Save your code snippets on menubar and access them anywhere on the internet!
            </h1>
          <h2 className={styles.description}>
            Snipcode allows you to <i>save and collaborate</i> on  your <b><i>code snippets</i></b> from anywhere on the internet
            </h2>
          <div style={{ display: 'flex' }}><span style={{ padding: 10 }}><AppleIcon /></span><span style={{ padding: 10 }}><WindowsIcon /></span></div>
          <div style={{ display: 'flex' }}>
            <a href="/"> <button className={styles.primary_btn}>Download </button></a>
            <button className={styles.secondary_btn}> Join our discord </button>
          </div>
        </div>
        <div style={{
          justifyContent: 'center',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Menubar />
          <div className={styles.mock_mobile}></div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo />
        </a>
      </footer>
    </div>
  )
}
