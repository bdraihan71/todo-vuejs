<template>
<div class="row mt-4 gx-2">
    <div class="col-4">
        <div class="card text-center parent-card">
            <div class="card-header todo-card">
                Todo
            </div>
            <div class="card-body">
                <draggable v-model="allTodos" itemKey="name" group="people" @add="updateTodo([$event, 'todo'])">
                    <template #item="{ element }">
                        <div class="card mb-2 child-card" :data-id="element._id" v-if="element.status == 'todo'">
                            <div class="card-body">
                                {{element.todo}}
                            </div>
                        </div>
                    </template>
                </draggable>
            </div>
        </div>
    </div>

    <div class="col-4">
        <div class="card text-center parent-card">
            <div class="card-header">
                In Progress
            </div>
            <div class="card-body">
                <draggable v-model="allTodos" itemKey="name" group="people" @add="updateTodo([$event, 'in_progress'])">
                    <template #item="{ element }">
                        <div class="card mb-2 child-card" :data-id="element._id" v-if="element.status == 'in_progress'">
                            <div class="card-body">
                                {{element.todo}}
                            </div>
                        </div>
                    </template>
                </draggable>
            </div>
        </div>
    </div>

    <div class="col-4">
        <div class="card text-center parent-card">
            <div class="card-header">
                Done
            </div>
            <div class="card-body">
                <draggable v-model="allTodos" itemKey="name" group="people" @add="updateTodo([$event, 'done'])">
                    <template #item="{ element }">
                        <div class="card mb-2 child-card" :data-id="element._id" v-if="element.status == 'done'">
                            <div class="card-body">
                                {{element.todo}} <button><i class="fa-sharp fa-solid fa-trash text-danger" @click="deleteTodo(element._id)"></i></button>
                            </div>
                        </div>
                    </template>
                </draggable>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import draggable from 'vuedraggable'
import {
    mapGetters,
    mapActions
} from "vuex"

export default {
    name: 'ShowTodo',
    components: {
        draggable
    },

    computed: {
        ...mapGetters(["allTodos"])
    },

    created() {
        this.getAllTodo()
    },

    methods: {
        ...mapActions(["getAllTodo", "deleteTodo", "updateTodo"]),
    }
}
</script>

<style scoped>
.parent-card {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.child-card {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.child-card:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

button,
input[type="submit"],
input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}
</style>
