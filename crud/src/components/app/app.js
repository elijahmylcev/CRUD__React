import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: 'John S.', salary: 800, increase: false, id: 1,
        },
        {
          name: 'Alex M.', salary: 3000, increase: true, id: 2,
        },
        {
          name: 'Peter C.', salary: 2740, increase: false, id: 3,
        },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      // Следуя принципу иммутабельности

      // const index = data.findIndex((element) => element.id === +id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];
      data: data.filter((item) => item.id !== id),
    }));
  };

  addItem = (name, salary, id) => {
    const { data } = this.state;
    // because type of salary is string
    const newItem = {
      name,
      salary: parseInt(salary, 10),
      id,
      increase: false,
    };
    this.setState({
      data: [...data, newItem],
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo />
        <SearchPanel />
        <EmployeesList
          data={data}
          onDelete={this.deleteItem}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
