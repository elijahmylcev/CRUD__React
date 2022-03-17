import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {
  return (
    <div className="app">
      <AppInfo />
      <SearchPanel />
      <EmployeesList />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
