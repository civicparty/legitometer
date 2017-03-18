import React from 'react';
import {GoogleLogin} from 'react-google-login-component';

class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }

  render () {
    return (
      <div>
        {/*can't have client_id/secret on client side...must involve server somehow...*/}
        <p>google login</p>
        <p>NOT LIKE THIS:</p>
        <GoogleLogin socialId="CLIENT_ID"
                     class="google-login"
                     scope="profile"
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
      </div>
    );
  }

}

export default Login;
