<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
</script>
<template>
  <div class="navbar bg-base-100 fixed w-full top-0 z-20">
    <div class="flex-1">
      <a class="btn btn-ghost">
        <Flex column>
          <div class="text-xl text-primary font-bold">BOTAR ATENISTA</div>
          <div class="rounded-full bg-[#FAD60B] p-1 px-12 shadow-black shadow-md font-bold">THINK. ACT. VOTE.</div>
        </Flex>
      </a>
    </div>
    <div class="flex-2">
      <a class="btn btn-ghost text-l">Home</a>
    </div>
    <div class="flex-2">
      <a class="btn btn-ghost text-l">Posts</a>
    </div>
    <div class="flex-2">
      <a class="btn btn-ghost text-l">Contacts</a>
    </div>
    <div class="flex-none">
      <!--button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-5 w-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          ></path>
        </svg>
      </button-->
    </div>
  </div>
</template>
