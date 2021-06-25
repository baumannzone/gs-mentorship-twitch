<template>
  <a :href="loginUrl">Click to login</a>
</template>

<script>
const NODE_ENV = process.env.NODE_ENV;

const redirect =
  NODE_ENV === "development"
    ? "http://localhost:8080/#/redirect/"
    : "https://gs-mentorship-twitch.vercel.app/#/redirect/";

console.log(NODE_ENV);
console.log(redirect);

export default {
  computed: {
    loginUrl() {
      const baseUrl = "https://id.twitch.tv/oauth2/authorize";
      const params = {
        client_id: process.env.VUE_APP_CLIENT_ID,
        redirect_uri: redirect,
        response_type: "token",
        scope: "chat:edit chat:read",
      };
      return `${baseUrl}?client_id=${
        params.client_id
      }&redirect_uri=${encodeURIComponent(params.redirect_uri)}&response_type=${
        params.response_type
      }&scope=${params.scope}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
