<template>
  <main>
    <section class="presentation">
      <div class="desc">
        <h1>
          Booster votre business grâce au Marketing Digital
        </h1>
        <p>
          Vous apportez la meilleure visibilité à travers différents canaux tel que Facebook Instagram Youtube ou Google
          L'objectif est de mettre en place une stratégie digitale clé en main pour vous permettre de générer des propspects de manière récurrente .Et d'également améliorer l'image de marque de votre entreprise
        </p>
        <div class="content-btn">
          <button class="button btn">
           Nous contacer
         </button>
        </div>
      </div>
      <div class="content-img">
        <img src="../assets/marketing.png" alt="">
      </div>
    </section>
    <section id="services">
      <h2>Nos services</h2>
      <div class="cards">
        <div class="card">
          <h2>Dévelopement application et site</h2>
          <div class="content-img">
            <img src="../assets/dev.png" alt="">
          </div>
          <p>
            Vous souhaitez une application web ou mobile, un site vitrine pour avoir une présence en ligne ? un e-commerce pour pouvoir vendre vos produit en ligne.
            Nos développeurs sont la pour vous dévoleppez une application / site sur mesure performant et optimisé.
          </p>
        </div>
        <div class="card">
          <h2>Facebook ADS</h2>
          <div class="content-img">
            <img src="../assets/facebook.png" alt="">
          </div>
          <p>
            Vous souhaitez booster votre trafic et vos ventes ? Elargir votre audience et votre stratégie marketing ?
            Facebook ads est l’opportunité qui vous faut pour propulser votre business toujours plus haut.
          </p>
        </div>
        <div class="card">
          <h2>Creation de Funnel / Conversion</h2>
          <div class="content-img">
            <img src="../assets/busines.png" alt="">
          </div>
          <p>
            Nous créons des funnels sur mesure afin d'attirer vos prospects et de les convertir en clients . Les funnels créés sont spécialement conçus pour avoir un haut taux de conversion. Ne laissez plus vos prospects quittez votre page
          </p>
        </div>
      </div>
    </section>

    <section id="why-are-we">
      <div class="content-img">
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
          <div class="col">
            <div class="content-input">
              <input type="text" placeholder="Votre nom">
            </div>
          </div>
          <div class="col">
            <div class="content-input">
              <input type="text" placeholder="Email">
            </div>
          </div>
          <div class="col">
            <div class="content-input">
              <input type="tel" placeholder="Téléphone">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="content-input">
              <input type="text" placeholder="Message">
            </div>
          </div>
          <div class="col">
            <button>Envoyer</button>
          </div>
        </div>
      </form>
    </section>


  </main>
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
  padding: 30px 100px;

  display: flex;
  @media (max-width: 800px) {
    display: block;
    padding: 20px;
    .desc{
      margin-right: 0!important;
      margin-bottom: 30px;
    }
  }

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
  padding: 20px 100px;
  h2{
    text-align: center;
  }
  .cards{
    display: flex;
    .card{
      margin: 20px;
      background-color: #fffffe;
      border-radius: 4px;
      .content-img{
        text-align: center;
        img{
          width: 300px;
        }
      }
      p{
        padding: 20px;
      }
    }
    @media (max-width: 800px) {
      display: block;
      margin: 0 0px;
      h2{
        padding: 20px 20px 0 20px;
      }
    }
  }
  @media (max-width: 800px) {
      padding: 20px!important;
    }
}
#why-are-we{
    display: flex;
    margin: 0 100px;
    padding: 40px 0;
    @media (max-width: 800px) {
      display: block;
      margin: 0 20px;
      .content-img{
        margin-right: 0!important;
      }
    }
    .content-img{
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
  @media (max-width: 800px) {
    display: block;
    padding: 20px;
    .row{
      display: block!important;
      margin-top: 0!important;
      .col .content-input{
        margin-right: 0!important;
        margin-bottom: 20px;
      }
    }
  }
  .row{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 20px;
    &:last-child{
      grid-template-columns: 2fr 1fr;
    }
    
    .col{
      overflow: hidden;
      .content-input{
        margin-right: 20px;
        overflow: hidden;
      }
      &:last-child{
        .content-input{
          margin-right: 0;
        }
      }
      input{
        background-color: #fffffe;
        line-height: 48px;
        padding: 0 16px;
        width: 100%;
        border: none;
      }
      button {
          line-height: 48px;
          border: none;
          background-color: #272343;
          color: white;
          font-weight: 600;
          width: 100%;
          padding: 0;
          cursor: pointer;
          &:hover{
            opacity: 0.7;
          }
      }
    }
  }
}
@media (max-width: 800px){
  .content-img{
    text-align: center;
    img{
      max-width: 300px;
    }
  }
  .content-btn{
    text-align: center;
  }
}
@media (min-width:800px) and (max-width: 1200px) {
  section{
    padding: 20px 60px!important;
  }
}
</style>
