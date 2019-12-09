// import Login from '../layouts/Login.vue'

const routes = [
  {
    // path: '/login',
    // component: Login => import('layouts/Login.vue'),
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/MenuClientes', component: () => import('src/pages/MenuClientes.vue') },
      { path: '/ListagemVeiculos', component: () => import('src/pages/ListagemVeiculos.vue') },
      { path: '/ListagemTécnico', component: () => import('src/pages/ListagemTecnico.vue') },
      { path: '/MapaLocalização', component: () => import('src/pages/MapaLocalizacao.vue') }
      // { path: '/login', name: 'login', component: Login }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
