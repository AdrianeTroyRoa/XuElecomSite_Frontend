<template>
  <Navbar />
  <NavWComp />
  <div class="min-h-screen flex flex-col justify-center">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        <h2
          class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-primary"
        >
          Posts Archive
        </h2>
      </div>
      <div class="grid gap-8 lg:grid-cols-2">
        <div v-for="post in posts">
          <article
            class="p-6 bg-white rounded-lg border border-gray-200 shadow-md"
          >
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              <NuxtLink :to="{ name: 'post-id', params: { id: post.id } }">{{
                post.title
              }}</NuxtLink>
            </h2>
            <span class="text-sm">{{ formattedDateToday(post.date) }}</span>
            <div class="flex justify-between items-center">
              <NuxtLink
                :to="{ name: 'post-id', params: { id: post.id } }"
                class="inline-flex items-center font-medium text-primary-600 hover:underline"
              >
                Read
                <svg
                  class="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import bgImage from "@/assets/bgPosts.png";
// displaying the date with appropriate format
const dateOptions = {
  month: "numeric",
  day: "numeric",
  year: "numeric",
};
const formattedDateToday = (theDate) => {
  const date = new Date(theDate);
  return date.toLocaleDateString("en-US", dateOptions);
};

//supabase fetching
const client = useSupabaseClient();
const posts = ref([]);
const maxDescLength = 200;

const { data, error } = await client.from("Posts").select();

if (error) {
  console.error(error);
} else {
  //transferring data values to post
  posts.value = data.map((post) => ({
    ...post,
    date: post.created_at,
  }));

  //logging to see number of posts
  console.info("Posts number:", posts.value.length);

  /*
  //logging to see data collected
  posts.value.forEach((data) => {
    console.log("title:", data.title);
    console.log("description:", data.content);
    console.log("date:", data.date);
  });
  */
}
</script>
