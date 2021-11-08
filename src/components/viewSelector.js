function ViewSelector(props){
    const currentView = props.currentView;
    console.log(props);
    return(
        <>
            <p id="overview" className={currentView === 'overview' ? `active ${props.currentPlanet.name}`: ''} onClick={props.update}>Overview</p>
            <p id="internal" className={currentView === 'internal' ? `active ${props.currentPlanet.name}`: ''} onClick={props.update}>Internal Stucture</p>
            <p id="surface" className={currentView === 'surface' ? `active ${props.currentPlanet.name}`: ''} onClick={props.update}>Surface geology</p>
        </>
    )
}

export default ViewSelector;