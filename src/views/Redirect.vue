<template>
  <div>
    <!-- <h2>{{ tokenFromStore }}</h2> -->
    <!-- <pre>
      {{ $route }}
    </pre> -->
    <Spinner :start="!this.tokenFromStore" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Spinner from "@/components/Spinner.vue";
export default {
  created() {
    // Loading...
    const fullPath = this.$route.fullPath;
    const token = fullPath.split("#access_token=")[1].split("&")[0];
    setTimeout(() => {
      this.SET_TWITCH_TOKEN(token);
      this.tokenFromStore = this.$store.state.twitchToken;
    }, 3000);
    console.log(this.tokenFromStore);
  },
  data() {
    return {
      token: null,
      tokenFromStore: null,
    };
  },
  components: {
    Spinner,
  },
  methods: {
    ...mapMutations(["SET_TWITCH_TOKEN"]),
  },
};
</script>

<style lang="scss" scoped></style>
