
<template>
    <div id="test">
        <div>
            <!-- <div class="top-routers">
                <router-link class="top-router top-router1" to="/addition">{{'登録'}}</router-link>
                <router-link class="top-router" to="/addition">{{'登録'}}</router-link>
                <router-link class="top-router" to="/test">{{'テスト'}}</router-link>
                <router-link class="top-router" to="/list">{{'リスト'}}</router-link>
            </div> -->
            <h1></h1>
        </div>
   </div>
</template>

<script>
    export default {

    };
</script>

<style scoped>

    /* ----- Titleのフェードアウト ----- */
    .fadeTitle-leave-active{
        transition: opacity 5s;
    }
    .fadeTitle-leave-to {
        opacity: 0;
    }
    /* ----- Routersのフェードイン ----- */

    
    /*  */
    #test{
        position: relative;
        top: 0;
        min-height: 81.75vh;
        padding: 10% 25% 0;
        background-image: linear-gradient(#e6f0f0, #a1f4ff, #7c539d);
        background-size: cover;
    }
    .top-routers{
        height: 100%;
        width: 100%;
        margin-top: 200px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; /* 幅3等分 */
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 50px;
        text-align: center;
        align-items: center;
        z-index: 3;
    }
    .top-router{
        color: #ffffff;
        font-weight: normal;
        font-size: 200%;
        text-decoration: none;
        text-shadow: 0.15vw 0.15vw 0 #474a4d;
        background-color: #ff7400;
        padding: 2% 3%;
        border: 3px solid #474a4d;
    }
    .top-router1{
        grid-column-start: 1;
        grid-column-end: 4;
    }

    /* ---------- モバイル ---------- */
    @media (max-width: 600px) {
        #test{
            padding: 45% 7.5% 0;
        }
        .top-routers{
            grid-gap: 5vw;
        }
        .top-router{
            font-size: 100%;
        }
    }
</style>