   class Main{
        constructor(){
            this.reactions = {
                'photographers':{
                    'photographers':[],
                    'media':[]
                },
                'createIndex':[],
                'createMenu':[],
            };
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
        //Permet de créer l'objet js à partir du Json 
        bddJson(){
            fetch("./json/fisheye.json").
            then(async response => {
                try {
                    const data = await response.json();
                    this.reactions.photographers = data;
                    //console.log('response data?', data);
                    //J'injecte la propriété createIndex
                    this.dispatch('createIndex');
                    this.dispatch('createMenu');
                    } catch(error) {
                    console.log('Error happened here!');
                    console.error(error);
                    }
                });
            }
    }
    //Permet l'eportation de Mainjs
    export default Main;
