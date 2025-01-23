<template>
  <NuxtPage />
</template>

<script setup>
onMounted(() => {
  document.documentElement.style.scrollBehavior = "smooth";
});

useHead({
  title: "XU-CSG EleCom",
  meta: [
    {
      name: "XU-CSG Electoral Commission Site",
      content:
        "Exercising exclusive jurisdiction over all contests relating to the elections at Xavier Ateneo",
    },
  ],
  bodyAttrs: {
    class: "production",
  },
});
</script>
