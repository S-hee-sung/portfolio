import React from "react";
import Header from "../Header";
import Preloader from "../Preloader";

function PageWrap(props) {
	const { children } = props;

	return (
		<div>
			<Header page={props.page} />
			<>{children}</>
			<Preloader />
		</div>
	);
}

export default PageWrap;
