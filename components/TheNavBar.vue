<template>
  <div class="relative flex items-center justify-between h-12">
    <NuxtLink to="/">
      <div class="inline-flex items-center">
        <img
          src="http://placehold.jp/40x40.png"
          class="block mr-2"
          width="40"
          height="40"
        />
        <span class="font-semibold">LogoText</span>
      </div>
    </NuxtLink>
    <section class="w-full max-w-md md:max-w-sm lg:max-w-lg">
      <label for="search" class="sr-only">Search</label>
      <div class="relative">
        <div
          class="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            pl-3
            flex
            items-center
          "
        >
          <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          id="search"
          name="search"
          class="
            block
            w-full
            bg-white
            border border-gray-300
            rounded-md
            py-2
            pl-10
            pr-3
            text-sm
            placeholder-gray-500
            focus:outline-none
            focus:text-gray-900
            focus:placeholder-gray-400
            focus:ring-1
            focus:ring-indigo-500
            focus:border-indigo-500
            sm:text-sm
          "
          placeholder="Search"
          type="search"
        />
      </div>
    </section>
    <section class="inline-flex items-center">
      <a href="#">
        <button
          type="button"
          class="
            relative
            inline-flex
            items-center
            mr-4
            px-4
            py-2
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-gray-500
            hover:bg-gray-600
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-offset-gray-800
            focus:ring-gray-500
          "
        >
          <PlusSmIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          <span>New Post</span>
        </button>
      </a>
      <a href="#">
        <button
          type="button"
          class="
            bg-white
            p-1
            mr-1
            rounded-full
            text-gray-400
            hover:text-gray-500
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          <span class="sr-only">View notifications</span>
          <BellIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </a>
      <TheUserDropdown />
    </section>
  </div>
</template>

<script setup>
import { SearchIcon, PlusSmIcon } from '@heroicons/vue/solid';
import { BellIcon } from '@heroicons/vue/outline';
import TheUserDropdown from '@/components/TheUserDropdown.vue';
</script>
