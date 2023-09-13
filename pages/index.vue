<template>
  <main>
        <section class="presentation">
            <div class="desc">
                <h1>
                Booster votre business grâce au Marketing Digital
                </h1>
                <p>
                Vous apportez la meilleure visibilité à travers différents canaux tels que Facebook Instagram Youtube où google L'objectif est de mettre en place une stratégie digitale clé en main pour vous permettre de générer des prospects de manière récurrente .Et d'également améliorer l'image de marque de votre entreprise.
                </p>
            </div>
            <div class="content-img">
                <img src="../assets/header.webp" alt="">
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
                        Vous souhaitez une application web ou mobile, un site vitrine pour avoir une présence en ligne ? un e-commerce pour pouvoir vendre vos produits en ligne.
                        Nos développeurs sont là pour vous développez une application / site sur mesure performant et optimisé.
                    </p>
                </div>
                <div class="card">
                    <h2>Facebook ADS</h2>
                    <div class="content-img">
                        <img src="../assets/facebook.png" alt="">
                    </div>
                    <p>
                        Vous souhaitez booster votre trafic et vos ventes . Élargir votre audience et votre stratégie marketing .
                        Facebook ads est l’opportunité qui vous faut pour propulser votre business toujours plus haut.
                    </p>
                </div>
                <div class="card">
                    <h2>Création de tunnel de vente / Conversion</h2>
                    <div class="content-img">
                        <img src="../assets/busines.png" alt="">
                    </div>
                    <p>
                        Nous créons des tunnels de vente sur mesure afin d'attirer vos prospects et de les convertir en clients . Les tunnels de vente créés sont spécialement conçus pour avoir un haut taux de conversion. Ne laissez plus vos prospects quittez votre page
                    </p>
                </div>
            </div>
        </section>
        <section class="banner">
            <div class="content-title">
                <div class="title-1">
                    * AGENCE * DIGITALE * TIGER DIGITALE * AGENCE * DIGITALE * TIGER DIGITALE * AGENCE * DIGITALE * TIGER DIGITALE *
                </div>
                <div class="title-2">
                    * SITE WEB * APPLICATION * MOBILE *
                </div>
            </div>
        </section>

        <section class="projects">
            <h2>Certains de nos projects</h2>
            <div class="content-project">
                <div class="project">
                    <img src="../assets/aboujamil.png" alt="">
                    <p>Abou jamil perfumery -></p>
                </div>
                <div class="project">
                    <img src="../assets/mabarbeetmoi.png" alt="">
                    <p>Ma barbe et moi -></p>
                </div>
                <div class="project">
                    <img src="../assets/myova.png" alt="">
                    <p>My naturel ova -></p>
                </div>
            </div>
        </section>

        <section id="why-are-we">
            <div class="content-img">
                <div class="img-people">
                    <img src="../assets/ceo.jpeg" alt="">
                    <div class="info-people">
                        Ibrahima SY CEO <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div class="img-people">
                    <img src="../assets/cto.jpeg" alt="">
                    <div class="info-people">
                        Bakary COLY CTO <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <div class="desc">
                <h2>Qui sommes nous ?</h2>
                <p>Créé en 2020 par Ibrahima Sy, Tiger Digital a très vite compris la problématique du marketing digital actuel. Donner de la visibilité à des indépendants ou PME. Nous avons clairement voulu nous démarquer en apportant une authenticité et relation humaine forte avec nos clients. Tiger Digital c’est l’oeil du tigre.. </p>
                <h2>Notre Mission</h2>
                <p>Vous apportez la meilleure visibilité possible à travers différents canaux tels que Facebook, Instagram, Youtube ou Google. L’objectif est de mettre en place une stratégie digitale clé en main pour vous permettre de générer des prospects de manière récurrente. Et d’également améliorer l’image de marque de votre entreprise. </p>
            </div>
        </section>
        <section class="section-reviews">
            <h2>AVIS CLIENTS</h2>
            <div class="list-reviews">
                <div class="review" v-if="reviewActive === 1">
                    <p class="comment">
                        J'ai eu la chance de travailler avec cette agence pour la création de mon site web, et je ne pourrais pas être plus heureux du résultat final. L'équipe a su capturer parfaitement l'essence de mon entreprise et créer un site web attrayant et fonctionnel. Leur expertise technique et leur professionnalisme sont incomparables. Je recommande vivement cette agence à tous ceux qui recherchent une solution web de haute qualité.
                    </p>
                    <div class="author">
                        <img src="../assets/mbm.png" alt="image author">
                        <div class="info-author">
                            <h3>Ma barbe et moi</h3>
                        </div>
                    </div>
                </div>
                <div class="review" v-if="reviewActive === 2">
                    <p class="comment">
                        Un immense merci à l'équipe de cette agence pour leur excellent travail ! Ils ont non seulement conçu un site web magnifique pour notre entreprise, mais ils ont également été extrêmement réactifs à nos besoins et demandes tout au long du processus. Leur attention aux détails et leur souci de la satisfaction du client sont vraiment impressionnants. Nous sommes ravis du résultat et nous les recommandons à tous.
                    </p>
                    <div class="author">
                        <img src="../assets/aboujamilperfumery.jpeg" alt="image author">
                        <div class="info-author">
                            <h3>Abou jamil perfumery</h3>
                        </div>
                    </div>
                </div>
                <div class="review" v-if="reviewActive === 3">
                    <p class="comment">
                        Je suis ravi d'avoir choisi cette agence pour la création de mon site web. Ils ont pris le temps de comprendre mes objectifs et ma vision, et ils l'ont traduite en un site web qui dépasse toutes mes attentes. Leur équipe créative a su donner vie à mon idée, et leur équipe technique a assuré un fonctionnement parfait. Je suis reconnaissant pour leur expertise et leur engagement envers la qualité.
                    </p>
                    <div class="author">
                        <img src="../assets/mynaturelova.png" alt="image author">
                        <div class="info-author">
                            <h3>My naturel ova</h3>
                        </div>
                    </div>
                </div>
                <div class="content-next-previous">
                    <button @click="previous"><</button>
                    <button @click="next">></button>
                </div>
            </div>
        </section>

        <section id="contact">
            <div class="argument">
                <h2>Vous hésitez encore ?</h2>
                <p>Besoin d'un renseignement ? D'un devis ? D'une collaboration ? Nous sommes à votre écoute.</p>
            </div>
            <form @submit.prevent="sendMessage">
                <div class="row">
                    <div class="col">
                        <div class="content-input">
                        <input type="text" placeholder="Votre nom" v-model="contact.name" required>
                        </div>
                    </div>
                    <div class="col">
                        <div class="content-input">
                        <input type="text" placeholder="Email" v-model="contact.email" required>
                        </div>
                    </div>
                    <div class="col">
                        <div class="content-input">
                        <input type="tel" placeholder="Téléphone" v-model="contact.telephone" required>
                        </div>
                    </div>
                </div>
                <div  class="row second">
                    <div class="col">
                        <div class="content-input">
                        <input type="text" placeholder="Message" v-model="contact.message" required>
                        </div>
                    </div>
                    <div class="col">
                        <button type="submit">Envoyer</button>
                    </div>
                </div>
                <p class="success" v-if="success">Votre message a bien été envoyer</p>
            </form>
        </section>
    </main>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'

