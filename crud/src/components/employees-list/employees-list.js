import './employees-list.css';
import PropTypes from 'prop-types';
import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList({ data }) {
  const elements = data.map((item) => (
    <EmployeesListItem
      name={item.name}
      salary={item.salary}
      key={item.salary}
    />
  ));

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
}

EmployeesList.propTypes = {
  data: PropTypes.arrayOf.isRequired,
};

export default EmployeesList;
