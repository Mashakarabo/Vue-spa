<template>
    <div>
      
      <table v-if="spots.length">
        <thead>
          <tr>
            <th @click="sortBy('fullName')">Full Name</th>
            <th @click="sortBy('price')">Price</th>
            <th @click="sortBy('move')">Move</th>
            <th @click="sortBy('pmove')">Percentage Move</th>
            <th @click="sortBy('datetime')">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(spot, index) in sortedSpots" :key="index">
            <td>{{ spot.fullName }}</td>
            <td>{{ spot.price.toFixed(2) }}</td>
            <td>{{ spot.move.toFixed(2) }}</td>
            <td>{{ spot.pmove.toFixed(2) }}%</td>
            <td>{{ formatTime(spot.datetime) }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else>Loading data...</p>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        spots: [], // Holds API data
        sortKey: "fullName", // Default sort key
        sortAsc: true, // Sort order
      };
    },
    computed: {
      sortedSpots() {
        return [...this.spots].sort((a, b) => {
          let result =
            a[this.sortKey] > b[this.sortKey]
              ? 1
              : a[this.sortKey] < b[this.sortKey]
              ? -1
              : 0;
          return this.sortAsc ? result : -result;
        });
      },
    },
    methods: {
      async fetchSpots() {
        try {
          const response = await axios.get("https://api.sharenet.co.za/api/v1/px2/spots");
          this.spots = response.data.spots.slice(0, 5); 
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },
      sortBy(key) {
        if (this.sortKey === key) {
          this.sortAsc = !this.sortAsc; 
        } else {
          this.sortKey = key;
          this.sortAsc = true; 
        }
      },
      formatTime(datetime) {
        return new Date(datetime).toLocaleString(); 
      },
    },
    mounted() {
      this.fetchSpots();
    },
  };
  </script>
  
  <style>
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
    text-align: left;
  }
  
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
  }
  
  th {
    background-color: #f4f4f4;
    cursor: pointer;
  }
  
  th:hover {
    background-color: #e0e0e0;
  }
  
  p {
    text-align: center;
    color: #666;
  }
  
  @media (max-width: 768px) {
    table {
      font-size: 14px;
    }
  }
  </style>
  