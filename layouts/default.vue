<template>
  <main>
    <nav-bar></nav-bar>

    <div class="container column is-10">
      <nuxt />
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
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
}

.logo{
  font-size: 18px;
  font-weight: 600;
  color: #3edbf0;
}

.btn{
  background-color: #3edbf0;
  border: 1px solid #3edbf0;
  border-style: none;
  padding: 10px 16px;
  border-radius: 4px;
  &:hover{
    background-color: #bae8e8;
  }
}
.navbar{
  .navbar-item{
    &:hover{
      color: #3edbf0;
    }
  }
}
.center{
  text-align: center;
}
footer{
  a{
    color: #3edbf0;
  }
}
</style>
