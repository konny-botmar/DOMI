<template>
    <div class="title">
      <h1 class="fast-title">
          COMIDAS RÁPIDAS
      </h1>
    </div>
    <section class="fast-container">
        <div class="fast-grid">
            <div class="fast-item imagen-8" v-for="i in imagenes" :key ="i">
                <img
                  v-bind:src= "i.imagen" 
                  alt='fotografía de un lugar de comidas rápidas' 
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
        imagen: 'https://laverdad.com.mx/wp-content/uploads/2020/07/comida.jpg',
        title:'La Gula',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi, autem repellendus dolor libero, hic dolore quae, facilis ea et quibusdam? Facilis, distinctio et ex eius deserunt odio vero quam!', 
        modal: '#item1', 
        modal_id: 'item1',
        ruta: './Restaurantes',
      },
      {
        imagen: 'https://i.pinimg.com/200x150/20/9b/06/209b06015142db3dc26aab0ac0ca12dd.jpg',
        title:'Plaza Café', 
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi, autem repellendus dolor libero, hic dolore quae, facilis ea et quibusdam? Facilis, distinctio et ex eius deserunt odio vero quam!', 
        modal: '#item2', 
        modal_id: 'item2',
      },
      {
        imagen: 'https://laopinion.com/wp-content/uploads/sites/3/2021/11/McDonalds-ready-made-en-Pexels-1.jpg?quality=80&strip=all&w=1200',
        title:'El Parque', 
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi, autem repellendus dolor libero, hic dolore quae, facilis ea et quibusdam? Facilis, distinctio et ex eius deserunt odio vero quam!', 
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

.fast-title{
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

.fast-grid{
  display: grid;
  width: 70%;
  gap: 10px;
}

.fast-item{
  padding: 4px;
  display: grid;
  grid-template-columns: 300px 400px;
  grid-auto-rows: 1fr;
  gap: 8px;
  box-shadow:0 5px 25px brown ;
  transition: .3s;
}

.fast-item:hover{
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