export interface Photo {thumbnail: string}

export interface GalleryProps {
  photos: Array<Photo>
  onSrcClicked : (newValue: Photo) => void
}
