import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-static'
import Routes from 'react-static-routes'
import styled, {  keyframes } from 'styled-components';
import { ApolloProvider } from 'react-apollo'
import client from './connector/apollo'


import Topper from './Components/Topper/Topper'
import Logo from './Components/Logo/Logo'
import Nav from './Components/Nav/Navigation'
import Footer from './Components/Footer/Footer'
import MenuButton from './Components/FlyoutMenu/MenuButton';
import Menu from './Components/FlyoutMenu/Menu';

import SingleBase from './Components/Adjustable/SingleBase';
import SingleMattress from './Components/SingleMattress/SingleMattress';

import Sealy from './Components/MattressList/Sealy';
import Tempur from './Components/MattressList/Tempur';
import Stearns from './Components/MattressList/Stearns';



const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 15px;
  transition: all .25s ease-in;
  @media (min-width: 768px) { width: 750px; padding-left: 10px; padding-right: 10px; }
  @media (min-width: 992px) { width: 970px; padding-left: 5px; padding-right: 5px; }
  @media (min-width: 1200px) { width: 1170px; }
  @media (min-width: 1300px) { width: 1270px; }
  @media (min-width: 1400px) { width: 1370px; }
`;
const HomeFadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
const MainWrapper = styled.div`
animation-duration: .5s;
animation-name: ${HomeFadeIn};
animation-fill-mode: both;
`;

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  };
  
  handleMouseDown(e) {
    this.toggleMenu();
      e.stopPropagation();
    };
  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  };

  render () {
    return (
      <ApolloProvider client={client}>
        <Router>
          <MainWrapper>
            <Topper/>
            <MenuButton handleMouseDown={this.handleMouseDown}/>
            <Menu handleMouseDown={this.handleMouseDown}
                  menuVisibility={this.state.visible}/>
            <Nav/>
            <Logo/>
            <Container>
              <Router>
                <Switch>
                  <Route path="/brands/sealy" component={Sealy} exact/>
                  <Route path="/brands/stearns" component={Stearns} exact/>
                  <Route path="/brands/tempurpedic" component={Tempur} exact/>
                  <Route path="/adjustable/:uri" component={SingleBase}/>
                  <Route path="/brands/tempurpedic/:uri" component={SingleMattress}/>
                  <Route path="/brands/sealy/:uri" component={SingleMattress}/>
                  <Route path="/brands/stearns/:uri" component={SingleMattress}/> 
                  <Routes/>
                </Switch>
              </Router>
            </Container>
            <Footer/>
          </MainWrapper>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
