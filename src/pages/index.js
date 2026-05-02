import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://github.com/TODAY-TIL/TIL">
            GitHub 보러 가기
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProfileLinks() {
  return (
    <section className={styles.profileLinks}>
      <div className="container">
        <div className={styles.guideInner}>
          <Heading as="h2">소개</Heading>
          <p>공부한 내용을 꾸준히 기록하고 정리합니다.</p>
          <div className={styles.guideLinks}>
            <Link
              className="button button--primary button--lg"
              href="https://github.com/song-chaeyoung">
              개인 GitHub
            </Link>
            <Link
              className="button button--secondary button--lg"
              href="https://github.com/TODAY-TIL/TIL">
              TIL 저장소
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Today I Learned">
      <HomepageHeader />
      <main>
        <ProfileLinks />
      </main>
    </Layout>
  );
}