export default {
    name: 'HomePage',
    data(){
        return {
            contact: {
                name: null,
                email: null,
                message: null,
                telephone: null
            },
            success: false,
            reviewActive: 1
        }
    },
    methods: {
        sendMessage(){
            fireDb.collection("prospects").add(this.contact)
            .then(() => {
                this.success = true;
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        },
        previous() {
            if(this.reviewActive === 1) {
                this.reviewActive = 3
            } else {
                this.reviewActive--
            }
        },
        next() {
            if(this.reviewActive === 3) {
                this.reviewActive = 1
            } else {
                this.reviewActive++
            }
        }
    }
}
</script>
<style lang="scss">
.presentation{
    padding: 30px 100px;
    text-align: center;
    img {
        width: 100%;
        max-height: 600px;
        object-fit: cover;
    }
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
    background-color: #272343;
    overflow: hidden;
    padding: 20px 100px;
    h2{
        text-align: center;
        color: white;
    }
    .cards{
        display: flex;
        .card{
            margin: 20px;
            border-radius: 4px;
            color: white;
            @media (max-width: 767px) {
                margin: 0px;
            }
            .content-img{
                text-align: center;
                img{
                    width: 300px;
                    @media (max-width: 767px) {
                        width: 100%;
                    }
                }
            }
            p{
                padding: 20px;
                @media (max-width: 767px) {
                    padding: 20px 0;
                    text-align: center;
                }
            }
        }
        @media (max-width: 800px) {
            display: block;
            margin: 0 0px;
        }
    }
    @media (max-width: 800px) {
        padding: 20px!important;
    }
}
.banner {
    background-color: #ffd803;
    padding: 10px;
    font-size: 80px;
    text-align: center;
    font-weight: 300;
    .title-1 {
        white-space: nowrap;
        animation: scrollRightText 20s linear infinite;
        transform: translateX(100%);
    }
    .title-2 {
        white-space: nowrap;
        animation: scrollLeftText 20s linear infinite;
        transform: translateX(100%);
    }
}
.projects {
    padding: 20px 100px;
    @media (max-width: 800px) {
        padding: 20px!important;
    }
    .content-project {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        @media (max-width: 767px) {
            display: block;
        }
        .project {
            img {
                width: 100%;
                height: 300px;
                border-radius: 10px;
                filter: brightness(0.5);
            }
            p {
                font-weight: 500;
                display: inline-block;
                border-bottom: 1px solid #272343;
                padding-bottom: 8px;
            }
        }
    }
}
@keyframes scrollLeftText {
    0% {
        transform: translateX(100%); /* Départ à droite du conteneur */
    }
    100% {
        transform: translateX(-100%); /* Arrivée à gauche du conteneur */
    }
}

@keyframes scrollRightText {
    0% {
        transform: translateX(-100%); /* Départ à droite du conteneur */
    }
    100% {
        transform: translateX(100%); /* Arrivée à gauche du conteneur */
    }
}

#why-are-we{
    padding: 60px 100px;
    background-color: #ffd803;
    color: #272343;
    text-align: center;
    @media (max-width: 800px) {
        display: block;
        .content-img{
            margin-right: 0!important;
        }
    }
    @media (max-width: 767px) {
        padding: 20px!important;
    }
    .content-img{
        display: flex;
        justify-content: center;
        gap: 30px;
        @media (max-width: 767px) {
            display: block;
        }
        img {
            width: 100%;
            max-height: 500px;
        }
        .info-people {
            margin: 16px 0;
        }
    }
    .desc{
        p{
            line-height: 32px;
            font-size: 20px;
        }
    }
}
.section-reviews {
    padding: 40px 100px;
    text-align: center;
    @media (max-width: 767px) {
        padding: 40px 20px;
    }
    .list-reviews {
        position: relative;
        overflow: hidden;
        .review {
            text-align: center;
            .author {
                display: flex;
                gap: 20px;
                justify-content: center;
            }
            img {
                width: 60px;
                height: 60px;
                border-radius: 100%;
            }
            h3 {
                display: inline-block;
            }
        }
        .content-next-previous {
            position: absolute;
            bottom: 0px;
            width: 100%;
            display: flex;
            justify-content: space-around;
            @media (max-width: 767px) {
                justify-content: space-between;
            }
            button {
                background-color: #272343;
                border-color: #272343;
                color: white;
                border: none;
                border-radius: 5px;
                font-size: 18px;
            }
        }
    }
}
#contact{
    background-color: #272343;
    color:white;
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
    .success{
        color: #50CB93;
        text-align: center;
        font-size: 18px;
    }
    .row{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 20px;
        &.second{
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
                background-color: #ffd803;
                color: #272343;
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
