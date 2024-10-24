<script setup>
import CreateTodo from '@/components/CreateTodo.vue';
import TodoCard from '@/components/TodoCard.vue';
import { todoStore } from '../todoStore'

const todos = todoStore().todos;

</script>

<template>

    <CreateTodo />

    <div class="album py-5 bg-body-tertiary">
        <div class="container">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="todo in todos">
                    <TodoCard :todo="todo" />
                </div>
            </div>
        </div>
    </div>
</template>
