<template>
    <div>
        <header>
            <h2>Tabela de Logs</h2>
        </header>
        <button @click="handleClick">Add</button>
    </div>
</template>

<script>
import api from '@/services/api'
export default {
    name: "HeaderPage",
    methods: {
        handleClick: function () {
            api.post("/users", {email: "test@dc.coo", name: "Teste"})
        }
    }
}
</script>

<style>
header {
    padding: 5%;
    background-color: #424242;
    color: rgb(224, 223, 223);
}
</style>