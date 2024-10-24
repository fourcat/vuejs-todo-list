<script setup>
import { todoStore } from '../todoStore'

const props = defineProps(['todo'])

function doneTodo() {
    todoStore().doneTodo(props.todo);
}
</script>

<template>
    <div class="card shadow-sm">
        <div class="card-body">
            <div class="py-1 fw-bold h6" style="color: var(--bs-primary-text-emphasis)">
                [{{ props.todo.type }}]
            </div>
            <div class="py-1 fw-bold h5" style="color: var(--bs-info-text-emphasis)">
                {{ props.todo.name }}
            </div>
            <p class="card-text">
                {{ props.todo.description }}
            </p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="doneTodo">
                        Done
                    </button>
                    <button type="button"
                        class="btn btn-sm btn-outline-secondary">
                        Cancel
                    </button>
                </div>
                <small class="text-body-secondary">{{ props.todo.dueDate }}</small>
            </div>
        </div>
    </div>
</template>
