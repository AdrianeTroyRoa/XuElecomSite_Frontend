<template>
  <div class="relative">
    <!-- Hamburger Button -->
    <div class="fixed top-5 right-4 z-50">
      <button @click="toggleSidebar" class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          v-if="isSidebarOpen"
        >
          <rect y="4" width="24" height="2"></rect>
          <rect y="11" width="24" height="2"></rect>
          <rect y="18" width="24" height="2"></rect>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          v-else
        >
          <rect y="4" width="24" height="2"></rect>
          <rect y="11" width="24" height="2"></rect>
          <rect y="18" width="24" height="2"></rect>
        </svg>
      </button>
    </div>

    <!-- Sidebar -->
    <div
      :class="[
        'text-white fixed top-0 right-0 h-full w-full max-w-64 bg-accent transform transition-transform duration-300 ease-in-out flex flex-col justify-between',
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
    >
      <ul class="p-4 space-y-4 mt-24">
        <li>
          <NuxtLink
            to="/#home"
            class="btn btn-ghost text-lg font-light"
            @click="toggleSidebar"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/#posts"
            class="btn btn-ghost text-lg font-light"
            @click="toggleSidebar"
            >Posts</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/#contact"
            class="btn btn-ghost text-lg font-light"
            @click="toggleSidebar"
            >Contact</NuxtLink
          >
        </li>
      </ul>
      <div class="text-center p-4 italic text-sm font-extralight">
        <hr />
        <br>
        &copy; XU-CSG Elecom Systems <br />
        AY 2425
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>
