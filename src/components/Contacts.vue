<template>
  <div class="container mx-auto">
    <div class="flex-col justify-center items-center text-center">
      <h1 class="text-5xl font-bold mb-3">Contact Us</h1>
      <p class="text-xl">Have questions? Submit them here!</p>
    </div>
    <div class="flex justify-center items-center mt-5">
      <form method="POST" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <input
          class="input input-bordered flex items-center gap-2"
          style="width: 450px"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        /><br />
        <input
          class="input input-bordered flex items-center gap-2"
          style="width: 450px"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        /><br />
        <input
          class="input input-bordered flex items-center gap-2"
          style="width: 450px"
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          required
        /><br />
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
  </div>
</template>
