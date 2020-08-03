import React from 'react';

export class Label extends React.Component {
	render() {
		const {caption, svalue, excelent, good, mid, title} = this.props;
		const [value, measure] = svalue?.split('d') || []; 
		let classType = 'bad';
		if (Number(value) >= excelent) {
			classType="excelent";
		} else if (Number(value) >= good) {
			classType="good";
		} else if (Number(value) >= mid) {
			classType="mid";
		}
		return <div>
			<span title={title}>{caption}</span>&nbsp;
			<span className={classType}>{value}</span>&nbsp;
			<span> {measure ? 'd' : ''}{measure}</span>
		</div>
	}
}
