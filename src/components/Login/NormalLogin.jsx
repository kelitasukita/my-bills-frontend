export function NormalLogin() {
  return (
    <>
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
    </>
  );
}
