<template>
    <nav class="navbar navbar-expand-lg navbar bg" id="nav">
  <a class="navbar-brand" href="#" id="tituloNav"><img src="./img/topcar.png" width="120px" height="87px"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#/" id="home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#/cadastrar" id="cadastrar">Cadastrar Carro</a>
      </li>
    </ul>
  </div>
</nav>
</template>


<script>
export default {
}
</script>

<style>
#tituloNav {
color: blue

}
#nav {
    
    margin-top:0;
    height: 60px;
    background-color: rgb(4, 113, 177);
    border-block-end: 2px solid rgb(0, 0, 0);
}
#home {
color: rgb(0, 0, 0);
}

#cadastrar {
    color: rgb(0, 0, 0)

}

</style>