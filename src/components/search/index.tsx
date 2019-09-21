import React from 'react';

class Search extends React.Component<any, any> {
	render() {
		const { searchValue, searchOperation, isHeberewChecked, cat, getLanguagesCategories } = this.props;
		return (
			<div>
				<div>
					<input
						placeholder="Search Movie"
						value={searchValue}
						className="form-control"
						onChange={(e) => {
							const searchValue = e.target.value;
							console.log(searchValue);
							searchOperation(searchValue, isHeberewChecked, cat);
						}}
					/>
				</div>
				<div className="my-2">
					Hebrew?
					<input
						className="ml-2"
						type="checkbox"
						onChange={(e) => {
							const isHeberewChecked = e.target.checked;
							console.log(isHeberewChecked);
							searchOperation(searchValue, isHeberewChecked, cat);
						}}
					/>
				</div>
				<select
					value={cat}
					className="custom-select"
					onChange={(e) => {
						const cat = e.target.value;
						searchOperation(searchValue, isHeberewChecked, cat);
					}}
				>
					{getLanguagesCategories.map((lang: any, index: number) => <option key={index}>{lang}</option>)}
				</select>
			</div>
		);
	}
}

export default Search;
