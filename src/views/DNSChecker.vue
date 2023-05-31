<template>
    <h1>DNS Checker</h1>

<div class="mt-4 text-subtitle-2"></div>

<v-card width="100 mx-auto">
  <v-card-item>
    <v-text-field
        label="Enter DNS"
      ></v-text-field>

    <v-card-subtitle>This is a subtitle</v-card-subtitle>
  </v-card-item>

  <v-btn id="domain" type="submit" block class="mt-2">Calculate
  </v-btn>
</v-card>

<v-checkbox label="Checkbox"></v-checkbox>



</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
body{
    display: flex;
    justify-content: center;
    font-family: 'Questrial', sans-serif;
}
#domain{
    background-color:#1C82AD;
}
</style>