const {createApp} = Vue;

createApp({
    data(){
        return{
            nome: "Utente",
            residenza: "Italia",
            myClass: "sottolineare",
            path: "",
            imgName: "img/italia.png",
            imgNameTwo: "img/marocco.png"
        }
    },
    methods:{
        changeImg(){
            this.path = this.imgName
        }
    }

}).mount("#app")