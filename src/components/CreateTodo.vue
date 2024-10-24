<script setup>
import { todoStore } from '../todoStore'
import { ref } from 'vue';
import { v7 as uuidv7 } from 'uuid';

const name = ref('')
const description = ref('')
const type = ref('')
const dueDate = ref('')

function createTodo() {
    todoStore().addTodo({
            "id": uuidv7(),
            "name": name.value,
            "description": description.value,
            "type": type.value,
            "dueDate": dueDate.value,
        })
}

function populateDefaultTodos() {
    todoStore().populateInitialTodos();
}

function clearTodos() {
    todoStore().clearTodos();
}
</script>

<template>
    <div>
        <h4 class="mb-3">Create Todo</h4>
            <div class="row g-3">
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="name" placeholder="Todo name" value="" required=""
                        v-model="name">
                    <div class="invalid-feedback">
                        Todo name is required.
                    </div>
                </div>

                <div class="col-sm-8">
                    <input type="text" class="form-control" id="description" placeholder="Todo description" value=""
                        v-model="description">
                </div>

                <div class="col-md-6">
                    <label for="type" class="form-label">Type</label>
                    <select class="form-select" id="type" required=""
                        v-model="type">
                        <option value="">Choose...</option>
                        <option>Business</option>
                        <option>Family</option>
                        <option>Entertainment</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid Todo type.
                    </div>
                </div>

                <div class="col-md-6">
                    <label for="dueDate" class="form-label">Due date</label>
                    <input type="date" class="form-control" id="dueDate" v-model="dueDate">
                </div>
            </div>

            <hr class="my-4">

            <button class="w-100 btn btn-primary btn-lg" type="submit" @click="createTodo">Add Todo</button>
            <button class="w-100 btn btn-outline-secondary btn-lg" type="submit" @click="populateDefaultTodos">Populate defaults</button>
            <button class="w-100 btn btn-outline-secondary btn-lg" type="submit" @click="clearTodos">Clear all</button>
    </div>
</template>
