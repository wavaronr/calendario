import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email);
    console.log(password);
    navigate('/Calendario', { replace: true });
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '70vh' }}
    >
      <div className="card" style={{ width: '25rem' }} key={'card-Login'}>
        <div class="card-body" key={'card-body-Login'}>
          <form onSubmit={submitHandler}>
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className="form-control m-1"
                id="floatingInput"
                placeholder="name@example.com"
                key={'input-email-Login'}
              ></input>
              <label for="floatingInput" key={'lebel-Login'}>
                Usuario
              </label>
            </div>
            <div className="form-floating" key={'form-floating-Login'}>
              <input
                type="password"
                name="password"
                className="form-control m-1"
                id="floatingPassword"
                placeholder="Password"
                key={'input-pasword-Login'}
              ></input>
              <label for="floatingPassword">Password</label>
            </div>
            <button className="btn btn-outline-secondary m-1" type="submit">
              {' '}
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
