<template>
  <Menu as="div" class="ml-3 relative">
    <div>
      <MenuButton
        class="
          bg-white
          rounded-full
          flex
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="h-10 w-10 rounded-full"
          src="https://i.pravatar.cc/40"
          alt=""
          height="40"
          width="40"
        />
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="
          origin-top-right
          absolute
          right-0
          mt-2
          w-56
          rounded-md
          shadow-lg
          bg-white
          ring-1 ring-black ring-opacity-5
          divide-y divide-gray-100
          focus:outline-none
        "
      >
        <div class="px-4 py-3">
          <p class="text-sm">Signed in as</p>
          <p class="text-sm font-medium text-gray-900 truncate">
            tom@example.com
          </p>
        </div>
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm',
              ]"
              >Dashboard</a
            >
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm',
              ]"
              >Your Profile</a
            >
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm',
              ]"
              >Account settings</a
            >
          </MenuItem>
        </div>
        <div class="py-1">
          <form method="POST" action="#">
            <MenuItem v-slot="{ active }">
              <button
                type="submit"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block w-full text-left px-4 py-2 text-sm',
                ]"
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
</script>
