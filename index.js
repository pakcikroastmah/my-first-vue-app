var app = new Vue({
    el: "#app",
    data: {
        message: "talha",
        food_items : ['hamburger', 'samyang'],
        seen: true,

    },
    
    methods: {
        buttonClick:function(){
            alert('Hey! I was Clicked!!')
        }
    }
})