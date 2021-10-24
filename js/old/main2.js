        var header = document.querySelector('header');
        var section = document.querySelector('section');
        // charger l'URL du fichier JSON que nous voulons récupérer dans une variable
        var requestURL = '/json/fisheye.json';
        //Afin de créer une requête, nous avons besoin d'instancier un nouvel objet
        // XMLHttpRequest à partir de son constructeur en utilisant le mot clé new
        var request = new XMLHttpRequest();
        //ouvrir une nouvelle requête grâce à la méthode open()
        request.open('GET', requestURL);
        //nous attribuons la valeur 'json' à  responseType, signalant ainsi au serveur que nous attendons une réponse au format JSON. 
        //Puis, nous envoyons notre requête à l'aide de la méthode send()
        request.responseType = 'text';
        request.send();
class Main{
    constructor(){
        this.photographers = {
            "name": this.name,
            "id": this.id,
            "city": this.city,
            "country": this.country,
            "tags": [this.tags],
            "tagline": this.tagline,
            "price": this.price,
            "portrait": this.portrait
            };
            this.link = [];
    }
    createIndex() {
        request.onload = function() {
            const photographersTxt = request.response;
            this.photographers = JSON.parse(photographersTxt);
            const myFotograph = new Fotograf();
            myFotograph.showPhotographers(this.photographers);
            const a = myFotograph.photographers[0].tags;
            const b = myFotograph.photographers[1].tags;
            const c = myFotograph.photographers[2].tags;
            const d = a.concat(b);
            const e = d.concat(c);
            const f = Array.from(new Set(e));
            const myMenu = new Nav();
            myMenu.setMenu(f);
            const myLink = new useNav();
            myLink.setNav();
        };
    }
}
class Nav extends Main{
    setMenu(params) {
        for(let z=0; z < params.length; z++){
            var p = params[z].split(',');
            this.link = p; 
            console.log(this.link);
        }
        var myListNav = document.querySelector('nav');
        var myLink = document.createElement('a');
        var myLink1 = document.createElement('a');
        var myLink2 = document.createElement('a');
        var myLink3 = document.createElement('a');
        var myLink4 = document.createElement('a');
        var myLink5 = document.createElement('a');
        var myLink6 = document.createElement('a');
        var myLink7 = document.createElement('a');
        myLink.textContent = '#' + params[0];
        myLink1.textContent = '#' + params[6];
        myLink2.textContent = '#' + params[7];
        myLink3.textContent = '#' + params[5];
        myLink4.textContent = '#' + params[2];
        myLink5.textContent = '#' + params[4];
        myLink6.textContent = '#' + params[3];
        myLink7.textContent = '#' + params[1];
        myListNav.appendChild(myLink);
        myListNav.appendChild(myLink1);
        myListNav.appendChild(myLink2);
        myListNav.appendChild(myLink3);
        myListNav.appendChild(myLink4);
        myListNav.appendChild(myLink5);
        myListNav.appendChild(myLink6);
        myListNav.appendChild(myLink7);
        header.appendChild(myListNav);
        var hr = document.querySelectorAll('a');
        for(let g=0; g < hr.length; g++){
            hr[g].href = hr[g].innerHTML;
        }
    }
}
class Fotograf extends Main{
    showPhotographers(jsonObj) {
        var fotografers = jsonObj.photographers;
        this.photographers = fotografers;
     for (var i = 0; i < fotografers.length; i++) {
          var myArticle = document.createElement('article');
          myArticle.className = "artist";
          var myH2 = document.createElement('h2');
          var myPara1 = document.createElement('img');
          myPara1.className = "foto";
          var myPara2 = document.createElement('p');
          var myPara3 = document.createElement('p');
          var myPara4 = document.createElement('p');
          var myList = document.createElement('ul');
          myList.className = "tags";
      
          myH2.textContent = fotografers[i].name;
          myPara1.src = './img/Photographers ID Photos/' + fotografers[i].portrait;
          myPara2.textContent = fotografers[i].city + ', ' + fotografers[i].country;
          myPara3.textContent = fotografers[i].tagline;
          myPara4.textContent = fotografers[i].price + '€/jour';
      
          var medias = fotografers[i].tags;
          for (var j = 0; j < medias.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = '#' + medias[j];
            myList.appendChild(listItem);
          }
    
          myArticle.appendChild(myPara1);
          myArticle.appendChild(myH2);
          myArticle.appendChild(myPara2);
          myArticle.appendChild(myPara3);
          myArticle.appendChild(myPara4);      
          myArticle.appendChild(myList);
      
          section.appendChild(myArticle);
        }
      }
}
class useNav extends Main{

    setNav(){
        const h = document.querySelectorAll("a");
        h.forEach((hre) => hre.addEventListener("click", launchClic));
        function launchClic(hre){
            const urlNav = hre.path[0].href;
            const ur = urlNav.split('/');
            const bdd = JSON.parse(request.response);
            const bddP = bdd.photographers;
            for(let o=0; o < bddP.length; o++){
            console.log(ur[3]);
               const bddTags = bddP[o].tags;
               (bddTags[o].includes("'#"+ur[3]+"'"));
               console.log(bddTags);
                }
            }
        }
       /* const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
        const result = words.filter(word => word = params);*/
}
const pageIndex = new Main();
pageIndex.createIndex();