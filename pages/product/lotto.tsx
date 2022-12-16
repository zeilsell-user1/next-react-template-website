import Layout from "../../src/components/layout/layout";
import styles from "../../styles/Home.module.css";

export default function lottoProductPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <Layout title="Richard's lotto product page">
        <p>This page contains the lotto products</p>
      </Layout>
    </div>
  );
}
