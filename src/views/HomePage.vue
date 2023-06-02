<script setup>

async function Button () {

  const result = await fetch('https://networkcalc.com/api/binary/00001010')

  console.log(result);
}


</script>

<template>
<h1>Home Page</h1>
<v-card text="Our website will be used to help networkers compute the number of subnets in a bigger network, the number of hosts that can fit in a subnet, and the size of all the subnets
" variant="outlined">
</v-card>

<v-btn @click="Button">Retrieve Data</v-btn>


</template>