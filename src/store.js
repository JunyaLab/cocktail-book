import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({ // vuexで定義するdata
    state: {
        cocktailStore: [], // 登録したカクテルのリスト
        newCocktail: {
            cocktailName: "",
            baseName: "",
            baseQuantity: 0,
            alcoholName: "",
            alcoholQuantity: 0,
            mixerName: "",
            mixerQuantity: 0,
            mixer2Name: "",
            mixer2Quantity: 0,
            mixer3Name: "",
            mixer3Quantity: 0,
            signature:"anonymous",
            mainDetail: false,
            showAlcohol: false,
            showMixer: false,
            showMixer2: false,
            showMixer3: false,
        },
        showInput:{
            alcohol: false,
            mixer2: false,
            mixer3: false,
        },
    },
    getters: {}, // vuexで定義するcomputed
    mutations: { // stateの値をいじるときはここに全て記述する
        cocktailResister(state, newCocktail) {
            if(newCocktail.cocktailName != "") {
                state.cocktailStore.push(newCocktail);                
            }
        },
        removeCocktail(state, selected) { // カクテルの削除
            state.cocktailStore.splice(selected, 1);
        },
    },
    actions: {}, 
    plugins: [createPersistedState({
        key: 'myApp',
        paths: ['cocktailStore'],
        storage: window.localStorage,
    })],
});

