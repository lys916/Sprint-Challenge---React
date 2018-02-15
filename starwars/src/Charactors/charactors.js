import React from 'react';
import './charactors.css';
import {Link} from 'react-router-dom';

function Chars(props) {
	console.log(props);
	let char = props.location.char;
	return (
		<div className="char">
			<div className="char-img">
				<img src={`../img/${char.name.replace(/\s+/g, '')}.jpg`} />
			</div>

			<div className="char-info">
				<div className="name">{char.name}</div>

				<div className="info">
					<span>&#9733; Birth Year - {char.birth_year}</span>
					<span>&#9733; Eye Color - {char.eye_color}</span>
					<span>&#9733; Gender - {char.gender}</span>
					<span>&#9733; Hair Color - {char.hair_color}</span>
					<span>&#9733; Height - {char.height}</span>
					<span>&#9733; Mass - {char.mass}</span>

				</div>
				<div className="assets-name">
					 <Link to={ {pathname: `/char/:${char.name}/:starships`, starships: char.starships }}><li >Starships</li></Link>
				</div>
			</div>
		</div>
	);
}

export default Chars;


