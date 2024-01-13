function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '70vh' }}
    >
      <div className="card" style={{ width: '25rem' }} key={'cardLogin'}>
        <div class="card-body">
          <div class="form-floating mb-3">
            <input
              type="email"
              className="form-control m-1"
              id="floatingInput"
              placeholder="name@example.com"
            ></input>
            <label for="floatingInput">Usuario</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control m-1"
              id="floatingPassword"
              placeholder="Password"
            ></input>
            <label for="floatingPassword">Password</label>
          </div>
          <button className="btn btn-primary m-1"> Ingresar</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
