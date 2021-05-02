import Layout from "../components/layout"
import React from "react"
import Head from "next/head"
import Gallery from "../components/gallery"
import photos from "../lib/photos"


const ImageGallery = (): React.ReactElement => {
	return (
		<>
			<Layout pageTitle="Gallery">
				<Head>
					<title>Gallery</title>
				</Head>
					<Gallery photos={photos} onSrcClicked={(newValue) => console.log(newValue) } />
			</Layout>
		</>
		
	)
}
export default ImageGallery
