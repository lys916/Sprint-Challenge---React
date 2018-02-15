import React from 'react';
import './assets.css';

function Assets(props) {
	console.log("assets component renders");
	return (
		<div className="assets">
			{props.assets.map((asset)=>{

			return(
				<div className="asset" key="asset.name">
					<div className="asset-img">
						<img src={`../img/${asset.name.replace(/\s+/g, '')}.jpg`} />
					</div>

					<div className="asset-info">
							<div className="name">{asset.name}</div>

							<div className="info">
								<span>&#9733; Manufacturer - {asset.birth_year}</span>
								<span>&#9733; Cost - {asset.cost_in_redits}</span>
								<span>&#9733; Length - asset.length}</span>
								<span>&#9733; Max Speed - {asset.max_atmosphering_speed}</span>
								<span>&#9733; Crew - {asset.crew}</span>
								<span>&#9733; Starship Class - {asset.starship_class}</span>
							</div>
					</div>
				</div>
			
			);
			
			})}
			
		</div>
	);
}

export default Assets;

	