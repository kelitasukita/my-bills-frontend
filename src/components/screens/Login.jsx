import "./../../styles/login.scss";

export function Login() {
  return (
    <div className="main">
      <h1>my.bill$</h1>
      <div className="login">
        <h1>Choose your login</h1>

        <button className="login-button-google">Login with Google</button>

        <button className="login-button-facebook">Login with Facebook</button>

        <span className="separator">
          <div></div>
          <div>or</div>
          <div></div>
        </span>
        <div className="form-input">
          <label htmlFor="email">Your email</label>
          <input type="text" name="email" />
        </div>
        <div className="form-input">
          <label htmlFor="password">Your password</label>
          <input type="password" name="password" />
        </div>
        <button className="submit">Login</button>
      </div>
    </div>
  );
}
