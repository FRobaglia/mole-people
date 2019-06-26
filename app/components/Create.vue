<template>
  <div>
    <form @submit.prevent="addProfile">
      <label> Name </label>
      <input type="text" v-model="profile.name">
      <br>
      <label> Card Image </label>
      <input type="text" v-model="profile.cardImage">
      <br>
      <label> Card content </label>
      <input type="text" v-model="profile.cardContent">
      <br>
      <label> Vimeo ID </label>
      <input type="number" v-model="profile.vimeoId">
      <br>
      <label> Position X sur la map </label>
      <input type="number" v-model="profile.XPos">
      <br>
      <label> Position Y sur la map </label>
      <input type="number" v-model="profile.YPos">
      <br>
      <label> Popup Introduction </label>
      <input type="text" v-model="profile.intro">
      <br>
      <label> Popup First Title </label>
      <input type="text" v-model="profile.firstArticleTitle">
      <br>
      <label> Popup First Paragraph </label>
      <input type="text" v-model="profile.firstArticleContent">
      <br>
      <label> Popup Second Title </label>
      <input type="text" v-model="profile.secondArticleTitle">
      <br>
      <label> Popup Second Paragraph </label>
      <input type="text" v-model="profile.secondArticleContent">
      <br>
      <label> Outside </label>
      <input type="text" v-model="profile.outside">
      <br>
      <input type="submit">
    </form>
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
      let uri = 'http://localhost:4000/profiles/create';
      this.axios.post(uri, this.profile).then(() => {
        this.$router.push({
          name: 'map'
        })
      });
    }
  }
};
</script>
