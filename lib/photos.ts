import fs from "fs"
import path from "path"
import { Photo } from "../interfaces/photo"

const imageDir = path.join(
	process.cwd(),
	"public/photos",
)

const photos = (): Array<Photo> => {
	const fileNames = fs.readdirSync(imageDir)
	const getAllPhotos = fileNames.map((photo) => {
		const src = `photos/${photo}`
		const id = photo.replace(
			/\.jpeg$/,
			"",
		)

		return {
			id,
			src,
		}
	})

	return getAllPhotos.sort((aVal, bVal) => {
		if (aVal.id > bVal.id) {
			return 1
		}
		return -1
	})
}

export default photos
