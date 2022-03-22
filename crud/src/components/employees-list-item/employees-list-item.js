import { Component } from 'react';
import './employees-list-item.css';
import PropTypes from 'prop-types';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salaryValue: `${props.salary}$`,
    };
  }

  changeSalary = (e) => {
    const { changeSalary, id } = this.props;
    const salaryValue = e.target.value;
    this.setState({
      salaryValue,
    });
    changeSalary(id, salaryValue);
  };

  render() {
    const { salaryValue } = this.state;
    const {
      name, onDelete, onToggleProp, increase, rise,
    } = this.props;
    let classNames = 'list-group-item d-flex justify-content-between';

    if (increase) {
      classNames += ' increase';
    }

    if (rise) {
      classNames += ' like';
    }

    return (
      <li className={classNames}>
        <span
          className="list-group-item-label"
          onClick={onToggleProp}
          role="button"
          aria-hidden="true"
          tabIndex={0}
          data-toggle="rise"
        >
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          value={`${salaryValue}`}
          onChange={this.changeSalary}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={onToggleProp}
            data-toggle="increase"
          >
            <i className="fas fa-cookie" />
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}
          >
            <i className="fas fa-trash" />
          </button>
          <i className="fas fa-star" />
        </div>
      </li>
    );
  }
}

EmployeesListItem.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleProp: PropTypes.func.isRequired,
  increase: PropTypes.bool.isRequired,
  rise: PropTypes.bool.isRequired,
  changeSalary: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default EmployeesListItem;
