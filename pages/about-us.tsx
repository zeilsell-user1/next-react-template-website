import Layout from "../src/components/layout/layout";
import styles from "../styles/Home.module.css";

export default function aboutUs(): JSX.Element {
  return (
    <div className={styles.container}>
      <Layout title="Richard's about us page">
        <p>This is a demo site using React/Next</p>
        <p>
          It was put together a a simple starting point for anyone creating a
          new site
        </p>
        <p>Contact deatils are made up, but the email is live</p>
      </Layout>
    </div>
  );
}
