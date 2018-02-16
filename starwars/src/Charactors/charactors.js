import React from 'react';
import './charactors.css';
import {Link} from 'react-router-dom';

class Chars extends React.Component {
	state = {char: null};

	// componentWillReceiveProps handles page refresh or user enter direct url
	// it waits for parent component to fetch async data then pass it to this functon
	componentWillReceiveProps(nextProps){

		let charactor = nextProps.chars.find((char)=>{
			return char.name === nextProps.match.params.name;
		});
			this.setState({char: charactor});
	}

	// componentWillMount sets the state before componenet gets render
	componentWillMount(){
		let charactor = this.props.chars.find((char)=>{
			return char.name === this.props.match.params.name;
		});
			this.setState({char: charactor});
	}



	render(){
		// this if statement returns null and wait for componenentWillReceiveProps to
		// receive the async data from parents
		if(!this.state.char){
			return null;
		}
	return (
		<div className="char">
			<div className="char-img">
				<img src={`../img/${this.state.char.name.replace(/\s+/g, '')}.jpg`} />
			</div>

			<div className="char-info">
				<div className="name">{this.state.char.name}</div>

				<div className="info">
					<span>&#9733; Birth Year - {this.state.char.birth_year}</span>
					<span>&#9733; Eye Color - {this.state.char.eye_color}</span>
					<span>&#9733; Gender - {this.state.char.gender}</span>
					<span>&#9733; Hair Color - {this.state.char.hair_color}</span>
					<span>&#9733; Height - {this.state.char.height}</span>
					<span>&#9733; Mass - {this.state.char.mass}</span>

				</div>
				<div className="assets-name">
					 <Link to={ {pathname: `/char/:${this.state.char.name}/:starships`, starships: this.state.char.starships }}>
					 	<li >Starships</li>
					 </Link>
				</div>
			</div>
		</div>
	);
}
}

export default Chars;


