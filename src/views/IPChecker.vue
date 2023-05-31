<template>
    <h1>IP Checker</h1>
    <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field
        label="Enter IP Address or CDIR block"
      ></v-text-field>
      <v-btn id="sub" type="submit" block class="mt-2">Check IP</v-btn>
    </v-form>
  </v-sheet>
</template>

<style>
#sub{
    background-color:#C6EBC5;
}
</style>