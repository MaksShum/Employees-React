import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const employeesAll = [
   { name : 'Max',salary : 5000,increase : false},
   { name : 'Masha',salary : 6000,increase : true},
   { name : 'Sharon',salary : 7000,increase : false},
   { name : 'Shushana',salary : 8000,increase : true}
]

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList list={employeesAll}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
