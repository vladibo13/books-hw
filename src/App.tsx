import React from 'react';
import BookList from './components/book-list';
import Search from './components/search';

import { books } from './books/booksLoader';
import CreateBook from './components/create-book';
import Payment from './components/payment';
import THead from './components/thead';

class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			books: books,
			filtredBooks: books,
			searchValue: '',
			isHeberewChecked: false,
			cat: 'all',
			cart: []
		};
	}

	addToCart = (newBook: any) => {
		this.setState({ cart: [ ...this.state.cart, newBook ] });
		// this.setState({ cart: [...this.state.cart, product] })
	};

	searchOperation = (searchTextFromChild: string, isHeberewChecked: boolean, cat: string) => {
		// get full books list
		const { books } = this.state;
		const filtredData = books.filter((book: any) => {
			const langCat = cat !== 'all' ? book.language === cat : true;
			return book.title.toLowerCase().includes(searchTextFromChild) && langCat;
		});
		this.setState({ searchValue: searchTextFromChild, filtredBooks: filtredData, isHeberewChecked, cat });
	};

	getLanguagesCategories = (books: Array<any>) => {
		const booksLanguages = books.reduce(
			(initBook, book: any) => {
				return { ...initBook, [book.language]: true };
			},
			{ all: true }
		);
		return Object.keys(booksLanguages);
	};

	addBook = (bookAdd: any) => {
		console.log(bookAdd);
		const newData = [ ...this.state.books, { ...bookAdd } ];
		console.log(newData);
		this.setState({ books: newData, filtredBooks: newData });
	};
	render() {
		const { books, filtredBooks, cart } = this.state;
		return (
			<div className="container">
				<h1 className="text-center">Book App</h1>
				<hr />

				<hr />
				<h3>Search Functionality 3</h3>
				<Search
					searchOperation={this.searchOperation}
					searchValue={this.state.searchValue}
					isHeberewChecked={this.state.isHeberewChecked}
					getLanguagesCategories={this.getLanguagesCategories(this.state.books)}
					cat={this.state.cat}
				/>
				<hr />
				<h3>Add Book Functionality</h3>
				<CreateBook addBook={this.addBook} />
				<hr />
				<h3>Cart Books</h3>
				<h3>Payment</h3>
				<Payment />
				{cart.length ? (
					<table className="table">
						<THead />
						<BookList books={cart} />
					</table>
				) : (
					<h1>No Cart Items</h1>
				)}

				{/* <h2>Cart Books</h2>
				<table>{filtredBooks.length ? <BookList books={filtredBooks} /> : <p>No Books</p>}</table> */}
				<hr />

				<h3>Book List</h3>
				{filtredBooks.length ? (
					<table className="table">
						<THead />
						<BookList
							addToCart={this.addToCart}
							HeberewChecked={this.state.isHeberewChecked}
							books={filtredBooks}
						/>
					</table>
				) : (
					<h1>No Books Found</h1>
				)}
			</div>
		);
	}
}

export default App;
{
	/* <input
onChange={(e) => {
	const searchValue = e.target.value;
	console.log(searchValue);
	const filteredData = books.filter((book: any) => {
		return book.title.toLowerCase().includes(searchValue);
	});
	console.log(filteredData);
	this.setState({ filtredBooks: filteredData });
}}
/> */
}
