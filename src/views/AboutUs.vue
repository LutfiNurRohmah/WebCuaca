<template>
<div class="about-us">
  <div class="data-tim">
    <div class="tim">
      <div class="foto-tim">
        <img class="damar" src="@/assets/damar.png" />
      </div>
      <div class="description-tim">
        <div class="judul-person">
          <div class="nama">Damar Albaribin Syamsu</div>
          <div class="role">Administrator</div>
        </div>
        <div class="description-person">
          Orang yang bertekad menghibur banyak orang dikala dirinya bersedih
        </div>
      </div>
    </div>
    <div class="tim">
      <div class="foto-tim2">
        <img class="surya" src="@/assets/surya.png" />
      </div>
      <div class="description-tim2">
        <div class="judul-person2">
          <div class="nama">Surya Agung Saputra</div>
          <div class="role">Administrator</div>
        </div>
        <div class="description-person">
          Sangat bangga menyebut dirinya Sultan Surya
        </div>
      </div>
    </div>
    <div class="tim">
      <div class="foto-tim3">
        <img class="azmi" src="@/assets/azmi.png" />
      </div>
      <div class="description-tim3">
        <div class="description-person2">
          Orang yang tak tau arah tujuan dan sedang mencari kitab suci
        </div>
        <div class="judul-person3">
          <div class="nama">Syahrul Maula Azmi</div>
          <div class="role">UI/UX Designer &amp; Front End Dev</div>
        </div>
      </div>
    </div>
    <div class="tim">
      <div class="foto-tim4">
        <img class="lutfi" src="@/assets/lutfi.png" />
      </div>
      <div class="description-tim3">
        <div class="description-person3">
          Wanita kuat di dalam tim yang dirinya hanya perempuan seorang
        </div>
        <div class="judul-person4">
          <div class="nama">Lutfi Nur Rohmah</div>
          <div class="role">Back End Dev</div>
        </div>
      </div>
    </div>
    <div class="tim">
      <div class="foto-tim5">
        <img class="david" src="@/assets/david.png" />
      </div>
      <div class="description-tim3">
        <div class="description-person4">
          Orang yang gagah dan pemberani. Terkadang lucu
        </div>
        <div class="judul-person5">
          <div class="nama">Hanasta David Fauza</div>
          <div class="role">Administrator</div>
        </div>
      </div>
    </div>
  </div>
  <div class="description">
    We from group 2 present the CekCuaca website. A website that can help you
    find weather information on your location or other areas that you want to
    search.
  </div>
  <div class="title-about-us">
    <span
      ><span class="title-about-us-span">We are the people who<br />make </span
      ><span class="title-about-us-span2">CekCuaca</span></span
    >
  </div>
  <div class="navbar">
    <div class="cek-cuaca">CekCuaca</div>
    <div class="menu-items">
      <div class="beranda">Beranda</div>
      <div class="about-us2">About Us</div>
    </div>
  </div>
</div>
</template>

