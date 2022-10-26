<template>
<div class="container">
    <CreateTodo></CreateTodo>
    <ShowTodo></ShowTodo>
</div>
</template>

<script>
import CreateTodo from './components/CreateTodo'
import ShowTodo from './components/ShowTodo'

export default {
    name: 'App',
    components: {
        CreateTodo,
        ShowTodo
    }
}
</script>

<style>
body {
    margin-top: 50px;
    background: #EEEEEE;
}
</style>
