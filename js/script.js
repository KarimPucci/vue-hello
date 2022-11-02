const {createApp} = Vue;

createApp({
    data(){
        return{
            nome: "Utente",
            residenza: "Italia",
        }
    }
}).mount("#app")