<script setup>
  import {ref} from "vue";
  import axios from "axios";
  import { useRouter } from "vue-router";

  const searchAPIKey = "pk.eyJ1Ijoia3JhZG9yZSIsImEiOiJjbTVvZjZsb2EwMDltMmtzaXY4NmdqaWNkIn0.vKgD3TwWGGTtWVTgTdeAkw";
  const search = ref("");
  const queryTimeout = ref(null);
  const mapboxSearchResults = ref(null);
  const getResults = () => {
    clearTimeout(queryTimeout.value);
    queryTimeout.value = setTimeout(async () => {
      if (search.value !== ""){
        const result = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search.value}.json?access_token=${searchAPIKey}&language=pl&types=place`);
        mapboxSearchResults.value = result.data.features;
        console.log(mapboxSearchResults.value);
        return;
      }
      mapboxSearchResults.value = null;
    }, 300);
  }
  const router = useRouter();
  const viewPlace = (searchResult) => {
    console.log(searchResult);
    const  [city, state] = searchResult.place_name.split(",");
    console.log(city, state);
    router.push({
      name: "place",
      params:{
        city: city,
        state: state.replaceAll(" ",""),
      },
      query:{
        lng: searchResult.geometry.coordinates[0],
        lat: searchResult.geometry.coordinates[1],
        preview: true,
      },
    });
  }
</script>

<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input type="text" placeholder="Type city" class="py-2 px-1 w-full bg-transparent border-b focus:border-seccolor focus:outline-none focus:shadow-md" v-model="search" @input="getResults">
      <ul class="absolute bg-seccolor text-white w-full shadow-md py-2 px-1 top-[70px]" v-if="mapboxSearchResults">
        <li v-for="searchResults in mapboxSearchResults" :key="searchResults.id" class=" py-2 cursor-pointer" @click="viewPlace(searchResults)">
          {{searchResults.place_name}}
        </li>
      </ul>
    </div>
  </main>
</template>
