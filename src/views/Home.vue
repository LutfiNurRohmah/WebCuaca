<template>
  <div class="home">

    <div class="navbar">
      <div class="frame-4">
        <div class="cek-cuaca">CekCuaca</div>
        <div class="frame-3">
          <div class="beranda">Beranda</div>
          <div class="about-us">About Us</div>
        </div>
      </div>
    </div>

    <div class="search_container">
      <div class="search_inputContainer">
        <div class="input_wrap">
          <input
            class="input_search"
            placeholder="Cari kota di sini..."
            v-model="keyword"
            @keypress.enter="searchAction"
          />
        </div>

        <div @click="searchAction" class="input_btn">
          <div class="cari3">Cari</div>
        </div>

      </div>
    </div>
    <Result v-bind:data="data" v-bind:data2="data2"></Result>
    
    <div class="cek-cuaca-di-lokasimu">Cek cuaca di lokasimu</div>

    <div class="icon-sun">
      <img class="bolt-isolated-2" src="@/assets/sun.png" />
    </div>
    <div class="icon-clouds">
      <img class="bolt-isolated-2" src="@/assets/clouds.png" />
    </div>

  </div>

  <!-- <div v-for="(cuaca) in data3">
        <div class="result_content2" v-if="cuaca.weather && !data2.isLoading">
          <h5>{{ formatTime(cuaca.dt_txt) }}</h5>
        <img
        :src="`http://openweathermap.org/img/wn/${cuaca.weather[0].icon}@2x.png`"
        />
        <h4>{{ cuaca.weather[0].description }}</h4>
        </div>
  </div> -->
</template>

<!-- <template>
  <div class="web-cek-cuaca">
  <div class="navbar">
    <div class="frame-4">
      <div class="cek-cuaca">CekCuaca</div>
      <div class="frame-3">
        <div class="beranda">Beranda</div>
        <div class="about-us">About Us</div>
      </div>
    </div>
  </div>
  

  
  <div class="vector-weather">
    <div class="icon-sun">
      <img class="bolt-isolated-2" src="@/assets/sun.png" />
    </div>
    <div class="icon-clouds">
      <img class="bolt-isolated-2" src="@/assets/clouds.png" />
    </div>
  </div>

  <div class="cari">
    <div class="search">
      <input
            class="input_search"
            placeholder="Cari lokasi..."
            v-model="keyword"
            @keypress.enter="searchAction"
          />
    </div>    
  </div>

  

  <div class="button-cari">
    <div class="rectangle-2"></div>
    <div class="cari2">Cari</div>
  </div>
    <div class="cek-cuaca-di-lokasimu">Cek cuaca di lokasimu</div>
  </div>
</template> -->

<style scoped>
.home,
.home * {
  box-sizing: border-box;
}
.home {
  background: #ffffff;
  width: auto;
  height: auto;
  position: relative;
  overflow: hidden;
}
.navbar {
  background: #f6f1ee;
  padding: 23px 50px 23px 50px;
  width: auto;
  height: 76px;
  position: relative;
  left: 0px;
  top: 0px;
  overflow: hidden;
}
.frame-4 {
  display: flex;
  flex-direction: row;
  gap: 1080px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}
