<template>
  <div>
    <h1>aaaaaaaaaa</h1>
    <h2>{{ info }}</h2>
  </div>
</template>

<script>
  import instance from './services/api';

 export default {
   name: 'App',
   data(){
     return {
       info: instance
     }
   }
 }

  // export default {
  //   name: 'App',
   
  //   data(){
  //     return{
  //       info: null
  //     }
      
  //   },
  //   mounted(){
  //     axios.get('https://localhost:8081/users').then(response => (this.info = response))
  //   }

  // }

</script>

<style>

</style>
