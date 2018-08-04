import React, { Component } from "react";
import FormLayout from "../components/Forms/FormLayout";

import SearchContainer from "../containers/Search";

class Search extends Component {
	render() {
		return (
			<FormLayout>
				<SearchContainer />
			</FormLayout>
		);
	}
}

export default Search;
