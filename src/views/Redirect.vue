<template>
  <div>
    <button @click="f">Save token</button>
    <button @click="getStoreToken">Show token</button>
    <h2>{{ tokenFromStore }}</h2>
    <pre>
      {{ $route }}
    </pre>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  created() {
    // Loading...
    const fullPath = this.$route.fullPath;
    const token = fullPath.split("#access_token=")[1].split("&")[0];
    this.SET_TWITCH_TOKEN(token);
    this.$router.push({ name: "Overlay" });
  },
  data() {
    return {
      token: null,
      tokenFromStore: null,
    };
  },
  methods: {
    ...mapMutations(["SET_TWITCH_TOKEN"]),
  },
};
</script>

<style lang="scss" scoped></style>
