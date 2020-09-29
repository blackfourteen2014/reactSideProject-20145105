import React, { Component } from 'react';

class Login extends Component{
    render() {
      return (
        <article>
            <p>아이디 : <input type="text" name="ID" placeholder="ID"></input></p>
            <p>패스워드 : <input type="password" name="password"></input></p>
        </article>
      );
    }
}

export default Login;