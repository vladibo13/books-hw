import React from 'react';
import Image from '../image';

class Book extends React.Component<any, any> {
	render() {
		const { author, title, year, imageLink, language, isHeberewChecked } = this.props;
		const restrictedStyle = { opacity: 0.2 };
		const currentStyle =
			isHeberewChecked && language !== 'Hebrew' ? { ...restrictedStyle } : { ...restrictedStyle, opacity: 1 };
		console.log('from book compnent: ' + isHeberewChecked);

		return (
			<div className="border py-3 col-3 my-2">
				<Image imageSrc={imageLink} />
				<div style={currentStyle}>
					<h2>Author: {author} </h2>
					<h5>Title: {title}</h5>
					<p>Year: {year}</p>
					<p>Language: {language}</p>
				</div>
			</div>
		);
	}
}

export default Book;
