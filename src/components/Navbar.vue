<template>
    <nav class="navbar">
      <div class="navbar-container">
        <div class="logo">
          <h2>Sharenet</h2>
        </div>
        <!-- Hamburger Menu -->
        <button class="menu-toggle" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <!-- Navigation Links -->
        <ul :class="{ 'nav-active': isMenuOpen }">
          <li><router-link to="/" class="nav-link" @click="closeMenu">Spot Prices</router-link></li>
          <li><router-link to="/page2" class="nav-link" @click="closeMenu">Contact</router-link></li>
          <li><router-link to="/page3" class="nav-link" @click="closeMenu">Events</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false, // State for menu toggle
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false; // Close menu when a link is clicked
    },
  },
};
</script>
<style scoped>
.navbar {
  background-color: #007bff;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo h2 {
  font-size: 24px;
  color: white;
  font-weight: bold;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  transition: transform 0.3s ease-in-out;
}

.navbar .nav-link {
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease, transform 0.2s ease;
}

.navbar .nav-link:hover {
  color: #ffdf00;
  transform: scale(1.1);
}

/* Hamburger Menu Styles */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
}

.menu-toggle .bar {
  width: 100%;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .navbar ul {
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px;
    right: 0;
    background: #007bff;
    width: 100%;
    height: auto;
    padding: 20px 0;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
  }

  .navbar ul.nav-active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
}
</style>
  