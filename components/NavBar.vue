<template>
<header>
    <nav class="desktop">
        <img src="../assets/logo-1.png" alt="">
        <ul>
            <li>
                <a href="">Nos services</a>
            </li>
            <li>
                <a href="">Qui sommes nous</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
        </ul>
    </nav>
    <nav class="mobile">
        <div class="content-nav">
            <img src="../assets/logo-1.png" alt="">
            <span>
                <i class="fas fa-bars"></i>
            </span>
        </div>
    </nav>
</header>
</template>
<style lang="scss">
.desktop{
    display: flex;
    justify-content: space-between;
    padding: 20px 100px;
    @media (max-width: 500px){
        display: none;
    }
    ul{
        display: flex;
        margin: 0;
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
    @media (max-width: 500px){
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
</style>