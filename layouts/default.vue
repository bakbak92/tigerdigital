<template>
  <main>
    <nav-bar></nav-bar>

    <div class="container column is-10">
      <nuxt />
    </div>
    <footer class="footer">
        <p>
          © 2021 Tiger Digital | <a href="mailto:contact@tiger-gital.com">contact@tiger-digital.com</a> | Suivez nous <a href="http://https://www.instagram.com/bramsforreal/"><i class="fab fa-instagram"></i></a>
        </p>
    </footer>

  </main>
  
</template>
<script>
import NavBar from "../components/NavBar"

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
}
main{
  font-family: 'Open Sans', sans-serif;
  background-color: #fffffe;
  color: #2d334a;
  overflow: hidden;
}

.logo{
  font-size: 18px;
  font-weight: 600;
  color: #3edbf0;
}

.btn{
  background-color: #ffd803;
  border: none;
  border-style: none;
  padding: 0 32px;
  border-radius: 4px;
  line-height: 48px;
  &:hover{
    background-color: #bae8e8;
  }
}

.center{
  text-align: center;
}
footer{
  text-align: center;
  overflow: hidden;
  line-height: 60px;
  a{
    color: #ffd803
  }
}
</style>
