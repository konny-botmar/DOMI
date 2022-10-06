<template>
    <section class="featured">
            <h2 class="featured-title">DESTACADOS</h2>
            <div class="featured-grid">
                <div class="featured-item">
                    <img src="https://i.postimg.cc/x81YzQxq/de-la-monta-a.jpg" alt="DE LA MONTAÑA">
                    <h3>DE LA MONTAÑA</h3>
                    <form>
                        <p class="clasificacion">
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
                <div class="featured-item">
                    <img src="https://i.postimg.cc/GtgRPfVK/la-gula.jpg" alt="LA GULA">
                    <h3>LA GULA</h3>
                    <form>
                        <p class="clasificacion">
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
                <div class="featured-item">
                    <img src="https://i.postimg.cc/gJDmjjKf/paz-y-flora.png" alt="PAZ Y FLORA">
                    <h3>PAZ Y FLORA</h3>
                    <form>
                        <p class="clasificacion">
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
                <div class="featured-item">
                    <img src="https://i.postimg.cc/dVssM8mG/TAHONA.jpg" alt="TAHONA">
                    <h3>TAHONA</h3>
                    <form>
                        <p class="clasification">
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
            </div>
        </section>
</template>
<script>
export default {
    name: 'FeatureStars',
}
</script>
<style>
    section.featured{
    padding: 15rem;
    padding-top: 5rem ;
    padding-bottom: 0;
}

.featured-title {
    color: #333;
    font-weight: bold;
    text-align: center;
    margin-bottom: 50px;
    font-size: 2.5rem;
}

.featured-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(75px, 20rem));
    grid-auto-rows: 1fr;
    gap: 25px;
    margin: 50px 0;
    justify-content: center;
    text-align: center;   
}

.featured-item img {
    width: 15rem;
    border-radius: 100px;
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
    font-size: 20px;
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
</style>

