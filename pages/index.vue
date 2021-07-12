<template>
  <section class="section">
    <div class="columns is-mobile">
      <div class="column presentation">
        <h1 class="title">
          Booster votre business grâce au Marketing Digital
        </h1>
        <p class="subtitle">
          Vous apportez la meilleure visibilité à travers différents canaux tel que Facebook Instagram Youtube ou Google
          L'objectif est de mettre en place une stratégie digitale clé en main pour vous permettre de générer des propspects de manière récurrente .Et d'également améliorer l'image de marque de votre entreprise
        </p>
         <button class="button btn">
           Nous contacer
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
            <img src="../assets/dev.png" alt="Placeholder image">
          </div>
          <h2>Dévelopement application / site</h2>
          <div class="content">
            Vous souhaitez une application web ou mobile, un site vitrine pour avoir une présence en ligne ? un e-commerce pour pouvoir vendre vos produit en ligne.
            Nos développeurs sont la pour vous dévoleppez une application / site sur mesure performant et optimisé.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
            <img src="../assets/facebook.png" alt="Placeholder image">
          <h2>Facebook ADS</h2>
          <div class="content">
            Vous souhaitez booster votre trafic et vos ventes ? Elargir votre audience et votre stratégie marketing ?
            Facebook ads est l’opportunité qui vous faut pour propulser votre business toujours plus haut.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <div class="card-image">
            <img src="../assets/busines.png" alt="Placeholder image">
          </div>
          <h2>Creation de Funnel / Conversion</h2>
          <div class="content">
            Nous créons des funnels sur mesure afin d'attirer vos prospects et de les convertir en clients . Les funnels créés sont spécialement conçus pour avoir un haut taux de conversion. Ne laissez plus vos prospects quittez votre pag          </div>
        </div>
      </div>
      
    </div>

    <div class="container">
      <h2 class="title center">Contactez-nous</h2>
      <div class="field">
        <label class="label">Nom, Prénom</label>
        <div class="control">
          <input class="input" type="text" placeholder="Nom, Prénom">
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
