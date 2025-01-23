<template>
    <div class="flex flex-col flex-1 items-center">
        <div v-if="route.query.preview" class="text-white p-4 bg-thicolor w-full text-center">
            <p>Click <i class="fa-regular fa-heart"></i> to add this place to favourite</p>
        </div>
        <div class="flex flex-col items-center text-white py-12">
            <h1 class="text-4xl mb-2">{{ route.params.city }} <i class="fa-regular fa-heart hover:text-seccolor duration-150 cursor-pointer" @click="addPlace"></i></h1>
            <p class="text-sm mb-12">
                {{ new Date(weatherData.data.timezone_offset * 1000 + (weatherData.data.current.dt * 1000 + (new Date().getTimezoneOffset() * 60000))).toLocaleDateString(
                    "en-us",
                    {
                        weekday:"long",
                        day: "2-digit",
                        month: "long",
                    }
                ) }}
                {{ new Date(weatherData.data.timezone_offset * 1000 + (weatherData.data.current.dt * 1000 + (new Date().getTimezoneOffset() * 60000))).toLocaleTimeString(
                    "pl-pl",
                    {
                        timeStyle: "short",
                    }
                ) }}
            </p>
            <p class="text-6xl mb-8">
                {{ weatherData.data.current.temp }}&deg;C
            </p>
            <div class="text-center">
                <p>
                    Feels like {{ weatherData.data.current.feels_like }}&deg;C
                </p>
                <p class="capitalize">
                    {{ weatherData.data.current.weather[0].description }}
                </p>
                <img class="w-[125px] h-auto" :src="`https://openweathermap.org/img/wn/${weatherData.data.current.weather[0].icon}@2x.png`" alt=""/>
            </div>
        </div>
        <hr class="border-white border w-full border-opacity-20"/>
        <div class="max-w-screen-md w-full py-12">
            <div class="mx-8 text-white">
                <h2 class="mb-4">Hourly weather</h2>
                <div class="flex gap-10 overflow-x-scroll">
                    <div v-for="hourData in weatherData.data.hourly" :key="hourData.dt" class="flex flex-col gap-4 items-center">
                        <p class="whitespace-nowrap text-mb">
                            {{ new Date(hourData.currentTime).toLocaleTimeString("pl-pl", {hour:"numeric"}) }}:00
                        </p>
                        <img class="w-auto h-[50px] object-cover" :src="`https://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`" alt=""/>
                        <p>
                            {{ hourData.temp }}&deg;C
                        </p>
                    </div>
                </div>
            </div>
            <hr class="border-white border w-full border-opacity-20 mt-5"/>
            <div class="max-w-screen-md w-full py-12">
                <div class="mx-8 text-white">
                    <h2 class="mb-4"> 7 Day Forecast</h2>
                    <div v-for="day in weatherData.data.daily" :key="day.dt" class="flex items-center">
                        <p class="flex-1">
                            {{ new Date(day.dt * 1000).toLocaleDateString("en-us", {weekday: "long"}) }}
                        </p>
                        <img class="w-[50px] h-[50px] object-cover" :src="`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`" alt="">
                        <div class="flex gap-2 flex-1 justify-end">
                            <p>Highest: {{ day.temp.max }}&deg;C</p>
                            <p>Lowest: {{ day.temp.min }}&deg;C</p>
                            <p>Avg: {{ Math.round(((day.temp.max + day.temp.min)/2)*100)/100 }}&deg;C</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const getWeatherData = async () =>{
        try{
            const weatherData = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${route.query.lat}&lon=${route.query.lng}&exclude={part}&appid=7b1fd9aa0d27d515d22273e59d4429ae&units=metric`);
            weatherData.data.hourly.forEach((hour)=> {
                hour.currentTime = weatherData.data.timezone_offset * 1000 + (hour.dt * 1000 + (new Date().getTimezoneOffset() * 60000));
            });
            return weatherData;
        } catch (err){
            console.log(err);
        }
    };
    const weatherData = await getWeatherData();
    console.log(weatherData);
    const addPlace = () =>{
        
    };
</script>
