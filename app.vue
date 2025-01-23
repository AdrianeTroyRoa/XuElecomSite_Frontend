<template>
  <NuxtPage />
</template>

<script setup>
onMounted(() => {
  document.documentElement.style.scrollBehavior = "smooth";
});

useHead({
  title: "XU-CSG EleCom | Official Website",
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

useSeoMeta({
  title: 'XU-CSG EleCom | Official Website',
  ogTitle: 'XU-CSG EleCom | Official Website',
  description: 'Exercising exclusive jurisdiction over all contests relating to the elections at Xavier Ateneo. Stay updated on election guidelines, results, and announcements.',
  ogDescription: 'Exercising exclusive jurisdiction over all contests relating to the elections at Xavier Ateneo. Discover election updates, resources, and official information.',
  ogImage: 'https://vdhtlmptdfpbtenigido.supabase.co/storage/v1/object/public/post-thumbnails/banner%20(fb).png', // Replace with the actual URL to your logo/banner
  twitterCard: 'summary_large_image',
})
</script>
