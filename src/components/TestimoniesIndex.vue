<template>
        <section class="testimonies-container">
            <h1 class="testimonies-title">
            TESTIMONIOS
            </h1>
            <!-- se realizo un ciclo for el cual va a iterar toda la lista
        mostrando la foto de quien da el testimonio y su testimonio acerca de la app -->
            <div class="testimonies-grid">
                <div class="testimony-item imagen-8" v-for="i in imagenes" :key ="i">
                    <img 
                    v-bind:src= "i.imagen" 
                    alt='no dio' 
                    v-bind:title= "i.descripcion"
                    />
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
        imagen: 'https://i.postimg.cc/6qGSHkjw/person1.png', 
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi, autem repellendus dolor libero, hic dolore quae, facilis ea et quibusdam? Facilis, distinctio et ex eius deserunt odio vero quam!', 
        modal: '#item1', 
        modal_id: 'item1',
      },
      {
        imagen: 'https://i.postimg.cc/hhWYN26m/person2.png', 
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi, autem repellendus dolor libero, hic dolore quae, facilis ea et quibusdam? Facilis, distinctio et ex eius deserunt odio vero quam!', 
        modal: '#item2', 
        modal_id: 'item2',
      },
      {
        imagen: 'https://i.postimg.cc/j51m4xhZ/person3.png', 
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi, autem repellendus dolor libero, hic dolore quae, facilis ea et quibusdam? Facilis, distinctio et ex eius deserunt odio vero quam!', 
        modal: '#item3', 
        modal_id: 'item3',
      },],
    };
  }
})
</script>
<style scoped>
.testimonies-container{
    margin-top: 12rem;
    padding: 15rem;
    padding-top: 0 ;
    padding-bottom: 5rem;
}

.testimonies-title {
    margin-top: 5rem;
    color: #333;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    font-size: 2.5rem;
}

.testimonies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(75px, 20rem));
    grid-auto-rows: 1fr;
    gap: 25px;
    margin: 50px 0;
    justify-content: center;  
}

.testimony-item img{
    width: 20rem;
    height: 10rem;
}

p{
    text-align: center;
}
</style>

