<template>
    <main>
        <section class="first-view">
            <h1 class="title-initial-pag">
                DOMI
            </h1>
            <div class="introductory-video">
                <iframe 
                    src="https://www.youtube.com/embed/bcJxpVp7Uds" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </section>
    </main>
</template>

<script>
export default ({
    name: 'FooterIndex',
})
</script>

<style scoped>
main{
    background-color: brown;
    padding-top: 3rem;
    text-align: center;
    padding-bottom: 0.5rem;
}

.title-initial-pag{
    padding-bottom: 2.5rem;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 4rem;
}

main section{
    position: relative;
}

section iframe{ 
    position: relative;
    height: 45rem; 
    width: 100%;
    z-index: 0; 
}
</style>
