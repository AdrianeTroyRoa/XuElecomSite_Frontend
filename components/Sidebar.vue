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
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          v-if="isSidebarOpen"
          fill="none"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
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
      :class="{
        'translate-x-0': isSidebarOpen,
        'translate-x-full': !isSidebarOpen,
      }"
      class="text-white fixed top-0 right-0 h-full w-full max-w-64 bg-primary transform transition-transform duration-300 ease-in-out"
    >
      <NuxtLink to="/#home" class="btn btn-ghost text-l">Home</NuxtLink>
      <NuxtLink to="/#posts" class="btn btn-ghost text-l">Posts</NuxtLink>
      <NuxtLink to="/#contact" class="btn btn-ghost text-l">Contact</NuxtLink>
    </div>

    <!-- Overlay -->
    <div
      v-if="isSidebarOpen"
      @click="toggleSidebar"
      class="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
    ></div>
  </div>
</template>

<script setup lang="ts">
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>
