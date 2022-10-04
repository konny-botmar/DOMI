<template>
    <footer>
        <div class="footer-grid">
            <div class="footer-box">
                <a class="footer-item" href="">Restaurantes</a>
                <a class="footer-item" href="">Comidas Rápidas</a>
                <a class="footer-item" href="">Supermercados</a>
            </div>
            <div class="footer-box">
                <a class="footer-item" href="">Panaderías</a>
                <a class="footer-item" href="">Carnes</a>
                <a class="footer-item" href="">Verduras</a>
            </div>
            <div class="footer-box">
                <a class="footer-item" href="">Farmacias</a>
                <a class="footer-item" href="">Licores y Más</a>
                <a class="footer-item" href="">Restaurante Destacados</a>
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
<style scoped>
    footer .footer-grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(7.5rem, 20rem));
    grid-auto-rows: 1fr;        
    gap: 5px;
    margin-bottom: 2rem;
    margin-left: 5rem;
    margin-right: 5rem;
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
