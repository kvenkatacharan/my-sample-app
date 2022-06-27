function Login(props) {
  return (
    <div>
      <button onClick={() => props.onClick(true)}>Login</button>
    </div>
  );
}

export default Login;
