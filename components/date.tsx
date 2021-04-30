import {parseISO, format} from "date-fns"
import React from "react"

const Date = ({ dateString }: { dateString:string }): React.ReactElement => {
	const date = parseISO(dateString)
	return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>
}

export default Date
