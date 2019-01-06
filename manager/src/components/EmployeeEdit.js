import React, {
  Component
} from 'react';
import {
  Card,
  CardSection,
  Button,
  ConfirmModal
} from './common';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import {
  employeeUpdate,
  employeeSave, 
  employeeDelete
} from '../state/actions';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(
      this.props.employee,
      (value, prop) => {
        this.props.employeeUpdate({
          prop,
          value
        });
      }
    );
  }

  onButtonPress() {
    const {
      name,
      phone,
      shift
    } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }

  onTextPress() {
    const {
      name,
      phone,
      shift
    } = this.props;

    Communications.textWithoutEncoding(
      phone,
      `Hi ${name}, your upcoming shift is on ${shift}`
    );
  }

  onAccept() {
      const { uid } = this.props.employee;
    this.props.employeeDelete({ uid })
  }

  onDecline() {
    this.setState({ showModal: false })
  }

  render() {
    const { name } = this.props;
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(
              this
            )}
          >
            Save Update
          </Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={this.onTextPress.bind(
              this
            )}
          >
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={() =>
              this.setState({
                showModal: !this.state
                  .showModal
              })
            }
          >
            {`Fire ${name}`}
          </Button>
        </CardSection>

        <ConfirmModal
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          {`Please Confirm you want to fire ${name}`}
        </ConfirmModal>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {
    name,
    phone,
    shift
  } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeSave, employeeDelete }
)(EmployeeEdit);
