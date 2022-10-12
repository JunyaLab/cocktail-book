<template>
    <div id="home">
        <h1 id="home-title">Cocktail Book</h1>
        <p>
            大人になると付き合いの増えるお酒。<br>
            ビールにウィスキー、梅酒に果実酒と様々な種類がある中で、"カクテル"という言葉を聞いたことのない人はほとんどいないだろう。<br>
            なんと、カクテルはよく知られているだけで3000~5000種類あると言われている。<br>
            その中から自分のお気に入りを見つけるもよし、あるいは自分で新しくカクテルを作るのもよし、<br>
            カクテルはあなたのお酒の楽しみを増やしてくれることだろう。<br>
            ここでは、あなたのお気に入りのカクテルをお好みの分量で登録することができる。<br>
            お酒が好きなあなたは更なる楽しみのために、お酒の苦手なあなたはいざというときの切り札として、<br>
            自分だけのお気に入りを登録しておくと、お酒の場での注文に困ることなく楽しめることだろう。
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