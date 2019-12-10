<template>
<div class="q-pa-md">
    <div class="q-gutter-md col-4">
      <img class="logo" vspace="35px" hspace="15px" src="../statics/icons/AutoPlay.jpg" width=200 height=200>
      <q-input v-model="user" filled type="user" placeholder="Usuário"/>

      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" placeholder="Senha">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn class="btn" color="primary" label="Entrar" />
      <q-btn class="btn" color="primary" label="Esqueci minha senha" />

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      password: '',
      isPwd: true,
      user: ''
    }
  }
}
</script>

<style lang="sass">

.logo
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;

.btn
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 15%;

</style>
