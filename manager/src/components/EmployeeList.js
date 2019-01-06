import _ from 'lodash';
import React, {
  Component
} from 'react';
import { 
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../state/actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }
  renderItem(employee) {
		return <ListItem employee={employee} />;
  }
  
  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={(employee, index) => index.toString()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employeeList, (val, uid) => {
      return { ...val, uid };
  });

  return { employees }
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
