import {useState, useEffect} from "react"
import axios from "axios"
import TodosItem from "../TodosItem/TodosItem"
import styles from "./Todos.module.css"

const Todos = () => {
    const [todosList, setTodosList] = useState([])
    const [limit, setLimit] = useState(5)
    const url = "https://jsonplaceholder.typicode.com/todos"
    
    

    const fetchData = async () => {
        axios.get(url, {
            params: { _limit:limit }
        }).then(response => setTodosList(response.data))
        }

    useEffect(()=>{
        fetchData();
    }, [limit])

    const loadTodos = () => {
        setLimit(limit+5)
    }

    
    return (
        <div className={styles.bodyFormat}>
            <h1 className={styles.heading}>Todos</h1>
            <div className={styles.innerBox}>
                {
                todosList.map(todosObject => <TodosItem todosObject = {todosObject} />)
                }
                <div>
                {
                todosList.length >= limit && <button className={styles.button} onClick={loadTodos}>load more</button> 
                }
                </div>
            </div>
        </div>
      );

}

export default Todos;