import React from 'react';
import './App.css';
import Description from './components/description';
import FactBoxes from './components/factboxes';
import Planet from './components/planet';
import ViewSelector from './components/viewSelector';
import chevron from './images/icon-chevron.svg';

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
    console.log('navigation index: ',index)
    this.setState({
      currentSelection: this.state.data[index]
    })
    document.getElementById('navToggle').checked = false;
  }

  updateView(e){
    const view = e.target.id;
    this.setState({
      currentView : view.toString()
    })
  }


  render(){
    let factBoxes;
    let planet;
    let description;
    let viewSelector;
    if(!this.state.loaded){
      factBoxes = <FactBoxes rotation='loading' radius='loading' revolution='loading' temp='loading'></FactBoxes>
      planet = <Planet view='loading'></Planet>
      description = <Description view='loading'></Description>
      viewSelector = <ViewSelector></ViewSelector>
    }
    else{
      factBoxes = <FactBoxes revolution={this.state.currentSelection.revolution} rotation={this.state.currentSelection.rotation} radius={this.state.currentSelection.radius} temp={this.state.currentSelection.temperature}></FactBoxes>
      planet = <Planet className='main' view={this.state.currentView} data={this.state.currentSelection}></Planet>
      description = <Description className='' data={this.state.currentSelection} view={this.state.currentView}></Description>
      viewSelector = <ViewSelector className='viewSelector' update={this.updateView}></ViewSelector>
    }
    return(
      <>
      <div className='nav-container'>
          <header>
            <h1>The Planets</h1>
            <input type='checkbox' id='navToggle' className='navToggle'></input>
            <nav>
              <ul className=''>
                <li id="0" onClick={this.handleNavigation}><div className='navIcons mercuryIcon'></div><span>MERCURY</span><img className='chevron' alt='chevron' src={chevron} /></li>
                <li id="1" onClick={this.handleNavigation}><div className='navIcons venusIcon'></div><span>VENUS</span><img className='chevron' alt='chevron' src={chevron} /></li>
                <li id="2" onClick={this.handleNavigation}><div className='navIcons earthIcon'></div><span>EARTH</span><img className='chevron' alt='chevron' src={chevron} /></li>
                <li id="3" onClick={this.handleNavigation}><div className='navIcons marsIcon'></div><span>MARS</span><img className='chevron' alt='chevron' src={chevron} /></li>
                <li id="4" onClick={this.handleNavigation}><div className='navIcons jupiterIcon'></div><span>JUPITER</span><img className='chevron' alt='chevron' src={chevron} /></li>
                <li id="5" onClick={this.handleNavigation}><div className='navIcons saturnIcon'></div><span>SATURN</span><img className='chevron' alt='chevron' src={chevron} /></li>
                <li id="6" onClick={this.handleNavigation}><div className='navIcons uranusIcon'></div><span>URANUS</span><img className='chevron' alt='chevron' src={chevron} /></li>
                <li id="7" onClick={this.handleNavigation}><div className='navIcons neptuneIcon'></div><span>NEPTUNE</span><img className='chevron' alt='chevron' src={chevron} /></li>
              </ul>
            </nav>
            <label htmlFor='navToggle' className='navToggleLabel'>
              <span></span>
            </label>
          </header>
        </div>
      <div className='grid-container'>
        <div className='planet-container'>
          {planet}
        </div>
        <div className='description-container'>
          {description}
        </div>
        <div className='viewSelector-container'>
          {viewSelector}
        </div>
        <div className='factBoxes-container'>
          {factBoxes}
        </div>
      </div>
      </>
    )
  }
}

export default App;
