import React from 'react';
import Image from '../image';

class Book extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		const { author, title, year, imageLink, language, isHeberewChecked, addToCart, deleteButton } = this.props;
		const restrictedStyle = { opacity: 0.2 };
		const currentStyle =
			isHeberewChecked && language !== 'Hebrew' ? { ...restrictedStyle } : { ...restrictedStyle, opacity: 1 };
		console.log('from book compnent: ' + isHeberewChecked);

		return (
			<tr style={currentStyle}>
				<td>Author: {author}</td>
				<td>Title: {title}</td>
				<td>Year: {year}</td>
				<td>Language: {language}</td>
				<td>
					<Image imageSrc={imageLink} />
				</td>
				{addToCart && (
					<td>
						<button
							className="btn btn-primary"
							onClick={() => {
								addToCart({
									...this.props,
									addToCart: false,
									deleteButton: true
								});
							}}
						>
							Add To Cart
						</button>
					</td>
				)}
				{deleteButton && (
					<td>
						<button
							className="btn btn-danger"
							onClick={() => {
								addToCart({
									...this.props,
									addToCart: false,
									deleteButton: true
								});
							}}
						>
							Delete Button
						</button>
					</td>
				)}
			</tr>
		);
	}
}

export default Book;

{
	/* <div className="border py-3 col-3 my-2">
				<Image imageSrc={imageLink} />
				<div style={currentStyle}>
					<h2>Author: {author} </h2>
					<h5>Title: {title}</h5>
					<p>Year: {year}</p>
					<p>Language: {language}</p>
					<button
						onClick={() => {
							console.log(this.props);
						}}
						type="button"
						className="btn btn-info"
					>
						Add New Book
					</button>
				</div>
			</div> */
}
