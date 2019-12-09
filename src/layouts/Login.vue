<template>
<div class="container">
  <div class="col-4">
  <img vspace="35px" hspace="15px" align="center" src="../statics/icons/AutoPlay.jpg" width=200 height=200>
  </div>
    <input type='text' placeholder='Login'/>
    <br>
    <input type='password'
    placeholder='Senha'/>
    <br>
    <div class='btn-login'>
      <q-btn color="blue" @click="open" href='MyLayout.vue'> Login </q-btn>
    </div>
      <a color="white" href='../pages/RecuperacaoSenha.vue'>Esqueceu a Senha?</a>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>
div.container{
  text-align: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background-color:skyblue
  }
</style>
