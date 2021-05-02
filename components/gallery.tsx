import React from "react"
import { Photo, GalleryProps } from "../interfaces/photo"

const Gallery = (props: GalleryProps): React.ReactElement => 
	<div>
		{props.photos.map((item: Photo, index) =>
			<button key={index} onClick={() => props.onSrcClicked(item)}>
				<img className="relative transition-transform z-0 duration-100 hover:shadow-2xl transform hover:z-10 hover:scale-125 h-60 m-1 -mb-1" src={item.src} />
			</button>)}
	</div>


export default Gallery
