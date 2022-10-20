<template>
    <div class="title">
      <h1 class="meats-title">
          CARNES
      </h1>
    </div>
    <section class="meats-container">
        <div class="meats-grid">
            <div class="meats-item imagen-8" v-for="i in imagenes" :key ="i">
                <img
                  v-bind:src= "i.imagen" 
                  alt='fotografía de una carniceria' 
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
        imagen: 'https://media.cdnp.elobservador.com.uy/adjuntos/181/imagenes/004/291/0004291315.jpg?&cw=350',
        title:'Mil Carnes',
        descripcion: 'Consideramos nuestra carnicería un lugar de suma higuiene por lo tanto puedes estar tranquilo en que nuestros carnicos estaran libres de bacterias y siempre tenemos los cortes mas frescos del mercado.', 
        modal: '#item1', 
        modal_id: 'item1',
      },
      {
        imagen: 'https://image.shutterstock.com/image-photo/young-smiling-butcher-wearing-red-260nw-1846038997.jpg',
        title:'El Rey De La Carne', 
        descripcion: 'En el rey de la carne no solo vendemos los mejores cortes de carne de res, también de cerdo y pollo todo lo que necesites para la preparación de los mejores platillos del hogar.', 
        modal: '#item2', 
        modal_id: 'item2',
      },
      {
        imagen: 'https://nombresparanegocios.org/wp-content/uploads/2021/07/Nombres-para-carniceri%CC%81as-398x267.png',
        title:'Carnitas', 
        descripcion: 'Las carnes son parte fundamental de una dieta saludable por eso nos enfocamos en ofrecerle a nuestros clientes la carne mas fresca, los cortes mas magros para que cada dia sean cenas especiales.', 
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

.meats-title{
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

.meats-grid{
  display: grid;
  width: 70%;
  gap: 10px;
}

.meats-item{
  padding: 4px;
  display: grid;
  grid-template-columns: 300px 400px;
  grid-auto-rows: 1fr;
  gap: 8px;
  box-shadow:0 5px 25px brown ;
  transition: .3s;
}

.meats-item:hover{
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