<template>
  <div>
    <Navbar />
    <Hero />
    <Posts />
    <Contacts />
  </div>
</template>

<script setup>
onMounted(() => {
  document.documentElement.style.scrollBehavior = "smooth";
});
</script>
