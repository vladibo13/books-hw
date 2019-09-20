import React from 'react';
import Image from '../image';

class Book extends React.Component<any, any> {
	render() {
		const { author, title, year, imageLink, language } = this.props;
		const restrictedStyle = { opacity: 0.2 };
		const currentStyle = language === 'Hebrew' ? { ...restrictedStyle } : { ...restrictedStyle, opacity: 1 };

		return (
			<div className="border py-3 col-3 my-2">
				<Image imageSrc={imageLink} />
				<h2>Author: {author} </h2>
				<h5>Title: {title}</h5>
				<p>Year: {year}</p>
				<p style={currentStyle}>Language: {language}</p>
			</div>
		);
	}
}

export default Book;
