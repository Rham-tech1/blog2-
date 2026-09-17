import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I chose Cybersecurity as my IT specialization because I am interested in protecting people, businesses, and information from digital threats. As technology becomes more important in everyday life, cyberattacks, data breaches, and online scams are also becoming more common. This real-world problem made me realize how important cybersecurity professionals are in keeping systems and sensitive information safe. I am passionate about learning how security threats happen and how they can be prevented or managed effectively. I also like that cybersecurity is a constantly evolving field that challenges me to keep learning about new technologies and threats. Through this specialization, I hope to develop the skills needed to help organizations build safer and more secure digital environments.
</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}