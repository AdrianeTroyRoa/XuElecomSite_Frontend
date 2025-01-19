<template>
  <nav class="navbar w-full top-0 z-20 p-4">
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
      <a class="sm:btn sm:btn-ghost sm:text-l hidden" href="#home">Home</a>
      <a class="sm:btn sm:btn-ghost sm:text-l hidden" href="#posts">Posts</a>
      <a class="sm:btn sm:btn-ghost sm:text-l hidden" href="#contact"
        >Contact</a
      >
      <Sidebar class="sm:hidden" />
    </div>
  </nav>
</template>
