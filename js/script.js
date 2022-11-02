const {createApp} = Vue;

createApp({
    data(){
        return{
            nome: "Utente",
            residenza: "Italia",
            myClass: "sottolineare",
            path: "",
            imgName: "img/italia.png"
        }
    }

}).mount("#app")