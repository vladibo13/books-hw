import React from 'react';
import Book from '../book';
class BookList extends React.Component<any, any> {
	render() {
		const { books } = this.props;
		return (
			<div className="row">
				{books
					.sort((a: any, b: any) => b.year - a.year)
					.map((book: any, index: any) => <Book key={index} {...book} />)}
			</div>
		);
	}
}

export default BookList;
