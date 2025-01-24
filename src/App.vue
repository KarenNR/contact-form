<script setup>
  import ContactForm from './components/ContactForm.vue';
</script>

<template>
  <v-app class="bg-background">
    <v-container fluid class="h-100">
      <v-row class="h-100" align="center">
        <v-col cols="12">
          <ContactForm />
          <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
            Coded by <a href="#">Your Name Here</a>.
          </div>
        </v-col>
      </v-row>
    </v-container>
    
  </v-app>
</template>

<style scoped>
  .attribution { font-size: 11px; text-align: center; }
  .attribution a { color: hsl(228, 45%, 44%); }
</style>
