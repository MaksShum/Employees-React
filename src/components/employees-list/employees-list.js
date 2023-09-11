
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({list,onDelete,onToggleProp}) => {
    
    const elements = list.map(item => {
        const {id,...propsItem} = item
        return <EmployeesListItem key={id}
         {...propsItem}
         onDelete={() => onDelete(id)}
         onToggleProp={(e) => onToggleProp(id,e.currentTarget.getAttribute('data-prop'))}
         />
    })
    
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;