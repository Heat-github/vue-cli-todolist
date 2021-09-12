// mixins 分别暴露f
export const sorts = {
    data(){
        return {
            name: "Alex",
            age: 26
        }
    },
    methods: {
        qsort: function(a){
            if(a.length <= 1) return;
        }
    },
    mounted(){
        console.log("%c" + this.$options.name + " %c组件引入了 %csorts 混合~","color:red","color:black", "color:green")
    }
}