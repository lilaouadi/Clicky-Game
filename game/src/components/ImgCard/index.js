import React from 'react';


const ImgCard = props => {
    return (
        <div>
            <img alt="flowers"
                onClick={() => props.handleClick(props.id)}
                style = {{width: "100px", height: "100px"}}
                src={props.image}
            />
        </div>
    );
};


export default ImgCard;