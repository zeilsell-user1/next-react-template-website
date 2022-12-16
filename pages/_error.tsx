import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { get404Image, CmsImage, getImageUrl } from '../src/features/cms-access';
import Layout from '../src/components/layout/layout'
import styles from '../styles/Home.module.css'

const ImgError = styled.img`
    margin-left: 1vh;
    aspect-ratio: 1;
    margin: 2vh;
`;

export default function Error(): JSX.Element {

  const [img, setImg] = useState({} as CmsImage);

  useEffect(() => {
    fillOutErrorImage();
  }, []);

  const fillOutErrorImage = async () => {
    const CallbackError = (imgData: CmsImage) => {
      setImg(imgData);
    }
    get404Image(CallbackError);
  }

  const addImageToError = () => {
    let imgUrl: string = "./blank404.jpg";
    let altText: string = "temp 404 image";

    if (img.reference != undefined) {
      imgUrl = getImageUrl(img.reference, 200, 200);
      altText = img.caption;
    }

    return (
      <ImgError src={imgUrl} alt={altText} />
    );
  }

return (
  <div className={styles.container}>
    <Layout title="Richard's error page">
      <h1>General Error - Page Not Served Up</h1>
      <Link href="/"> Go back home </Link>
      <div>
        {addImageToError()}
      </div>
    </Layout>
  </div>
)
}