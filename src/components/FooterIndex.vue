<template>
    <footer>
        <div class="footer-grid">
            <div class="footer-box">
                <a class="footer-item" href="/Restaurantes">Restaurantes</a>
                <a class="footer-item" href="/ComidasRapidas">Comidas Rápidas</a>
                <a class="footer-item" href="/Supermercados">Supermercados</a>
            </div>
            <div class="footer-box">
                <a class="footer-item" href="/Panaderias">Panaderías</a>
                <a class="footer-item" href="/Carnes">Carnes</a>
                <a class="footer-item" href="/Verduras">Verduras</a>
            </div>
            <div class="footer-box">
                <a class="footer-item" href="/Farmacias">Farmacias</a>
                <a class="footer-item" href="/Licores">Licores y Más</a>
                <a class="footer-item" href="">Restaurantes Destacados</a>
            </div>
            <div class="footer-box-right">
                <a class="footer-item" href="">Ayuda</a>
                <a class="footer-item" href="">Condiciones y Restricciones</a>
                <a class="footer-item" href="">Contáctanos</a>
            </div>
        </div>
    </footer>
</template>
<script>
export default ({
    name: 'FooterIndex',
})
</script>
<style >
    footer .footer-grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(7.5rem, 20rem));
    grid-auto-rows: 1fr;        
    gap: 5px;
    padding: 2rem;
    padding-left: 5rem;
    background-color:#F6DE80 ;
}

footer .footer-box{
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-auto-columns: 1fr;
    gap: 0.3rem;
}

footer .footer-box-right{
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-auto-columns: 1fr;
    gap: 0.3rem;
    grid-column: 6;   
}

footer .footer-grid a{
    color: black;
}

footer .footer-grid a:hover{
    color: brown;
}
</style>
