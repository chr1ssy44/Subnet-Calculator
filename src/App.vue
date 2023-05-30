<script setup> 

</script>

<template>
  <nav> 
    <v-tab to="/">Home</v-tab>
    <v-tab to="/SubnetCalc">Subnet Calc</v-tab>
      <v-tab to="/DNSChecker">DNS Checker</v-tab>
      <v-tab to="/IPChecker">IP Checker</v-tab>
      <v-tab>Binary Encoder</v-tab>
      <v-tab>Binary Decoder</v-tab>
      <v-tab>TLS Cert Checker</v-tab>
  </nav>
  <router-view></router-view>

</template>


<style scoped>

</style>
