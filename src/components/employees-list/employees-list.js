
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({list,onDelete}) => {
    
    const elements = list.map(item => {
        const {id,...propsItem} = item
        return <EmployeesListItem key={id}
         {...propsItem}
         onDelete={() => onDelete(id)} />
    })
    
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;