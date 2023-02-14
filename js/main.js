const { createApp } = Vue;

createApp({
    data() {
        return {
          todo:[
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

            newText:{
                text: "",
                done: false,
            },

           
        }

        
    },

 

    methods:{
       addText(){
        console.log(this.newText);
        
        const newText={
            title:this.newText.text,
            done:"to do",
        }

        this.todo.push(this.newText);
       },


       removeText(i){
            this.todo.splice(i, 1);
        },
    
    }
}).mount('#app')