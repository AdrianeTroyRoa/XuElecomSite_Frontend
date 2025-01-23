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
      name: "description",
      content:
        "Exercising exclusive jurisdiction over all contests relating to the elections at Xavier Ateneo. Stay updated on election guidelines, results, and announcements.",
    },
    {
      name: "author",
      content: "XU-CSG Electoral Commission Systems Department",
    },
    {
      name: "keywords",
      content:
        "XU-CSG, Xavier Ateneo, elections, Electoral Commission, EleCom, Botar Atenista",
    },
  ],
  bodyAttrs: {
    class: "production",
  },
});

useSeoMeta({
  title: "XU-CSG EleCom | Official Website",
  ogTitle: "XU-CSG EleCom | Official Website",
  description:
    "Exercising exclusive jurisdiction over all contests relating to the elections at Xavier Ateneo. Stay updated on election guidelines, results, and announcements.",
  ogDescription:
    "Exercising exclusive jurisdiction over all contests relating to the elections at Xavier Ateneo. Discover election updates, resources, and official information.",
  ogImage:
    "https://vdhtlmptdfpbtenigido.supabase.co/storage/v1/object/public/post-thumbnails/banner.png",
  twitterCard: "summary_large_image",
});
</script>
