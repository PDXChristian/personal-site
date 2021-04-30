interface Photo {src: string, width: number, height: number}

interface GalleryProps {
	photos: Array<Photo>
	onSrcClicked : (event: React.MouseEvent, newValue: Photo) => void
}

const Gallery = (props: GalleryProps): React.ReactElement => {
	return (
		<div>
			{props.photos.map( (item: Photo, index) => (
				<button key={index} onClick={(event)=>props.onSrcClicked(event, item)}>
					<img src={item.src} height={item.height} width={item.width} />
				</button>
			))}
		</div>
	)
}

export default Gallery
