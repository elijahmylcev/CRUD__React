import './employees-list.css';
import PropTypes from 'prop-types';
import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList({ data }) {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        {...itemProps}
        key={id}
      />
    );
  });

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
