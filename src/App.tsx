import React from 'react';
import BookList from './components/book-list';
import Search from './components/search';

import { books } from './books/booksLoader';

class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			books: books,
			filtredBooks: books
		};
	}
	render() {
		const { books, filtredBooks } = this.state;
		return (
			<div className="container-fluid">
				<h1 className="text-center">Book App</h1>
				<input
					onChange={(e) => {
						const searchValue = e.target.value;
						console.log(searchValue);
						const filteredData = books.filter((book: any) => {
							return book.title.toLowerCase().includes(searchValue);
						});
						console.log(filteredData);
						this.setState({ filtredBooks: filteredData });
					}}
				/>
				{filtredBooks.length ? <BookList books={filtredBooks} /> : <h1>No Books Found</h1>}
			</div>
		);
	}
}

export default App;
