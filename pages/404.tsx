import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { get404Image, CmsImage, getImageUrl } from "../src/features/cms-access";
import Layout from "../src/components/layout/layout";
import styles from "../styles/Home.module.css";

const Img404 = styled.img`
  margin-left: 1vh;
  aspect-ratio: 1;
  margin: 2vh;
`;

export default function FourOhFour(): JSX.Element {
  const [img, setImg] = useState({} as CmsImage);

  useEffect(() => {
    fillOut404Image();
  }, []);

  const fillOut404Image = async () => {
    const Callback404 = (imgData: CmsImage) => {
      setImg(imgData);
    };
    get404Image(Callback404);
  };

  const addImageTo404 = () => {
    let imgUrl: string = "./blank404.jpg";
    let altText: string = "temp 404 image";

    if (img.reference != undefined) {
      imgUrl = getImageUrl(img.reference, 200, 200);
      altText = img.caption;
    }

    return <Img404 src={imgUrl} alt={altText} />;
  };

  return (
    <div className={styles.container}>
      <Layout title="Richard's 404 page">
        <h1>404 - Page Not Found</h1>
        <Link href="/"> Go back home </Link>
        <div>{addImageTo404()}</div>
      </Layout>
    </div>
  );
}
