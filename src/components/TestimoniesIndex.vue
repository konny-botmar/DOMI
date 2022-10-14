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
                <h3>Sofia Agudelo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non asperiores optio veritatis quas quaerat rerum necessitatibus ex fugiat dolorum officia quidem mollitia, totam accusantium saepe neque alias ea sequi deleniti!</p>
            </div>
        </div>
        <div class="card">
            <div class="head">
                <div class="circle"></div>
                <div class="img">
                    <img src="https://www.cuerpomente.com/medio/2022/03/08/meritxell-garcia_f1be0453_1200x1200.jpg" alt="">
                </div>
            </div>

            <div class="description">
                <h3>Sofia Agudelo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non asperiores optio veritatis quas quaerat rerum necessitatibus ex fugiat dolorum officia quidem mollitia, totam accusantium saepe neque alias ea sequi deleniti!</p>
            </div>
        </div>
        <div class="card">
            <div class="head">
                <div class="circle"></div>
                <div class="img">
                    <img src="https://www.cuerpomente.com/medio/2022/03/08/meritxell-garcia_f1be0453_1200x1200.jpg" alt="">
                </div>
            </div>

            <div class="description">
                <h3>Sofia Agudelo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non asperiores optio veritatis quas quaerat rerum necessitatibus ex fugiat dolorum officia quidem mollitia, totam accusantium saepe neque alias ea sequi deleniti!</p>
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
    margin-top: 15px;
}
</style>
 