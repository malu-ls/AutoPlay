<template>
<div class="q-pa-md">
    <div class="q-gutter-md">
      <img class="logo" vspace="35px" hspace="15px" src="../statics/icons/AutoPlay.jpg" width=200 height=200>
      <q-input filled v-model="user" type='text' label="Usuário" />

      <q-input filled required v-model="password" :type="isPwd ? 'password' : 'text'" label="Senha" >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn class="btn" color="primary" label="Entrar" @click="auth()" />
      <q-btn class="btn" color="primary" label="Esqueci minha senha" />

      <q-dialog v-model="dialog" :position="'top'">
        <q-card>
          <q-card-section>
            Usuário ou senha incorretos. Tente novamente.
          </q-card-section>
        </q-card>
      </q-dialog>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: '',
      isPwd: true,
      password: '',
      dialog: false
    }
  },
  methods: {
    auth () {
      if (this.user === 'MariaLuiza' && this.password === '12345678') {
        this.$router.push('/')
      } else if (this.user === '' && this.password === '') {
        this.$q.notify({
          color: 'negative',
          message: 'Digite seu usuário e senha'
        })
      } else if (this.user === '') {
        this.$q.notify({
          color: 'negative',
          message: 'Digite seu usuário'
        })
      } else if (this.password === '') {
        this.$q.notify({
          color: 'negative',
          message: 'Digite sua senha'
        })
      } else {
        this.$q.notify({
          color: 'negative',
          message: 'Usuário e senha incorretos, tente novamente'
        })
      }
    },
    openDialog () {

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
