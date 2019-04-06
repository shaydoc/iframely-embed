<template>
    <div class="app">
      <h1>Iframely Embed Demo</h1>
      <form>
        <div>
          <label class="label">Url</label>
          <input class="input" type="text" v-model="url" />
        </div>
        <button class="button" type="submit" @click.prevent="showMedia">Show me!</button>
      </form>

      <div v-if="showMediaFlag">
        <iframely-embed :url="embedUrl" />
      </div>
    </div>
</template>

<script>
import IframelyEmbed from "./components/IframelyEmbed/IframelyEmbed.vue";
import { setTimeout } from "timers";

export default {
  components: {
    IframelyEmbed
  },
  data() {
    return {
      url: null,
      embedUrl: "https://coub.com/view/1kur9x",
      showMediaFlag: true
    };
  },
  methods: {
    showMedia() {
      this.showMediaFlag = false;
      setTimeout(() => {
        this.embedUrl = this.url;
        this.showMediaFlag = true;
      }, 100);
    }
  }
};
</script>

<style scoped>
.app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: 50vh;
  width: 50vw;
  margin: 80px auto;
}

.label {
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
}

.input {
  display: block;
  font-size: 14px;
  height: 34px;
  width: 100%;
  border-radius: 4px;
}

.button {
  color: white;
  background-color: #1c3d5a;
  height: 44px;
  width: 80px;
  margin: 8px 0;
  border-radius: 4px;
}
</style>
