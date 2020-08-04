<template>
<div>
   <Navbar/>
   <br>
   <h2>Lista de Carros</h2>
   <br>
   <br>
   <table border="3">
   <tr>
   <th>Id</th>
   <th>Marca</th>
   <th>Modelo</th>
   <th>Preço</th>
   <th>Motor</th>
   <th>Potencia</th>
   <th>Torque</th>
   <th>Ano</th>
   <th>Quantidade</th>
   <th>Peso</th>
   <th>Alterar</th>
   <th>Deletar</th>
   </tr>

   <tr v-for="post of posts" :key="post.id">
   <td>{{post.id}}</td>
   <td id="marca">{{post.marca}}</td>
   <td id="modelo">{{post.modelo}}</td>
   <td>R$ {{post.preco}}</td>
   <td>{{post.motor}}</td>
   <td>Cv {{post.potencia}}</td>
   <td>Kg {{post.torque}}</td>
   <td>{{post.ano}}</td>
   <td>{{post.quantidade}}</td>
   <td>kg {{post.peso}}</td>
   <td><button class="btn btn-warning">Alterar</button></td>
   <td><button class="btn btn-danger">Deletar</button></td>
   </tr>

   </table>
</div>
</template>


<script>
import Navbar from './Navbar'
import Axios from 'axios'

export default {
    name: 'Home',
    components: {
      Navbar,
    },
    data() {
       return {
           posts: []
       }
    },

mounted() {
    Axios.get("http://localhost:7120/api/lista").then((response) => {
          this.posts = response.data
          console.log(response)

    }).catch((err) => {
        console.log(err)
    })
}
}
</script>

<style>
h2 {
text-align: center;
font-weight: lighter;
font-size: 29pt
}
table {
    margin: 0 auto;
    width: 1300px;
    text-align: center;
    border: 3px solid blue;
}
th {
font-size: 16pt;
background-color: black;
color: rgb(4, 117, 209);
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
td {
font-size: 14pt;
}
#marca, #modelo {
text-transform: uppercase;
}
</style>