<template>
    <div class="title">
      <h1 class="vegetables-title">
          VERDURAS Y FRUTAS
      </h1>
    </div>
    <section class="vegetables-container">
        <div class="vegetables-grid">
            <div class="vegetables-item imagen-8" v-for="i in imagenes" :key ="i">
                <img
                  v-bind:src= "i.imagen" 
                  alt='fotografía de una verdureria' 
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
        imagen: 'http://www.hectorpolino.com/wp-content/uploads/2021/01/verduleriayfruterialayapa-IC2.jpg',
        title:'Frutos del Bosque',
        descripcion: 'Las verduras más frescas de pensilvania encuentralas a qui en frutos del bosque siempre tenemos la mejor atención hacia nuestros clientes y gran variedad en frutas, verduras y legumbres.', 
        modal: '#item1', 
        modal_id: 'item1',
      },
      {
        imagen: 'https://diccionarioactual.com/wp-content/uploads/2017/01/verduler%C3%ADa.jpg',
        title:'Verduras La Plazuela', 
        descripcion: 'Productos campesinos de los alrededores nosotros queremos siempre la mejor calidad y sabemos que eso se basa en la frecura de nuestros productos, ven consigue frutas propias de la región como el araza, la guayaba feijoa entre otas, también puedes encontrar quesos campesinos.', 
        modal: '#item2', 
        modal_id: 'item2',
      },
      {
        imagen: 'http://paralelo32.com.ar/wp-content/uploads/2018/01/Frutas-y-verduras.png',
        title:'Frutas y Verduras', 
        descripcion: 'Sabemos que para el cuidado de la familia debeos brindarle los mejores productos con las verduras mas frescas y limpias por la salud de nuestro seres amados traemos la frutas y verduras de lugares que no usan insecticidas ni venenos, te ofrecemos frutas libres de contaminantes.', 
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

.vegetables-title{
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

.vegetables-grid{
  display: grid;
  width: 70%;
  gap: 10px;
}

.vegetables-item{
  padding: 4px;
  display: grid;
  grid-template-columns: 300px 400px;
  grid-auto-rows: 1fr;
  gap: 8px;
  box-shadow:0 5px 25px brown ;
  transition: .3s;
}

.vegetables-item:hover{
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