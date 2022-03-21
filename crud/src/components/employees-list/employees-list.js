import './employees-list.css';
import PropTypes from 'prop-types';
import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList({
  data, onDelete, onToggleIncrease, onToggleRise,
}) {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        {...itemProps}
        key={id}
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleRise={() => onToggleRise(id)}
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
  onToggleIncrease: PropTypes.func.isRequired,
  onToggleRise: PropTypes.func.isRequired,
};

export default EmployeesList;
