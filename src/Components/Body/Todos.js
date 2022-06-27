import axios from "axios";
import { useEffect, useState } from "react";
import dash from "lodash";
import { useSelector } from "react-redux";
const pageSize = 10;
function Todos() {
  const login = useSelector(state=> state.login.value.loggedIn);
  const [todos, setTD] = useState([]);
  const [posts, setPosts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const pageCount = todos ? Math.ceil(todos.length / pageSize) : 0;
  const pages = dash.range(1, pageCount + 1);
  const getTodos = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTD(res.data);
        setPosts(dash(res.data).slice(0).take(pageSize).value());
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  const setPagination= (page)=>{
    setPageNo(page);
    var posts = dash(todos).slice((page-1)*pageSize).take(pageSize).value();
    setPosts(posts);
  }
  useEffect(() => getTodos, []);
  return (<div className="body">
    {login ? <div className="todo">
      <table className={"table"}style={{ border: "2px solid black" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            const { id, title, completed } = post;
            return (
              <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                  {completed ? (
                    <button
                      style={{ backgroundColor: "green", width: "150px" }}
                    >
                      Completed
                    </button>
                  ) : (
                    <button style={{ backgroundColor: "red", width: "150px" }}>
                      Pending
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <nav className="pagination">
        <ul>
          {pages.map((page) => (
            <li className="page-link">
              <button className ={(pageNo===page ? "active-page" : "page")}onClick={()=>setPagination(page)}>{page}</button>
            </li>
          ))}
        </ul>
      </nav>
      </div> : "not logged in"}
    </div>
  );
}

export default Todos;
