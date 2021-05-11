import Layout from '../components/layout';
import React, {useState} from 'react';
import Head from 'next/head';
import Gallery from '../components/gallery';
import photos from '../lib/photos';
import {GetStaticProps} from 'next';
import {Photo} from '../interfaces/photo';
import utilStyles from '../styles/utils.module.css';

export const getStaticProps: GetStaticProps = async () => {
  const allPhotos = photos()
  return {
    props: {
      allPhotos,
    },
  };
};

const ImageGallery = ({
  allPhotos,
}: {
  allPhotos: {
    thumbnail: string
    src: string
  } []
}) : React.ReactElement => {
  const [showImage, setShow] = useState(false);
  const [image, setImage] = useState('');

  const handleClick = (newValue: Photo): void => {
    setShow(!showImage);
    setImage(newValue.src);
    console.log('Click state: ' + showImage);
    console.log('Image: ' + image);
    console.log(newValue);
  };

  return (
    <>
      <Layout pageTitle='Gallery'>
        <Head>
          <title>Gallery</title>
        </Head>

        <Gallery photos={allPhotos} onSrcClicked={handleClick} />
        { showImage ?
          <div onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShow(!setShow);
            }
          }}
          className={utilStyles.popout}>
            <img className={utilStyles.images} src={image} />
          </div> : ''
        }

      </Layout>
    </>
  );
};
export default ImageGallery;
