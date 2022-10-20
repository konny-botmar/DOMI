<template>
    <hr>
    <section>
        <div class="login">
                <h1 class="titulo">INGRESAR</h1>
                <p>
                    Usuario
                    <input type="text" placeholder="Usuario" class="ancho input" />
                </p>
                <p>
                    Crontraseña
                    <input type="password" placeholder="********" class="ancho input" />
                    <a href="">He olvidado mi clave</a>
                </p>
                <button class="ancho boton">Ingresar</button>
                <div class="recuperar"><a  href="/Register">No tengo una cuenta registrada</a></div>
            </div>
        </section>
    <hr>	
</template>

<style scoped>
hr{
    border: 5px solid brown;
}

section{
    background-image: linear-gradient(105deg, brown 5%, #F6DE80 140%);
    width:100%;
    height: 560px;
    padding-top: 20px;
    display: grid;
    align-content: center;
}

.login {
	width: 400px;
	height: 420px;
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

.boton:hover{
    box-shadow: 0 5px 25px brown ;
}

a{
    color:brown;
}
.recuperar {
	margin: auto;
	width: 50%;
	margin-top: 10px;
    text-align: center;
}
.titulo {
    margin: auto;
    margin-top: 50px;
    width: 30%;
    font-size: 25px;
}   
</style>
