<template>
<header>
    <nav class="desktop">
        <img src="../assets/logo-3.png" alt="">
        <ul>
            <li>
                <a href="#services">Nos services</a>
            </li>
            <li>
                <a href="#why-are-we">Qui sommes nous</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </nav>
    <nav class="mobile">
        <div class="content-nav">
            <img src="../assets/logo-3.png" alt="">
            <span>
                <i class="fas fa-bars" @click="isActive = true"></i>
            </span>
        </div>
    </nav>
    <div class="nav-dropdown" v-if="isActive">
        <ul>
            <li>
                <a href="#services" @click="isActive = false">Nos services</a>
            </li>
            <li>
                <a href="#why-are-you" @click="isActive = false">Qui sommes nous</a>
            </li>
            <li>
                <a href="#contact" @click="isActive = false">Contact</a>
            </li>
        </ul>
        <span>
            <i class="fas fa-times" @click="isActive = false"></i>
        </span>
    </div>
</header>
</template>
<script>
export default {
    data(){
        return {
            isActive: false
        }
    }
}
</script>
<style lang="scss">
.desktop{
    display: flex;
    justify-content: space-between;
    padding: 20px 100px;
    @media (max-width: 1200px){
        padding: 20px 60px!important;
    }
    @media (max-width: 800px){
        display: none;
    }
    ul{
        display: flex;
        margin: 0;
        padding-top: 10px;
        li{
            list-style: none;
            margin-left: 20px;
            font-size: 18px;
        }
    }
    .logo{
        color: #3edbf0;
    }
    img{
        height: 60px;
    }
    a{
        text-decoration: none;
        color: #2d334a;
        &:hover{
            color: #ffd803;
        }
    }
}
.mobile{
    display: none;
    padding: 20px;
    @media (max-width: 800px){
        display: block;
    }
    .content-nav{
        display: flex;
        justify-content: space-between;
        line-height: 60px;
        img{
            height: 60px;
        }
        span i{
            font-size: 30px;
            cursor: pointer;
        }
    }
}
.nav-dropdown{
    background-color: white;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    ul{
        list-style: none;
        li{
            font-size: 20px;
            margin-top: 20px;
            a{
                text-decoration: none;
                color: #2d334a;
            }
        }
    }
    span{
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 20px;
    }
}
</style>