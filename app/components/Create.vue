<template>
  <div>
    <section class="create">
      <h1>Back Office</h1>
      <form @submit.prevent="addProfile">
        <div class="forms">
          <label class="label">Name</label>
          <input type="text" v-model="profile.name">
        </div>
        <div class="forms">
          <label>Card Image</label>
          <input type="text" v-model="profile.cardImage">
        </div>
        <div class="forms">
          <label>Card content</label>
          <input class="cardContent" type="text" v-model="profile.cardContent">
        </div>
        <div class="forms">
          <label>Vimeo ID</label>
          <input type="number" v-model="profile.vimeoId">
        </div>
        <div class="forms">
          <label>Position X sur la map</label>
          <input type="number" v-model="profile.XPos">
        </div>
        <div class="forms">
          <label>Position Y sur la map</label>
          <input type="number" v-model="profile.YPos">
        </div>
        <div class="forms">
          <label>Popup Introduction</label>
          <input class="introduction" type="text" v-model="profile.intro">
        </div>
        <div class="forms">
          <label>Popup First Title</label>
          <input type="text" v-model="profile.firstArticleTitle">
        </div>
        <div class="forms">
          <label >Popup First Paragraph</label>
          <input class="firstParagraph" type="text" v-model="profile.firstArticleContent">
        </div>
        <div class="forms">
          <label>Popup Second Title</label>
          <input type="text" v-model="profile.secondArticleTitle">
        </div>
        <div class="forms">
          <label>Popup Second Paragraph</label>
          <input class="secondParagraph" type="text" v-model="profile.secondArticleContent">
        </div>
        <div class="forms">
          <label>Outside</label>
          <input type="text" v-model="profile.outside">
        </div>
        <div>
        <div class="submit">
          <input class="submitContainer" type="submit">
        </div>
      </form>
    </section>
  </div>
</template>


<script>
export default {
  data() {
    return {
      profile: {}
    };
  },
  methods: {
    addProfile() {
      let uri = "http://localhost:4000/profiles/create";
      this.axios.post(uri, this.profile).then(() => {
        this.$router.push({
          name: "map"
        });
      });
    }
  }
};
</script>