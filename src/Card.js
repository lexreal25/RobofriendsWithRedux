import React from 'react'

const Card = ({name, email,ephissians, id}) => {
    return (
        <div className="bg-light-green tc dib br3 pa3 ma1 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{ephissians}</p>
            </div>
        </div>
    )
}

export default Card;