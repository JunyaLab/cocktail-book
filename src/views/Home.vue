<template>
    <div id="home">
        <h1 id="home-title">Cocktail Book</h1>
        <h2>はじめに</h2>
        <p>
            大人になると付き合いの増えるお酒。<br>
            ここでは、あなたのお気に入りのお酒を作り方と一緒に記録しておくことが出来ます。<br>
        </p>
        <h2>今週のおすすめ</h2>
        <p>
            今日ご紹介するカクテルは、"テキーラ・サンライズ"。<br>

            【材料】テキーラ(45ml)、オレンジジュース(90ml)、グレナデンシロップ(10ml)<br>
            【作り方】氷を入れたグラスに、テキーラとオレンジジュースを注ぎ、軽く混ぜた後にグレナデンシロップを静かに注ぐ。
        </p>
   </div>
</template>

<script>
    export default {
        components: {
        
        },
        data() {
            return {
                
            };
        },
    };
</script>

<style>
    #home{
        position: relative;
        top: 0;
        min-height: 81.75vh;
        padding: 10% 25% 0;
        background-image: linear-gradient(#e6f0f0, #c9ffbf, #ffafbd);
        background-size: cover;
    }

    #home-title{
        margin: 0 0 10%;
        display: flex;
        justify-content: center;
    }

    /* ---------- モバイル ---------- */
    @media (max-width: 600px) {
        #home{
            padding: 45% 7.5% 0;
        }
    }
</style>