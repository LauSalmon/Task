<template>
  <div>
    <div class="app">
      <nav class="navbar navbar-expand-lg p-1 m-2">
        <router-link to="/">
          <a class="navbar-brand m-2" href="#">Home 🔥</a>
        </router-link>
        <router-link to="/contacts" class="nav-link active m-2" aria-current="page" href="#"> Contacts -</router-link>
        <router-link to="/add" class="nav-link m-2" href="#">  Ajouter</router-link>
      </nav>
      <!--! La vue du router , là ou vont être affiché les composant que l'on appelle via les routes -->
      <router-view />
    </div>

  </div>

</template>
