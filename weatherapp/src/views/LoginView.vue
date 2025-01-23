<template>
    <div class="min-h-screen flex items-center justify-center bg-pricolor">
      <div class="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-center mb-6">Login</h2>
        <form>
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
          <div class="mb-6">
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
          <button 
            type="submit" 
            class="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <p class="mt-4 text-center text-sm text-gray-600">
          Don't have an account? 
          <router-link to="/register" class="text-blue-500 hover:text-blue-700">Register</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>

  </script>