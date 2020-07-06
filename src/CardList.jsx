import React from 'react'
import Card from './Card';

const CardList = ({robots}) => {
  /*
  if(true){
    throw new Error('nooo')
  }
  */
    const cardComponent = robots.map((user, id) => {
      return  (
        <Card 
            key={id}  
            {...user}
        />
      )
    })

    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList
