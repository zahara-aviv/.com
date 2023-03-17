import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <Header />
      </Head>
      <main className={styles.main}>
        <div className={styles.navbar}>
          <a
            href='https://linkedin.com/in/zahara-aviv'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className={styles.logolink}>
              <Image
                src='/linkedin.svg'
                alt='LinkedIn Profile'
                width={48}
                height={48}
                priority
              />
            </div>
          </a>
          <a
            href='https://github.com/zahara-aviv'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/github.svg'
              alt='Zahara Aviv'
              className={styles.logolink}
              width={48}
              height={48}
              priority
            />
          </a>
          <a
            href='https://www.zahara-aviv.com/about'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/icon.svg'
              alt='Zahara Aviv'
              className={styles.logolink}
              width={48}
              height={48}
              priority
            />
          </a>
        </div>
        <div className={styles.body}>
          <Image
            style={{ position: 'relative' }}
            className={styles.bodyimage}
            src='/comingsoon.svg'
            alt='coming soon...'
            width={999999}
            height={999999}
          />
        </div>
        <div className={styles.footer}>
          <a
            href='https://xkite.io'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2>xkite</h2>
            <p>
              Learn all about xkite our open source Apache Kafka Integration &
              Testing Environment.
            </p>
          </a>

          {/* <a
            href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a> */}
        </div>
      </main>
    </>
  );
}
