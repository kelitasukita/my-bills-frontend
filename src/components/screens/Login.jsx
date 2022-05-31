import "./../../styles/login.scss";
import { FaFacebookF } from "react-icons/fa";
import { GoogleIcon } from "../../Icons/GoogleIcon";
import { GoogleLogin } from "react-google-login";
import { NormalLogin } from "../Login/NormalLogin";

const clientId =
  "685508486820-8nvol3gsgc43jj55bqscipokc3vvp8eu.apps.googleusercontent.com";

export function Login(props) {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! JWT: ", res.tokenId);
    console.log("LOGIN SUCCESS! User: ", res.profileObj);
    props.updateUser(res.profileObj);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
    props.updateUser(false);
  };

  const loginFacebook = () => {
    props.updateUser({
      name: "Anonimo",
      imageUrl:
        "https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/anonymous-1024.png",
    });
  };

  return (
    <div className="main">
      <h1>my.bill$</h1>
      <div className="login">
        <h1>Choose your login</h1>

        <button className="login-button-facebook" onClick={loginFacebook}>
          <span>
            <FaFacebookF />
            Login with Facebook
          </span>
        </button>

        <GoogleLogin
          clientId={clientId}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          render={(renderProps) => (
            <button
              className="login-button-google"
              onClick={renderProps.onClick}
            >
              <span>
                <GoogleIcon />
                Login with Google
              </span>
            </button>
          )}
        />

        <NormalLogin />
      </div>
    </div>
  );
}
