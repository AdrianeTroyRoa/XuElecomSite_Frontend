<template>
  <NavWComp />
  <Navbar />
  <div class="flex flex-col gap-8 w-full p-4">
    <!--article title-->
    <div class="text-center">
      <h1 class="text-5xl font-bold">Hello World. This is a title...</h1>
      <div class="text-sm mt-5 font-light">{{ formattedDateToday() }}</div>
    </div>

    <!--article image-->
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2025/01/07/16/54/woman-9317323_960_720.jpg"
        class="w-full max-w-2xl mx-auto rounded-lg shadow-md object-cover"
        alt="Subway"
      />
    </div>

    <div class="flex justify-between gap-5">
      <!--Ad space/reminder-->
      <div class="sm:block hidden"></div>

      <!--Article proper-->
      <article class="prose">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis magna
        ut augue auctor pellentesque eget et tellus. Fusce suscipit vel est id
        scelerisque. Praesent sem libero, varius sed ullamcorper at, faucibus
        non nisl. Mauris eu dui vitae ex venenatis bibendum. Vivamus nec nunc
        quis dui volutpat hendrerit. Suspendisse vulputate, lectus in
        sollicitudin vehicula, sapien erat egestas erat, vitae interdum diam
        urna vel dui. Integer eu fermentum magna, eu posuere velit. Praesent sed
        tellus vestibulum, tincidunt leo vel, vulputate ex. Nullam quis ipsum
        quis metus tincidunt gravida et non nulla. Duis nec iaculis dolor.
        Vestibulum dignissim tortor tellus, eget egestas risus blandit nec.
        Pellentesque vel porta arcu. Ut rutrum condimentum ligula, non viverra
        sem scelerisque interdum. Donec lacus nulla, blandit eget orci quis,
        viverra aliquam nisl. Nulla justo nisi, dignissim a sagittis sit amet,
        scelerisque sed eros. Quisque porta eleifend urna quis vulputate. Nunc
        luctus tristique arcu nec aliquam. Sed lectus enim, congue non tellus
        quis, interdum pharetra dolor. Maecenas nec rutrum enim. Vestibulum
        commodo, lorem sed rutrum maximus, felis lacus pharetra massa, non
        pulvinar ante libero a libero. Sed pulvinar cursus tellus at mattis.
        Curabitur efficitur, sem a dictum viverra, turpis libero auctor lorem,
        non condimentum augue erat id metus. Praesent vulputate velit elit, id
        sagittis ante sollicitudin a. Etiam accumsan, enim sed tincidunt dictum,
        tortor odio fringilla lectus, vitae porttitor ante dolor quis dui. Sed
        dapibus est velit, id finibus mi molestie a.
      </article>

      <!--Ad space/reminder-->
      <div class="sm:block hidden"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import the markdown parser
import { marked } from "marked";

//Checks if param id is UUID format
const checkIfUUID = (uuid) => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};
definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === "string" && checkIfUUID(route.params.id);
  },
});

// Reactive content for displaying the datetime
const dateToday = new Date();
const dateOptions = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZoneName: "short",
};
const formattedDateToday = () => {
  return dateToday.toLocaleDateString("en-US", dateOptions);
};
</script>
