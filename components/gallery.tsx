import React from 'react';
import {Photo, GalleryProps} from '../interfaces/photo';
import Styles from '../styles/utils.module.css';

const Gallery = (props: GalleryProps): React.ReactElement => {
  return (
    <div>
      {props.photos.map((item: Photo, index) =>
        <button key={index} onClick={() => props.onSrcClicked(item)}>
          <img className={Styles.gallery} src={item.thumbnail} />
        </button>)}
    </div>
  );
};

export default Gallery;
