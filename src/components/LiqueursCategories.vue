<template>
    <div class="title">
      <h1 class="liqueurs-title">
          LICORES Y DULCES
      </h1>
    </div>
    <section class="liqueurs-container">
        <div class="liqueurs-grid">
            <div class="liqueurs-item imagen-8" v-for="i in imagenes" :key ="i">
                <img
                  v-bind:src= "i.imagen" 
                  alt='fotografía de una dulceria' 
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
        imagen: 'https://lh3.googleusercontent.com/p/AF1QipOLldIVfC0eSqn1TSg7fYQ2FNqgEUmF-qpMwYlU=w1080-h608-p-k-no-v0',
        title:'Mekatos',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi, autem repellendus dolor libero, hic dolore quae, facilis ea et quibusdam? Facilis, distinctio et ex eius deserunt odio vero quam!', 
        modal: '#item1', 
        modal_id: 'item1',
      },
      {
        imagen: 'https://lh3.googleusercontent.com/p/AF1QipON7HGs7lB32_HCnNc1Z4FRYRg2Rm0cfZIzqFj0=w768-h768-n-o-v1',
        title:'Juka', 
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi, autem repellendus dolor libero, hic dolore quae, facilis ea et quibusdam? Facilis, distinctio et ex eius deserunt odio vero quam!', 
        modal: '#item2', 
        modal_id: 'item2',
      },
      {
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_870537-MCO51742267360_092022-O.jpg',
        title:'Dulces y Más', 
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

.liqueurs-title{
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

.liqueurs-grid{
  display: grid;
  width: 70%;
  gap: 10px;
}

.liqueurs-item{
  padding: 4px;
  display: grid;
  grid-template-columns: 300px 400px;
  grid-auto-rows: 1fr;
  gap: 8px;
  box-shadow:0 5px 25px brown ;
  transition: .3s;
}

.liqueurs-item:hover{
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