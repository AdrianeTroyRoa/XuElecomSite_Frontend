<template>
  <div class="flex flex-col md:flex-row w-full">
    <div class="w-full md:w-1/2 p-4">
      <div class="text-3xl font-bold">Markdown Editor</div>
      <!-- Input field for markdown -->
      <textarea
        v-model="markdownContent"
        placeholder="Write your markdown here..."
        rows="10"
        cols="50"
      ></textarea>
    </div>
    <!-- Rendered markdown output -->
    <div class="w-full md:w-1/2 p-4">
      <div class="text-3xl font-bold">Preview</div>
      <div class="prose" v-html="renderMarkdown"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import the markdown parser
import { marked } from "marked";
import { ref } from "vue";

// Reactive variable to store markdown content
const markdownContent = ref("");

// Computed property to convert markdown to HTML
const renderMarkdown = computed(() => marked(markdownContent.value));
</script>
