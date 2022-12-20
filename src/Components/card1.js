import React from 'react'

const Card1 = ({ title, messaje, imageurl }) => {


	return (

			<>
				<img className="carrousel-item__img" src={imageurl} alt="" />
				<div className="carrousel-item__details">
					<p className="carrousel-item__details--title">{title}</p>
					<p className="carrousel-item__details--subtitle">{messaje}</p>
				</div>
			</>

	)
}

export { Card1 };