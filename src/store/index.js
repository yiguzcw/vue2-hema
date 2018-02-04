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
    },
    cartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.product.price * product.quantity
        }, 0)
    }
}

const mutations = {
    [types.ADD_TO_CART] (state, product) {
        // 通过传商品的name  到购物车中找出商品
        const record = state.cart.find(good => good.product.name === product.name)
        if(!record) {
            state.cart.push({
                product,
                quantity: 1
            })
        } else {
            record.quantity++
        }
    },
    [types.ADD_PRODUCT] (state, product) {
        const item = state.cart.find(good => good.product.name === product.product.name)
        item.quantity ++
    },
    [types.REDUCE_PRODUCT] (state, product) {
        const item = state.cart.find(good => good.product.name === product.product.name)
        if(item.quantity <= 1) {
            item.quantity = 1
        } else {
            item.quantity --
        }
    }
}

const actions = {
    addToCart: ({ commit }, product) => {
        commit(types.ADD_TO_CART, product)
    },
    add: ({ commit }, product) => {
        commit(types.ADD_PRODUCT, product)
    },
    reduce: ({ commit }, product) => {
        commit(types.REDUCE_PRODUCT, product)
    }
}

export default new Vuex.Store({
    state, 
    mutations, 
    getters, 
    actions
})