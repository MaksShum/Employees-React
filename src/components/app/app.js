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
        { name: "Max", salary: 5000, increase: false, id: 1,like: true },
        { name: "Masha", salary: 6000, increase: true, id: 2,like: false },
        { name: "Sharon", salary: 7000, increase: false, id: 3,like: false },
        { name: "Shushana", salary: 8000, increase: true, id: 4,like: false },
      ],
      term: '',
      filter: 'all'
    };
    this.maxId = 5;
  }
  
  

  onToggleProp = (id,prop) => {
    this.setState(({data}) => {
      return {data : data.map(item => item.id === id ? {...item,[prop] : !item[prop]} : item)}
    })
  };

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
      like: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
    
  };
  onSearchEmp = (items,term) => {
    if(term.length === 0){
      return items
    }
      return items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
  } 
  onUpdate = (term) => {
    this.setState({term})
  }
  onFilter = (items,filter) => {
    switch(filter){
      case 'like' :
        return items.filter(item => item.like)
      case 'more1000':
        return items.filter(item => item.salary >= 5000)
      default : 
      return items
    }  
  }
  onChangeFilter = (filter) => {
    this.setState({filter})
  }

  render() {
    const {data,term,filter} = this.state
    const getIncrease = this.state.data.filter(item => item.increase).length;
    const allEmployes = this.state.data.length ;
    const visibleData = this.onFilter(this.onSearchEmp(data,term),filter)

      return (
      <div className="app">
        <AppInfo getIncrease={getIncrease}
        allEmployes={allEmployes} />

        <div className="search-panel">
          <SearchPanel 
          onUpdate={this.onUpdate}
          
          />
          <AppFilter 
          onChangeFilter={this.onChangeFilter}
          filter={filter}
          />
        </div>

        <EmployeesList 
        list={visibleData}
        onDelete={this.onDelete}
        onToggleProp={this.onToggleProp}
        
         />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
