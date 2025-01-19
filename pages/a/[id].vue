<template>
  <NavWComp />
  <Navbar />
  <article class="prose">
    <h1>Hello, world. This page is for articles</h1>
    <p>{{formattedDateToday()}}</p>
  </article>
</template>

<script setup lang="ts">
// Import the markdown parser
import { marked } from "marked";

// Reactive content for displaying the datetime
const dateToday = new Date();
const dateOptions = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
  weekday: "short",
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZoneName: "short",
};
const formattedDateToday = () => {
  return dateToday.toLocaleDateString("en-US", dateOptions);
};
</script>
