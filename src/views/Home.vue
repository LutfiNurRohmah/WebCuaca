<template>
  <div class="home">
    <div class="search_container">
      <div class="search_logo">
        <img src="@/assets/logo.png" alt="logo CekCuaca" />
      </div>
      <div class="search_inputContainer">
        <div class="input_wrap">
          <input
            class="input_search"
            placeholder="Cari kota di sini..."
            v-model="keyword"
            @keypress.enter="searchAction"
          />
          <div @click="searchAction" class="input_btn">
            <b-icon icon="search"></b-icon>
          </div>
        </div>
      </div>
    </div>
    <Result v-bind:data="data"></Result>
  </div>
</template>

<style scoped>
  .home {
    padding: 0;
    margin: 0;
    width: 100%;
  }
  .search_container {
    background-color: rgb(0, 119, 255);
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 35vh;
    /* z-index: 10;
    position: sticky; */
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
    flex: 0.6;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* padding-left: 10px;
    margin-left: 35px; */
  }
  .input_wrap {
    width: 100%;
    height: 45px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    justify-content: space-between;
  }
  .input_search {
    flex: 0.9;
    /* width: 100%; */
    height: 45px;
    border-radius: 10px;
    border: none;
    outline: none;
    padding-left: 15px;
    padding-right: 5px;
    font-size: 15px;
  }
  .input_search:focus {
    font-size: 15px;
  }
  .input_search::placeholder {
    font-size: 15px;
    color: rgba(0, 119, 255, 0.7);
    font-weight: 500;
  }
  .input_btn {
    flex: 0.1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 119, 255, 0.3);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    min-width: 45px;
    cursor: pointer;
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
        data: { isLoading: false },
        error: "",
        baseURL: "https://api.openweathermap.org",
        apiKey: process.env.VUE_APP_APIKEY,
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
          })
          .catch((err) => (this.error = err));
      },
    },
  };
</script>
