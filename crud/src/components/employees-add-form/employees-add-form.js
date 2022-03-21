import { Component } from 'react';
import PropTypes from 'prop-types';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addItem = (event) => {
    event.preventDefault();
    const { onAdd } = this.props;
    const { name, salary } = this.state;
    if (name.length >= 3 && salary > 100) {
      const id = Date.now();
      onAdd(name, salary, id);
      this.setState({
        name: '',
        salary: '',
      });
    }
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          className="add-form d-flex"
          onSubmit={this.addItem}
        >

          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button
            type="submit"
            className="btn btn-outline-light"
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

EmployeesAddForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default EmployeesAddForm;
