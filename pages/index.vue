<template>
  <section>
    <section class="presentation">
      <div class="desc">
        <h1>
          Booster votre business grâce au Marketing Digital
        </h1>
        <p>
          Vous apportez la meilleure visibilité à travers différents canaux tel que Facebook Instagram Youtube ou Google
          L'objectif est de mettre en place une stratégie digitale clé en main pour vous permettre de générer des propspects de manière récurrente .Et d'également améliorer l'image de marque de votre entreprise
        </p>
         <button class="button btn">
           Nous contacer
         </button>
      </div>
      <div>
        <img src="../assets/marketing.png" alt="">
      </div>
    </section>
    <section id="services">
      <h2>Nos services</h2>
      <div class="cards">
        <div class="card">
          <h2>Dévelopement application et site</h2>
          <div class="card-img">
            <img src="../assets/dev.png" alt="">
          </div>
          <p>
            Vous souhaitez une application web ou mobile, un site vitrine pour avoir une présence en ligne ? un e-commerce pour pouvoir vendre vos produit en ligne.
            Nos développeurs sont la pour vous dévoleppez une application / site sur mesure performant et optimisé.
          </p>
        </div>
        <div class="card">
          <h2>Facebook ADS</h2>
          <div class="card-img">
            <img src="../assets/facebook.png" alt="">
          </div>
          <p>
            Vous souhaitez booster votre trafic et vos ventes ? Elargir votre audience et votre stratégie marketing ?
            Facebook ads est l’opportunité qui vous faut pour propulser votre business toujours plus haut.
          </p>
        </div>
        <div class="card">
          <h2>Creation de Funnel / Conversion</h2>
          <div class="card-img">
            <img src="../assets/busines.png" alt="">
          </div>
          <p>
            Nous créons des funnels sur mesure afin d'attirer vos prospects et de les convertir en clients . Les funnels créés sont spécialement conçus pour avoir un haut taux de conversion. Ne laissez plus vos prospects quittez votre page
          </p>
        </div>
      </div>
    </section>

    <section id="why-are-we">
      <div class="card-img">
        <img src="../assets/ceo.jpg" alt="">
      </div>
      <div class="desc">
        <h2>Qui sommes nous ?</h2>
        <p>Crée en 2020 par Ibrahima Sy, Tiger Digital a très vite compris la problématique du Marketing digital actuel. Donner de la visibilité à des indépendants ou PME. Nous avons clairement voulu nous démarquer en apportant une authenticité et relation humaine forte avec nos clients. Tiger Digital s’est l’oeil du tigre . </p>
        <h2>Notre Mission</h2>
        <p>
        Vous apportez la meilleure visibilité possible à travers différents canaux tel que Facebook, Instagram, Youtube ou Google. L’objectif est de mettre en place une stratégie digitale clé en main pour vous permettre de générer des prospects de manière récurrente. Et d’également améliorer l’image de marque de votre entreprise. </p>
      </div>
    </section>


    <section id="contact">
      <div class="argument">
        <h2>Vous hésitez encore ?</h2>
        <p>Besoin d'un renseignement ? D'un devis ? D'une collaboration ? Nous sommes à votre écoute.</p>
      </div>
      <form action="">
        <div class="row">
          <div class="input">
            <p>Nom</p>
            <input type="text" name="" id="" placeholder="Votre nom">
          </div>
          <div class="input">
            <p>Email</p>
            <input type="text" name="" id="" placeholder="Email">
          </div>
          <div class="input">
            <p>Téléphone</p>
            <input type="tel" name="" id="" placeholder="Téléphone">
          </div>
        </div>
        <div class="row">
          <div class="input">
            <p>Message</p>
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          </div>
          <div class="content-btn">
            <button>Envoyer</button>
          </div>
        </div>
      </form>
    </section>

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
  margin: 0 100px;
  display: flex;
  .desc{
    margin-right: 30px;
    h1{
      font-size: 30px;
    }
    p{
      font-size: 20px;
      line-height: 34px;
    }
    .btn{
      font-size: 20px;
    }
  }
}
#services{
  background-color: #e3f6f5;
  overflow: hidden;
  padding-top: 20px;
  h2{
    text-align: center;
  }
  .cards{
    display: flex;
    margin: 0 80px;
    margin-bottom: 40px;
    .card{
      margin: 20px;
      background-color: #fffffe;
      .card-img{
        text-align: center;
      }
      p{
        padding: 20px;
      }
    }
  }
}
#why-are-we{
    display: flex;
    margin: 0 100px;
    padding: 40px 0;
    .card-img{
      margin-right: 40px;
    }
    .desc{
      p{
        line-height: 32px;
        font-size: 20px;
      }
    }
}
#contact{
  background-color: #e3f6f5;
  padding: 30px 100px;
  .row{
    display: flex;
    input, textarea{
      background-color: #fffffe;
      padding: 20px;
      border: none;
    }
  }
}
</style>
