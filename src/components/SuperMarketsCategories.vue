<template>
    <div class="title">
      <h1 class="market-title">
          SUPERMERCADOS
      </h1>
    </div>
    <section class="market-container">
        <div class="market-grid">
            <div class="market-item imagen-8" v-for="i in imagenes" :key ="i">
                <img
                  v-bind:src= "i.imagen" 
                  alt='fotografía de un supermercado' 
                  v-bind:title= "i.descripcion"
                />
                <h3>{{i.title}}</h3>
                <img/>
                <p class="description" >{{i.descripcion}} </p>
            </div>
        </div>
    </section>
</template>
<script>
export default ({
    data() {
    return {
      imagenes: [{
        imagen: 'https://cnnespanol.cnn.com/wp-content/uploads/2022/03/220321095658-us-grocery-store-shopping-0310-restricted-super-tease.jpg?quality=100&strip=info',
        title:'La Septima',
        descripcion: 'Nuestro supermercado tiene gran calidad en los diferentes productos que vendemos tenemos todo lo necesario para el hogar y el cuidado de la familia, grandes promociones y rifas mensuales a los mejores clientes.', 
        modal: '#item1', 
        modal_id: 'item1',
      },
      {
        imagen: 'https://imagenes.lainformacion.com/files/image_656_370/uploads/imagenes/2022/08/03/supermercado-tienda.jpeg',
        title:'Mercatodo', 
        descripcion: 'Si quieres el lugar mas completo y economico de la zona ven a mercatodo encontraras panela campesina de alta calidad y productos campesinos frescos, esperamos a todos nuestro clientes con la mayor disponibilidad, amabilidad y alegría.', 
        modal: '#item2', 
        modal_id: 'item2',
      },
      {
        imagen: 'https://img.lalr.co/cms/2021/06/29120335/Tiendas-Ara.png?size=xl',
        title:'Tiendas Ara', 
        descripcion: 'En esta cadena de supermercados nos hemos encargado de tener productos que marquen la diferencia en cuanto a precio y calidad, la variedad la encuentras en tiendas ara aqui también te ofrecemos productos frescos tales como pollo asado, pizza y pasteles, adquiere nuestros servicios ya.', 
        modal: '#item3', 
        modal_id: 'item3',
      },],
    };
  }
})
</script>
<style scoped>

div .title{
  background-color: brown;
  height: 70px;
  margin-top: 0px;
}

.market-title{
  padding-top: 10px;
  margin-bottom: 4px;
  text-align: center;
  font-size: 25px;
  color: white;
  font-weight: bold;
  justify-self: center;

}

section {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
}

.market-grid{
  display: grid;
  width: 70%;
  gap: 10px;
}

.market-item{
  padding: 4px;
  display: grid;
  grid-template-columns: 300px 400px;
  grid-auto-rows: 1fr;
  gap: 8px;
  box-shadow:0 5px 25px brown ;
  transition: .3s;
}

.market-item:hover{
    box-shadow:0 5px 25px #F6DE80;
    transform: translateY(-8px);
}

h3{
  align-self: center;
}

img{
  width: 300px;
  height: 200px;
  object-fit: cover;
  grid-area: 1/1/3/2;
}

</style>