import React, { Component } from 'react';

class Control extends Component{
    render() {
      return (
        <div className = "Login">
          <p><input type="submit" value="login" 
            onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('show');
          }.bind(this)}></input></p>
          <p><input type="submit" value="등록" 
            onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('create');
          }.bind(this)}></input></p>
        </div>
      );
    }
  }

  export default Control;