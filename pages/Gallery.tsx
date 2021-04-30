import Layout from "../components/layout"
import React, {useState} from "react"
import Head from "next/head"
import Gallery from "react-photo-gallery"


const ImageGallery = (): React.ReactElement => {

	return (
		<>
			<Layout pageTitle="Gallery">
				<Head>
					<title>Gallery</title>
				</Head>

				<Gallery photos={photos} />
			</Layout>
		</>
		
	)
}

const photos = [
	{
		src: "images/1.jpg",
		width: 4,
		height: 3
	},
	{
		src: "images/2.jpg",
		width: 4,
		height: 3
	},
	{
		src: "images/3.jpg",
		width: 4,
		height: 3
	},
	{
		src: "images/4.jpg",
		width: 4,
		height: 3
	},
	{
		src: "images/5.jpg",
		width: 4,
		height: 3
	},
	{
		src: "images/6.jpg",
		width: 4,
		height: 3
	},
	{
		src: "images/7.jpg",
		width: 4,
		height: 3
	},
	{
		src: "images/8.jpg",
		width: 4,
		height: 3
	},
	{
		src: "images/9.jpg",
		width: 4,
		height: 3
	},
	{
		src: "images/10.jpg",
		width: 21,
		height: 9
	}
]
export default ImageGallery
