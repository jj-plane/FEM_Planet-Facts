import React from 'react';

class Planet extends React.Component{
    render(){
        if(this.props.view === 'loading'){
            return (<p>Loading</p>)
        }

        else if(this.props.view === 'overview'){
            return(
                <img src={this.props.data.images.planet} alt='planet overview' />
            )
        }
        else if(this.props.view === 'internal'){
            return(
                <img src={this.props.data.images.internal} alt='planet interal structure' />
            )  
        }
        else if(this.props.view === 'surface'){
            return(
                <>
                <img src={this.props.data.images.planet} alt='planet overview' />
                <img className='surfaceImage' src={this.props.data.images.geology} alt='planet interal structure' />
                </>
            )  
        }
        else{
            return(
                <p>Something went wrong</p>
            )
        }
    }
}

export default Planet;