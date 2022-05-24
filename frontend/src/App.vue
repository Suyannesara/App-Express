<template>
  <div>
    <Header/>
    <TableInfo/>
  </div>
</template>

<script>
  //Importing components
  import TableInfo from './components/Table.vue'
  import Header from './components/Header.vue'
 
  export default {
    name: 'App',
    components: { 
      TableInfo,
      Header
    }
  }

</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  body{
    display: flex;
    font-family: 'Roboto', sans-serif;

    align-content: center;
    justify-content: center;
  }
</style>

