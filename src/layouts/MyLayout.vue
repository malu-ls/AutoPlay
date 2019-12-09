<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          AutoPlay
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Menu</q-item-label>

        <q-item to="/MenuClientes">
          <q-item-section avatar>
            <q-icon name="group" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Clientes</q-item-label>
            <q-item-label caption>Listagem de Clientes</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/ListagemVeiculos" >
          <q-item-section avatar>
            <q-icon name="directions_car" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Veiculos</q-item-label>
            <q-item-label caption>Listagem de Veiculos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/ListagemTécnico">
          <q-item-section avatar>
            <q-icon name="build" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Técnicos</q-item-label>
            <q-item-label caption>Técnicos Cadastrados</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/MapaLocalização">
          <q-item-section avatar>
            <q-icon name="fas fa-map-marker-alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Mapa</q-item-label>
            <q-item-label caption>Localização de veiculos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item >
          <q-item-section avatar>
            <q-icon name="ion-ios-log-out" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Sair</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
