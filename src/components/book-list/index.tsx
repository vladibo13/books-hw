import React from 'react';
import Book from '../book';
class BookList extends React.Component<any, any> {
	render() {
		const { books, isHeberewChecked } = this.props;
		return (
			<div className="row">
				{books
					.sort((a: any, b: any) => b.year - a.year)
					.map((book: any, index: any) => <Book isHeberewChecked={isHeberewChecked} key={index} {...book} />)}
			</div>
		);
	}
}

export default BookList;
