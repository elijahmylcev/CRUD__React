import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
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
      term: '',
      filter: 'all',
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

  onToggleProp = (id, prop) => {
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
            ...item, [prop]: !item[prop],
          };
        }
        return item;
      }),
    }));
  };

  searchEmp = () => {
    const { data, term } = this.state;
    if (term.length === 0) {
      return data;
    }
    return data.filter((item) => item.name.indexOf(term) > -1);
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items) => {
    const { filter } = this.state;
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise);
      case 'moreThen1000':
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  changeSalary = (id, changedSalary) => {
    this.setState(({ data }) => {
      data.map((element) => {
        if (element.id !== id) {
          return element;
        }
        element.salary = Number(changedSalary.slice(0, -1));
        return element;
      });
    });
  };

  render() {
    const { data, filter } = this.state;

    // Rise up employees
    const riseUpEmployees = data.filter((item) => item.increase);

    const information = {
      numberEmployees: data.length,
      riseUpEmployees: riseUpEmployees.length,
    };
    // Комбинированная фильтрация
    const termData = this.searchEmp();
    const visibleData = this.filterPost(termData);
    return (
      <div className="app">
        <AppInfo information={information} />
        <SearchPanel onUpdateSearch={this.onUpdateSearch} />
        <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          changeSalary={this.changeSalary}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
