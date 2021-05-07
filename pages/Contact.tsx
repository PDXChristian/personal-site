import Layout from "../components/layout"
import React, {FormEvent} from "react"
import Head from "next/head"
import Styles from "../styles/utils.module.css"

const About = (): React.ReactElement =>{

	const submitContact = async (event:FormEvent) => {
		console.log(event.target)

	}
	return (
		<Layout pageTitle="Contact">
			<Head>
				<title>Contact Christian</title>
			</Head>
			<div className="border-2 dark:border-dark-pallet-dark dark:text-dark-pallet-fg">
				<p className="pt-2 mt-4 -mb-4">For any questions or inquiries, please use the form and I will try to respond within 24 hours.</p>
				<form className="p-2 m-4" onSubmit={submitContact}>
					<div className="block">
						<input id="name" type="text" className={Styles.inputBoxes} autoComplete="name" placeholder="Full Name" required />
						<input id="email" type="text" className={Styles.inputBoxes} autoComplete="email" placeholder="Email Address" required />
						<input id="organization" type="text" className={Styles.inputBoxes} autoComplete="organization" placeholder="Organization" required />
						<br />
						<textarea id="message" className={Styles.messageBox} placeholder="Please enter your message..." />
						<br />
						<button type="submit" className="m-0">Submit</button>
					</div>
				</form>
			</div>
		</Layout>
	)
}

export default About
