function launchMenu(database){
    var tags = [];
    var datas = database.photographers;
    for(let i=0; i < datas.length; i++){
        tags[i] = datas[i].tags;
        //console.log(tags[i]);
    }
    tags = tags[0].concat(tags[1]).concat(tags[2]).
    concat(tags[3]).concat(tags[4]).concat(tags[5]);
    //Retirer les doublons
    tags = Array.from(new Set(tags));
    //console.log(tags);
    var nava=[];
    //Selectionne l'élément Html nav
    var navHtml = document.querySelector('nav');
    for(let j=0; j < 8; j++){
        //Crée les balises a
        nava[j] = document.createElement('a');
        //Crée les attributs href pour chaque a avec les tags
        nava[j].href = "#" + tags[j];
        //Injecte dans le Html le tag correspondant
        nava[j].textContent = "#" + tags[j];
        //Place les balises a dans la balise nav
        navHtml.appendChild(nava[j]);
        //Ecouteur d'évènement au click sur a, renvoie vers showHomeByTag
        nava[j].addEventListener("click", showHomeByTag);
    }
    //Récupère l'url correspondant à la balise a clické
    //pour avoir sa valeur, utile pour le filtre par tag
    function showHomeByTag(e){
           e.preventDefault();
        //récupère l'url
        var clickedUrl = e.target.href;
        //splite l'url par le slash
        var splitUrl = clickedUrl.split('/');
        //retire le hastag
        var clickedTag = splitUrl[3].substring(1);
        console.log(clickedTag) ;
        //console.log(datas);
        switch(clickedTag){
            case "portrait":
            for(let i=0; i < datas.length ;i++){
                var tagsFromClick = datas[i].tags;
                if(tagsFromClick.includes(clickedTag)===true){
                    delete database.photographers;
                    console.log(datas[i]);
                    //console.log(database);
                }
            }
        }
        //console.log(database);
       // newDatas.addReactions("creatIndex", launchIndex);
    }
    var dataFilter = (arr, requete) => {
    return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
    };

}
export default launchMenu;
