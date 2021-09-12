<template>
  <ul >
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
export default {
    props:["todos"]
}
</script>

<style>

</style>