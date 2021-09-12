<template>
  <div class="header">
    <div class="title">
        <input id="title" type="text" placeholder="Task Title" @keyup.enter="addTodo" v-model="title">
    </div>
    <div class="deadline">
      <label for="deadline">截止日期：</label>
      <span id="deadline">{{date.day}} | {{date.hours}} 点之前</span>
    </div>
    <div class="vital">
      <label for="vital">优先程度：</label>
      <span id="vital">{{vital}}</span>
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
export default {
  props:[],
  data(){
    return{
      date:{day:"今天",hours:12},
      vital:4,
      title:""
    }
  },
  methods:{
    addTodo(){
      let titleStr = this.title.trim();
      if(!titleStr) return;
      let res =  {
        id:nanoid(),
        title:titleStr,
        deadline:this.date,
        done:false,
        vital:this.vital
      };
      this.title = "";
      this.$emit("get-todo", res)
    }
  }
}
</script>

<style>
  .header{
    display: grid;
    width: 100%;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
  }
  .title{
    width: 100%;
    height: 30px;
    grid-column: 1/3;
    margin-bottom: 5px;
  }
  #title{
    width: 100%;
    padding: 3px;
    border-radius: 5px;
  }
  #title:hover{border: 2px solid rgb(105, 172, 105);}
  #title:focus{border: 2px solid rgb(105, 172, 105);}
  .deadline{
    grid-column: 1/2;
  }
  .vital{
    grid-column: 2/3;
  }
</style>