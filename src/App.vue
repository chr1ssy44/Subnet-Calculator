<script setup> 

</script>

<template>
  <nav> 
    <v-tab to="/">Home</v-tab>
    <v-tab to="/SubnetCalc">Subnet Calc</v-tab>
      <v-tab to="/IPChecker">IP Checker</v-tab>
      <v-tab to="/BinaryEncoderDecoder">Binary Encoder/Decoder</v-tab>
      <v-tab to="/TLSCertChecker">TLS Cert Checker</v-tab>
  </nav>
  <router-view></router-view>

</template>


<style scoped>

</style>
