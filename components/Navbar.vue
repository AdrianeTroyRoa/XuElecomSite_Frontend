<template>
  <nav class="navbar bg-gray-100 fixed w-full top-0 z-20 p-4" v-show="isFixed">
    <div class="flex-1">
      <nuxt-link class="btn btn-ghost hover:bg-gray-100" to="/">
        <div column>
          <div class="text-xl text-primary font-bold">BOTAR ATENISTA</div>
          <div
            class="rounded-full bg-[#FAD60B] p-1 px-12 shadow-black shadow-md font-bold"
          >
            THINK. ACT. VOTE.
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="flex-none">
      <nuxt-link class="sm:btn sm:btn-ghost sm:text-l hidden" to="/#home"
        >Home</nuxt-link
      >
      <nuxt-link class="sm:btn sm:btn-ghost sm:text-l hidden" to="/#posts"
        >Posts</nuxt-link
      >
      <nuxt-link class="sm:btn sm:btn-ghost sm:text-l hidden" to="/#contact"
        >Contact</nuxt-link
      >
      <Sidebar class="sm:hidden" />
    </div>
  </nav>
</template>

<script setup>
const isFixed = ref(false);

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  isFixed.value = scrollPosition > 70;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
