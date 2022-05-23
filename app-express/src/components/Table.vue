<template>
    <table id="table">
      <thead>
        <th>Nome de Usuário</th>
        <th>E-mail</th>
      </thead>
      {{ info }}
    </table>

</template>

<script>
  import api from '@/services/api'

  export default {
   name: 'TableInfo',
   data(){
     return {
       info: ""
     }
   },
   mounted(){
     
      api.get("records").then((response) => {
        let data = response.data
        let table = document.getElementById('table')
        
        //Loop to fill the table
        for(let i = 0; i<= data.length; i++){
          table.innerHTML += `<tr>`
          for(let i = 0; i <= data.length; i++){
            table.innerHTML += `<td>${(data[i].u_name)}</td> <td> ${(data[i].email)}</td>`
          }
          table.innerHTML += `</tr>`
        }

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
