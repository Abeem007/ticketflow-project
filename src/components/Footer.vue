<template>
  <footer class="bg-slate-100">
    <div
      class="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <div class="text-sm text-slate-600">
        © {{ currentYear }} TicketFlow — All rights reserved.
      </div>
      <nav class="flex gap-4">
        <a
          class="text-sm text-slate-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          href="/privacy"
        >
          Privacy
        </a>
        <a
          class="text-sm text-slate-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          href="/terms"
        >
          Terms
        </a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
