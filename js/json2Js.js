class Datas{
    constructor(){
        this.reactions = {
            'photographers' :{
                "name": this.name,
                "id": this.id,
                "city": this.city,
                "country": this.country,
                "tags": [],
                "tagline": this.tagline,
                "price": this.price,
                "portrait": this.portrait
                    },
            'media' : {
                "id": this.id,
                "photographerId": this.photographerId,
                "title": this.title,
                "image": this.image,
                "tags": [],
                "likes": this.likes,
                "date": this.date,
                "price": this.price

            }
                };
            this.createIndex = [];
    }
            //permet d'injecter de nouvelles propriétés
            addReactions(type, callback) {
                this.reactions[type].push(callback);
            }
            //Permet de choisir où injecter les nouvelles propriétés
            dispatch(type){
                if(this.reactions[type].length > 0){
                    for(let reaction of this.reactions[type]){
                        reaction();
                    }
                }
            }
    
    json2Js(){
        fetch("./json/fisheye.json").
        then(async response => {
            try {
                const data = await response.json();
                this.reactions.photographers = data.photographers;
                this.reactions.media = data.media;
                //console.log('response data?', data);
                //J'injecte la propriété createIndex
                //this.dispatch('createIndex');
                //this.dispatch('createMenu');
                } catch(error) {
                console.log('Error happened here!');
                console.error(error);
                }
            });
        }
}
var getDatas = new Datas();
getDatas.json2Js();
console.log(getDatas);
  export default Datas;