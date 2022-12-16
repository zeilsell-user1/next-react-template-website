import Layout from "../src/components/layout/layout";
import styles from "../styles/Home.module.css";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Layout title="Richard's cool test website">
        <p>this is content</p>
      </Layout>
    </div>
  );
}
