import React, { Component } from "react";

import SearchForm from "../components/Forms/Search";

class Search extends Component {
	onSearch = values => {
		console.log(values);
	};

	render() {
		const { onSearch } = this;

		return <SearchForm onSubmit={onSearch} />;
	}
}

export default Search;
