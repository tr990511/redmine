import PropTypes from 'prop-types';
import React from 'react';

export default class Problem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {question: '', description: '', applyPerson: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	// 监听用户名和密码两个input值的变化
	handleChange(event) {
		const target = event.target;
		this.setState({[target.name]: target.value});
	}
	// 表单提交的响应函数
	handleSubmit(event) {
		console.log('login begin');
		let initHeaders = new Headers();
		initHeaders.append('Accept', 'application/json, text/plain, */*');
		initHeaders.append('Cache-Control', 'no-cache');
		initHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
		let data = {uid: 1011}
		let body = "uid=${data.uid}"
		const init = {
		  method: 'POST',
		  credentials: 'include', // cookies
		  cache: 'no-cache ', // cookies
		  headers: initHeaders,
		  body
		}

		fetch("/problem/1",init)
		.then(res => res.text())
		.then(
			data => {
				this.setState({mytext:data})
			}
		)
		event.preventDefault();
	}
	render() {
		return (
		<form onSubmit={this.handleSubmit}>
			<label>
				问题1:
				{/* 通过value 设置input显示内容，通过onChange 监听 value的变化 */}
				<input type="text" name="question" value= {this.state.question} onChange={this.handleChange} />
			</label>
			<label>
				描述:
				<input type="text" name="description" value= {this.state.description} onChange={this.handleChange} />
			</label>
			<label>
				上报人:
				<input type="text" name="applyPerson" value= {this.state.applyPerson} onChange={this.handleChange} />
			</label>
			<input type="submit" value="提交" />
		</form>
		);
	}
}