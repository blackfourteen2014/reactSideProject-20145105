import React, { Component } from 'react';
import Login from './components/Login'
import LoginSign from './components/LoginSign'
import LoginShow from './components/LoginShow'
import Control from './components/Control'
import './App.css';

class App extends Component {
  constructor(props){ //가장 먼저 실행되서 초기화를 담당
    super(props);
    this.state = {
      mode:'welcome',
      contents:[]
    }
  }

  render(){
    //var _id,_nickname,_desc = null;
    var _article,_control = null;
    if(this.state.mode === 'welcome'){
      _article = <Login></Login>;
      _control = <Control 
      onChangeMode={function(_mode){
        this.setState({
          mode:_mode
        });
      }.bind(this)}></Control>;
    }else if(this.state.mode === 'create'){
      _article = <LoginSign 
        onSubmit={function(_id,_nickname,_desc){
          var newContents = Array.from(this.state.contents);
          newContents.push({id:_id,nickname:_nickname,desc:_desc});
          this.setState({
            contents:newContents,
            mode : 'welcome'
          });
        }.bind(this)}></LoginSign>;
    }else if(this.state.mode === 'show'){
      _article = <LoginShow></LoginShow>;
    }
    return (
      <div className="App">
        <header>
          <h1>React-SideProject!</h1>
        </header>
        {_article}
        {_control}
      </div>
    );
  }
}

export default App;
