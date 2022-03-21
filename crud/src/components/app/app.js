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
          name: 'John S.', salary: 800, increase: false, rise: true, id: 1,
        },
        {
          name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2,
        },
        {
          name: 'Peter C.', salary: 2740, increase: false, rise: false, id: 3,
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
      rise: false,
    };
    this.setState({
      data: [...data, newItem],
    });
  };

  onToggleIncrease = (id) => {
    // this.setState(({ data }) => {
    //   const index = data.findIndex((elem) => elem.id === id);
    //   const old = data[index];
    //   const newItem = { ...old, increase: !old.increase };
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //   return {
    //     data: newArr,
    //   };
    // });
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {
            ...item, increase: !item.increase,
          };
        }
        return item;
      }),
    }));
  };

  onToggleRise = (id) => {
    console.log(this);
    console.log(`Rise this ${id}`);
  };

  render() {
    const { data } = this.state;
    const information = {
      numberEmployees: data.length,
    };
    return (
      <div className="app">
        <AppInfo information={information} />
        <SearchPanel />
        <EmployeesList
          data={data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
