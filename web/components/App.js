import React, { Fragment } from "react";
import Header from "./Header/Header.js";
import RoutesContainer from "./RoutesContainer";

const App = () => {
	return (
		<Fragment >
			<Header/>
			<RoutesContainer />
		</Fragment>
	)
}

export default App