import "./TodosItem.css" 
const TodosItem = (props) => {
    const {id, title, completed} = props.todosObject;
    
    return(
    <div className="card">
        <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li style={{color:completed?"green":"red"}}>{completed.toString()}</li>
        </ul>
    </div>
)}

export default TodosItem;