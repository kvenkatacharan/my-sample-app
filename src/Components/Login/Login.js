import { useDispatch } from "react-redux";
import {login} from '../../features/login';

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(login())}>Login</button>
    </div>
  );
}

export default Login;
