import React, { Component } from 'react';

class LoginSign extends Component{
    render() {
      return (
        <article>
            <h3>회원가입</h3>
            <form action="/create_process" method="post" onSubmit={function(e){
            e.preventDefault();
            console.log(e.target.ID.value,e.target.NickName.value,e.target.desc.value);
            this.props.onSubmit(
              e.target.ID.value,
              e.target.NickName.value,
              e.target.desc.value
            );
          }.bind(this)}>
            <p>아이디 : <input type="text" name="ID" placeholder="ID"></input></p>
            <p>패스워드 : <input type="password" name="password"></input></p>
            <p>별명 : <input type="text" name="NickName" placeholder="NickName"></input></p>
            <p>하고 싶은 말 : <textarea name="desc" placeholder="free writing..."></textarea></p>
            <p><input type="submit" value="등록"></input></p>
            </form>
        </article>
      );
    }
}

export default LoginSign;