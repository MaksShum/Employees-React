import "./app-filter.css";

const AppFilter = (props) => {
    
    const buttons = [
        {name: 'all', text: 'Все сотрудники' },
        {name: 'like', text: 'На повышение' },
        {name: 'more1000', text: 'З/П больше 5000$' }
    ].map(({name,text}) => {
        const active = props.filter === name
        const clazz = active ? 'btn btn-light' : 'btn btn-outline-light'
        return <button type="button"
        key={name}
        className={clazz}
        onClick={() => props.onChangeFilter(name)}
        >
        {text}
        </button>
    })
    return (
        <div className="btn-group">
            {buttons}   
        </div>
    )
}

export default AppFilter;