<template>
    <div class="min-h-screen flex items-center justify-center bg-pricolor">
      <div class="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-center mb-6">Register</h2>
        <form @submit.prevent="handleRegister">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input 
              v-model="email"
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              class="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input 
              v-model="password"
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              class="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div class="mb-6">
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input 
              v-model="confirmPassword"
              type="password" 
              id="confirmPassword" 
              placeholder="Confirm your password" 
              class="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button 
            type="submit" 
            class="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Register
  </button>
        </form>
        <p class="mt-4 text-center text-sm text-gray-600">
          Already have an account? 
          <router-link to="/login" class="text-blue-500 hover:text-blue-700">Login</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  </script>