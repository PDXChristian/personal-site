import Layout from "../components/layout"
import React from "react"
import Head from "next/head"

const Custom404 = (): React.ReactElement => {
	return (
		<Layout pageTitle="404">
			<Head>
				<title>Page Not Found</title>
			</Head>
			<h1>The page you have requested could not be found. If you believe this is an error, please contact <b>self@christianwegman.com</b>. If this was not an error, stop trying to go places you shouldn&apos;t be.
			</h1>
		</Layout>
	)
}

export default Custom404
