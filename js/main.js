const { createApp } = Vue;

createApp({
    data() {
        return {
          texts:[
            {
                text:"lorem ipsum lorem ipsum lorem ipsum",
                done:true,
            },

            {
                text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                done:false,
            },
            {
                text: "lorem ipsum lorem ipsum lorem ipsum",
                done:true,
            },

            ],

            newText: "",
        }
    },

    
     

 

    methods:{
       addText(){
        console.log(this.newText);
        
        const newText={
            title:this.newText.text,
            done:"to do",
        }

        this.texts.push(this.newText);
       },


       removeText(i){
            this.tasks.splice(i, 1);
        },
    
    }
}).mount('#app')