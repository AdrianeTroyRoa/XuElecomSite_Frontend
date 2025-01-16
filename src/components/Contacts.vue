<script setup>
const inputItems = ["name", "email", "subject"];
</script>
<template>
  <section
    class="mt-5 min-h-screen flex flex-col items-center justify-center"
    id="contact"
  >
    <div class="flex-col justify-center items-center text-center">
      <h2
        class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900"
      >
        Contact Us
      </h2>
      <p class="font-light text-gray-500 sm:text-xl">
        Have questions? Submit them here!
      </p>
    </div>
    <div class="mt-5">
      <form method="POST" name="contact" class="max-w-lg mx-auto">
        <div v-for="(item, index) in inputItems" :key="index">
          <div class="mb-5">
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-96 sm:w-64 p-2.5"
              :id="item"
              :name="item"
              :placeholder="item.charAt(0).toUpperCase() + item.slice(1)"
              required
            />
          </div>
        </div>
        <textarea
          id="message"
          rows="5"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Message..."
        ></textarea>
        <br /><br />
        <div class="text-center mb-5">
          <button class="btn">Send Message</button>
        </div>
      </form>
    </div>
  </section>
</template>
