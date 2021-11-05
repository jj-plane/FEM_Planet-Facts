import sourceIcon from '../images/icon-source.svg'

function Description(props){
    if(props.view === 'overview'){
        return(
            <>
                <h2>{props.data.name}</h2>
                <p>{props.data.overview.content}</p>
                <a className='sourceLink' rel='noreferrer' target='_blank' href={props.data.overview.source}>Source : <span>Wikipedia</span><img alt='source icon' src={sourceIcon} /></a>
            </>
        )
    }
    else if(props.view === 'internal'){
        return(
            <>
                <h2>{props.data.name}</h2>
                <p>{props.data.structure.content}</p>
                <a className='sourceLink' rel='noreferrer' target='_blank' href={props.data.structure.source}>Source : <span>Wikipedia</span><img alt='source icon' src={sourceIcon} /></a>
            </>
        )
    }
    else if(props.view === 'surface'){
        return(
            <>
                <h2>{props.data.name}</h2>
                <p>{props.data.geology.content}</p>
                <a className='sourceLink' rel='noreferrer' target='_blank' href={props.data.geology.source}>Source : <span>Wikipedia</span><img alt='source icon' src={sourceIcon} /></a>
            </>
        )
    }
    else{
        return(
            <p>loading</p>
        )
    }
}

export default Description;