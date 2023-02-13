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
        }
    }
}).mount('#app')