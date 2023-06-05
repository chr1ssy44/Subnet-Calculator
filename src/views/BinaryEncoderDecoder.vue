<script setup>
import {ref} from 'vue'


let binary = ref('')
let newInput = ref('')

async function Encode () {

    const result = await fetch('https://networkcalc.com/api/binary/00001010')

   console.log(result);
  
}

</script>

<template>
    <h1>Binary Encoder/Decoder</h1>
    
    <h3>Encoding</h3>
    <v-select
        :rules="[v => !!v || 'Item is required']"
        label="Select"
        :items="['Base64', 'Base64 URL', 'URL']"
        required
      ></v-select>

    <v-text-field label="Encoder" variant="solo-filled"></v-text-field>
    <v-btn @click="Encode" id="de" type="submit">encode</v-btn>

    <v-text-field label="Decoder" variant="solo-filled"></v-text-field>
    <v-btn id="code" type="submit">decode</v-btn>
</template>

<style>
#code{
    background-color: #C6EBC5;
}

#de{
    background-color: #C6EBC5;
}

</style>