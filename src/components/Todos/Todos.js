import {useState, useEffect} from "react"
import TodosItem from "../TodosItem/TodosItem"
import "./Todos.css"

const Todos = () => {
    const [todosList, setTodosList] = useState([])
    const url = "https://jsonplaceholder.typicode.com/todos"

    const fetchData = async () => {
        const response = await fetch(url);
      const dataArr = await response.json();
      setTodosList(dataArr);
        }

    useEffect(()=>{
        fetchData();
    }, [])

    return (
        <div className='body-format'>
            <h1 className="heading">Todos</h1>
            <div className="inner-box">
                {
                todosList.map(todosObject => <TodosItem todosObject = {todosObject} />)
                }
            </div>
        </div>
      );

}

export default Todos;