<style scoped>
.about-us,
.about-us * {
  box-sizing: border-box;
}
.about-us {
  background: #ffffff;
  width: 1474px;
  height: 943px;
  position: relative;
  overflow: hidden;
}
.data-tim {
  position: absolute;
  inset: 0;
}
.tim {
  width: 257.95px;
  height: 355px;
  position: static;
}
.foto-tim {
  background: #276e5c;
  position: absolute;
  right: 3.47%;
  left: 79.03%;
  width: 17.5%;
  bottom: 26.72%;
  top: 46.55%;
  height: 26.72%;
  overflow: hidden;
}
.damar {
  width: 298px;
  height: 298px;
  position: absolute;
  left: calc(50% - 148.98px);
  top: calc(50% - 149px);
}
.description-tim {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  right: 3.47%;
  left: 79.03%;
  width: 17.5%;
  bottom: 15.8%;
  top: 74.87%;
  height: 9.33%;
}
.judul-person {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 235px;
  position: relative;
}
.nama {
  color: #000000;
  text-align: center;
  font: 700 20px "Thicccboi-Bold", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.role {
  color: #000000;
  text-align: center;
  font: 500 16px "Thicccboi-Medium", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.description-person {
  color: #000000;
  text-align: center;
  font: 400 14px "Thicccboi-Regular", sans-serif;
  opacity: 0.699999988079071;
  position: relative;
  width: 252px;
}
.foto-tim2 {
  background: #ed7d31;
  position: absolute;
  right: 22.36%;
  left: 60.14%;
  width: 17.5%;
  bottom: 26.72%;
  top: 46.55%;
  height: 26.72%;
  overflow: hidden;
}
.surya {
  width: 274px;
  height: 301px;
  position: absolute;
  left: calc(50% - 137.42px);
  top: calc(50% - 126px);
}
.description-tim2 {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 22.36%;
  left: 60.14%;
  width: 17.5%;
  bottom: 15.8%;
  top: 74.87%;
  height: 9.33%;
}
.judul-person2 {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 201px;
  height: 41px;
  position: relative;
}
.foto-tim3 {
  background: #ed7d31;
  position: absolute;
  right: 41.25%;
  left: 41.25%;
  width: 17.5%;
  bottom: 26.72%;
  top: 46.55%;
  height: 26.72%;
  overflow: hidden;
}
.azmi {
  width: 783px;
  height: 1170px;
  position: absolute;
  left: 401px;
  top: -680px;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(-1, 1);
}
.description-tim3 {
  width: 257.95px;
  height: 88px;
  position: static;
}
.description-person2 {
  color: #000000;
  text-align: center;
  font: 400 14px "Thicccboi-Regular", sans-serif;
  opacity: 0.699999988079071;
  position: absolute;
  right: 41.25%;
  left: 41.25%;
  width: 17.5%;
  bottom: 15.8%;
  top: 80.81%;
  height: 3.39%;
}
.judul-person3 {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 42.01%;
  left: 42.01%;
  width: 15.97%;
  bottom: 20.78%;
  top: 74.87%;
  height: 4.35%;
}
.foto-tim4 {
  background: #ed7d31;
  position: absolute;
  right: 60.14%;
  left: 22.36%;
  width: 17.5%;
  bottom: 26.72%;
  top: 46.55%;
  height: 26.72%;
  overflow: hidden;
}
.lutfi {
  width: 287px;
  height: 510px;
  position: absolute;
  left: calc(50% - 143.58px);
  top: calc(50% - 216px);
}
.description-person3 {
  color: #000000;
  text-align: center;
  font: 400 14px "Thicccboi-Regular", sans-serif;
  opacity: 0.699999988079071;
  position: absolute;
  right: 60.14%;
  left: 22.36%;
  width: 17.5%;
  bottom: 15.8%;
  top: 80.81%;
  height: 3.39%;
}
.judul-person4 {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  right: 63.26%;
  left: 25.56%;
  width: 11.18%;
  bottom: 20.78%;
  top: 74.87%;
  height: 4.35%;
}
.foto-tim5 {
  background: #ed7d31;
  position: absolute;
  right: 79.03%;
  left: 3.47%;
  width: 17.5%;
  bottom: 26.72%;
  top: 46.55%;
  height: 26.72%;
  overflow: hidden;
}
.david {
  width: 281px;
  height: 385px;
  position: absolute;
  left: calc(50% - 140.16px);
  top: -19px;
}
.description-person4 {
  color: #000000;
  text-align: center;
  font: 400 14px "Thicccboi-Regular", sans-serif;
  opacity: 0.699999988079071;
  position: absolute;
  right: 79.03%;
  left: 3.47%;
  width: 17.5%;
  bottom: 15.8%;
  top: 80.81%;
  height: 3.39%;
}
.judul-person5 {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 80.69%;
  left: 5.21%;
  width: 14.1%;
  bottom: 20.78%;
  top: 74.87%;
  height: 4.35%;
}
.description {
  color: #000000;
  text-align: center;
  font: 400 20px "Thicccboi-Regular", sans-serif;
  position: absolute;
  right: 23.61%;
  left: 23.61%;
  width: 52.78%;
  bottom: 583px;
  top: 314px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title-about-us {
  text-align: center;
  font: 700 60px/70px "ProductSans-Bold", sans-serif;
  position: absolute;
  left: calc(50% - 312px);
  bottom: 68.72%;
  top: 16.44%;
  height: 14.85%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title-about-us-span {
  color: #292929;
  font: 700 60px/70px "ProductSans-Bold", sans-serif;
}
.title-about-us-span2 {
  color: #ed7d31;
  font: 700 60px/70px "ProductSans-Bold", sans-serif;
}
.navbar {
  background: #f6f1ee;
  padding: 23px 50px 23px 50px;
  height: 76px;
  position: absolute;
  right: 0px;
  left: 0px;
  top: 0px;
  overflow: hidden;
}
.cek-cuaca {
  color: #ed7d31;
  text-align: left;
  font: 900 20px "Poppins-Black", sans-serif;
  position: absolute;
  left: 50px;
  top: 23px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.menu-items {
  width: 161px;
  height: 22px;
  position: absolute;
  right: 50px;
  top: 27px;
}
.beranda {
  color: #ed7d31;
  text-align: left;
  font: 400 18px "ProductSans-Regular", sans-serif;
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.about-us2 {
  color: #ed7d31;
  text-align: left;
  font: 700 18px "ProductSans-Bold", sans-serif;
  position: absolute;
  left: 89px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>