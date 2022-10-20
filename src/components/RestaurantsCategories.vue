<template>
    <div class="title">
      <h1 class="restaurants-title">
          RESTAURANTES
      </h1>
    </div>
    <section class="restaurants-container">
        <div class="restaurants-grid">
            <div class="restaurants-item" v-for="i in imagenes" :key ="i">
              <router-link :to="i.ruta">
                <img
                  v-bind:src= "i.imagen" 
                  alt='no dio' 
                  v-bind:title= "i.descripcion"
                />
              </router-link>
              <router-link class="info" :to="i.ruta">
                <h3>{{i.title}}</h3>
                <p class="description" >{{i.descripcion}} </p>
              </router-link>
            </div>
        </div>
    </section>
</template>
<script>
export default ({
    data() {
    return {
      imagenes: [{
        imagen: 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/2K7FHLJP75FGRO2LKQMCFKFKWA.jpg',
        title:'De la montaña',
        descripcion: 'Nuestro restaurante ofrece la mejor comida y el mejor servicio de la ciudad. Tenemos una gran variedad de platos para elegir, y nuestros camareros estarán encantados de ayudarle a encontrar el perfecto para usted. No importa si usted está buscando una buena comida para llevar o para cenar, usted siempre encontrará lo que busca en nuestro restaurante.', 
        modal: '#item1', 
        modal_id: 'item1',
        ruta: '/Store',
      },
      {
        imagen: 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/6W4NBCLZ75DEFBCEUZHYDCNDZI.jpg',
        title:'La tablita', 
        descripcion: 'Nuestro restaurante lleva mas de 30 años en funcionamiento con esto te garantizamos la calidad de nuestros productos y la satisfacción a tu paladar', 
        modal: '#item2', 
        modal_id: 'item2',
        ruta: '/Restaurantes',
      },
      {
        imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/05/aa/05/pimento-cucina-italiana.jpg',
        title:'Tahona', 
        descripcion: 'En nuestro restaurante nos enfocamos en ofrecer platillos para el deleite de grandes y chicos con los mejores precios y la mejor atención. No te lo pierdas.', 
        modal: '#item3', 
        modal_id: 'item3',
        ruta: '/Panaderias',
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

.restaurants-title{
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

.restaurants-grid{
  display: grid;
  width: 70%;
  gap: 10px;
}

.restaurants-item{
  padding: 4px;
  display: grid;
  grid-template-columns: 300px 400px;
  grid-auto-rows: 1fr;
  gap: 8px;
  box-shadow:0 5px 25px brown ;
  transition: .3s;
}

.restaurants-item:hover{
    box-shadow:0 5px 25px #F6DE80;
    transform: translateY(-8px);
}

.restaurants-item .info{
  width: 500px;
}

.info h3{
  padding: 20px;
  align-self: center;
  color: black;
  text-decoration: none;
}

.info p{
  color: black;
  text-align: justify;
  padding: 10px;
}

img{
  width: 300px;
  height: 200px;
  object-fit: cover;
  grid-area: 1/1/3/2;
}

</style>