import './employees-list-item.css';
import PropTypes from 'prop-types';

function EmployeesListItem({ ...props }) {
  let classNames = 'list-group-item d-flex justify-content-between';
  if (props.increase) {
    classNames += ' increase';
  }

  return (
    <li className={classNames}>
      <span className="list-group-item-label">
        {' '}
        {props.name}
        {' '}
      </span>
      <input type="text" className="list-group-item-input" defaultValue={`${props.salary}$`} />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
        >
          <i className="fas fa-cookie" />
        </button>

        <button
          type="button"
          className="btn-trash btn-sm "
        >
          <i className="fas fa-trash" />
        </button>
        <i className="fas fa-star" />
      </div>
    </li>
  );
}

EmployeesListItem.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  increase: PropTypes.bool.isRequired,
};

export default EmployeesListItem;
