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
				<div className="mb-2">
					<input
						value={author}
						type="text"
						className="form-control mr-1"
						placeholder="Author"
						onChange={(e) => {
							this.setState({ author: e.target.value });
						}}
					/>
					<input
						value={country}
						type="text"
						className="form-control col-3 mr-1"
						placeholder="Country"
						onChange={(e) => {
							this.setState({ country: e.target.value });
						}}
					/>
					<input
						value={imageLink}
						type="text"
						className="form-control col-3 mr-1"
						placeholder="Image Link"
						onChange={(e) => {
							this.setState({ imageLink: e.target.value });
						}}
					/>
					<input
						value={language}
						placeholder="Language"
						type="text"
						className="form-control col-3 mr-1"
						onChange={(e) => {
							this.setState({ language: e.target.value });
						}}
					/>
				</div>
				<input
					value={pages}
					type="text"
					className="form-control col-3 mr-1"
					placeholder="Pages"
					onChange={(e) => {
						this.setState({ pages: e.target.value });
					}}
				/>
				<input
					value={title}
					type="text"
					className="form-control col-3 mr-1"
					placeholder="Title"
					onChange={(e) => {
						this.setState({ title: e.target.value });
					}}
				/>

				<input
					value={year}
					placeholder="Year"
					type="text"
					className="form-control col-3 mr-1"
					onChange={(e) => {
						this.setState({ year: e.target.value });
					}}
				/>
				<button className="btn btn-primary" type="button" onClick={() => addBook(this.state)}>
					Add Book
				</button>
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
