<template>
    <div class="contact-page">
      <Navbar />
      <div class="contact-content">
        <h1>Contact Us</h1>
        <div class="contact-details">
          <p><strong>Address:</strong> 301 Imperial Terraces, Tyger Waterfront, Bellville, Cape Town, 7530</p>
          <p><strong>Phone:</strong> +27 11 123 4567</p>
          <p><strong>Email:</strong> contact@sharenet.co.za</p>
        </div>
        <div class="map-container">
          <iframe
            width="100%"
            height="400"
            style="border:0"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13249.979818258218!2d18.6301076!3d-33.8769045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc41e6218f7ab3%3A0xbdd802ca53b92d43!2sSharenet%20(Pty)%20Ltd!5e0!3m2!1sen!2sza!4v1733405876392!5m2!1sen!2sza">
          </iframe>
        </div>
        <router-link to="/" class="back-link">Back to Page 1</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue";
  export default {
    components: { Navbar },
  };
  </script>
  
  <style scoped>
  /* General page styling to make it full-screen */
  .contact-page {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh; /* Full screen height */
    background-color: #f4f4f9;
    padding: 0;
    margin: 0;
  }
  
  /* Content container to center content */
  .contact-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #007bff;
    margin-bottom: 20px;
  }
  
  /* Contact details section */
  .contact-details {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    line-height: 1.8;
    font-size: 16px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 500px;
  }
  
  .contact-details p {
    margin: 10px 0;
  }
  
  /* Map container */
  .map-container {
    width: 100%;
    max-width: 700px;
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  /* Back link styling */
  .back-link {
    display: inline-block;
    padding: 10px 20px;
    text-align: center;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    margin-top: 20px;
  }
  
  .back-link:hover {
    background-color: #0056b3;
  }
  </style>