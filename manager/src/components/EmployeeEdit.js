import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-native';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
	state = { showModal: false };

	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			// better to create a separate action to update all the values in one-goe (in prod)
			this.props.employeeUpdate({ prop, value });
		});
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;

		this.props.employeeSave({
			name,
			phone,
			shift,
			uid: this.props.employee.uid
		});
	}

	onTextButtonPress() {
		const { phone, shift } = this.props;
		Communications.text(phone, `Your upcoming shift is on ${shift}.`);
	}

	onFireButtonPress() {
		this.showModal();
	}

	deleteEmployee() {
		const { uid } = this.props.employee;
		this.showModal(false);
		this.props.employeeDelete(uid);
	}

	showModal(show = true) {
		this.setState(() => ({ showModal: show }));
	}

	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onTextButtonPress.bind(this)}>
						Text Schedule
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onFireButtonPress.bind(this)}>
						Fire Employee
					</Button>
				</CardSection>
				<Confirm
					visible={this.state.showModal}
					onAccept={this.deleteEmployee.bind(this)}
					onDecline={() => {
						this.showModal(false);
					}}
				>
					Are you sure you want to delete this?
				</Confirm>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
};

export default connect(
	mapStateToProps,
	{ employeeUpdate, employeeSave, employeeDelete }
)(EmployeeEdit);
