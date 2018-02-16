import React from 'react';
import './App.css';
import Carousel from './Carousel/carousel';
import Char from './Charactors/charactors';
import Assets from './Assets/assets';
import {Route} from 'react-router-dom';


class App extends React.Component {


   state = {chars: [], currentChar: {}, currentAsset: [], assetName: '' };

   componentDidMount() {
      console.log('didMount, about to fetch');
      fetch('https://swapi.co/api/people')
         .then(res => {
            return res.json();
         }).then(data => {

            let state = data.results;
            // loop through each charactor
            state.forEach((char) => {

               // fetch charactor's homeworld
               fetch(char.homeworld)
                  .then(res => {
                     return res.json();
                  }).then( data => {
                  char.homeworld = data;
               }).catch(err => {throw new Error(err)});

               // fetch charactor's starships
               char.starships.forEach((ship, i) => {
                  fetch(ship)
                     .then(res => {
                        return res.json();
                     }).then( data => {
                     char.starships[i] = data;
                  }).catch(err => {throw new Error(err)}); 
               });

               // fetch charactor's vehicles
               char.vehicles.forEach((vehicle, i) => {
                  fetch(vehicle)
                     .then(res => {
                        return res.json();
                     }).then( data => {
                     char.vehicles[i] = data;
                  }).catch(err => {throw new Error(err)}); 
               });

               // fetch charactor's films
               char.films.forEach((fiml, i) => {
                  fetch(fiml)
                     .then(res => {
                        return res.json();
                     }).then( data => {
                     char.films[i] = data;
                  }).catch(err => {throw new Error(err)}); 
               });
            

            });
               // done looping, assign new state
               this.setState({ chars: state });
               console.log(this.state.chars);

         }).catch(err => {
            throw new Error(err);
      });

  }

  handleChar = (props)=>{

   this.setState({ currentChar: props.char }, ()=>{
      console.log(props);
      props.history.push(`/char/${props.char.name}`);
   });
  }
     handleAsset = (props)=>{

   this.setState({ currentAsset: props.asset, assetName: props.assetName }, ()=>{
      props.history.push(`/char/${this.state.currentChar.name}/${props.assetName}`);
   });
}

  render() {
    
    return (
      <div className="App">
        <Route path="/" render={ (props)=> <Carousel {...props} chars={this.state.chars} handleChar={this.handleChar}/> } />
        <Route path="/char/:name" render={ (props)=> <Char {...props} char={this.state.currentChar} handleAsset={this.handleAsset} /> }  />
        <Route path="/char/:name/:type" render={ (props)=> <Assets {...props} assets={this.state.currentAsset} assetName={this.state.assetName}/> }  />
      </div>
    );
  }
}

export default App;