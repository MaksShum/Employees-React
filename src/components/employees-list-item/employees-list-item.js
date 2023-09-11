
import './employees-list-item.css';

const EmployeesListItem = (props) => {

        const {name,salary,onDelete,onToggleProp,like,increase} = props
        let addClass = `list-group-item d-flex justify-content-between ${like ? 'like' : ''} ${increase ? 'increase' : ''}`
    
    return (
        <li className={addClass}>
            <span className="list-group-item-label"
                    data-prop="like"
                    onClick={onToggleProp}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button data-prop="increase" onClick={onToggleProp} type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}


export default EmployeesListItem;