import React from 'react';

class THead extends React.Component<any, any> {
	render() {
		return (
			<thead>
				<tr>
					<th scope="col">Author</th>
					<th scope="col">Title</th>
					<th scope="col">Year</th>
					<th scope="col">Language</th>
					<th scope="col">Image</th>
					<th scope="col">Buy</th>
				</tr>
			</thead>
		);
	}
}

export default THead;
