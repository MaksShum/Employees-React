import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Max", salary: 5000, increase: false, id: 1 },
        { name: "Masha", salary: 6000, increase: true, id: 2 },
        { name: "Sharon", salary: 7000, increase: false, id: 3 },
        { name: "Shushana", salary: 8000, increase: true, id: 4 },
      ],
    };
    this.maxId = 5;
  }
  onDelete = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter((item) => item.id !== id) };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
    
    console.log(this.maxId)
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList list={this.state.data} onDelete={this.onDelete} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
