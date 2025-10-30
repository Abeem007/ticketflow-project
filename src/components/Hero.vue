<template>
  <header class="relative bg-linear-to-b from-sky-50 to-white overflow-hidden">
   
    <div
      class="hidden md:block absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-20 pointer-events-none"
      aria-hidden="true"
      style="background: radial-gradient(circle at 30% 30%, #7dd3fc, transparent 60%)"
    ></div>

    
    <nav
      class="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 py-4 flex justify-between items-center relative z-10"
    >
      <RouterLink to="/" class="text-2xl font-bold text-sky-600 pt-2">TicketFlow</RouterLink>

      <!-- Desktop menu -->
      <div class="hidden sm:flex gap-6 text-slate-700 font-medium pt-2">
        <RouterLink to="/" class="hover:text-sky-600 transition-colors">Home</RouterLink>
        <RouterLink to="/auth/login" class="hover:text-sky-600 transition-colors">Login</RouterLink>
        <RouterLink to="/auth/signup" class="hover:text-sky-600 transition-colors">Signup</RouterLink>
        <RouterLink to="/dashboard" class="hover:text-sky-600 transition-colors">Dashboard</RouterLink>
      </div>

      <!-- Mobile menu button -->
      <button
        class="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-sky-600 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <svg
          v-if="menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Mobile dropdown -->
      <div
        v-if="menuOpen"
        class="absolute top-full left-0 w-full bg-white shadow-md rounded-b-lg sm:hidden"
      >
        <div class="flex flex-col space-y-6 py-7 px-6 text-slate-700 font-medium">
          <RouterLink to="/" @click="menuOpen = false">Home</RouterLink>
          <RouterLink to="/auth/login" @click="menuOpen = false">Login</RouterLink>
          <RouterLink to="/auth/signup" @click="menuOpen = false">Signup</RouterLink>
          <RouterLink to="/dashboard" @click="menuOpen = false">Dashboard</RouterLink>
        </div>
      </div>
    </nav>

    <div class="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
      <div class="pt-12 pb-20 lg:pt-24 lg:pb-32">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
          <div class="relative lg:col-span-7">
            <div
              class="hidden md:block absolute -top-10 -left-10 w-48 h-48 rounded-full opacity-30 pointer-events-none"
              aria-hidden="true"
              style="background: radial-gradient(circle at 30% 30%, #7dd3fc, transparent 60%)"
            ></div>

            <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              TicketFlow
            </h1>
            <p class="mt-4 text-lg sm:text-xl text-slate-700 max-w-2xl">
              Manage support tickets with speed and clarity. Create, track, and resolve tickets promptly — all from a simple, elegant interface designed for teams of any size.
            </p>

            <div class="mt-8 flex flex-col sm:flex-row gap-3">
              <RouterLink
                to="/auth/login"
                class="inline-flex items-center justify-center px-5 py-3 rounded-md border border-transparent text-base font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 bg-white text-sky-700 hover:bg-sky-50"
              >
                Login
              </RouterLink>
              <RouterLink
                to="/auth/signup"
                class="inline-flex items-center justify-center px-5 py-3 rounded-md bg-sky-600 text-white font-medium shadow hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
              >
                Get Started
              </RouterLink>
            </div>

            <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
              <div class="bg-white p-3 rounded-xl shadow-sm">
                <p class="text-xs text-slate-500">Teams</p>
                <p class="mt-1 font-semibold text-slate-900">12</p>
              </div>
              <div class="bg-white p-3 rounded-xl shadow-sm">
                <p class="text-xs text-slate-500">Avg. response</p>
                <p class="mt-1 font-semibold text-slate-900">2h 15m</p>
              </div>
              <div class="bg-white p-3 rounded-xl shadow-sm">
                <p class="text-xs text-slate-500">Active projects</p>
                <p class="mt-1 font-semibold text-slate-900">4</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 relative">
            <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-xs text-slate-500">Total tickets</p>
                  <p class="text-2xl font-semibold text-slate-900">128</p>
                </div>
                <div class="text-right">
                  <p class="text-xs text-slate-500">Open</p>
                  <p class="text-lg font-medium text-emerald-600">34</p>
                </div>
              </div>

              <div class="mt-5 space-y-4">
                <div class="p-3 rounded-lg bg-slate-50">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-medium text-slate-900">Billing issue — Payment failed</p>
                      <p class="text-xs text-slate-500">Priority: Medium</p>
                    </div>
                    <span
                      class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700"
                    >
                      open
                    </span>
                  </div>
                </div>

                <div class="p-3 rounded-lg bg-slate-50">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-medium text-slate-900">UI bug on dashboard</p>
                      <p class="text-xs text-slate-500">Priority: Low</p>
                    </div>
                    <span
                      class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700"
                    >
                      in_progress
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="hidden sm:block absolute -left-6 -bottom-6 w-28 h-28 rounded-full opacity-30 pointer-events-none"
              aria-hidden="true"
              style="background: radial-gradient(circle at 30% 30%, #a78bfa, transparent 60%)"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6">
      <svg class="w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,32 C220,120 440,0 720,48 C1000,96 1220,16 1440,64 L1440,120 L0,120 Z"
          fill="#F8FAFC"
        />
      </svg>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>
