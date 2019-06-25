<template>
  <div>
    <form @submit.prevent="addProfile">
      <label> Name </label>
      <input type="text" v-model="profile.name">
      <br>
      <label> Card Image </label>
      <input type="url" v-model="profile.card.image">
      <br>
      <label> Card content </label>
      <input type="text" v-model="profile.card.content">
      <br>
      <label> Video URL </label>
      <input type="url" v-model="profile.pageVideo.youtubeUrl">
      <br>
      <label> X Position </label>
      <input type="number" v-model="profile.mapPosition.x">
      <br>
      <label> Y Position </label>
      <input type="number" v-model="profile.mapPosition.y">
      <br>
      <label> Popup Introduction </label>
      <input type="text" v-model="profile.pageVideo.intro">
      <br>
      <label> first Title </label>
      <input type="text" v-model="profile.pageVideo.firstArticle.title">
      <br>
      <label> first Paragraph </label>
      <input type="text" v-model="profile.pageVideo.firstArticle.paragraph">
      <br>
      <label> second Title </label>
      <input type="text" v-model="profile.pageVideo.secondArticle.title">
      <br>
      <label> second Paragraph </label>
      <input type="text" v-model="profile.pageVideo.secondArticle.paragraph">
      <br>
      <input type="submit">
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      profile: {
          mapPosition: {
            x: null,
            y: null
          },
        name: null,
        card: {
          image: null,
          content: null
        },
        pageVideo: {
          youtubeUrl: null,
          intro: null,
          firstArticle: {
            title: null,
            paragraph: null
          },
          secondArticle: {
            title: null,
            paragraph: null
          }
        }
      }
    };
  },
  methods: {
    addProfile() {
      let uri = 'http://localhost:4000/profiles/create';
      this.axios.post(uri, this.profile).then(() => {
        this.$router.push({
          name: 'profile'
        })
      });
    }
  }
};
</script>
