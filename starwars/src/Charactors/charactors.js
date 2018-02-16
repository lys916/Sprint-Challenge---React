import React from 'react';
import './charactors.css';
import {Link} from 'react-router-dom';

function Chars(props) {

	let data = {homeworld:[], vehicles:[], starships:[], films:[]};

	for(let key in props.char){
		if(key === 'homeworld'){
			data.homeworld.push(props.char[key]);
		}
		if(key === 'vehicles' && props.char.vehicles.length > 0){
			props.char.vehicles.forEach((veh)=>{
				data.vehicles.push(veh);
			});
		}
		if(key === 'starships' && props.char.starships.length > 0){
			props.char.starships.forEach((star)=>{
				data.starships.push(star);
			});
		}
		if(key === 'films' && props.char.films.length > 0){
			props.char.films.forEach((film)=>{
				data.films.push(film);
			});
		}
	};

	let linksUpper = [];
	let linksLower =[];
	for(let i in data){
		if(data[i].length > 0){
			linksUpper.push(i.charAt(0).toUpperCase() + i.slice(1));
			linksLower.push(i);
		}
	}

	if(props.char.name === undefined){
		props.history.push('/');
		return null;

	}

	return (
		<div>
			<div className="char">
				<div className="char-img">
					<img src={`../img/${props.char.name.replace(/\s+/g, '')}.jpg`} />
				</div>

				<div className="char-info">
					<div className="name">{props.char.name}</div>

					<div className="info">
						<span>&#9733; Birth Year - {props.char.birth_year}</span>
						<span>&#9733; Eye Color - {props.char.eye_color}</span>
						<span>&#9733; Gender - {props.char.gender}</span>
						<span>&#9733; Hair Color - {props.char.hair_color}</span>
						<span>&#9733; Height - {props.char.height}</span>
						<span>&#9733; Mass - {props.char.mass}</span>

					</div>
					<div className="assets-box">
					{linksUpper.map((link, i)=>{
						return (
						<div className="assets-title" onClick={()=>{props.handleAsset({asset: data[linksLower[i]], assetName: linksLower[i], history: props.history})}}>
						 	<li>{link}</li>
						</div>
						);
					})}
					</div>
				</div>
			</div>
		</div>
	);

}

export default Chars;

