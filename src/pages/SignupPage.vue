<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-slate-50 px-6"
  >
    <div
      v-if="toast.visible"
      role="status"
      aria-live="polite"
      class="fixed top-6 right-6 z-9999 px-4 py-3 rounded-md text-white shadow-lg"
      :class="toast.type === 'success' ? 'bg-emerald-600' : 'bg-rose-500'"
    >
      {{ toast.message }}
    </div>

    <div class="w-full max-w-md bg-white shadow-md rounded-lg p-8">
      <h1 class="text-2xl font-bold text-center text-slate-800 mb-6">
        Create an Account
      </h1>

      <form @submit.prevent="handleSignup" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-slate-700">Email</label>
          <input
            type="email"
            v-model="email"
            class="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
          />
          <p v-if="errors.email" class="text-sm text-rose-500 mt-1">
            {{ errors.email }}
          </p>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700"
            >Password</label
          >
          <input
            type="password"
            v-model="password"
            class="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
          />
          <p v-if="errors.password" class="text-sm text-rose-500 mt-1">
            {{ errors.password }}
          </p>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700"
            >Confirm Password</label
          >
          <input
            type="password"
            v-model="confirmPassword"
            class="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
          />
          <p v-if="errors.confirmPassword" class="text-sm text-rose-500 mt-1">
            {{ errors.confirmPassword }}
          </p>
        </div>

        <button
          type="submit"
          class="w-full bg-sky-600 text-white py-2 rounded-md font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
          Sign Up
        </button>
      </form>

      <p class="text-sm text-center text-slate-600 mt-6">
        Already have an account?
        <RouterLink to="/auth/login" class="text-sky-600 hover:underline">
          Log in
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
const confirmPassword = ref("");
const errors = ref({});
const toast = ref({ visible: false, message: "", type: "" });

const validateForm = () => {
  const newErrors = {};
  if (!email.value.trim()) newErrors.email = "Email is required.";
  if (!password.value.trim()) newErrors.password = "Password is required.";
  if (password.value.trim().length < 6)
    newErrors.password = "Password must be at least 6 characters.";
  if (password.value !== confirmPassword.value)
    newErrors.confirmPassword = "Passwords do not match.";
  errors.value = newErrors;
  return Object.keys(newErrors).length === 0;
};

const showToast = (message, type = "error") => {
  toast.value = { visible: true, message, type };
  setTimeout(() => (toast.value.visible = false), 3000);
};

const handleSignup = () => {
  if (!validateForm()) return;

  const existingUser = JSON.parse(localStorage.getItem("mock_user"));
  if (existingUser && existingUser.email === email.value) {
    showToast("User already exists. Please log in.");
    return;
  }

  const newUser = { email: email.value, password: password.value };
  localStorage.setItem("mock_user", JSON.stringify(newUser));

  showToast("Signup successful! Redirecting to login...", "success");
  setTimeout(() => router.push("/auth/login"), 1500);
};
</script>
