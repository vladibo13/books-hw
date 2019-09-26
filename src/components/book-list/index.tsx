import React from 'react';
import Book from '../book';
class BookList extends React.Component<any, any> {
	render() {
		const { books, isHeberewChecked, addToCart } = this.props;
		return (
			<tbody>
				{books
					.sort((a: any, b: any) => b.year - a.year)
					.map((book: any, index: any) => (
						<Book addToCart={addToCart} isHeberewChecked={isHeberewChecked} key={index} {...book} />
					))}
			</tbody>
		);
	}
}

export default BookList;
