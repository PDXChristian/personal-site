import fs from "fs"
import path from "path"

const imageDir = path.join(process.cwd(), 'public/photos')

const photos = () => {

	const fileNames = fs.readdirSync(imageDir)
	const getAllPhotos = fileNames.map(photo => {
		const src = `photos/${photo}`
		const id = photo.replace(/\.jpeg$/, '')

		return {
			id,
			src
		}
	})
	
	return getAllPhotos.sort((a,b) => {
		if(a.id > b.id) {
			return 1
		} else {
			return -1
		}
	})	
}

const photosArray = 
	[
		{
			src: "images/1.jpg"
		},
		{
			src: "images/2.jpg"
		},
		{
			src: "images/3.jpg"
		},
		{
			src: "images/4.jpg"
		},
		{
			src: "images/5.jpg"
		},
		{
			src: "images/6.jpg"
		},
		{
			src: "images/7.jpg"
		},
		{
			src: "images/8.jpg"
		},
		{
			src: "images/9.jpg"
		},
		{
			src: "images/10.jpg"
		},
	]



export default photos
