import Layout from "../components/layout"
import React, { useState } from "react"
import Head from "next/head"
import Gallery from "../components/gallery"
import photos from "../lib/photos"
import { GetStaticProps } from "next"
import {Photo} from "../interfaces/photo"

export const getStaticProps: GetStaticProps = async () => {
	const allPhotos = photos()
	return {
		props: {
			allPhotos
		}
	}
}

const ImageGallery = ({
	allPhotos
}: {
	allPhotos: {
		src: string
	} []
}) : React.ReactElement => {

	const [showImage, setShow] = useState(false)
	const [image, setImage] = useState("")
	const handleClick = (newValue: Photo): void => {
		setShow(!showImage)
		setImage(newValue.src)
		console.log("Click state: " + showImage)
		console.log("Image: " + image)
	}

	return (
		<>
			<Layout pageTitle="Gallery">
				<Head>
					<title>Gallery</title>
				</Head>
				<Gallery photos={allPhotos} onSrcClicked={handleClick} />				
				{ showImage ? <div onClick={() => setShow(!setShow)} className="fixed w-screen h-screen top-0 left-0 z-50 grid place-content-center bg-black bg-opacity-80"><img className="justify-self-center rounded w-2/3" src={image} /></div>
					: ""
				}
			</Layout>
		</>
		
	)
}
export default ImageGallery
