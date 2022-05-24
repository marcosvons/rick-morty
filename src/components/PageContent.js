import React from 'react'

function PageContent(props){
    return(
        <div id='card'>
            <img src={props.cardData.image} alt="imagen de personaje"></img>
            <h2>{props.cardData.name}</h2>
            <p>{props.cardData.status} - {props.cardData.species}</p>
            <p>{props.cardData.origin.name}</p>
        </div>
    );
}

export default PageContent;

