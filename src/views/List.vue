<template>
    <div id="list">
        <!-- ページタイトル -->
        <h1 id="list-title">Cocktail List</h1>
        
        <!-- ベースによるフィルター -->
        <label id="base-search">
            <span>ベース</span>
            <select name="base-name" @change="showBase()">
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
            <select name="base-liqueur" v-show="liqueur">
                <option value="unselected" selected>未選択</option>
                <option value="マリブ - ">マリブ</option>
                <option value="ピーチ - ">ピーチ</option>
                <option value="カシス - ">カシス</option>
                <option value="アップル - ">アップル</option>
                <option value="アマレット - ">アマレット</option>
            </select> 
            <select name="base-wine" v-show="wine">
                <option value="unselected" selected>未選択</option>
                <option value="ベルモット - ">ベルモット</option>
            </select>
            <button id="search-btn" type="button" @click="filterByBase()">検索</button>
        </label>
        
        <!-- カクテルの表示 -->
        <ul>
            <li v-for="(obj, index) in this.$store.state.cocktailStore" :key="obj._id" 
                v-show="$store.state.newCocktail.baseName == '' || obj.baseName == $store.state.newCocktail.baseName || $store.state.newCocktail.baseName == 'unselected' || $store.state.newCocktail.baseName == 'ワイン' || $store.state.newCocktail.baseName == 'リキュール' "
                @click.right="deleteCocktail(index)">
                <button type="button" @click="showDetail(obj)" class="name-btn">{{obj.cocktailName}}</button>
                <br>
                <span v-show="obj.mainDetail" class="thin">
                    【 ベース 】 {{obj.baseName}}{{obj.baseQuantity}}<br>
                    <span v-show="obj.showAlcohol" class="thin">
                        【 アルコール 】 {{obj.alcoholName}}{{obj.alcoholQuantity}}<br>
                    </span>
                    <span v-show="obj.showMixer" class="thin">
                        【 割材 】 {{obj.mixerName}}{{obj.mixerQuantity}}<br>
                        <span v-show="obj.showMixer2" class="thin">
                            【 割材 】 {{obj.mixer2Name}}{{obj.mixer2Quantity}}<br>
                            <span v-show="obj.showMixer3" class="thin">
                                【 割材 】 {{obj.mixer3Name}}{{obj.mixer3Quantity}}<br>
                            </span>
                        </span>
                    </span>
                </span>
            </li>            
        </ul>
        
    </div>
</template>

<script>
    export default{
        data() {
            return {        
                liqueur: false,
                wine: false,        
                selected: 0,
                selectedBase: '',
            };
        },
        methods: {
            filterByBase(){
                // resister base name
                if(document.querySelector('[name="base-name"]').value == "リキュール") {
                    this.$store.state.newCocktail.baseName = document.querySelector('[name="base-liqueur"]').value;
                }else if(document.querySelector('[name="base-name"]').value == "ワイン"){
                    this.$store.state.newCocktail.baseName = document.querySelector('[name="base-wine"]').value;
                }else{
                    this.$store.state.newCocktail.baseName = document.querySelector('[name="base-name"]').value;
                }

                this.selectedBase = this.$store.state.newCocktail.baseName;

                console.log(document.querySelector('[name="base-name"]').value);
                console.log(this.$store.state.newCocktail.baseName);
                
            },
            showLiqueur() {
                if(document.querySelector('[name="base-name"]').value == "リキュール") {
                    this.liqueur = true;
                }else{
                    this.liqueur = false;
                }
            },
            showWine() {
                if(document.querySelector('[name="base-name"]').value == "ワイン") {
                    this.wine = true;
                }else{
                    this.wine = false;
                }
            },
            showBase() {
                this.showLiqueur();
                this.showWine();
            },
            showDetail(obj) {
                if(obj.alcoholName != "unselected") {
                    obj.showAlcohol = true;
                }
                if(obj.mixerName != "unselected") {
                    obj.showMixer = true;
                }
                if(obj.mixer2Name != "unselected") {
                    obj.showMixer2 = true;
                }
                if(obj.mixer3Name != "unselected") {
                    obj.showMixer3 = true;
                }
                obj.mainDetail = !obj.mainDetail;
            },
            deleteCocktail(selected) {
                this.$store.commit("removeCocktail", selected);
            },
        },
    };
</script>

<style>
    #list{
        position: relative;
        top: 0;
        min-height: 81.75vh;
        height: 100%;
        padding: 10% 25% 0;
        background-image: linear-gradient(#e6f0f0, #a1f4ff, #ffe607);
        background-size: cover;
    }

    #list-title{
        display: flex;
        justify-content: center;
    }

    #base-search{
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    #search-btn{
        margin: 0 5%;
    }

    .thin{
        font-weight: 500;
    }
    .name-btn{
        min-width: 100px;
        height: auto;
        width: auto;
        padding-right: 250px;
        background: transparent;
        font-size: 25px;
        font-weight: 700;
        margin-top: 25px;
        margin-bottom: 5px;
        border: none;
    }
    /* ---------- モバイル ---------- */
    @media (max-width: 600px) {
        #list{
            padding: 30% 7.5% 0;
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        .list-title{
            display: flex;
            justify-content: center;
        }
    }
</style>
