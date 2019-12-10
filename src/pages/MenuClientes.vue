<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <h5>Clientes</h5>
      <!-- <div class="selecaao">
     <q-select v-model="model" :options="options" label="Selecione" />
      </div>-->

      <div class="nomeFantasia">
        Nome Fantasia
        <q-input filled v-model="text" :readonly="readonly" :disable="disable" label="Embratel" />
      </div>

      <div>
        Razão Social
        <q-input
          filled
          v-model="text"
          :readonly="readonly"
          :disable="disable"
          label="EMPRESA BRASILEIRA DE TELECOMUNICAÇÕES S.A"
        />
      </div>

      <div>
        CNPJ
        <q-input
          filled
          v-model="number"
          :readonly="readonly"
          :disable="disable"
          label="57.201.482/0001-65"
        />
      </div>

      <div>
        Telefone
        <q-input
          filled
          v-model="tel"
          :readonly="readonly"
          :disable="disable"
          label="(86) 84934-3631"
        />
      </div>

      <div>
        Planos
        <q-input filled v-model="text" :readonly="readonly" :disable="disable" label="Plano Ouro" />
      </div>

      <div class="h3">
        <h5>Endereço</h5>
      </div>

      <div class="PrimeiroLinhaEndereco">
        <div>
          CEP
          <q-input filled v-model="number" :readonly="readonly" :disable="disable" label="04619-032" />
        </div>

        <div>
          Estado
          <q-input filled v-model="text" :readonly="readonly" :disable="disable" label="SP" />
        </div>

        <div>
          Cidade
          <q-input filled v-model="text" :readonly="readonly" :disable="disable" label="São Paulo" />
        </div>
      </div>

      <div class="SegundaLinhaEndereco">
        <div>
          Bairro
          <q-input filled v-model="text" :readonly="readonly" :disable="disable" label="Campo Belo" />
        </div>

        <div>
          Rua
          <q-input filled v-model="text" :readonly="readonly" :disable="disable" label="Rua Vicente Leporace" />
        </div>

        <div>
          Numero e Complemento
          <q-input filled v-model="text" :readonly="readonly" :disable="disable" label="1011, Comercial" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      readonly: true,
      disable: true,
      model: null,
      options: ['Claro', 'Embratel', 'Telmex', 'Oi', 'Telefônica', 'Vivendi']
    }
  }
}
</script>

<style>
h5 {
  text-align: center;
  width: 100vw;
}
div.h3 {
  text-align: center;
  width: 100vw;
}
</style>
