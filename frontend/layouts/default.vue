<template>
  <v-app dark>
    <div>
      <nuxt />
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '../components/Layout/Footer'
export default {
  components: {
    Footer
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background: #f4f4f4;
}

a {
  color: #666;
  text-decoration: none;
}

ul {
  list-style: none;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background-color: #222;
}
::-webkit-scrollbar-thumb {
  background: #1976d2;
}
::-webkit-scrollbar-thumb:hover {
  background: #12589e;
}
</style>
