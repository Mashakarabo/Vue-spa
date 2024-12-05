<template>
    <div>
      <Navbar />
      <h1>Spot Prices</h1>
      <SpotTable :data="filteredData" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import SpotTable from '../components/SpotTable.vue';
  import Navbar from '../components/Navbar.vue';
  
  export default {
    components: { SpotTable, Navbar },
    data() {
      return {
        spotData: [],
      };
    },
    computed: {
      filteredData() {
        return this.spotData.slice(0, 5);
      },
    },
    created() {
      axios
        .get('https://api.sharenet.co.za/api/v1/px2/spots')
        .then(response => {
          this.spotData = response.data;
        })
        .catch(error => console.error('Error fetching data:', error));
    },
  };
  </script>
  
  <style>
  h1 {
    text-align: center;
  }
  </style>
  