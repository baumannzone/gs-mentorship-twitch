<template>
  <div>
    <h2>{{ getTwitchToken }}</h2>
    <!-- <pre>
      {{ $route }}
    </pre> -->
    <Spinner :start="!this.getTwitchToken" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Spinner from "@/components/Spinner.vue";

export default {
  created() {
    // Loading...
    const fullPath = this.$route.fullPath;
    const token = fullPath.split("#access_token=")[1].split("&")[0];
    setTimeout(() => {
      this.SET_TWITCH_TOKEN(token);
    }, 3000);
  },
  computed: {
    ...mapGetters(["getTwitchToken"]),
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