.cek-cuaca {
  color: #ed7d31;
  text-align: left;
  font: 900 25px "Poppins-Black", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.frame-3 {
  display: flex;
  flex-direction: row;
  gap: 57px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}
.beranda {
  color: #ed7d31;
  text-align: left;
  font: 400 18px "ProductSans-Regular", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.cari3 {
  color: #292929;
  text-align: left;
  font: 400 18px "ProductSans-Regular", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.about-us {
  color: #ed7d31;
  text-align: left;
  font: 400 18px "ProductSans-Regular", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.vector-weather {
  position: absolute;
  inset: 0;
}
.icon-sun {
  width: 560.71px;
  height: 560.71px;
  position: absolute;
  left: 795.6px;
  top: 100px;
  overflow: hidden;
}
.bolt-isolated-2 {
  position: absolute;
  right: 0%;
  left: 0%;
  width: 100%;
  bottom: 0%;
  top: 0%;
  height: 100%;
}
.icon-clouds {
  width: 560.71px;
  height: 560.71px;
  position: absolute;
  left: 860px;
  top: 270px;
  overflow: hidden;
}
.cari {
  position: absolute;
  inset: 0;
}
.search {
  background: #f6f1ee;
  border-radius: 5px;
  border-style: solid;
  border-color: #ffcc70;
  border-width: 2px;
  width: 400px;
  height: 55px;
  position: absolute;
  left: 141px;
  top: calc(50% - -15px);
}
.cari-lokasi {
  color: rgba(41, 41, 41, 0.5);
  text-align: left;
  font: 400 18px "ProductSans-Regular", sans-serif;
  position: absolute;
  left: 159px;
  top: 544px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.button-cari {
  position: absolute;
  inset: 0;
}
.rectangle-2 {
  background: #ee9322;
  border-radius: 5px;
  width: 110px;
  height: 55px;
  position: absolute;
  left: 556px;
  top: calc(50% - -15px);
}
.cari2 {
  color: #292929;
  text-align: left;
  font: 400 20px "ProductSans-Regular", sans-serif;
  position: absolute;
  left: 593px;
  top: 543px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.cek-cuaca-di-lokasimu {
  color: #292929;
  text-align: left;
  font: 700 60px "ProductSans-Bold", sans-serif;
  position: absolute;
  left: 141px;
  top: calc(32% - 90px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
}


.search_container {
  background: #ffffff;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 768px;
}
.search_logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search_logo > img {
  height: 35vh;
  margin-right: 15px;
}
@media screen and (max-width: 768px) {
  .search_logo > img {
    height: 15vh;
  }
  .search_container {
    flex-direction: column;
    height: 30vh;
  }
  .search_logo > img {
    margin-right: 0;
  }
}
.search_logo > h3 {
  font-size: 17px;
}
.search_inputContainer {
  flex: 0.8;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.input_wrap {
  width: 400px;
  height: 55px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  background: #f6f1ee;
  justify-content: space-between;
}
.input_search {
  flex: 1;
  height: 55px;
  border-radius: 5px;
  border: none;
  outline: none;
  padding-left: 15px;
  padding-right: 5px;
  font-size: 15px;
  background: #f6f1ee;
  border-style: solid;
  border-color: #ffcc70;
  border-width: 2px;
}
.input_search:focus {
  font-size: 15px;
}
.input_search::placeholder {
  font-size: 15px;
  color: rgba(41, 41, 41, 0.5);
  font-weight: 500;
}
.input_btn {
  left: 15px;
  flex: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ee9322;
  border-radius: 5px;
  height: 55px;
  cursor: pointer;
  position: relative;
}
</style>

<script>
// @ is an alias to /src
import Result from "@/components/Result.vue";

export default {
  name: "Home",
  components: {
    Result,
  },
  data() {
    return {
      keyword: "",
      coordinat: {},
      data: { isLoading: false },
      data2: { isLoading: false },
      datacuacakota: { isLoading: false },
      data3: {},
      error: "",
      baseURL: "https://api.openweathermap.org",
      apiKey: process.env.VUE_APP_APIKEY,
      kota: [
        "ambon",
        "aceh",
        "jakarta",
        "yogyakarta",
        "surabaya"
      ]
    };
  },
  methods: {
    searchAction() {
      this.data = { ...this.data, isLoading: true };
      fetch(
        `${this.baseURL}/data/2.5/weather?q=${this.keyword}&appid=${this.apiKey}&units=metric&lang=id`
      )
        .then((res) => res.json())
        .then((data) => {
          this.data = { ...data, isLoading: false };
          const coordinat = data.coord
          this.get5daysweather(coordinat.lat, coordinat.lon)
        })
        .catch((err) => (this.error = err));

    },
    get5daysweather(lat, lon) {
      this.data2 = { ...this.data2, isLoading: true };
      fetch(
        `${this.baseURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&lang=id`
      )
        .then((res) => res.json())
        .then((data) => {
          this.data2 = { ...data, isLoading: false };
          // data.list.forEach(datetime => {
          //   console.log(datetime.dt_txt)
          // });
          // console.log(this.data2.list[0].dt_txt) //data waktu
        })
        .catch((err) => (this.error = err));
    },
    cekcuacakota(kota) {
      this.datacuacakota = { ...this.datacuacakota, isLoading: true };
      fetch(
        `${this.baseURL}/data/2.5/weather?q=${kota}&appid=${this.apiKey}&units=metric&lang=id`
      )
        .then((res) => res.json())
        .then((data) => {
          // this.datacuacakota = { ...data, isLoading: false };
          this.$set(this.data3, kota, { ...data});
          // console.log(this.data3)
        })
        .catch((err) => {
          this.error = err
          this.$set(this.datacuacakota, kota, { isLoading: false, error: err })
        });
    },
  },
  created() {
    this.kota.forEach(namakota => this.cekcuacakota(namakota))
  },
};
</script>
