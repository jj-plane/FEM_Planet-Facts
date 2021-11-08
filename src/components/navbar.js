import chevron from '../images/icon-chevron.svg';

function Navbar(props){
    return(
        <header>
        <h1>The Planets</h1>
        <input type='checkbox' id='navToggle' className='navToggle'></input>
        <nav>
          <ul className=''>
            <li id="0" onClick={props.navigate}><div className='navIcons mercuryIcon'></div><span>MERCURY</span><img className='chevron' alt='chevron' src={chevron} /></li>
            <li id="1" onClick={props.navigate}><div className='navIcons venusIcon'></div><span>VENUS</span><img className='chevron' alt='chevron' src={chevron} /></li>
            <li id="2" onClick={props.navigate}><div className='navIcons earthIcon'></div><span>EARTH</span><img className='chevron' alt='chevron' src={chevron} /></li>
            <li id="3" onClick={props.navigate}><div className='navIcons marsIcon'></div><span>MARS</span><img className='chevron' alt='chevron' src={chevron} /></li>
            <li id="4" onClick={props.navigate}><div className='navIcons jupiterIcon'></div><span>JUPITER</span><img className='chevron' alt='chevron' src={chevron} /></li>
            <li id="5" onClick={props.navigate}><div className='navIcons saturnIcon'></div><span>SATURN</span><img className='chevron' alt='chevron' src={chevron} /></li>
            <li id="6" onClick={props.navigate}><div className='navIcons uranusIcon'></div><span>URANUS</span><img className='chevron' alt='chevron' src={chevron} /></li>
            <li id="7" onClick={props.navigate}><div className='navIcons neptuneIcon'></div><span>NEPTUNE</span><img className='chevron' alt='chevron' src={chevron} /></li>
          </ul>
        </nav>
        <label htmlFor='navToggle' className='navToggleLabel'>
          <span></span>
        </label>
      </header>
    )
}

export default Navbar;