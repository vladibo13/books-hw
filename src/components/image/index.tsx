import React from 'react';

class Image extends React.Component<any, any> {
	render() {
		const { imageSrc } = this.props;
		return <img className="img-fluid" src={imageSrc} alt={imageSrc} />;
	}
}

export default Image;
