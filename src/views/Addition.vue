<template>
    <div id="addition">
        <h1 id="addition-title">New Cocktail</h1>
        <form>
            <label>
                <span>カクテル名</span>
                <input id="cocktailName" type="text" required>
            </label>
            <BaseAddition />
            <AlcoholAddition />
            <MixerAddition />
            <Mixer2 />
            <Mixer3 />
            <label>
                <span>署名</span>
                <input id="signature" type="text">
            </label>
            <label>
                <button @click="resister()" type="button" class="resister-btn">登録</button>
            </label>
        </form>
    </div>
</template>

<script>

    import BaseAddition from "../components/BaseAddition.vue";
    import AlcoholAddition from "../components/AlcoholAddition.vue";
    import MixerAddition from "../components/MixerAddition.vue";
    import Mixer2 from "../components/Mixer2.vue"
    import Mixer3 from"../components/Mixer3.vue"
    
    export default {
        components: {
            BaseAddition,
            AlcoholAddition,
            MixerAddition,
            Mixer2,
            Mixer3,
        },
        data() {
            return{
                
            };
        },
        methods: {

        // resister the new cocktail's object
            resister() {
            
            // resister a cocktail name
                this.$store.state.newCocktail.cocktailName = document.getElementById("cocktailName").value;
                console.log(this.$store.state.newCocktail.cocktailName);
            // resister base information  
             
                // resister base name
                if(document.querySelector('[name="base-name"]').value == "リキュール") {
                    this.$store.state.newCocktail.baseName = document.querySelector('[name="base-liqueur"]').value;
                }else if(document.querySelector('[name="base-name"]').value == "ワイン"){
                    this.$store.state.newCocktail.baseName = document.querySelector('[name="base-wine"]').value;
                }else{
                    this.$store.state.newCocktail.baseName = document.querySelector('[name="base-name"]').value;
                }
                console.log(this.$store.state.newCocktail.baseName);

                // resister base quantity
                if(document.querySelector('[name="base-quantity"]').value == "other"){
                    this.$store.state.newCocktail.baseQuantity = document.getElementById("base-quantity").value;
                }else{
                    this.$store.state.newCocktail.baseQuantity = document.querySelector('[name="base-quantity"]').value;
                }
                console.log(this.$store.state.newCocktail.baseQuantity);

            // resister another alcohol information
                
                // resister another alcohol name
                if(document.querySelector('[name="alcohol-name"]').value == "リキュール") {
                    this.$store.state.newCocktail.alcoholName = document.querySelector('[name="alc-liqueur"]').value;
                }else if(document.querySelector('[name="alcohol-name"]').value == "ワイン"){
                    this.$store.state.newCocktail.alcoholName = document.querySelector('[name="alc-wine"]').value;
                }else{
                    this.$store.state.newCocktail.alcoholName = document.querySelector('[name="alcohol-name"]').value;
                }
                console.log(this.$store.state.newCocktail.alcoholName);

                // resister another alcohol quantity
                if(document.querySelector('[name="alcohol-quantity"]').value == "other"){
                    this.$store.state.newCocktail.alcoholQuantity = document.getElementById("alcohol-quantity").value;
                }else{
                    this.$store.state.newCocktail.alcoholQuantity = document.querySelector('[name="alcohol-quantity"]').value;
                }
                console.log(this.$store.state.newCocktail.alcoholQuantity);

            // resister mixer information

                // resister mixer name
                this.$store.state.newCocktail.mixerName = document.querySelector('[name="mixer-name"]').value;
                console.log(this.$store.state.newCocktail.mixerName);

                // resister mixer quantity
                if(document.querySelector('[name="mixer-quantity"]').value == "other"){
                    this.$store.state.newCocktail.mixerQuantity = document.getElementById("mixer-quantity").value;
                }else{
                    this.$store.state.newCocktail.mixerQuantity = document.querySelector('[name="mixer-quantity"]').value;
                }
                console.log(this.$store.state.newCocktail.mixerQuantity);

            // resister mixer2 information
                
                // resister mixer2 name
                this.$store.state.newCocktail.mixer2Name = document.querySelector('[name="mixer2-name"]').value;
                console.log(this.$store.state.newCocktail.mixer2Name);

                // resister mixer2 quantity
                if(document.querySelector('[name="mixer2-quantity"]').value == "other"){
                    this.$store.state.newCocktail.mixer2Quantity = document.getElementById("mixer2-quantity").value;
                }else{
                    this.$store.state.newCocktail.mixer2Quantity = document.querySelector('[name="mixer2-quantity"]').value;
                }
                console.log(this.$store.state.newCocktail.mixer2Quantity);

            // resister mixer3 information
                
                // resister mixer3 name
                this.$store.state.newCocktail.mixer3Name = document.querySelector('[name="mixer3-name"]').value;
                console.log(this.$store.state.newCocktail.mixer3Name);

                // resister mixer3 quantity
                if(document.querySelector('[name="mixer3-quantity"]').value == "other"){
                    this.$store.state.newCocktail.mixer3Quantity = document.getElementById("mixer3-quantity").value;
                }else{
                    this.$store.state.newCocktail.mixer3Quantity = document.querySelector('[name="mixer3-quantity"]').value;
                }
                console.log(this.$store.state.newCocktail.mixer3Quantity);

            // resister signature
                if(document.getElementById("signature").value != "") {
                    this.$store.state.newCocktail.signature = document.getElementById("signature").value;
                }
                console.log(this.$store.state.newCocktail.signature);

            // resister cocktail when the cocktail name is not empty
                this.$store.commit("cocktailResister", this.$store.state.newCocktail);
                console.log(this.$store.state.newCocktail);
            },
        },
    };
</script>

<style>
    #addition{
        position: relative;
        top: 0;
        min-height: 81.75vh;        
        padding: 10% 25% 0;
        background-image: linear-gradient(#e6f0f0, #7fd9d2, #ff9ed6);
        background-size: cover;
    }

    #addition-title{
        display: flex;
        justify-content: center;
    }

    form{
        display: flex;
        flex-direction: column;
        margin-top: 100px;
    }
    label{
        width: 75%;
        display: flex;
        align-self: center;
        justify-content: space-between;
    }
    label:not(:last-child){
        margin-bottom: 20px;
    }
    label:last-child{
        margin: 100px auto 0;
        width: auto;
    }
    span{
        width: 220px;
        color: #474a4d;
        font-weight: 600;
        padding-right: 20px;
        align-self: center;
        justify-content: space-between;
    }
    span-textarea{
        display: flex;
        width: 220px;
        justify-content: space-between;
        align-self: flex-start;
        padding-top: 20px;
        padding-right: 20px;
    }
    .addition-title{
        color: #474a4d;
    }
    #name{
        width: 250px;
    }
    .hide-input{
        width: 50px;
    }
    .resister-btn{
        margin: 0;
        padding: 0;
        width: 500px;
        background-color: orange;
        color: #ffffff;
        font-size: 25px;
    }

    /* ---------- モバイル ---------- */
    @media (max-width: 600px) {
        #addition{
            padding: 30% 7.5% 0;
        }
        form{
            width: 100%;
            margin-top: 50px;
        }
        label{
            width: 50%;
            flex-direction: column;
        }
        label:not(:last-child){
            margin-bottom: 20px;
        }
        label:last-child{
            margin: 40px auto 0;
            width: auto;
        }
        .addition-title{
            display: flex;
            justify-content: center;
        }
        .resister-btn{
            margin: 0;
            padding: 0;
            width: 250px;
            background-color: orange;
            color: #ffffff;
            font-size: 25px;
        }
    }
</style>