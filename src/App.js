import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import ThirdPersonShooter from "./components/ThirdPersonShooter";
import RealTimeStrategy from "./components/RealTimeStrategy";
import OpenWorld from "./components/OpenWorld";
import BattleArena from "./components/BattleArena";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import FirstPersonShooter from "./components/FirstPersonShooter";
import BattleRoyale from "./components/BattleRoyale";
import GamePage from "./components/GamePage";
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component
{
  constructor(props){
    super(props);

    this.handleSignInSuccessfully = this.handleSignInSuccessfully.bind(this);
    this.handleSignout = this.handleSignout.bind(this);

    this.state = {
      status: "NOT_LOGGED_IN"
    }
  }

  handleSignInSuccessfully(){
    this.setState({
      status : "LOGGED_IN"
    })
  }

  handleSignout(){
    this.setState({
      status : "NOT_LOGGED_IN"
    })
  }

  render(){
    return (
      <div className="page-container">

        <Router>
        <Header loggedInStatus={this.state.status} handleLogout={this.handleSignout}/>
          <div className="content-wrap">
            <Route path="/" exact
            render = {props => (
              <Card {...props} loggedInStatus={this.state.status} />
            )}
             />
            <Route path="/home" render = {props => (
              <Card {...props} loggedInStatus={this.state.status} />
            )} />
            <Route path="/tps" render = {props => (
              <ThirdPersonShooter {...props} loggedInStatus={this.state.status} />
            )} />
            <Route path="/gamepage" render = {props => (
              <GamePage {...props} loggedInStatus={this.state.status} />
            )} />
            <Route path="/rts" render = {props => (
              <RealTimeStrategy {...props} loggedInStatus={this.state.status} />
            )} />
            <Route path="/openworld" render = {props => (
              <OpenWorld {...props} loggedInStatus={this.state.status} />
            )} />
            <Route path="/battlearena" render = {props => (
              <BattleArena {...props} loggedInStatus={this.state.status} />
            )} />
            <Route path='/sign-in' render = {props => (
              <SignIn {...props} loggedInStatus={this.state.status}
              handleSuccessfulLogin={this.handleSignInSuccessfully}/>
            )}/>
            <Route path="/sign-up" render = {props => (
              <SignUp {...props} loggedInStatus={this.state.status} />
            )}/>
            <Route path="/fps" render = {props => (
              <FirstPersonShooter {...props} loggedInStatus={this.state.status} />
            )} />
            <Route path="/battleroyale" render = {props => (
              <BattleRoyale {...props} loggedInStatus={this.state.status} />
            )} />
          </div>
        </Router>
        <Footer loggedInStatus={this.state.status} />
      </div>
    );
  }
}

export default App;
