import Layout from "../components/layout"
import React from "react"
import Head from "next/head"
import Gallery from "../components/gallery"
import photos from "../lib/photos"
import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async () => {
	const allPhotos = photos()
	console.log(allPhotos)
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
	console.log(allPhotos)
	return (
		<>
			<Layout pageTitle="Gallery">
				<Head>
					<title>Gallery</title>
				</Head>
				<Gallery photos={allPhotos} onSrcClicked={(newValue) => console.log(newValue)} />				
			</Layout>
		</>
		
	)
}
export default ImageGallery
