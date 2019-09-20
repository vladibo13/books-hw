import React from 'react';

class Search extends React.Component<any, any> {
	render() {
		const { books } = this.props;
		return (
			<div>
				<input className="form-control" />
			</div>
		);
	}
}

export default Search;
