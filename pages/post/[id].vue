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
</template>

<script setup lang="ts">
// Import the markdown parser
import { marked } from "marked";

//supabase client and route handler
const client = useSupabaseClient();
const route = useRoute();

//handle post proper
const post = ref([]);
//for id if valid via supabase entry
const validUUID = ref(true);

//Checks if param id is UUID format and has supabase entry
const checkIfUUID = (uuid) => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  return uuidRegex.test(uuid);
};

//supabase fetching
const { data, error } = await client
  .from("Posts")
  .select()
  .eq("id", route.params.id);
if (error || data.length == 0) {
  console.error("No database entry. Invalid id.");
  validUUID.value = false;
} else {
  console.info("everything is alright!");

  post.value = data.map((el) => ({ ...el, date: el.created_at }));
  post.value = post.value[0];
}

definePageMeta({
  validate: async (route) => {
    return (
      typeof route.params.id === "string" &&
      checkIfUUID(route.params.id) &&
      validUUID.value
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
  return marked(content);
};
</script>
