function ViewSelector(props){
    return(
        <>
            <p id="overview" onClick={props.update}>Overview</p>
            <p id="internal" onClick={props.update}>Internal Stucture</p>
            <p id="surface" onClick={props.update}>Surface geology</p>
        </>
    )
}

export default ViewSelector;