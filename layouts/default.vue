<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <img src="../assets/logo.png" alt="">
        <a class="navbar-item is-primary logo">Tiger Digital</a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">

        <div class="navbar-end">
          <a class="navbar-item">
            Nos services
          </a>
          <a class="navbar-item">
            Qui sommes nous
          </a>
          <a class="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </nav>

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

  </div>
  
</template>
<style>
.logo{
  font-size: 18px;
  font-weight: 600;
  color: #7958d5;
}
.center{
  text-align: center;
}
</style>
