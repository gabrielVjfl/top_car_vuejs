
<script>
import Axios from 'axios'
import Navbar from './Navbar'

export default {
 
  components: {
     Navbar,
  },
    data() {
      return {
        carros: {
            modelo: '',
            marca: '',
            peso: '',
            quantidade: '',
            preco: '',
            torque: '',
            potencia: '',
            ano: '',
            motor: '',
        }
    }
    },

    methods: {
      handleSubmit() {
        Axios.post("http://localhost:7120/api/postar", this.carros)
        .then((response) => {
          console.log(response)
          alert('Salvo')

        }).catch((err) => {
          console.log(err)
          alert("Deu erro")
        })
setTimeout(() => {
  window.location.reload()
}, 2000)
        
      }
    }
}
</script>


<template>
<div id="app">

   <Navbar/>
   
    <h2 id='titulo'>Adicionar Veiculo no Estoque</h2>
    <br>
    <br>
   
<form @submit.prevent="handleSubmit()">
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">marca</label>
      <select class="form-control" required name="marca" v-model="carros.marca">
           <option value="">Selecione a Marca</option>
           <option value="Bmw">Bmw</option>
           <option value="Ford">Ford</option>
           <option value="Range-Rover">Range-Rover</option>
           <option value="Volvo">Volvo</option>
           
          </select>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Modelo</label>
      <input type="text" class="form-control" v-model="carros.modelo" id="modelo"  placeholder="Modelo" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefaultUsername">Preço</label>
      <div class="input-group">

        <input type="text" name="preco" v-model="carros.preco" class="form-control" id="validationDefaultUsername" placeholder="Preço" aria-describedby="inputGroupPrepend2" required>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-5 mb-3">
      <label for="validationDefault03">Motor</label>
      <input type="text" v-model="carros.motor" name="motor" class="form-control" id="validationDefault03" placeholder="Motor" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault04">Potencia</label>
      <input type="text" v-model="carros.potencia" name="Potencia" class="form-control" id="validationDefault04" placeholder="Potencia" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault05">Torque</label>
      <input type="text" v-model="carros.torque" name="torque" class="form-control" id="validationDefault05" placeholder="Torque" required>
    </div>
  </div>
   <div class="form-row">
    <div class="col-md-3 mb-3">
      <label for="validationDefault03">Ano</label>
      <input type="number" v-model="carros.ano" min="2019" name="ano" class="form-control" id="validationDefault03" placeholder="Ano" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault04">Quantidade</label>
      <input type="number" v-model="carros.quantidade" name="quantidade" class="form-control" id="validationDefault04" placeholder="Quantidade" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault05">Peso</label>
      <input type="number" v-model="carros.peso" name="peso" class="form-control" id="validationDefault05" placeholder="Peso" required>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="form-check-label" for="invalidCheck2">
        Concordo com os termos e condições
      </label>
    </div>
  </div>
  <button id="btn" class="btn btn-primary" type="submit">Adicionar Veiculo</button>

   

</form>
</div>
</template>



<style>


#titulo {
    color: green;
    text-align: center;
}
#app {
  text-align: center
}

</style>