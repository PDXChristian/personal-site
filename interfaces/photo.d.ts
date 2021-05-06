export interface Photo {src:string; thumbnail: string}

export interface GalleryProps {
  photos: Array<Photo>
  onSrcClicked : (newValue: Photo) => void
}
