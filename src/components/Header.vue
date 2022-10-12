
<template>
    <header class="wrapper">        
        <nav>
            <ul class="page-header">
                <li><h2 class="header-title"><router-link class="header-router" to="/">{{'Cocktail Book'}}</router-link></h2></li>
                <div class="header-nav">
                    <li><router-link class="header-router nav-size" to="./">{{'Home'}}</router-link></li>
                    <li><router-link class="header-router nav-size" to="./addition">{{'Addition'}}</router-link></li>
                    <!-- <li><router-link class="header-router nav-size" to="/test">{{'Test'}}</router-link></li> -->
                    <li><router-link class="header-router nav-size" to="./list">{{'List'}}</router-link></li>
                </div>
            </ul>
        </nav>
    </header>
</template>

<script>

</script>

<style>
    .wrapper{
        position: fixed;
        z-index: 5;
        width: 100%;
        margin: 0;
        padding: 0;
        background-image: linear-gradient(#7fd9d2, #e6f0f0);
        border-bottom: 1px solid #ffffff;
    }
    .page-header{
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0 7.5%;
        font-size: 1.25rem;
        text-transform: uppercase;
        text-align: center;
        align-items: center;        
        list-style: none;
    }
    .page-header li{
        margin: 0 50px;
    }
    .header-nav{
        display: flex;
        width: 450px;
        font-weight: 700;
    }
    .header-nav a:hover{
        color: orange;
    }
    .header-router{
        color: black;
    }

    /* ---------- モバイル版 ---------- */
    @media (max-width: 600px) {
        .page-header{
            font-size: 16px;
            flex-direction: column;
        }
        .page-header li{
            margin: 0 25px;
        }
        .header-nav{
            display: flex;
            justify-content: center;
            font-weight: 700;
        }
        .header-nav a:hover{
            color: orange;
        }
    }    
</style>
