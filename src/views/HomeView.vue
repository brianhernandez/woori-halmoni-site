<template>
  <main
    class="p-4 md:p-8 min-h-screen bg-gradient-radial from-pink-50 to-white flex flex-col justify-center"
  >
    <!-- <TheWelcome /> -->
    <Transition name="img" appear>
      <div class="flex justify-around">
        <img
          class="shadow-lg rounded-lg overflow-hidden max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[500px]"
          alt="Illustration of a grandmother holding flowers"
          src="@/assets/grandma_3.jpg"
        />
      </div>
    </Transition>

    <Transition name="text" appear>
      <div
        class="text-container py-4 md:py-8 lg:py-10 flex-col lg:flex-row text-center mx-auto"
      >
        <h1
          class="text-gradient font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl"
        >
          Woori Halmoni
        </h1>
        <h2
          class="font-bold text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl"
        >
          A Celebration of Life
        </h2>
        <p
          class="mx-auto my-4 sm:my-5 md:my-6 lg:my-7 max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px]"
        >
          We would love for you to join us and share your memories and stories
          of grandma.
        </p>

        <div class="flex flex-col lg:flex-row justify-center">
          <p class="lg:mx-4">Date: Saturday, October 12th, 2024</p>
          <p class="lg:mx-4">Location: Lawrenceville, GA</p>
          <p class="lg:mx-4">
            RSVP:
            <a href="mailto:rsvp@woorihalmoni.com">RSVP@WOORIHALMONI.COM</a>
          </p>
        </div>
        <p class="mx-auto mt-4 sm:mt-5 md:mt-6 lg:mt-7">
          Further details to come.
        </p>
      </div>
    </Transition>
  </main>
</template>

<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<style>
.img-enter-active,
.img-leave-active {
  transition: all 1.5s ease;
}

.img-enter-from,
.img-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

.text-enter-active,
.text-leave-active {
  transition: opacity 2.5s ease;
}

.text-enter-from,
.text-leave-to {
  opacity: 0;
}
</style>
