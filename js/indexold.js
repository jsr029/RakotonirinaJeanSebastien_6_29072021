class Data{
    constructor(){
        this.bdd = {
            'photographers' : [],
            'media' : []
        };
    }
    bddJson(){
        fetch("./json/fisheye.json").
        then(async response => {
            try {
                const data = await response.json();
                this.bdd.photographers = [data.photographers];
                this.bdd.media = data.media;
               //console.log('response data?', data);
                } catch(error) {
                    console.log('Error happened here!');
                    console.error(error);
                }
            })
            .then(json => console.log(json));    }
}

const base = new Data();
base.bddJson();
console.log(base);
/*
function filtreTexte(arr, requete) {
    return arr.filter(function (el) {
      return el.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
    });
  }
  
  console.log(filtreTexte(fotografersList, 'an')); // ['banane', 'mangue'];
  console.log(filtreTexte(fotografersList, 'm')); // ['pomme', 'mangue'];
  */
