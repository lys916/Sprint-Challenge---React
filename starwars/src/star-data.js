export default function(){
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
            return state;
            });

          

         }).catch(err => {
            throw new Error(err);
      });
return 'bla';
}