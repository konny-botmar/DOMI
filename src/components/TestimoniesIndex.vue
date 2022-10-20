<template>
    <h1 class="testimonies-title">
        TESTIMONIOS
    </h1>  
    <section class="testimonies-container"> 
        <div class="card">
            <div class="head">
                <div class="circle"></div>
                <div class="img">
                    <img src="https://www.cuerpomente.com/medio/2022/03/08/meritxell-garcia_f1be0453_1200x1200.jpg" alt="">
                </div>
            </div>

            <div class="description">
                <h3>Natalia Torres</h3>
                <p>Soy una mujer que por sus grandes ocupaciones dia a dia no tengo mucho tiempo para salir de compras, soy mama soltera e independiente por eso DOMI ha sido la plataforma perfecta para mi, permitiendome adquirir esos productos de mis necesidades diarias en la puerta de mi casa.</p>
            </div>
        </div>
        <div class="card">
            <div class="head">
                <div class="circle"></div>
                <div class="img">
                    <img src="../assets/person3.jpg" alt="">
                </div>
            </div>

            <div class="description">
                <h3>Oscar Ortiz</h3>
                <p>Soy una persona dedicada al trabajo y este suele absorber gran parte de mi tiempo por lo que trato que el resto sea para mi familia, el hecho de no tener que ir a hacer las colas al supermercado, la farmacia, entre otros, me ha permitido tener mas tiempo para ellos sin estar haciendo tareas engorrosas que se facilitan actualmente gracias a DOMI.</p>
            </div>
        </div>
        <div class="card">
            <div class="head">
                <div class="circle"></div>
                <div class="img">
                    <img src="../assets/person2.jpg" alt="">
                </div>
            </div>

            <div class="description">
                <h3>Sofia Agudelo</h3>
                <p>Hola, soy sofia desde que DOMI llego a pensilvania cambio mi vida, antes pedir la comida a domicilio era sumamente complejo no todos los restaurantes tenian esta opción pero ahora con la plataforma puedo pedir en el restaurante que quiera a la hora que necesite, mi espectro para escoger que quiero comer dia a dia se ha expandido.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
h1{
    padding-top: 50px;
    text-align: center;
    background-color:  white;
}
.testimonies-container{
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
    background-color: white;
    flex-wrap: wrap ;
}

.card{
    position: relative;
    width: 300px;
    height: 400px;
    background-color: white;
    border-radius: 5px;
    border: 2px solid rgb(147, 21, 21, .5);
    box-shadow: 0 5px 25px #F6DE80 ;
    overflow: hidden;
    transition: .5s;
    margin: 15px 20px;
}
.card:hover{
    box-shadow:0 5px 15px rgb(147, 21, 21, .5) ;
    transform: translateY(-15px);
}

.card .head{
    height: 125px;
    width: 100%;
    position: relative;
}

.card .head .circle{
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: brown;
    bottom: 0;
}

.card .head .img{
    width: 150px;
    height: 150px;
    position: absolute;
    background-color: #F6DE80;
    padding: 5px;
    border-radius: 50%;
    bottom: -30%;
    left: 50%;
    transform: translate(-50%);
}

.card .head .img img{
    width: 100% ; 
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}
.card .description{
   height: 200px;
   padding: 40px 20px 20px 20px;
   text-align: center;
}

.card .description h3{
    color: rgb(147, 21, 21);
}

.card .description p{
    margin-top: 10px;
}
</style>
 