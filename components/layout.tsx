import Head from "next/head"
import Image from "next/image"
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"
import { Navbar } from "./Navbar"
import React from "react"

const name = "Christian"
export const siteTitle = "Christian"

const Layout = ({ 
	children, 
	pageTitle,
}: {
	children: React.ReactNode
	pageTitle?: string
}): React.ReactElement => {
	return ( 
		<>
			<Navbar pageTitle={pageTitle}/>
			<div className={styles.container}>
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<meta
						name="description"
						content="Christian"
					/>
					<meta
						property="og:image"
						content={`https://og-image.vercel.app/${encodeURI(
							siteTitle
						)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
					/>
					<meta name="og:title" content={siteTitle} />
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
				<header className={styles.header}>
					{pageTitle === "~" ? (
						<>
							<Image 
								priority
								src="/images/profile.jpg"
								className={utilStyles.borderCircle}
								height={216}
								width={216}
								alt={name}
							/>
							<h1 className={utilStyles.heading2Xl}>{name}</h1>
						</>
					) : pageTitle === "About" ? (
						<>
							<Image
								priority
								src="/images/profile.jpg"
								className={utilStyles.borderCircle}
								height={144}
								width={144}
								alt={name}
							/>
							<h2 className={utilStyles.headingLg}>
								{name}
							</h2>
						</>
					) : (
						<h2 className={utilStyles.independentHeading}>
							{pageTitle}
						</h2>
					)}
				</header>
				<main>{children}</main>
				{pageTitle === undefined || pageTitle === "404" && (
					<div className={styles.backToHome}>
						<Link href="/">
							<a>← Back to home</a>
						</Link>
					</div>
				)}
			</div>
		</>
	)
}

export default Layout
