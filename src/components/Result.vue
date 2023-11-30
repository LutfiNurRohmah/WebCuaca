<template>
  <div
    :class="
      data.isLoading || Boolean(data.message)
        ? `result_container_loading`
        : `result_container`
    "
  >

    <div v-if="data.isLoading">
      <SpinnerLoader color="rgb(0, 119, 255)" />
    </div>

    <div class="container-today" v-if="data.weather && !data.isLoading">
      <div class="result-today" >
        <div class="date-cuaca">{{ formatDate(data2.list[2].dt_txt) }}</div>
        <img class="icon-cuaca2"
          :src="`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`"
        />
        <div class="judul-cuaca">{{ condition[data.weather[0].main] }}</div>
        <div class="description-cuaca">"{{ data.weather[0].description }}"</div>

        <table class="result_table">
          <div class="result-table-row">
              <div class="result-table-column-1">
                <tr class="result_tableRow">
                  <td><h6>Suhu rerata</h6></td>
                  <td>
                    <h6 class="tableValue">
                      {{ data.main.temp }} <span>&#176;C</span>
                    </h6>
                  </td>
                </tr>

                <tr class="result_tableRow">
                  <td><h6>Suhu minimum</h6></td>
                  <td>
                    <h6 class="tableValue">
                      {{ data.main.temp_min }} <span>&#176;C</span>
                    </h6>
                  </td>
                </tr>
                <tr class="result_tableRow">
                  <td><h6>Suhu maksimum</h6></td>
                  <td>
                    <h6 class="tableValue">
                      {{ data.main.temp_max }} <span>&#176;C</span>
                    </h6>
                  </td>
                </tr>
              </div>

              <div class="result-table-column-2">
                <tr class="result_tableRow">
                  <td><h6>Tekanan</h6></td>
                  <td>
                    <h6 class="tableValue">{{ data.main.pressure }} hPa</h6>
                  </td>
                </tr>
                <tr class="result_tableRow">
                  <td><h6>Kelembapan</h6></td>
                  <td>
                    <h6 class="tableValue">{{ data.main.humidity }}%</h6>
                  </td>
                </tr>
                <tr class="result_tableRow">
                  <td><h6>Kecepatan Angin</h6></td>
                  <td>
                    <h6 class="tableValue">{{ data.wind.speed }} m/s</h6>
                  </td>
                </tr>
              </div>
          </div>
        </table>
      </div>
    </div>

    <div class="container-5-days" v-if="data.weather && !data.isLoading">
        
        <div class="result-5-days">
          <h3 class="nama-kota">{{ data.name }}, {{ data.sys.country }}</h3>
          <div class="result-collect" >
              <div class="result-content-2">
                <div v-for="(cuaca) in data2.list.slice(0, 5)">
                  <div class="jam">{{ formatTime(cuaca.dt_txt) }}</div>
                  <img class="icon-cuaca"
                  :src="`http://openweathermap.org/img/wn/${cuaca.weather[0].icon}@2x.png`"
                  />
                  <div class="kondisi-cuaca">{{ cuaca.weather[0].description }}</div>
                </div>
              </div>
          </div>
        </div>
        
      </div>
    
    <div v-else-if="data.message && !data.isLoading">
      <h6 class="result_notfound">Kota tidak ditemukan</h6>
    </div>
  </div>
</template>

