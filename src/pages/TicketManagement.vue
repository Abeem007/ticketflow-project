<template>
  <div
    class="relative min-h-screen bg-linear-to-br from-sky-50 via-white to-sky-100 overflow-hidden"
  >
    <div
      class="absolute -top-10 -left-10 w-64 h-64 bg-sky-200 rounded-full opacity-30"
    ></div>
    <div
      class="absolute -top-10 -right-10 w-64 h-64 bg-purple-300 rounded-full opacity-30 blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full opacity-40 blur-3xl"
    ></div>

    <div
      v-if="toast.visible"
      :class="[
        'fixed top-6 right-6 z-9999 px-5 py-3 rounded-md text-white shadow-lg transition-all',
        toast.type === 'success' ? 'bg-emerald-500' : 'bg-rose-500',
      ]"
    >
      {{ toast.message }}
    </div>

    <header class="relative z-10 bg-white/70 backdrop-blur-sm shadow-md">
      <div
        class="mx-auto max-w-[1440px] px-6 py-4 flex justify-between items-center"
      >
        <div class="flex items-center gap-4">
          <button
            @click="router.push('/dashboard')"
            class="flex items-center gap-2 text-slate-700 hover:text-sky-600 transition-colors font-medium"
          >
            Back to Dashboard
          </button>
          <button
            @click="router.push('/')"
            class="flex items-center gap-2 text-slate-700 hover:text-sky-600 transition-colors font-medium"
          >
            🏠 Home
          </button>
          <h1 class="text-2xl font-bold text-sky-700">Ticket Management</h1>
        </div>
      </div>
    </header>

    <main class="relative z-10 mx-auto max-w-[1440px] px-6 py-12">
      <h2 class="text-3xl font-bold text-slate-800 mb-8 text-center">
        Manage Your Tickets
      </h2>

      <form
        @submit.prevent="handleSubmit"
        class="bg-white rounded-2xl shadow-lg p-8 mb-10 max-w-2xl mx-auto transition-all hover:shadow-xl"
      >
        <div class="grid sm:grid-cols-2 gap-6">
          <div>
            <label class="block text-slate-600 font-medium mb-2">Title *</label>
            <input
              type="text"
              v-model="newTicket.title"
              placeholder="Enter ticket title"
              class="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none transition"
            />
            <p v-if="errors.title" class="text-rose-500 text-sm mt-1">
              {{ errors.title }}
            </p>
          </div>

          <div>
            <label class="block text-slate-600 font-medium mb-2"
              >Status *</label
            >
            <select
              v-model="newTicket.status"
              class="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none transition"
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
            <p v-if="errors.status" class="text-rose-500 text-sm mt-1">
              {{ errors.status }}
            </p>
          </div>
        </div>

        <div class="mt-6">
          <label class="block text-slate-600 font-medium mb-2">
            Description
          </label>
          <textarea
            v-model="newTicket.description"
            placeholder="Optional: add a description"
            class="w-full border border-slate-300 rounded-md px-3 py-2 h-28 resize-none focus:ring-2 focus:ring-sky-500 outline-none transition"
          ></textarea>
          <p v-if="errors.description" class="text-rose-500 text-sm mt-1">
            {{ errors.description }}
          </p>
        </div>

        <button
          type="submit"
          class="mt-6 w-full bg-sky-600 text-white py-3 rounded-lg shadow-md hover:bg-sky-700 transition font-semibold"
        >
          {{ editIndex !== null ? "Update Ticket" : "Create Ticket" }}
        </button>
      </form>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <p
          v-if="tickets.length === 0"
          class="text-center text-slate-500 col-span-full"
        >
          No tickets yet. Create one above!
        </p>

        <div
          v-for="(ticket, index) in tickets"
          :key="index"
          class="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <div class="flex justify-between items-center mb-3">
            <h3 class="text-lg font-semibold text-slate-800">
              {{ ticket.title }}
            </h3>
            <span
              class="text-xs font-medium px-3 py-1 rounded-full capitalize"
              :class="statusColor[ticket.status]"
            >
              {{ ticket.status.replace("_", " ") }}
            </span>
          </div>
          <p class="text-slate-600 text-sm mb-4">
            {{ ticket.description || "No description provided." }}
          </p>

          <div class="flex justify-between items-center mt-4">
            <button
              @click="handleEdit(index)"
              class="text-sky-600 font-medium hover:underline"
            >
              Edit
            </button>
            <button
              @click="handleDelete(index)"
              class="text-rose-500 font-medium hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const tickets = ref([]);
const newTicket = ref({ title: "", description: "", status: "open" });
const editIndex = ref(null);
const toast = ref({ visible: false, message: "", type: "" });
const errors = ref({ title: "", description: "", status: "" });


onMounted(() => {
  const stored = JSON.parse(localStorage.getItem("tickets") || "[]");
  tickets.value = stored;
});

watch(
  tickets,
  (newVal) => {
    try {
      localStorage.setItem("tickets", JSON.stringify(newVal));
    } catch (err) {
      console.error("Failed to save tickets:", err);
      showToast("Failed to save tickets. Please retry.", "error");
    }
  },
  { deep: true }
);

const showToast = (message, type = "success") => {
  toast.value = { visible: true, message, type };
  setTimeout(() => (toast.value.visible = false), 3000);
};

// Validation
const validateAll = () => {
  const newErrors = { title: "", description: "", status: "" };

  newErrors.title = !newTicket.value.title.trim() ? "Title is required." : "";

  if (!["open", "in_progress", "closed"].includes(newTicket.value.status)) {
    newErrors.status = "Invalid status value.";
  }

  newErrors.description =
    newTicket.value.description.length > 1000
      ? "Description must be less than 1000 characters."
      : "";

  errors.value = newErrors;
  return Object.values(newErrors).every((err) => err === "");
};

// Create or Update
const handleSubmit = () => {
  if (!validateAll()) {
    showToast("Please fix the form errors.", "error");
    return;
  }

  if (editIndex.value !== null) {
    tickets.value[editIndex.value] = { ...newTicket.value };
    editIndex.value = null;
    showToast("Ticket updated successfully!");
  } else {
    tickets.value.push({ ...newTicket.value });
    showToast("Ticket created successfully!");
  }

  newTicket.value = { title: "", description: "", status: "open" };
  errors.value = { title: "", description: "", status: "" };
};

// Edit Ticket
const handleEdit = (index) => {
  editIndex.value = index;
  newTicket.value = { ...tickets.value[index] };
  errors.value = {};
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Delete Ticket
const handleDelete = (index) => {
  if (window.confirm("Are you sure you want to delete this ticket?")) {
    tickets.value.splice(index, 1);
    showToast("Ticket deleted.", "error");
  }
};

const statusColor = {
  open: "bg-emerald-100 text-emerald-700",
  in_progress: "bg-amber-100 text-amber-700",
  closed: "bg-gray-200 text-gray-700",
};
</script>
