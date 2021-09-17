<template>
  <ul class="list">
    <li 
      v-for="todo of todos"

      :key="todo.id"
      >
        <input type="checkbox" name="" :checked="todo.done">
        {{todo.title}}
      </li>
  </ul>
</template>

<script>
import { sorts } from '../mixins'


export default {
    name:"TaskList",
    props:["todos"],
    mixins:[sorts]
}
</script>

<style>
.list{
  background: tan;
}
</style>