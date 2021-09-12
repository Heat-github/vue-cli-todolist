<template>
  <div class="footer">
      <input type="checkbox" name="" id="" checked="check">
      <span class="done">已完成 {{}}</span> / <span class="total">{{}} 总数</span>
      <span class="delete">删除已完成</span>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:["todos"],
    methods:{
        check(){
            return true;
        }
    }
}
</script>

<style scoped>
  .footer{
      display: block;
      border: 1px solid grey;
  }
</style>