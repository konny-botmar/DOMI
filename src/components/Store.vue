<template>
    <h1>
        DOMI
    </h1>
    <section class="store">
        <div class="info-store">
            <img class="logo-store" src="https://i.postimg.cc/x81YzQxq/de-la-monta-a.jpg" alt="">
            <div>
                <h2 class="store-title">De La Montaña</h2>
                <img class="slider" src="https://scontent.fbog2-5.fna.fbcdn.net/v/t1.6435-9/119931202_113755000473858_2651982750944415361_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEAXUYDlH7pF7npiG-wmfZyJaeyBd7kQPklp7IF3uRA-TCmV7H2XE0RSpWrxO-IFJBAtT007OxYenWNSz9se2r1&_nc_ohc=DfLldtpU7VoAX9vIIBD&_nc_oc=AQlmIr7OmCXYims6yoYiHzwEluI5sfk2VU9dOuHcOf4XHCHoIvd_yYm2OIHk17T8ClaH8YEkRx5TovApvnoIbZM7&tn=vGoh_Z3hLCUTqq0A&_nc_ht=scontent.fbog2-5.fna&oh=00_AT-lPI0RjAWmnicc63K9GfgQWoWQFRC_qYpW9W_KDLW6YA&oe=636FE32C" alt="">
            </div>
            <form>
                <p class=" item clasification">
                    <input id="radio1" type="radio" name="estrellas" value="5">
                    <label for="radio1">★</label>
                    <input id="radio2" type="radio" name="estrellas" value="4">
                    <label for="radio2">★</label>
                    <input id="radio3" type="radio" name="estrellas" value="3">
                    <label for="radio3">★</label>
                    <input id="radio4" type="radio" name="estrellas" value="2">
                    <label for="radio4">★</label>
                    <input id="radio5" type="radio" name="estrellas" value="1">
                    <label for="radio5">★</label>
                </p>
            </form>
        </div>
        <h2 class="our-options">
                NUESTAS OPCIONES
        </h2>
            <section class="store-grid">
                <div class="store-item imagen-8" v-for="i in imagenes" :key ="i">
                    <img class="store-img"
                    v-bind:src= "i.imagen" 
                    alt='fotografía de un plato de comida' 
                    v-bind:title= "i.descripcion"
                    />
                    <div class="product-info">
                        <h3>{{i.title}}</h3>
                        <p class="description" >{{i.descripcion}} </p>
                    </div>
                    <div class="car">
                        <img class="car" src="../assets/shopping-car.jpg" alt="">
                    </div>
                </div>
            </section>
            <section class="recomended">
                <h2>RECOMENDADOS</h2>
                <div class="recomended-grid">
                    <div class="recomended-item">
                        <img src="https://easyrecetas.com/wp-content/uploads/2020/02/Receta-de-Camarones-con-Arroz.jpg" alt="">
                        <h3>Arroz con camarones</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis tenetur iste quisquam laborum. Quis, vel qui incidunt eligendi nulla voluptatum, aspernatur temporibus delectus assumenda ipsa dolor reiciendis magnam facere.</p>
                    </div>
                    <div class="recomended-item">
                        <img src="https://t1.rg.ltmcdn.com/es/posts/8/5/3/magret_de_pato_al_horno_53358_orig.jpg" alt="">
                        <h3>Pato al horno</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis tenetur iste quisquam laborum. Quis, vel qui incidunt eligendi nulla voluptatum, aspernatur temporibus delectus assumenda ipsa dolor reiciendis magnam facere.</p>
                    </div>
                    <div class="recomended-item">
                        <img src="https://i.pinimg.com/originals/fb/df/9b/fbdf9be273386a084adaa5ec35723efd.jpg" alt="">
                        <h3>Filete de cerdo</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis tenetur iste quisquam laborum. Quis, vel qui incidunt eligendi nulla voluptatum, aspernatur temporibus delectus assumenda ipsa dolor reiciendis magnam facere.</p>
                    </div>
                </div>
            </section>
        </section>
