<template>
    <table id="table">
      <thead>
        <th>Nome de Usuário</th>
        <th>E-mail</th>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.email">
          <td>{{user.u_name}}</td>
          <td>{{user.email}}</td>
        </tr>
      </tbody>
    </table>

</template>

<script>
  import api from '@/services/api'

  export default {
   name: 'TableInfo',
   data(){
     return {
       users: []
     }
   },
   mounted(){
      api.get("records").then((response) => {
        this.users = response.data
      }).catch(error => {console.log(error) })
    }
 }
</script>

<style>
  tr, td, th {
    padding: 2%;
    width: 400px;

    border: 1px solid black;
    border-radius: 2px;
  }
</style>
