import Link from "next/link";
import Layout from "../src/components/layout/layout";
import styles from "../styles/Home.module.css";

export default function product(): JSX.Element {
  return (
    <div className={styles.container}>
      <Layout title="Richard's product hub page">
        <p>This is a page for SEO additions</p>
        <div>
          <Link href="/product/lotto">Lotto Games</Link>
        </div>
        <div>
          <Link href="/product/pools">Pools Games</Link>
        </div>
      </Layout>
    </div>
  );
}
