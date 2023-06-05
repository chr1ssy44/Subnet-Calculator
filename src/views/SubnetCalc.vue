<script setup>
import {ref, watch} from 'vue'

async function Enter () {

  const result = await fetch ('https://networkcalc.com/api/ip/192.168.1.1/24?binary=true')

  console.log(result)
}

</script>

<template>
<h1>Subnet Calc</h1>
<v-card
    class="mx-auto"
    max-width="344"
    variant="outlined"
  >
    <v-card-item>
        <div class="text-overline mb-1">
          SUBNET MASK
        </div>
        <v-text-field
        label=""
      ></v-text-field>
      <v-btn @click="Enter">Enter</v-btn>
    </v-card-item>
  </v-card>
  
</template>
