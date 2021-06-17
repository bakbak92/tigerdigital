<template>
  <section class="section">
    <div class="columns is-mobile">
      <div class="column presentation">
        <h1 class="title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quod
        </h1>
        <p class="subtitle">
          Officiis laboriosam repudiandae, quaerat culpa minus similique nihil ipsum tenetur itaque nulla in dicta quibusdam nemo sit incidunt possimus eveniet.
        </p>
         <button class="button btn">
           Call to Action
         </button>
      </div>
      <div class="column">
        <img src="../assets/social_media.png" alt="">
      </div>
    </div>
    <h2 class="title center">
      Nos services
    </h2>
    <div class="columns is-mobile">
      <div class="card">
        <div class="card-content">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/dev.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="content">
            Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/facebook.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="content">
            Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/busines.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="content">
            Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
          </div>
        </div>
      </div>
      
    </div>

    <div class="container">
      <h2 class="title center">Contactez-nous</h2>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input">
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button btn">Submit</button>
        </div>
        <div class="control">
          <button class="button btn-cancel">Cancel</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  }
}
</script>
<style lang="scss">
.presentation{
  text-align: center;
}
.columns .card:first-child{
  margin-right: 32px;
}
.columns .card{
  margin-bottom: 32px;
}
.columns .card:last-child{
  margin-left: 32px;
}
.title{
  margin-top: 32px;
  color: #0F1B4C;
}
.btn{
  background-color: #3edbf0;
  color: white;
  border-color: #3edbf0!important;
  &:hover{
    background-color: white;
    color: #3edbf0;
  }
}
.btn-cancel{
  background-color: white;
  color: #3edbf0;
  border-color: #3edbf0!important;
  &:hover{
    background-color: #3edbf0;
    color: white;
  }
}
h1{
  color: #2a3d66;
}
</style>
