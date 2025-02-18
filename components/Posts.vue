<template>
  <section
    :style="{ backgroundImage: `url(${bgImage})` }"
    class="min-h-screen flex flex-col justify-center"
    id="posts"
  >
    <div class=""></div>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        <h2
          class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white"
        >
          Latest Posts
        </h2>
        <p class="font-light text-white sm:text-xl">
          Explore the latest activities of XU Elecom by diving into the articles
          below
        </p>
      </div>
      <div
        v-if="posts.length === 0"
        class="text-white text-zinc-100 font-extrabold text-center"
      >
        <div>No articles available yet. Stay tuned!</div>
        <div class="my-12 flex justify-center">
          <NuxtLink class="btn" to="/posts">See archive</NuxtLink>
        </div>
      </div>
      <div class="grid gap-8 lg:grid-cols-2" v-else>
        <div v-for="post in posts.slice(-4).reverse()">
          <article
            class="p-6 bg-white rounded-lg border border-gray-200 shadow-md"
          >
            <div class="flex justify-between items-center mb-5 text-gray-500">
              <span
                class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded"
              >
                <svg
                  class="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                </svg>
                {{ post.type }}
              </span>
              <span class="text-sm">{{ formattedDateToday(post.date) }}</span>
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              <NuxtLink
                :to="{ name: 'posts-slug', params: { slug: post.slug } }"
                >{{ post.title }}</NuxtLink
              >
            </h2>
            <p class="mb-5 font-light text-gray-500">
              {{ post.content.replace(/\*\*|###|\*/g, "") }}
            </p>
            <div class="flex justify-between items-center">
              <NuxtLink
                :to="{ name: 'posts-slug', params: { slug: post.slug } }"
                class="inline-flex items-center font-medium text-primary-600 hover:underline"
              >
                Read more
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
      <div class="my-12 flex justify-center">
        <NuxtLink class="btn" v-show="posts.length >= 4" to="/posts"
          >See more</NuxtLink
        >
      </div>
    </div>
  </section>
</template>
<script setup>
import bgImage from "@/assets/bgPosts.png";
// displaying the date with appropriate format
const dateOptions = {
  month: "short",
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
  posts.value = data
    .filter(
      (post) => post.status && new Date(post.created_at).getFullYear() === 2025,
    )
    .map((post) => ({
      ...post,
      content:
        post.content.length > maxDescLength
          ? post.content.slice(0, maxDescLength).concat("...")
          : post.content,
      date: post.created_at,
    }));
  //logging to see number of posts
  console.info("Posts number:", posts.value.length);
  //logging to see data collected
  /*posts.value.forEach((data) => {
    console.log("title:", data.title);
    console.log("description:", data.content);
    console.log("date:", data.date);
  });*/
}
</script>
