<script setup lang="ts">
</script>

<template>
  <div class="">
    <div class="relative">
      <img src="../assets/images/banner-product.jpg" class="w-full">
      <span class="center text-6xl text-white z-10 <sm:(text-lg w-8/10 text-center)">No matter where you are going, we can help you get there!</span>
    </div>

    <div class="container mx-auto <sm:(w-screen px-4)">
      <div class="py-20 <sm:py-4">
        <p class="text-2xl <sm:text-xl">
          We are developing products from a six pin to a 64 pin package and anything greater than a discrete and less than a micro.
        </p>
      </div>
      <div class="flex <sm:flex-col">
        <img src="../assets/images/product_img_1.jpg" alt="" class="w-1/2 <sm:w-full">
        <div class="flex-1 bg-hex-f8f8f8 flex items-center pl-15 font-semibold text-2xl leading-10 <sm:(text-lg p-4)">
          Power Management 5-40V<br>
          Controllers<br>
          Converters<br>
          Switch-mode<br>
          Linear
        </div>
      </div>
      <div class="flex flex-row-reverse <sm:flex-col">
        <img src="../assets/images/product_img_2.jpg" class="w-1/2 <sm:w-full">
        <div class="flex-1 bg-hex-f8f8f8 flex items-center pl-15 font-semibold text-2xl leading-10 <sm:(text-lg p-4)">
          LED Lighting 80V<br>
          Controllers<br>
          Converter<br>
          Switch-mode<br>
          Linear
        </div>
      </div>
      <div class="flex <sm:flex-col">
        <img src="../assets/images/product_img_3.jpg" class="w-1/2 <sm:w-full">
        <div class="flex-1 bg-hex-f8f8f8 flex items-center pl-15 font-semibold text-2xl leading-10 <sm:(text-lg p-4)">
          <p><span class="mr-10">ASSP</span> combinations of<br>existing IP to meet the demands of<br>your specific application.</p>
        </div>
      </div>
      <div class="product-contact text-white p-20 mt-20 <sm:(p-4 my-4 mx-0)">
        <div class="text-3xl <sm:text-xl">
          Contact us
        </div>
        <div class="text-2xl my-4 <sm:text-base">
          If you have any technical relevant questions, please contact us freely and submit here.
        </div>
        <router-link to="/contact" class="inline-block cursor-pointer bg-white text-black rounded-full px-4 h-8 leading-8">
          Submit
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.banner-text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.product-contact {
    background: url('../assets/images/product_contact.jpg') no-repeat;
    background-size: cover;
    border-radius: 14px;
}
</style>
