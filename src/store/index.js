import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex);

const state = {
    cart: []
}

const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.cart
    }
}

const mutations = {
    [types.ADD_TO_CART] (state, product) {
        // 通过传商品的name  到购物车中找出商品
        const record = state.cart.find(good => good.name === product.name)
        if(!record) {
            state.cart.push({
                product,
                quantity: 1
            })
        } else {
            record.quantity++
        }
    }
}

const actions = {
    addToCart: ({ commit }, product) => {
        commit(types.ADD_TO_CART, product)
    }
}

export default new Vuex.Store({
    state, 
    mutations, 
    getters, 
    actions
})