const { createApp } = Vue;

createApp({
    data() {
        return {
          texts:[
            {
                text:"lorem ipsum lorem ipsum lorem ipsum",
                done:""
            },

            {
                text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                done: ""
            },
            {
                text: "lorem ipsum lorem ipsum lorem ipsum",
                done: ""
            },
          
            ]

            newText:"",
        }
    },

    methods:{
       removeText(i){
            this.tasks.splice(i, 1);
        }
    }
}).mount('#app')