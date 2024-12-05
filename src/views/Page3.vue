<template>
    <div class="page3-container">
      <Navbar />
      <div class="content-container">
        <h1 class="page-title">Workshops & Venues</h1>
        <div class="workshops">
          <div v-for="(workshop, index) in workshops" :key="index" class="workshop-card">
            <h2>{{ workshop.venue }}</h2>
            <ul>
              <li
                v-for="(date, i) in workshop.dates"
                :key="i"
                :class="{ booked: date.booked, soldOut: date.soldOut }"
              >
                <span>{{ date.date }}</span>
                <button
                  v-if="!date.soldOut && !date.booked"
                  @click="bookDate(index, i)"
                >
                  Book
                </button>
                <span v-else-if="date.soldOut">Sold Out</span>
                <span v-else>Booked</span>
              </li>
            </ul>
          </div>
        </div>
        <router-link to="/" class="back-link">Back to Page 1</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue";
  
  export default {
    components: { Navbar },
    data() {
      return {
        workshops: [
          {
            venue: "Cape Town Conference Center",
            dates: [
              { date: "2024-12-10", booked: false, soldOut: false },
              { date: "2024-12-15", booked: false, soldOut: true },
            ],
          },
          {
            venue: "Johannesburg Expo Center",
            dates: [
              { date: "2024-12-20", booked: false, soldOut: false },
              { date: "2024-12-25", booked: false, soldOut: true },
            ],
          },
          {
            venue: "Durban Exhibition Hall",
            dates: [
              { date: "2024-12-18", booked: false, soldOut: false },
              { date: "2024-12-22", booked: false, soldOut: false },
            ],
          },
        ],
      };
    },
    methods: {
      bookDate(workshopIndex, dateIndex) {
        this.workshops[workshopIndex].dates[dateIndex].booked = true;
        localStorage.setItem("bookings", JSON.stringify(this.workshops));
      },
      loadBookings() {
        const savedWorkshops = localStorage.getItem("bookings");
        if (savedWorkshops) {
          this.workshops = JSON.parse(savedWorkshops);
        }
      },
    },
    mounted() {
      this.loadBookings();
    },
  };
  </script>
  
  <style scoped>
 
  .page3-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh; 
    padding: 0;
    background-color: #f4f4f9;
  }
  
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    flex-grow: 1; 
    overflow-y: auto; 
  }
  
  .page-title {
    font-size: 2rem;
    margin-bottom: 30px;
    color: #333;
  }
  
  .workshops {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;
    flex-grow: 1;
  }
  
  .workshop-card {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .workshop-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .workshop-card h2 {
    font-size: 1.5rem;
    color: #007bff;
    margin-bottom: 15px;
  }
  
  .workshop-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .workshop-card li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .workshop-card li span {
    font-size: 1rem;
  }
  
  .workshop-card li button {
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .workshop-card li button:hover {
    background-color: #218838;
  }
  
  .workshop-card li.booked span,
  .workshop-card li.soldOut span {
    font-weight: bold;
    color: #666;
  }
  
  .workshop-card li.soldOut span {
    color: #dc3545;
  }
  
  .workshop-card li.booked span {
    color: #ffc107;
  }
  
  .back-link {
    display: block;
    margin-top: 20px;
    color: #007bff;
    text-decoration: none;
  }
  
  .back-link:hover {
    text-decoration: underline;
  }
  

  @media (max-width: 768px) {
    .workshops {
      flex-direction: column;
      align-items: center;
    }
  
    .workshop-card {
      width: 90%;
    }
  }
  </style>
  