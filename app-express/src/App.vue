<template>
  <div>
    <table border="1">
      <thead>
        <th>Nome de Usuário</th>
        <th>E-mail</th>
      </thead>
      {{ info }}
    </table>
  </div>
</template>

<script>
  import api from './services/api';

 export default {
   name: 'App',
   data(){
     return {
       info: ""
     }
   },
   mounted(){
     
      api.get("records").then((response) => {
        let data = response.data

        for(let i = 0; i <= data.length; i++){
          this.info += `${(data[i].u_name)} \n`
          this.info += `${(data[i].email)} \n`
        }
        
        //tr loop
        // for(let i = 0; i<= data.length; i++){
          
        //   for(let i = 0; i <= data.length; i++){
        //     this.info += `<td>${(data[i].u_name)}</td>` + `<br>`
        //     this.info += `< td > ${(data[i].email)}</td>` + `<br>`
        //   }
        //   this.info += `</tr>`

        // }

      }).catch(error => {console.log(error) })
    }
 }

</script>

<style>

</style>
