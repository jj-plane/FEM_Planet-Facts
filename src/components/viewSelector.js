function ViewSelector(props){
    const currentView = props.currentView;
    return(
        <>
            <div id="overview" className={currentView === 'overview' ? `active ${props.currentPlanet.name}`: ''} onClick={props.update}>
                <span>01</span>
                <p >Overview</p>
            </div>
            <div id="internal" className={currentView === 'internal' ? `active ${props.currentPlanet.name}`: ''} onClick={props.update}>
                <span>02</span>
                <p>Internal Stucture</p>
            </div>
            <div id="surface" className={currentView === 'surface' ? `active ${props.currentPlanet.name}`: ''} onClick={props.update}>
                <span>03</span>
                <p>Surface geology</p>
            </div>
        </>
    )
}

export default ViewSelector;