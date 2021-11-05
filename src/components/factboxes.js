function FactBoxes(props){
    return(
        
        <div className='factBoxes'>
            <div>
                <p className='factLabel'>Revolution</p>
                <p className='fact1 factData'>{props.revolution}</p>
            </div>
            <div>
                <p className='factLabel'>Rotation</p>
                <p className='fact2 factData'>{props.rotation}</p>
            </div>
            <div>
                <p className='factLabel'>Radius</p>
                <p className='fact3 factData'>{props.radius}</p>
            </div>
            <div>
                <p className='factLabel'>Temperature</p>
                <p className='fact4 factData'>{props.temp}</p>
            </div>
        </div>
    )
}

export default FactBoxes;