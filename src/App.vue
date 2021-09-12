<template>
  <div id="app">
    <TaskInput v-on:get-todo="addTodo"/>
    <TaskList :todos="todos" />
    <TaskDeal :todos="todos"/>
  </div>
</template>

<script>
import TaskInput from './components/TaskInput.vue'
import TaskList from './components/TaskList.vue'
import TaskDeal from './components/TaskDeal.vue'
import {nanoid} from 'nanoid'

export default {
  name: 'App',
  components: {TaskInput, TaskList, TaskDeal},
  data(){ 
    return {
      todos:[
        {id:nanoid(),title:"敲代码",deadline:{day:"后天",hours:12},done:false,vital:3}
      ]
    }
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
      // console.log(todo)
    }
  }
}

</script>
<style>
#app {
  width: 60%;
  height: 100%;
  min-width: 400px;
  padding: 20px;
  margin: 0 auto;
  background-color: lightgrey;
  justify-content: center;
  align-content: center;
}
</style>
