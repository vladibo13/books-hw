import React from 'react';

class CreateBook extends React.Component<any, any> {
	// const {addBook} = this.props;

	constructor(props: any) {
		super(props);

		this.state = { author: '', country: '', imageLink: '', language: '', pages: 0, title: '', year: 0 };
	}

	render() {
		const { addBook } = this.props;
		const { author, country, imageLink, language, pages, title, year } = this.state;
		return (
			<form className="form-inline">
				<div className="form-group mb-2">
					<label className="mx-2">Author:</label>
					<input
						value={author}
						type="text"
						className="form-control "
						onChange={(e) => {
							this.setState({ author: e.target.value });
						}}
					/>
				</div>
				<div className="form-group mb-2" />
				Country:{' '}
				<input
					value={country}
					type="text"
					className="form-control col-3"
					onChange={(e) => {
						this.setState({ country: e.target.value });
					}}
				/>
				<div className="form-group" />
				ImageLink:{' '}
				<input
					value={imageLink}
					type="text"
					className="form-control col-3"
					onChange={(e) => {
						this.setState({ imageLink: e.target.value });
					}}
				/>
				<div className="form-group" />
				Language:<input
					value={language}
					type="text"
					className="form-control col-3"
					onChange={(e) => {
						this.setState({ language: e.target.value });
					}}
				/>
				<div className="form-group" />
				Pages:<input
					value={pages}
					type="text"
					className="form-control col-3"
					onChange={(e) => {
						this.setState({ pages: e.target.value });
					}}
				/>
				<div className="form-group" />
				Title:<input
					value={title}
					type="text"
					className="form-control col-3"
					onChange={(e) => {
						this.setState({ title: e.target.value });
					}}
				/>
				<div className="form-group">
					Year:
					<input
						value={year}
						type="text"
						className="form-control col-3"
						onChange={(e) => {
							this.setState({ year: e.target.value });
						}}
					/>
				</div>
				<div className="form-group">
					<button className="btn btn-primary" type="button" onClick={() => addBook(this.state)}>
						Add Book
					</button>
				</div>
			</form>
		);
	}
}

export default CreateBook;
// {
//     "author": "Hans Christian Andersen",
//     "country": "Denmark",
//     "imageLink": "images/fairy-tales.jpg",
//     "language": "Danish",
//     "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
//     "pages": 784,
//     "title": "Fairy tales",
//     "year": 1836
//   }
