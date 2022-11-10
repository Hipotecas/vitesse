<script setup lang="ts">
// 0 10 24
</script>

<template>
  <div class="w-full">
    <div class="w-full relative bg-hex-000b40">
      <img src="../assets/images/banner_index.jpg">
      <div
        class="bg-text text-xl lg:text-6xl leading-96px! text-white font-semibold"
      >
        Courage
        <br>
        Creativity
        <br>
        Commitment
      </div>
    </div>
    <div class="container mx-auto text-black text-2xl font-light <sm:w-screen">
      <div class="py-20 flex <sm:(flex-col px-4 w-screen py-4 text-sm)">
        <div class="w-110 mr-12 <sm:(m-0 w-auto)">
          At Zenith, we believe that proper culture is our top priority,
          commitment brings hope, execution builds trust, unification and
          collaboration build better solutions.
          <p class="h-1 bg-hex-0047ab mt-15 <sm:my-4 <sm:w-full" />
        </div>
        <span class="flex-1 <sm:w-full">
          Zenith Semiconductor (Zenith-Semi.com) is an innovator in the design,
          manufacture, and marketing of a portfolio of high-performance analog
          and mixed-signal circuits (ICs) dedicated to solving difficult
          engineering challenges. We partner with our customers to optimize the
          engineering solutions that interface the real world of temperature,
          time, power and signal.
        </span>
      </div>
      <div class="blue-bg p-20 text-white <sm:(p-4 mx-4)">
        <div class="flex items-center <sm:text-sm">
          <div>
            "We at Zenith encourage the three P's, People, Products, and
            Profits. Our culture supports people, our employees, our customers,
            and our investors. We are focused on developing premium
            high-performance products.The profits support our long-range plans
            and sustainability."
            <br>
            <p class="mt-5">
              Randall Wollschlager
              <br>
              President & CEO
            </p>
          </div>
          <img src="../assets/images/index_photo.png" class="<sm:(w-25)">
        </div>
      </div>
      <div class="<sm:px-4">
        <div class="flex items-center mt-8 text-white <sm:flex-col">
          <div class="blue-bg p-20 <sm:(p-4 text-sm)">
            We are an international team with the expertise to bring value to
            the world's most challenging semiconductor applications.
          </div>
          <img src="../assets/images/map.jpg" class="ml-4 <sm:(ml-0 mt-4)">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.bg-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  line-height: 96px;
  @media screen and (max-width: 640px) {
    width: auto;
    line-height: 24px;
    left: 10px;
    top: 50%;
    transform: translate(10px, -50%);
  }
}
.blue-bg {
  background: linear-gradient(0.25deg, #c6daf5 -56.77%, #0047ab 99.78%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
</style>