<script>
import { FacebookLoader, SpinnerLoader } from "vue-spinners-css";
export default {
  name: "Result",
  props: ["data", "data2"],
  data() {
    return {
      condition: {
        Thunderstorm: "Hujan badai",
        Drizzle: "Gerimis",
        Rain: "Hujan",
        Snow: "Bersalju",
        Clear: "Cerah",
        Clouds: "Berawan",
        Mist: "Berkabut",
        Smoke: "Berasap",
        Haze: "Berkabut",
        Dust: "Berdebu",
        Fog: "Berkabut",
        Sand: "Berpasir",
        Ash: "Berabu",
        Squall: "Badai",
        Tornado: "Tornado",
      },
    };
  },
  methods: {
    formatTime(dateTimeString) {
      const dateTime = new Date(dateTimeString);
      const hours = dateTime.getHours().toString().padStart(2, '0');
      const minutes = dateTime.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    },
    formatDateTime(dateTimeString) {
      const dateTime = new Date(dateTimeString);
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
      };
      const formatter = new Intl.DateTimeFormat('id-ID', options);
      return formatter.format(dateTime);
    },
    formatDate(dateTimeString) {
      const dateTime = new Date(dateTimeString);
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const formatter = new Intl.DateTimeFormat('id-ID', options);
      return formatter.format(dateTime);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result_container_loading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 65vh;
  padding-top: 15px;
}
.result_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-top: 15px;
  padding-bottom: 15px;
}
.result-today {
  background: #fcc173;
  border-radius: 16px;
  width: 500px;
  height: 400px;
  position: relative;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .result-today {
    min-width: 90%;
  }
}
.result_nameCity {
  text-align: center;
}
.result_notfound {
  color: rgb(29, 80, 138);
}
.result_description {
  font-style: italic;
  color: rgba(252, 248, 248, 0.829);
  margin-top: -5px;
}
.result_table {
  width: 500px;
  height: 130px;
  position: relative;
  overflow: hidden;
}
.result_tableRow {
  color: #292929;

}
.tableValue {
  padding-left: 10px;
}
.result_tempAverage {
  position: relative;
}
.result-table-row {
  position: absolute;
  inset: 0;
}
.result-table-column-1 {
  position: absolute;
  right: 55.14%;
  left: 4.76%;
  width: 40.1%;
  bottom: 20%;
  top: 20.77%;
  height: 59.23%;
}
.result-table-column-2 {
  position: absolute;
  right: 4.76%;
  left: 53.38%;
  width: 41.85%;
  bottom: 20%;
  top: 20.77%;
  height: 59.23%;
}
.table-row {
  display: flex;
  flex-direction: row;
  position: absolute;
  inset: 0;
}
</style>

<style scoped>
.container-today {
  background: #ffffff;
  width: 570px;
  height: 435px;
  position: relative;
  overflow: hidden;
}
.container-5-days {
  background: #ffffff;
  width: 870px;
  height: 435px;
  position: relative;
  overflow: hidden;
}
.result-5-days {
  background: #f6f1ee;
  border-radius: 16px;
  width: 800px;
  height: 400px;
  position: relative;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}
.result-collect {
  display: grid;
  grid-auto-flow: column;
  scroll-behavior: auto;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  border-radius: 16px;
  position: absolute;
  white-space: nowrap;
}

/* Optionally, you can add a custom scrollbar style for better appearance */
.result-collect::-webkit-scrollbar {
  display: none;
}

.container-5-days .result-content-2 {
  display: flex;
  gap: 20px; /* Adjust the gap between cards */
  overflow-x: auto;
}

.result-content-2 {
  background: #f6f1ee;
  border-radius: 2px;
  padding: 10px 25px 10px 25px;
  flex: 0 0 auto; /* Allow items to shrink, but don't grow */
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
}

.result-content-2 > div {
  scroll-snap-align: start;
  text-align: center;
  background-color: #fcc173;
  padding: 10px 10px;
  height: 300px;
  width: 230px;
  border-radius: 8px;
}

.nama-kota {
  color: #292929;
  text-align: center;
  font: 700 30px "ProductSans-Bold", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0px 0px 0px
}
.jam {
  color: #292929;
  text-align: center;
  font: 700 30px "ProductSans-Bold", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0px 0px 0px;
}
.icon-cuaca {
  flex-shrink: 0;
  width: 150px;
  height: 150px;
  position: relative;
  margin-top: 25px;
  align-items: center;
}
.icon-cuaca2 {
  flex-shrink: 0;
  width: 150px;
  height: 150px;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.kondisi-cuaca {
  color: #292929;
  text-align: center;
  font: 500 25px "ProductSans-Regular", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
}
.date-cuaca {
  color: #292929;
  text-align: center;
  font: 700 30px "ProductSans-Bold", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
}
.judul-cuaca {
  color: #292929;
  text-align: center;
  font: 700 25px "ProductSans-Bold", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.description-cuaca {
  color: #292929;
  text-align: center;
  font: 400 italic 25px "ProductSans-Italic", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
