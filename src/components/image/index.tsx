import React from 'react';

class Image extends React.Component<any, any> {
	render() {
		const { imageSrc } = this.props;
		return <img height="100" width="100" src={imageSrc} alt={imageSrc} />;
	}
}

export default Image;
