var app = new Vue({
    el:"#article",
    data:{
        products:[{id:1,title:"TAG1001", short_text:'Best quality peppers',image:'pepper-1.jpg', desc:"Full desc"},
        {id:2,title:"TAG1002", short_text:'Best quality peppers',image:'pepper-2.jpg', desc:"Full desc"},
        {id:3,title:"TAG1003", short_text:'Best quality peppers',image:'pepper-3.jpg', desc:"Full desc"},
        {id:4,title:"TAG1004", short_text:'Best quality peppers',image:'pepper-4.jpg', desc:"Full desc"},
        {id:5,title:"TAG1005", short_text:'Best quality peppers',image:'pepper-5.jpg', desc:"Full desc"},]
    },
    mounted:function(){
        console.log(window.localStorage.getItem('prod'));
    },
    methods:{
        addItem:function(id){
            window.localStorage.setItem('prod',id);
        }
    }
});