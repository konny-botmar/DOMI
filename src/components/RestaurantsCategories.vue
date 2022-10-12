<template>
    <section class="restaurants-container">
        <h1 class="restaurants-title">
        RESTAURANTES
        </h1>
        <div class="restaurants-grid">
            <div class="restaurants-item imagen-8" v-for="i in imagenes" :key ="i">
                <img
                v-bind:src= "i.imagen" 
                alt='no dio' 
                v-bind:title= "i.descripcion"
                />
                <h3>{{i.title}}</h3>
                <img/>
                <p class="testimony" >{{i.descripcion}} </p>
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
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi, autem repellendus dolor libero, hic dolore quae, facilis ea et quibusdam? Facilis, distinctio et ex eius deserunt odio vero quam!', 
        modal: '#item1', 
        modal_id: 'item1',
      },
      {
        imagen: 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/6W4NBCLZ75DEFBCEUZHYDCNDZI.jpg',
        title:'La tablita', 
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi, autem repellendus dolor libero, hic dolore quae, facilis ea et quibusdam? Facilis, distinctio et ex eius deserunt odio vero quam!', 
        modal: '#item2', 
        modal_id: 'item2',
      },
      {
        imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/05/aa/05/pimento-cucina-italiana.jpg',
        title:'Tahona', 
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi, autem repellendus dolor libero, hic dolore quae, facilis ea et quibusdam? Facilis, distinctio et ex eius deserunt odio vero quam!', 
        modal: '#item3', 
        modal_id: 'item3',
      },],
    };
  }
})
</script>
<style scoped>

.restaurants-title{
  margin-top: 3rem;
  margin-bottom: 5rem;
  text-align: center;
  font-size: 25px;
  color: brown;
  font-weight: bold;

}

.restaurants-grid{
  display: grid;
}

.restaurants-item{
  padding: 4px;
  border: 1px solid;
  display: grid;
  grid-template-columns: 300px 400px;
  grid-auto-rows: 1fr;
  gap: 8px;
}
h3{
  align-self: center;
}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-area: 1/1/3/2;
}

</style>