import axios from 'axios'

var shop = ''

axios.get('https://www.easy-mock.com/mock/5a223b51707056548f086d8b/hema/getGoods')
.then(response => shop = response)
.catch(error => console.log(error))

export default {
    shop
}