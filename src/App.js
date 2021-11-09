import React from 'react';
import './App.css';
import Description from './components/description';
import FactBoxes from './components/factboxes';
import Planet from './components/planet';
import ViewSelector from './components/viewSelector';
import Navbar from './components/navbar';

import './styles/main.css'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [],
      loaded: false,
      currentSelection: {},
      currentView: ''
    }

    this.handleNavigation = this.handleNavigation.bind(this);
    this.updateView = this.updateView.bind(this);
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => {
      if(!response.ok){
        throw new Error('Something went wrong')
      }
      return response.json();
    }).then(data => {
      console.log(data);
      this.setState({
        data: data,
        currentSelection: data[0],
        currentView: 'overview',
        loaded: true
      })
    }).catch(error => console.log(error));
  }

  handleNavigation(e){
    const index = parseInt(e.currentTarget.id);
    this.setState({
      currentSelection: this.state.data[index],
      currentView: 'overview'
    })
    document.getElementById('navToggle').checked = false;
  }

  updateView(e){
    const view = e.currentTarget.id;
    this.setState({
      currentView : view.toString()
    })
  }


  render(){
    if(!this.state.loaded){
      return(
        <p>Loading</p>
      )
    }
    else{
      return(
        <>
        <div className='nav-container'>
          <Navbar navigate={this.handleNavigation}></Navbar>
        </div>
        <div className='grid-container'>
          <div className='planet-container'>
            <Planet className='main' view={this.state.currentView} data={this.state.currentSelection}></Planet>
          </div>
          <div className='description-container'>
            <Description className='' data={this.state.currentSelection} view={this.state.currentView}></Description>
          </div>
          <div className='viewSelector-container'>
            <ViewSelector className='viewSelector' currentPlanet={this.state.currentSelection} currentView={this.state.currentView} update={this.updateView}></ViewSelector>
          </div>
          <div className='factBoxes-container'>
            <FactBoxes revolution={this.state.currentSelection.revolution} rotation={this.state.currentSelection.rotation} radius={this.state.currentSelection.radius} temp={this.state.currentSelection.temperature}></FactBoxes>
          </div>
        </div>
        </>
      )
    }
  }
}

export default App;
