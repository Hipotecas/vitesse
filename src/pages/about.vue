<script setup>
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
</script>

<template>
  <div class="relative">
    <img src="../assets/images/banner_about_our.jpg" class="w-full <sm:h-35">
    <span
      class="center text-6xl text-white z-10 banner-text <sm:(text-lg w-8/10 text-center)"
    >
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
  <div class="text-3xl <sm:text-xl mx-auto text-center font-extrabold">
    Our Core Values
  </div>
  <div class="z-flex mt-40 about-our">
    <div v-for="(item, index) in cover" :key="index">
      <p class="font-b-l font-26 txt-c" v-html="item.title" />
      <p class="mt-40 font-b-s txt-c mh-100">
        {{ item.desc }}
      </p>
      <p
        v-for="(sitem, sindex) in item.item"
        :key="sindex"
        class="z-flex font-b-s mt-20"
      >
        <span class="mr-10">•</span>
        <span class="font-gray-s">{{ sitem }}</span>
      </p>
    </div>
  </div>
</template>

