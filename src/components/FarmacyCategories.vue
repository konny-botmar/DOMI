<template>
    <div class="title">
      <h1 class="farmacy-title">
          FARMACIAS
      </h1>
    </div>
    <section class="farmacy-container">
        <div class="farmacy-grid">
            <div class="farmacy-item imagen-8" v-for="i in imagenes" :key ="i">
                <img
                  v-bind:src= "i.imagen" 
                  alt='fotografía de una farmacia' 
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
        imagen: 'https://www.plantadoce.com/files/2020/20_recursos/equipamiento/farmacia-productos-728.jpg',
        title:'Donde Mauricio',
        descripcion: 'En nuestra farmacia estamos preparados para atenderte con el mayor de los gustos y con una gran variedad de productos medicos, de salud, belleza, entre otros.', 
        modal: '#item1', 
        modal_id: 'item1',
        ruta: './Restaurantes',
      },
      {
        imagen: 'https://retailers.mx/revista/wp-content/uploads/2021/07/counter.-juarez-coacalco.23062021.-by.arocha100.jpg',
        title:'Drogas la Rebaja', 
        descripcion: 'Aqui te brindamos asesoria para toma de medicamentos y te ofrecemos los mejores precios del mercado', 
        modal: '#item2', 
        modal_id: 'item2',
      },
      {
        imagen: 'https://todocedritos.com/empresas_negocios_establecimientos_cedritos_bogota/drogueria-papeleria-lisboa-farmacia-cedritos-bogota-200b.jpg',
        title:'Drogueria Mercaldas', 
        descripcion: 'La mejor atención combinada con una cantidad de productos no solo de grandes laboratorios sino también naturales para las personas que prefieran la medicina alternativa.', 
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

.farmacy-title{
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

.farmacy-grid{
  display: grid;
  width: 70%;
  gap: 10px;
}

.farmacy-item{
  padding: 4px;
  display: grid;
  grid-template-columns: 300px 400px;
  grid-auto-rows: 1fr;
  gap: 8px;
  box-shadow:0 5px 25px brown ;
  transition: .3s;
}

.farmacy-item:hover{
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