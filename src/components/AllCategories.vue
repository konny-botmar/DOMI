<template>
    <h1 class="categories-title">
        CATEGORIAS
    </h1>
    <div class="imagen-container">
        <!-- se realizo un ciclo for el cual va a iterar toda la lista
    mostrando la descripcion y la imagen -->
        <div class="imagen-item imagen-8" v-for="i in imagenes" :key = i>
            <img v-bind:src= "i.imagen" alt='no dio' v-bind:title= "i.descripcion">
            <h3 class="subtitle" >{{i.descripcion}}</h3>
        </div>
    </div>
</template>
<script>
export default ({
    data() {
    return {
      imagenes: [{
        imagen: 'https://i.postimg.cc/BQ3vvw4Q/restaurante.webp', descripcion: 'RESTAURANTES', modal: '#item1', modal_id: 'item1',
      },
      {
        imagen: 'https://i.postimg.cc/W3QhS2BM/comidas-rapidas.jpg', descripcion: 'COMIDAS RÁPIDAS', modal: '#item2', modal_id: 'item2',
      },
      {
        imagen: 'https://i.postimg.cc/x10q6p4F/market.png', descripcion: 'SUPERMERCADOS', modal: '#item3', modal_id: 'item3',
      },
      {
        imagen: 'https://i.postimg.cc/1z7gn0M7/carne.webp', descripcion: 'CARNES', modal: '#item4', modal_id: 'item4',
      },
      {
        imagen: 'https://i.postimg.cc/ZYpR4hkM/verduras.jpg', descripcion: 'VERDURAS', modal: '#item5', modal_id: 'item5',
      },
      {
        imagen: 'https://i.postimg.cc/Dycw4dwQ/panaderia-2.png', descripcion: 'PANADERIAS', modal: '#item6', modal_id: 'item6',
      },
      {
        imagen: 'https://i.postimg.cc/gj8rTCp1/farmacia.webp', descripcion: 'FARMACIAS', modal: '#item7', modal_id: 'item7',
      },
      {
        imagen: 'https://i.postimg.cc/Qd0CwkLN/licores.png', descripcion: 'LICORES Y DULCES', modal: '#item8', modal_id: 'item8',
      }],
      imagen: '',
      descripcion: '',
    };
  }
})
</script>
<style>
.categories-title {
    margin-top:5rem;
    color: #333;
    font-weight: bold;
    text-align: center;
    margin-bottom: 50px;
    font-size: 2.5rem;
}
.imagen-container{
        margin-top: 5rem;
        margin-left:10rem;
        margin-right: 10rem;
        margin-bottom: 5rem;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: 2fr;
        row-gap: 4rem;
        text-align: center;
    }
    .imagen-item img{
        width: 180px;
        height: 180px;
    }

    .subtitle{
        margin-top: 1rem;
        margin-bottom: 0px;
        padding: 0px;
        font-weight: 600;
        color: black;
        font-size: 16px;
        text-align: center;
        margin-left: 0px;
    }
    .imagen-item hr{
        margin:10px;
        margin-top: 4px;
        color: #42b983;
        height: 2px;
        opacity: 1;
    }

    .like :hover{
        color: #ec3e3e;
        transition: 500ms ease;
    }

    @media (max-width: 700px){
        .imagen-container{
        margin: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 5px;
    }
    }
</style>
