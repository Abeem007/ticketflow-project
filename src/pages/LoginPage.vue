<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-slate-50 px-6"
  >
    <div
      v-if="toast.visible"
      role="status"
      aria-live="polite"
      class="fixed top-6 right-6 px-4 z-9999 py-3 rounded-md text-white shadow-lg"
      :class="toast.type === 'success' ? 'bg-emerald-600' : 'bg-rose-500'"
    >
      {{ toast.message }}
    </div>

    <div class="w-full max-w-md bg-white shadow-md rounded-lg p-8">
      <h1 class="text-2xl font-bold text-center text-slate-800 mb-6">
        Welcome Back
      </h1>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <div>
          <label for="email" class="block text-sm font-medium text-slate-700"
            >Email</label
          >
          <input
            id="email"
            name="email"
            type="email"
            v-model="email"
            class="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
          />
          <p v-if="errors.email" class="text-sm text-rose-500 mt-1">
            {{ errors.email }}
          </p>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-slate-700"
            >Password</label
          >
          <input
            id="password"
            name="password"
            type="password"
            v-model="password"
            class="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
          />
          <p v-if="errors.password" class="text-sm text-rose-500 mt-1">
            {{ errors.password }}
          </p>
        </div>

        <button
          type="submit"
          class="w-full bg-sky-600 text-white py-2 rounded-md font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
          Log In
        </button>
      </form>

      <p class="text-sm text-center text-slate-600 mt-6">
        Don't have an account?
        <RouterLink to="/auth/signup" class="text-sky-600 hover:underline">
          Sign up
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");
const errors = ref({});
const toast = ref({ visible: false, message: "", type: "" });

const validateForm = () => {
  const newErrors = {};
  if (!email.value.trim()) newErrors.email = "Email is required.";
  if (!password.value.trim()) newErrors.password = "Password is required.";
  errors.value = newErrors;
  return Object.keys(newErrors).length === 0;
};

const showToast = (message, type = "error") => {
  toast.value = { visible: true, message, type };
  setTimeout(() => (toast.value.visible = false), 3000);
};

const handleLogin = () => {
  if (!validateForm()) return;

  const user = JSON.parse(localStorage.getItem("mock_user"));
  if (user && user.email === email.value && user.password === password.value) {
    localStorage.setItem("ticketapp_session", "mock_token_123");
    showToast("Login successful!", "success");

    setTimeout(() => router.push("/dashboard"), 1000);
  } else {
    showToast("Invalid email or password. Try again.");
  }
};
</script>
