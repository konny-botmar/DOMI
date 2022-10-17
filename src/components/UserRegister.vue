<template>
    <hr>
    <section>
        <div class="login">
                <h1 class="titulo">REGISTRAR</h1>
                <p>
                    Nombres
                    <input type="text" placeholder="Nombres completos" class="ancho input" />
                </p>
                <p>
                    Correo electronico
                    <input type="email" placeholder="example@gmail.com" class="ancho input" />
                    <a>El correo electrónico es válido</a>
                </p>
                <p>
                    Contraseña
                    <input type="password" placeholder="********" class="ancho input" />
                    <a>La contraseña es válida</a>
                </p>
                <p>
                    Confirmar Contraseña
                    <input type="password" placeholder="********" class="ancho input" />
                    <a>La contraseña coincide</a>
                </p>
                <button class="ancho boton">Registrar</button>
                <div class="recuperar"><a  href="">Ya tengo una cuenta</a></div>
            </div>
        </section>
    <hr>	
</template>

<style scoped>
hr{
    border: 5px solid brown;
}

section{
    background-image: linear-gradient(90deg, brown 5%, #F6DE80 140%);
    width:100%;
    height: 560px;
    padding-top: 20px;
    display: grid;
    align-content: center;
}

.login {
	width: 420px;
	height: 460px;
	padding-left: 10px;
	margin:auto;
	padding-right: 20px;
	border-radius: 25px;
    place-self: center;
    background-color: beige;
    display: grid;
    box-shadow:0 5px 25px brown ;
}

.titulo{
    text-align: center;
    margin: auto;
    width: 30%;
    font-size: 25px;
} 
.ancho {
	width: 100%;
	height: 25px;
    border-radius: 25px;
}
.input {
    text-align: left;
    margin-top: 10px;
    padding-left: 15px;
}

button{
    border: none;
}
.boton {
	background-color: brown;
	width: 50%;
	margin: auto;
	display: block;
    height: 40px;
    color: white;
    text-shadow: #F6DE80;
    font-size: 18px;
}

p a{
    color: rgb(62, 120, 62);
}
.recuperar {
	margin: auto;
	width: 50%;
	margin-top: 10px;
    text-align: center;
}

.recuperar a{
    color: brown;
}
  
</style>
