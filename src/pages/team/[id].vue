<script setup lang="ts">
const { params } = useRoute()

const { id } = params

const team = [
  {
    name: 'Randall Wollschlager',
    title: 'President & CEO',
    desc: [
      'Randall Wollschlager joined Zenith Semiconductor in 2022 as the President and CEO.  Prior to joining Zenith, he spent 23 years at Maxim Integrated where he was the Senior VP of the Automotive Business Unit (ABU) and 14 years at Motorola Semiconductor.',
      'Randall Wollschlager joined Maxim in 1998 as a Design Director for portable power products serving mostly smart phone manufacturers. Prior to joining Maxim, he spent 14 years as an integrated circuit design engineer and design engineering manager for automotive products at Motorola in Phoenix AZ. Randall has personally designed more than 20 products, holds 5 patents, and has spent 22 years of his 38-year career developing integrated circuits for automotive applications.',
      'In 2007, Randall became the first Managing Director of Design for Maxim\'s Automotive Business Unit (ABU). During his tenure as Managing Director, he established the silicon design team, which now includes more than 100 design engineers. The Automotive BU focused on infotainment, ADAS, cluster, body, and electronic and hybrid vehicles with product lines covering power management, lighting, USB, serializer-deserializer, application-specific standard products (ASSPs), and battery management systems for electric vehicles.',
      'In 2013, Randall was promoted to Vice President and General Manager of Maxim\'s Automotive Business Unit.',
      'Randall was born in Detroit, Michigan. He holds a Bachelor of Science degree in electrical engineering with honors from the University of Michigan and attended Stanford University\'s Executive Program in 2014.  Randall served honorably in the United States Marine Corps prior to pursuing his engineering career.',
    ],
  },
  {
    name: 'Zenith Fu',
    title: 'Vice President of Engineering',
    desc: [
      'Dr. Fu joined Zenith Semiconductor, previously NeuroSens Technology, in 2021 as Vice President of Engineering and director of Austin R&D site.  Prior to joining the company, Dr. Fu worked in Qualcomm as a sensor chip lead and a senior design lead. In Qualcomm R&D, Dr. Fu led developing the prototype of \'Always-on Vision Sensor\', an AI-enabled CMOS vision sensor for IoT and AR applications.',
      'Before Qualcomm, Dr. Fu worked at AMD and Freescale Semiconductor. Dr. Fu was one of the lead designers of the world \'1st generation 3D stacking image sensor\', a silicon stacking technology popular at today\'s high-end image sensor products. He led multiple generations silicon IP development at cutting-edge process node and had rich experience in innovative silicon product development and project management.',
      'Dr Fu hold Ph.D. degree in electrical engineering majors from Yale University. Dr. Fu is the winner of the \'IEEE Society for Artificial Neural Systems Best Paper Award\' and \'IEEE CMOC Symposium Best Paper Award\'. Dr Fu also served on \'Yale Alumni Service Corps\' for Business Consultant for Micro-Businesses in Developing Country.',
    ],
  },
  {
    name: 'Yong Diao',
    title: 'Vice President, Sales&Marketing',
    desc: [
      'Yong Diao  joined Zenith Semiconductor in 2022 as Vice President,Sales&Marketing.  Prior to joining Zenith, he spent 20 years at Texas Instrument where he was China MCU Business Development Manager and 2 years at ZTE where he was wireless system engineer.',
      'In Texas Instrument, Yong led the team to grow China low power MCU line business from below $10M to +100$M level, building strong customer relationship in Auto/Industrial area.',
      'He holds Master and Bachelor of Science degree in electrical engineering in Tsinghua University.',
    ],
  },
] as const
const getImage = () => {
  return new URL(`../../assets/images/photo_${id}.jpg`, import.meta.url).href
}
const current = team[+id]
</script>

<template>
  <AboutBanner />
  <div class="container <sm:w-screen">
    <div class="py-20 flex <sm:(flex-col py-4)">
      <img :src="getImage()" alt="" class="mr-15 h-50 <sm:(mr-0) object-contain">
      <div class="px-4">
        <div class="text-2xl mt-4 font-bold">
          {{ current.name }}
        </div>
        <div class="text-xl mt-4 text-hex-4d4d4d">
          {{ current.title }}
        </div>
        <p v-for="item in current.desc" :key="item" class="text-base mt-4 text-hex-4d4d4d">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>
