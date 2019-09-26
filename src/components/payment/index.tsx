import React from 'react';

class Payment extends React.Component<any, any> {
	render() {
		return (
			<form>
				<div className="form-group">
					<label>Credit Card</label>
					<input type="text" className="form-control" />
				</div>
				<div className="form-group">
					<label>ID Number</label>
					<input type="text" className="form-control" />
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		);
	}
}

export default Payment;
