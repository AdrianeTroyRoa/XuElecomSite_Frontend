<template>
  <Navbar />
  <NavWComp />
  <div class="flex flex-col gap-8 w-full px-4 py-12">
    <!--article title-->
    <div class="text-center">
      <h1 class="text-5xl font-bold">{{ post.title }}</h1>
      <div class="text-sm mt-5 font-light">
        {{ formattedDateToday(post.date) }}
      </div>
    </div>

    <!--article image-->
    <div>
      <img
        :src="post.image_link"
        class="w-full max-w-2xl mx-auto rounded-lg shadow-md object-cover"
        alt="article picture"
      />
    </div>

    <div class="flex justify-between gap-5">
      <!--Ad space/reminder-->
      <div class="sm:block hidden"></div>

      <!--Article proper-->
      <article class="prose" v-html="renderMarkdown(post.content)"></article>

      <!--Ad space/reminder-->
      <div class="sm:block hidden"></div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
// Import the markdown parser
import { marked } from "marked";

//supabase client and route handler
const client = useSupabaseClient();
const route = useRoute();

//handle post proper
const post = ref([]);
////for id if valid via supabase entry
const validSlug = ref(true);
//
////Checks if param id is UUID format and has supabase entry
//const checkIfUUID = (uuid) => {
//  const uuidRegex =
//    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
//
//  return uuidRegex.test(uuid);
//};
const isValidSlug = (slug) => {
  const slugRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
};
//supabase fetching
try {
  const { data, error } = await client
    .from("Posts")
    .select()
    .eq("slug", route.params.slug);
  if (error || data.length == 0) {
    console.error("😓 No database entry. Invalid link.");
    throw createError({
      statusCode: 404,
      statusMessage: `Page Not Found: ${route.href}`,
    });
  } else {
    console.info("📰 Article loaded successfully.");

    post.value = data.map((el) => ({ ...el, date: el.created_at }));
    post.value = post.value[0];
  }
} catch (err) {
  console.error("⚠️ Probably no database entry or unexpected error.");
  console.error(err);
  throw createError({
    statusCode: 404,
    statusMessage: `Page Not Found: ${route.href}`,
  });
}

definePageMeta({
  validate: async (route) => {
    return (
      typeof route.params.slug === "string" && isValidSlug(route.params.slug)
    );
  },
});

// display datetime in appropriate format
const dateOptions = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZoneName: "short",
};
const formattedDateToday = (theDate) => {
  const date = new Date(theDate);
  return date.toLocaleDateString("en-US", dateOptions);
};

// render markdown content
const renderMarkdown = (content) => {
  let convertedContent = "";
  try {
    convertedContent = marked(content);
  } catch (err) {
    console.error("❌ No valid content for markdown.", err);
    convertedContent = "Nil";
  }
  return convertedContent;
};
</script>
