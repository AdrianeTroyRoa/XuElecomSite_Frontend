<template>
  <nav class="navbar w-full top-0 z-20 p-4">
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
