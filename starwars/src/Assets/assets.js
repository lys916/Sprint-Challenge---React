import React from 'react';
import './assets.css';

function renderAsset(asset){
	switch(asset.assetName){
		case 'homeworld':
		return (<div><span>&#9733; Climate - {asset.assetData.climate}</span>
				<span>&#9733; Gravity - {asset.assetData.gravity}</span>
				<span>&#9733; Population - {asset.assetData.population}</span>
				<span>&#9733; Rotation Period - {asset.assetData.rotation_period}</span>
				<span>&#9733; Surface Water - {asset.assetData.surface_water}</span>
				<span>&#9733; Terrain - {asset.assetData.terrain}</span></div>)
		break;
		case 'starships':
		return (<div><span>&#9733; Manufacturer - {asset.assetData.manufacturer}</span>
				<span>&#9733; Cost - {asset.assetData.cost_in_credits}</span>
				<span>&#9733; Length - {asset.assetData.length}</span>
				<span>&#9733; Max Speed - {asset.assetData.max_atmosphering_speed}</span>
				<span>&#9733; Crew - {asset.assetData.crew}</span>
				<span>&#9733; Starship Class - {asset.assetData.starship_class}</span></div>)
		break;
		case 'vehicles':
		return (<div><span>&#9733; Model - {asset.assetData.model}</span>
				<span>&#9733; Cost - {asset.assetData.cost_in_credits}</span>
				<span>&#9733; Crew - {asset.assetData.crew}</span>
				<span>&#9733; Manufacturer - {asset.assetData.manufacturer}</span>
				<span>&#9733; Max Speed - {asset.assetData.max_atmosphering_speed}</span>
				<span>&#9733; Vehicle Class - {asset.assetData.vichicle_classs}</span></div>)
		break;
		case 'films':
		return (<div><span>&#9733; Director - {asset.assetData.director}</span>
				<span>&#9733; Producer - {asset.assetData.producer}</span>
				<span>&#9733; Release Date - {asset.assetData.release_date}</span>
				<span>&#9733; Episode Id - {asset.assetData.episode_id}</span>
				</div>)
		break;
	}
}

function Assets(props) {
	if(props.assetName === "films"){
		props.assets.forEach((film)=>{
			film.name = film.title;
		});
	}
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
								{renderAsset({assetData: asset, assetName: props.assetName})}
								
							</div>
					</div>
				</div>
			
			);
			
			})}
			
		</div>
	);
}

export default Assets;

	