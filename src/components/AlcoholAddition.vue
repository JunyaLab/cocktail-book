<template>
    <label v-show="this.$store.state.showInput.alcohol">
        <span>アルコール</span>
        <select name="alcohol-name" @change="showAlcohol()">
            <option value="unselected" selected>未選択</option>
            <option value="ジン - ">ジン</option>
            <option value="ラム - ">ラム</option>
            <option value="ワイン">ワイン</option>
            <option value="ビール - ">ビール</option>
            <option value="ウォッカ - ">ウォッカ</option>
            <option value="テキーラ - ">テキーラ</option>
            <option value="ブランデー - ">ブランデー</option>
            <option value="ウィスキー - ">ウィスキー</option>
            <option value="リキュール">リキュール</option>  
        </select>
        <select name="alc-liqueur" v-show="liqueur">
            <option value="unselected" selected>未選択</option>
            <option value="マリブ - ">マリブ</option>
            <option value="ピーチ - ">ピーチ</option>
            <option value="カシス - ">カシス</option>
            <option value="アップル - ">アップル</option>
            <option value="アマレット - ">アマレット</option>
        </select>
        <select name="alc-wine" v-show="wine">
            <option value="unselected" selected>未選択</option>
            <option value="ベルモット - ">ベルモット</option>
        </select>
        <select name="alcohol-quantity" @change="showMoreQuantity()">
            <option value="unselected" selected>未選択</option>
            <option value="30mL">30mL</option>
            <option value="45mL">45mL</option>
            <option value="60mL">60mL</option>
            <option value="other">その他</option>
        </select>
        <input id="alcohol-quantity" v-show="moreQuantity" class="hide-input" type="text" required>
    </label>
</template>

<script>
    export default{
        data(){
            return{
                liqueur: false,
                wine: false,
                moreQuantity: false, 
            };
        },
        methods: {
            showLiqueur() {
                if(document.querySelector('[name="alcohol-name"]').value == "リキュール") {
                    this.liqueur = true;
                }else{
                    this.liqueur = false;
                }
            },
            showWine() {
                if(document.querySelector('[name="alcohol-name"]').value == "ワイン") {
                    this.wine = true;
                }else{
                    this.wine = false;
                }
            },
            showAlcohol() {
                this.showLiqueur();
                this.showWine();
            },
            showMoreQuantity() {
                if(document.querySelector('[name="alcohol-quantity"]').value == "other") {
                    this.moreQuantity = true;
                }else{
                    this.moreQuantity = false;
                }
            },
        },
    };
</script>

<style scoped>

</style>