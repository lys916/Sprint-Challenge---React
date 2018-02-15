import React, { Component } from 'react';
import './App.css';
import Carousel from './Carousel/carousel';
import Char from './Charactors/charactors';
import Assets from './Assets/assets';
import {Route} from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      chars: [],
      currentChar: {name: 'Luke Skywalker', starships:[], vehicles:[], planets:[]},
      currentAsset: 'starships',
      assets: [],
    };
  }
  componentDidMount() {

    fetch('https://swapi.co/api/people')

      .then(res => {
        return res.json();
      })
      .then(data => {
            console.log('gotdata');
        this.setState({ chars: data.results, currentChar: data.results[0] });
      })
      .catch(err => {
        throw new Error(err);
      });

  }

                handleChar = (name)=>{
                  console.log('handle charactors in appjs');
                  let temp = this.state.chars.find((char)=>{
                    return char.name === name;
                  });
                  this.setState({currentChar: temp});
                  this.handleAsset('starships');
                }



                handleAsset = (assetName)=>{
                  console.log('handle ships/vehicles/planet');

                  let assetData = [];


               if(assetName ==='homeworld'){
          

                       fetch(this.state.currentChar[assetName]).then(res =>{
                         return res.json();
                       }).then(data => {
                       
                        this.setState({assets: [data]});
                    
                         
                       }).catch(err => {
                         throw new Error(err);
                       });

               }else{
                   this.state.currentChar[assetName].forEach((url)=>{

                       fetch(url).then(res => {
                         return res.json();
                       }).then(data => {
                           assetData.push(data);
                        this.setState({assets: assetData});
                       
                       }).catch(err => {
                         throw new Error(err);
                       });
                  });
                  
               }

                 
                     
                }

  render() {

    return (
      <div className="App">
        <Route exact path="/" reder={(props)=>{ <Carousel /> handleChar={this.handleCar}}} />
        <Carousel chars={this.state.chars} handleChar={this.handleChar}/>
        <Route path="/char/:id" reder={(props)=>{ <Char /> handleChar={this.handleCar}}} />
        <Char char={this.state.currentChar} handleAsset={this.handleAsset}/>
        <Assets assets={this.state.assets}/>
      </div>
    );
  }
}

export default App;





// import React, { Component } from 'react';
// import './App.css';
// import Carousel from './Carousel/carousel';
// import Char from './Charactors/charactors';
// import Assets from './Assets/assets';


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       chars: [],
//       currentChar: {name: 'Luke Skywalker', starships:[], vehicles:[], planets:[]},
//       currentAsset: 'starships',
//       assets: [],
//     };
//   }
//   componentDidMount() {

//     fetch('https://swapi.co/api/people')

//       .then(res => {
//         return res.json();
//       })
//       .then(data => {
//             console.log('gotdata');
//         this.setState({ chars: data.results, currentChar: data.results[0] });
//       })
//       .catch(err => {
//         throw new Error(err);
//       });

//   }

//                 handleChar = (name)=>{
//                   console.log('handle charactors in appjs');
//                   let temp = this.state.chars.find((char)=>{
//                     return char.name === name;
//                   });
//                   this.setState({currentChar: temp});
//                   this.handleAsset('starships');
//                 }



//                 handleAsset = (assetName)=>{
//                   console.log('handle ships/vehicles/planet');

//                   let assetData = [];


//                if(assetName ==='homeworld'){
          

//                        fetch(this.state.currentChar[assetName]).then(res =>{
//                          return res.json();
//                        }).then(data => {
                       
//                         this.setState({assets: [data]});
                    
                         
//                        }).catch(err => {
//                          throw new Error(err);
//                        });

//                }else{
//                    this.state.currentChar[assetName].forEach((url)=>{

//                        fetch(url).then(res => {
//                          return res.json();
//                        }).then(data => {
//                            assetData.push(data);
//                         this.setState({assets: assetData});
                       
//                        }).catch(err => {
//                          throw new Error(err);
//                        });
//                   });
                  
//                }

                 
                     
//                 }

//   render() {

//     return (
//       <div className="App">
//         <Carousel chars={this.state.chars} handleChar={this.handleChar}/>
//         <Char char={this.state.currentChar} handleAsset={this.handleAsset}/>
//         <Assets assets={this.state.assets}/>
//       </div>
//     );
//   }
// }

// export default App;
