<template>
        <nav>
            <a href='/'>
                <img class="logo" src="../assets/new-logo.png" alt="">
            </a>
            <ul v-show="!mobileView" class="nav-right-section">
                <li>
                    <a href="">
                        <img class="car" src="../assets/shopping-car.jpg" alt="carrito de compras">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img class="ubication" src="../assets/ubicacion.jpg" alt="ubicación">
                    </a>
                </li>
                <li>
                    <input id="icon" style="text-indent:17px;" type="text"  placeholder="¿Que buscas?">   
                </li>
                <li>
                    <a href="/Login">
                        <button  class="login"  >INGRESAR</button>
                    </a>
                </li>
                <li>
                    <a href="/Register">
                        <button class="check-in">REGISTRAR</button>
                    </a>
                </li>
            </ul>
            <div v-show="!showNav">
                <a href="#">
                    <img class="menu-icon" src="../assets/menu1.jpg" alt="">
                </a>
            </div>
        </nav>
</template>

<script>
export default {
    data() {
        return{
            mobileView: false,
            showNav: true
        }
    }
}
</script>

<style >
a{
    text-decoration: none;
    cursor: pointer;
}

nav{
    padding-top: 0px;
    width: 100%;
    height: 60px;
    margin-top: 2px;
    display: flex; 
}

nav .logo {
    width: 18rem;
    margin: 0px 0px 10px 30px;
    height: 6rem;
}

nav .nav-right-section{
    margin-top: 1rem;
    margin-right: 3rem;
    width: 100%;
    height: auto ;
    display: flex;
    list-style: none;
    justify-content: flex-end;    
}

nav .nav-right-section a{
    margin-right: 1rem;
}

nav .nav-right-section input:hover{
    box-shadow: 0 1px 6px 0 #20212447;
}

nav .nav-right-section input{
    height: 2.5rem;
    margin-right: 12rem;
    width: 28rem;
    padding-left: 28px;
    height: 30px;
    border-radius: 10px;
    border-color: rgb(155, 152, 152);
}

#icon{
    background-image: url(../assets/lupa.jpg);
    background-repeat: no-repeat;
    background-position: 250px;
    background-size: 2rem;       
}

nav .nav-right-section button{
    margin-right: 1rem;
    width: 10rem;
    height: 2.6rem;
    border-radius: 1rem;
    color: white;
    background-color: brown;
    border-color: beige;
    font-weight: bold;
    cursor: pointer;
}

nav .nav-right-section button:hover{
    border-color: rgb(209, 208, 207);
    box-shadow: 0 1px 1px 0 #20212447;
    font-weight: lighter;
}

nav .nav-right-section .car{
    width: 4rem;
    margin-right: 7rem;
 }

 nav .nav-right-section .ubication{
    width: 3.5rem;
    margin-right: 15rem;
 }

 nav  .menu-icon{
    margin-top: 0.5rem;
    margin-right: 1rem;
   width: 4rem;
   margin-left: 18rem;
}

</style>