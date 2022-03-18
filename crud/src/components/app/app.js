import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {
  const data = [
    { name: 'John S.', salary: 800 },
    { name: 'Alex M.', salary: 3000 },
    { name: 'Peter C.', salary: 2740 },
  ];

  return (
    <div className="app">
      <AppInfo />
      <SearchPanel />
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
