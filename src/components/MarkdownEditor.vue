<template>
  <div class="flex p-4">
    <div class="flex-1">
      <div
        class="text-4xl font-bold focus:outline-none"
        contenteditable="true"
        @input="updateArticleTitle"
        spellcheck="true"
      >
        {{ articleTitle }}
      </div>
      <div class="ml-4 text-xs">{{ formattedDateToday }}</div>
    </div>
    <button class="btn btn-secondary flex-none">Save</button>
  </div>
  <div class="flex flex-col md:flex-row w-full">
    <div class="w-full md:w-1/2 p-4">
      <div class="text-3xl">Markdown Editor</div>
      <hr />
      <br />
      <!-- Input field for markdown -->
      <textarea
        v-model="markdownContent"
        placeholder="Write your markdown here..."
        rows="10"
        cols="50"
        class="bg-zinc-100 w-full h-[calc(100vh-13rem)] font-mono p-4"
      ></textarea>
    </div>
    <!-- Rendered markdown output -->
    <div class="w-full md:w-1/2 p-4">
      <div class="text-3xl">Preview</div>
      <hr />
      <br />
      <div class="bg-zinc-100 p-4 w-full h-[calc(100vh-13rem)] overflow-y-auto">
        <div class="flex align-items-center">
          <article class="prose" v-html="renderMarkdown"></article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import the markdown parser
import { marked } from "marked";

// Reactive variable for articleTitle
const articleTitle = ref(
  "10 Rare Pokémon You’ve Never Caught and Where to Find Them",
);

function updateArticleTitle(event) {
  articleTitle.value = event.target.innerText;
}

// Reactive content for displaying the datetime
const dateToday = ref(new Date());
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
const formattedDateToday = computed(() => {
  return dateToday.value.toLocaleDateString("en-US", dateOptions);
});

// to update the date every second
let interval;

onMounted(() => {
  interval = setInterval(() => {
    dateToday.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval); // Clear the interval when the component is destroyed
});

// Reactive variable to store markdown content
const markdownContent = ref(
  '# This is heading 1\n## This is heading2\nI assume you got what heading 3 and so on is.<br>And yeah, you just saw how to breakline. You don\'t need that syntax though if a text with a different format is before this :)\nFor images just insert the link in the src in this syntax:<img src="https://cdn.bhdw.net/im/dark-nature-sunset-wallpaper-120990_w635.webp" />\n> This is recommended for quotation reports or something like that.\n\nYes, we sometimes need double returns (enter key) to not be part of a formatting. But to be safe, why not always?\n\n<br>**This is a bold text**\n<br>*This is an italized text*\n\n<br>For more syntax info, go to this link: <a href="https://www.markdownguide.org/basic-syntax/">https://www.markdownguide.org/basic-syntax/</a>',
);

// Computed property to convert markdown to HTML
const renderMarkdown = computed(() => marked(markdownContent.value));
</script>
