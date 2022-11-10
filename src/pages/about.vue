<script setup>
import { Swipe, SwipeItem } from 'vant';
const cover = [{
  title: 'Passion to<br />Win',
  desc: 'Be positive, focused and ambitious .Never give up,provide excellent execution and deliver results.',
  item: [
    'Execution and operational excellence are a priority. Maintain a sense of urgency.',
    'Outperform the competition through collaboration in everything we do.',
    'Invest to be best in all that we do.',
    'Willingly accept challenges. Then connect and collaborate in order to deliver unique solutions.',
  ],
}, {
  title: 'Customer<br />Focus',
  desc: 'Be accountable, dependable and self-driven. Customers are the reason for our success in business. ',
  item: [
    'Understand the market and exceed customers’ needs and expectations.',
    'Achieve and maintain the highest level of excellence in our strategy, employees, product and support for our customers.',
    'Establish and maintain strong customer relations with a win-win business model.',
    'Be agile to ever changing market forces in the best interests of our customers.',
  ],
}, {
  title: 'Innovation &<br />Curiosity',
  desc: 'Be bold, creative and effective.Set the industry benchmark through disruptive innovation, experiment and continuous improvement. ',
  item: [
    'Make an impact through collaboration and by capitalizing on opportunities for breakthrough innovations.',
    'Invest in advanced, world-class technologies that enable disruptive solutions that bring application value to our end customers.',
    'Challenge the status quo and each other before our competitors do.',
    'Leverage your curiosity and develop yourself beyond your dreams. Imagine the impossible and be more effective in our action.',
  ],
}, {
  title: 'Trust &<br />Integrity',
  desc: 'Be open, honest and authentic.We do the right thing, the right way, for the right reasons.',
  item: [
    'Create a workplace where everyone feels welcome, heard, valued and excited to grow.',
    'Promote a climate of respect and trust. Be rigorous, but not ruthless.',
    'Share knowledge, skill and information among and across teams.',
    'Maintain the highest integrity. It’s the “how” we do things that makes us different.',
  ],
}]
const photos = [{
  class: '',
  name: 'Randall Wollschlager',
  title: 'President & CEO',
  desc: 'Strong leadership and experience in Automotive Business in the semiconductor industry.Prior to joining Zenith, he spent 23 years at Maxim Integrated where he was the Senior VP of the Automotive Business Unit (ABU) and 14 years at Motorola Semiconductor...',
}, {
  class: 'about-photo-c',
  name: 'Zenith Fu',
  title: 'Vice President, Engineering',
  desc: 'Strong leadership and rich experience in resourch and development in the semiconductor industry. Prior to joining Zenith, he spent 16 years at Qualcom, AMD and Freescales...',
}, {
  class: 'about-photo-r',
  name: 'Yong Diao',
  title: 'Vice President, Sales&Marketing',
  desc: 'Strong leadership and rich experience in the semiconductor industry. Perior to join Zenith, he spent 20 years in Texas Instruments...',
}]
const getImage = (index) => {
  return new URL(`../assets/images/about_photo_${index}.png`, import.meta.url).href
}
const isMobile = useMediaQuery('(max-width:640px)')
</script>

<template>
  <div class="relative">
    <img src="../assets/images/banner_about_our.jpg" class="w-full <sm:h-35">
    <span class="center text-6xl text-white z-10 banner-text <sm:(text-lg w-8/10 text-center)">
      About us
    </span>
  </div>
  <div class="container flex py-20 <sm:(w-screen p-4)">
    <div class="flex flex-col w-1/2 mr-4">
      <p class="text-3xl font-extrabold <sm:text-xl">
        Vision
      </p>
      <p class="text-xl font-normal text-hex-4d4d4d mt-10 <sm:(mt-4 text-base)">
        To be a premier international supplier of high performance analog and
        mixed-signal semiconductor products delivering best in class growth and
        profitability.
      </p>
    </div>
    <div class="flex flex-col w-1/2">
      <p class="text-3xl font-extrabold <sm:text-xl">
        Mission
      </p>
      <p class="text-xl font-normal text-hex-4d4d4d mt-10 <sm:(mt-4 text-base)">
        We partner with our customers to optimize the engineering solutions that
        interface the real world of temperature, time, power conversion and
        signal path.
      </p>
    </div>
  </div>
  <div v-if="!isMobile" class="text-3xl <sm:text-xl mx-auto text-center font-extrabold">
    Meet Our Core Values
  </div>
  <div v-else class="core h-30 rounded-md flex items-center text-center text-black justify-center">
    <p class="text-2xl bg-white p-4 rounded-md">
      Meet Our Core Values
    </p>
  </div>
  <div class="container <sm:screen">
    <div class="flex mt-10 about-our <sm:(flex-col px-4)">
      <div
        v-for="(item, index) in cover" :key="index"
        class="not-last:mr-4 rounded-lg flex-1 px-4 py-6 bg-hex-0047ab1a <sm:(mx-0 my-4 w-[calc(100vw-2rem)])"
      >
        <p class="font-bold text-3xl text-center" v-html="item.title" />
        <p class="mt-10 text-base text-center h-min-25">
          {{ item.desc }}
        </p>
        <p v-for="(sitem, sindex) in item.item" :key="sindex" class="flex text-base mt-5">
          <span class="mr-3">•</span>
          <span class="text-lg text-hex-4d4d4d">{{ sitem }}</span>
        </p>
      </div>
    </div>
  </div>
  <div class="container <sm:w-screen">
    <div class="about-team">
      <p class="text-6xl leading-9 min-h-25 pl-24">
        Meet Our Core Team
      </p>
      <div v-if="!isMobile" class="flex ">
        <div v-for="(item, index) in photos" :key="index" class="flex-1 bg not-last:mr-4 text-white p-7 ">
          <div class="about-photo" :class="item.class">
            <img :src="getImage(index)" alt="">
          </div>
          <div class="font-bold text-3xl">
            {{ item.name }}
          </div>
          <div class="text-xl mt-10">
            {{ item.title }}
          </div>
          <div class="text-base mt-10 h-m-45">
            {{ item.desc }}
          </div>
          <div class="inline-block bg-white text-black text-sm font-bold py-2 px-5 rounded-full" @click="linkTo(index)">
            More
          </div>
        </div>
      </div>
      <div v-else>
        <Swipe show-indicators="false">
          <SwipeItem v-for="(item, index) in photos" :key="index" class="flex-1 bg  text-white p-7">
            <div class="about-photo" :class="item.class">
              <img :src="getImage(index)" alt="">
            </div>
            <div class="font-bold text-3xl">
              {{ item.name }}
            </div>
            <div class="text-xl mt-10">
              {{ item.title }}
            </div>
            <div class="text-base mt-10 h-m-45">
              {{ item.desc }}
            </div>
            <div
              class="inline-block bg-white text-black text-sm font-bold py-2 px-5 rounded-full"
              @click="linkTo(index)"
            >
              More
            </div>
          </SwipeItem>
        </Swipe>
      </div>
    </div>
  </div>
</template>

<style>
.about-team {
  background: url('../assets/images/about_bg.jpg') right top no-repeat;
  background-size: auto 261px;
  padding-top: 140px;
  margin-top: 50px;
}

.bg {
  background: linear-gradient(0.25deg, #C6DAF5 -56.77%, #0047AB 99.78%);
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 8px;

}
.core {
  background: linear-gradient(0.25deg, #C6DAF5 -56.77%, #0047AB 99.78%);
}
</style>
