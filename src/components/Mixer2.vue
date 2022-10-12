<template>
    <label v-show="this.$store.state.showInput.mixer2">
        <span>割り材</span>
        <select name="mixer2-name" @change="changeShowMixer3()">
            <option value="unselected" selected>未選択</option>
            <option value="牛乳 - ">牛乳</option>
            <option value="炭酸水 - ">炭酸水</option>
            <option value="烏龍茶 - ">烏龍茶</option>
            <option value="コーラ - ">コーラ</option>
            <option value="ジンジャーエール - ">ジンジャエール</option>
            <option value="オレンジジュース - ">オレンジジュース</option>
            <option value="アップルジュース - ">アップルジュース</option>
            <option value="パイナップルジュース - ">パイナップルジュース</option>
        </select>
        <select name="mixer2-quantity" @change="showMoreQuantity(); changeShowMixer3()">
            <option value="unselected" selected>未選択</option>
            <option value="30mL">30mL</option>
            <option value="45mL">45mL</option>
            <option value="60mL">60mL</option>
            <option value="full up">full up</option>
            <option value="other">その他</option>
        </select>
        <input id="mixer2-quantity" v-show="moreQuantity" class="hide-input" type="text" required>
    </label>
</template>

<script>
export default {
    data(){
        return{
            moreQuantity: false,
        };
    },
    methods: {
        showMoreQuantity() {
            if(document.querySelector('[name="mixer2-quantity"]').value == "other") {
                this.moreQuantity = true;
            }else{
                this.moreQuantity = false;
            }
        },
        changeShowMixer3(){
            if(document.querySelector('[name="mixer2-name"]').value != "unselected" && document.querySelector('[name="mixer2-quantity"]').value != "unselected") {
               this.$store.state.showInput.mixer3 = true;
            }else{
                this.$store.state.showInput.mixer3 = false;
            }
        },
    },
}
</script>

<style>

</style>