</template>
<script>
    export default ({
    data() {
    return {
      imagenes: [{
        imagen: 'https://www.cardamomo.news/__export/1611701029154/sites/debate/img/2021/01/26/receta_de_costillas_de_cerdo_agridulce_estilo_oriental_crop1611700668865.jpeg_1753094345.jpeg',
        title:'Lomo de cerdo en salsa agridulce',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi, autem repellendus dolor libero, hic dolore quae, facilis ea et quibusdam? Facilis, distinctio et ex eius deserunt odio vero quam!', 
        modal: '#item1', 
        modal_id: 'item1',
      },
      {
        imagen: 'https://www.recetin.com/wp-content/uploads/2015/04/pollo.jpg',
        title:'Pechuga en salsa de champiñones', 
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi, autem repellendus dolor libero, hic dolore quae, facilis ea et quibusdam? Facilis, distinctio et ex eius deserunt odio vero quam!', 
        modal: '#item2', 
        modal_id: 'item2',
      },
      {
        imagen: 'https://images.aws.nestle.recipes/original/422196dee3ad3b208c8c51ed3a26df48_BISTECK-A-CABALLO-2.jpg',
        title:'Bistec a caballo', 
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi, autem repellendus dolor libero, hic dolore quae, facilis ea et quibusdam? Facilis, distinctio et ex eius deserunt odio vero quam!', 
        modal: '#item3', 
        modal_id: 'item3',
      },],
    };
  }
})
</script>
<style scoped>
h1{
    padding-bottom: 2rem;
    padding-top: 2rem;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 4rem;
    background-color: brown;
}

.store{
    display: grid;
    justify-content: center;
    margin-bottom: 10px;
}

.info-store{
    display: grid;
    justify-content: center;
    grid-template-columns: 200px 300px 100px;
    grid-auto-rows: 1fr;
    gap: 10px;
    padding: 5px;
    padding-right: 100px;
}

.logo-store{
    width: 100px;
    height: 100px;
    border-radius: 100%;
}

.store-title{
    text-align: center;
}

.slider{
    width: 300px;
    height: 200px;
}

form{
    display: grid;
    justify-items: end;
}

#form {
    width: 250px;
    margin: 0 auto;
    height: 50px;
  }
  
  #form p {
    text-align: center;
  }
  
  #form label {
    font-size: 50px;
  }
  
  input[type="radio"] {
    display: none;
  }
  
  label {
    color: grey;
  }
  
  .clasification {
    direction: rtl;
    unicode-bidi: bidi-override;
  }
  
  label:hover,
  label:hover ~ label {
    color: orange;
  }
  
  input[type="radio"]:checked ~ label {
    color: orange;
  }

  h2.our-options{
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #F6DE80;
  }


  section.store-grid{
    display: grid;
    gap: 15px;
    margin-top: 10px;
    width: 80%;
    justify-self:center;
  }

  div.store-item{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    border: 0.5px solid brown;
    padding: 10px;
    border-radius: 30px;
    box-shadow: 5px 5px brown;
  }

  img.store-img{
    width: 300px;
    height: 200px;
    border-radius: 20px;
    object-fit: cover;
    grid-area: 1/1/3/2;
  }

  div.product-info{
    display: grid;
    grid-row: 1/3;
  }

  .product-info h3{
    text-justify: center;
  }

  div.car{
    display: grid;
    grid-row: 1/3;
    place-items: center;
  }

  div.car img{
    width: 40px;
  }

  section.recomended h2{
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: brown;
    color: white;
    margin-top: 15px;
    font-weight: lighter;
  }

  div.recomended-grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    margin-top: 10px;
    margin-right: 250px;
    margin-left: 250px;
    gap: 90px;
  }

  .recomended-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    padding: 15px;
    gap: 2px;
    border: 2px solid #F6DE80;
    box-shadow: 0px 0px 4px 4px #F6DE80;
  }

  .recomended-item:hover{
    box-shadow:0 5px 15px rgb(147, 21, 21, .5) ;
    transform: translateY(-15px);
}

  .recomended-item img{
    width: 250px;
    height: 200px;
  }
</style>