import './employees-list.css';
import PropTypes from 'prop-types';
import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList({
  data, onDelete, onToggleProp,
}) {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        {...itemProps}
        key={id}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
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
  data: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleProp: PropTypes.func.isRequired,
};

export default EmployeesList;
