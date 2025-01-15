<script setup lang="ts">
const inputItems: string[] = ["name", "email", "subject"];
</script>
<template>
  <section class="mt-5 min-h-screen flex flex-col items-center justify-center" id="contact">
    <div class="flex-col justify-center items-center text-center">
        <h2
          class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900"
        >
         Contact Us
        </h2>
        <p class="font-light text-gray-500 sm:text-xl">
      Have questions? Submit them here!</p>
    </div>
    <div class="flex justify-center items-center mt-5">
      <form method="POST" name="contact">
        <div v-for="(item, index) in inputItems" :key="index">
          <input
            class="input input-bordered flex items-center mb-4"
            style="width: 450px"
            type="text"
            :id="item"
            :name="item"
            :placeholder="item.charAt(0).toUpperCase() + item.slice(1)"
            required
          />
        </div>
        <textarea
          class="textarea textarea-bordered flex items-center gap-2"
          rows="5"
          id="message"
          name="message"
          placeholder="Message"
          style="resize: none; width: 450px"
          required
        ></textarea
        ><br /><br />
        <div class="text-center mb-5">
          <button class="btn">Send Message</button>
        </div>
      </form>
    </div>
  </section>
</template>
