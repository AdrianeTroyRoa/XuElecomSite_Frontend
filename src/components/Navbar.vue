<template>
  <nav class="navbar bg-gray-100 w-full top-0 z-20 p-4">
    <div class="flex-1">
      <a class="btn btn-ghost hover:bg-gray-100">
        <div column>
          <div class="text-xl text-primary font-bold">BOTAR ATENISTA</div>
          <div
            class="rounded-full bg-[#FAD60B] p-1 px-12 shadow-black shadow-md font-bold"
          >
            THINK. ACT. VOTE.
          </div>
        </div>
      </a>
    </div>
    <div class="flex-none">
      <a class="sm:btn sm:btn-ghost sm:text-l hidden" href="@/#home">Home</a>
      <a class="sm:btn sm:btn-ghost sm:text-l hidden" href="@/#posts">Posts</a>
      <a class="sm:btn sm:btn-ghost sm:text-l hidden" href="@/#contact">Contact</a>
      <Sidebar class="sm:hidden" />
    </div>
  </nav>
  <nav class="navbar bg-gray-100 fixed w-full top-0 z-20 p-4" v-show="isFixed">
    <div class="flex-1">
      <a class="btn btn-ghost hover:bg-gray-100">
        <div column>
          <div class="text-xl text-primary font-bold">BOTAR ATENISTA</div>
          <div
            class="rounded-full bg-[#FAD60B] p-1 px-12 shadow-black shadow-md font-bold"
          >
            THINK. ACT. VOTE.
          </div>
        </div>
      </a>
    </div>
    <div class="flex-none">
      <a class="sm:btn sm:btn-ghost sm:text-l hidden">Home</a>
      <a class="sm:btn sm:btn-ghost sm:text-l hidden">Posts</a>
      <a class="sm:btn sm:btn-ghost sm:text-l hidden">Contact</a>
      <Sidebar class="sm:hidden" />
    </div>
  </nav>
</template>

<script setup>
const isFixed = ref(false);

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  isFixed.value = scrollPosition > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
