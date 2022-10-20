<template>
    <div class="title">
      <h1 class="bakeries-title">
          PANADERIAS
      </h1>
    </div>
    <section class="bakeries-container">
        <div class="bakeries-grid">
            <div class="bakeries-item imagen-8" v-for="i in imagenes" :key ="i">
                <img
                  v-bind:src= "i.imagen" 
                  alt='fotografía de una panadería' 
                  v-bind:title= "i.descripcion"
                />
                <h3>{{i.title}}</h3>
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
        imagen: 'https://canaltrece.com.co/uploads/newsarticle/3c355c8d3b444d538089ac92a3503f0c/Panaderia-pan-colombia.jpg',
        title:'Donde Salento',
        descripcion: 'En nuestra panaderia encontraras pan fresco todos los dias y casero para que sientas que el pan fue echo por ti en casa.', 
        modal: '#item1', 
        modal_id: 'item1',
      },
      {
        imagen: 'https://portales.vilbo.com/files/uploads/images/articulos/book%20dulcypas%2018/babette.jpg',
        title:'La Bogotana', 
        descripcion: 'Hemos desarrollado las mejores formulas para la fabricación de un pan de alta calidad y deliciosos sabores.', 
        modal: '#item2', 
        modal_id: 'item2',
      },
      {
        imagen: 'https://agenciaajn.com/new/wp-content/uploads/2018/01/panader%C3%ADa.jpg',
        title:'Pam', 
        descripcion: 'La panadería más fresca de la ciudad está aquí! Prueba nuestro pan recién hecho todos los días.', 
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

.bakeries-title{
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

.bakeries-grid{
  display: grid;
  width: 70%;
  gap: 10px;
}

.bakeries-item{
  padding: 4px;
  display: grid;
  grid-template-columns: 300px 400px;
  grid-auto-rows: 1fr;
  gap: 8px;
  box-shadow:0 5px 25px brown ;
  transition: .3s;
}

.bakeries-item:hover{
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