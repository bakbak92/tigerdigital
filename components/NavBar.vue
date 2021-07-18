<template>
    <nav>
        <a href="" class="logo">Tiger digital</a>
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
</template>
<style lang="scss">
nav{
    display: flex;
    justify-content: space-between;
    padding: 20px;

    ul{
        display: flex;
        margin: 0;
        li{
            list-style: none;
            margin-left: 20px;
        }
    }
    .logo{
        color: #3edbf0;
    }
    a{
        text-decoration: none;
        color: #2d334a;
        &:hover{
            color: #3edbf0;
        }
    }
}
</style>