<template>
  <div class="intro">
    <img src="static/apple-icon.png" alt="" class="logo" />
    <div>
      <b>欢迎来到 Fine血染钟楼(魔改版) </b><br/>
      今天你染了吗？<br/>
      <br/>
      添加玩家：使用右上角的
      <span class="button" @click="toggleMenu">
        <font-awesome-icon icon="cog" /> 菜单
      </span>或按<b>[A]</b>键. <br/>
      也可以按 <b>[J]</b>键加入房间.<br />
      <div class="footer">
        This project is free and open source and can be found on
        <a href="https://github.com/bra1n/townsquare" target="_blank">GitHub</a
        >. It is not affiliated with The Pandemonium Institute. "Blood on the
        Clocktower" is a trademark of Steven Medway and The Pandemonium
        Institute.
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      language: window.navigator.userLanguage || window.navigator.language
    };
  },
  methods: mapMutations(["toggleMenu"])
};
</script>

<style scoped lang="scss">
// Intro
.intro {
  text-align: center;
  width: 50%;
  font-size: 120%;
  position: absolute;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  border: 3px solid black;
  border-radius: 10px;
  z-index: 3;
  display: flex;
  justify-content: center;
  a {
    color: white;
  }
  a.redirect {
    display: block;
    text-decoration: none;
    position: absolute;
    top: 100%;
    margin-top: 2vh;
    padding: 10px;
    background: rgba(0, 0, 0, 0.5);
    border: 3px solid black;
    border-radius: 10px;

    &:hover {
      color: red;
    }
    img {
      width: 120px;
      display: block;
      margin: auto;
      margin-bottom: 1vh;
    }
  }

  img.logo {
    position: absolute;
    bottom: 100%;
    width: 25vh;
    margin-bottom: 2vh;
    max-width: 192px;
    border-radius: 50%;
    box-shadow: 0 0 10px black;
    border: 3px solid black;
  }
  .footer {
    font-size: 60%;
    opacity: 0.75;
  }
}
</style>
