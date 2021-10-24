var header = document.querySelector('header');
var section = document.querySelector('section');
function launchIndex(database) {
    var fotografers = database.photographers;
    //console.log(fotografers);
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
export default launchIndex;