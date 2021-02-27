<template>
    <div>
        <Popup :currProd="currProd" :show="show" @clicked="onClickChild"/>
        <h3>Products</h3>
        <hr>
        <div class="products">
            <div class="product" v-for="(prod, index) in products" :key="prod + index">
                <div class="product__image">
                    <img :src="getImgUrl(prod.id)" alt="product-1">
                </div>
                <div class="product__name">{{ prod.name }}</div>
                <div class="product__price">{{ prod.price }}</div>
                <button class="product__link" @click="show = !show; getCurrProd(prod)">Details</button>
                <!--<a :href="'/product/'+ prod.id" class="product__link" @click="show = !show; getCurrProd(prod)">Details</a>-->
            </div>
        </div>
        <!--<ul>-->
            <!--<router-link-->
                    <!--tag="li"-->
                    <!--v-for="product in 5"-->
                    <!--to="/product"-->
                    <!--:key="product"-->
            <!--&gt;-->

                <!--<a>Product {{ product }}</a>-->
            <!--</router-link>-->
        <!--</ul>-->
    </div>
</template>

<script>
    import Popup from '../Popup'

    export default {
        components: {
            Popup
        },
        data() {
            return {
                show: false,
                products: [
                    {
                        id: 1,
                        name: 'Dolce & Gabanna',
                        price: '400$'
                    },
                    {
                        id: 2,
                        name: 'Pepe Moll',
                        price: '600$'
                    },
                    {
                        id: 3,
                        name: 'Marco Tozzi',
                        price: '500$'
                    },
                    {
                        id: 4,
                        name: 'Tommy Tozzi',
                        price: '100$'
                    },
                    {
                        id: 5,
                        name: 'Tommy Marco',
                        price: '230$'
                    },
                    {
                        id: 6,
                        name: 'Tommy Hilfiger',
                        price: '150$'
                    },
                    {
                        id: 7,
                        name: 'Moll Hilfiger',
                        price: '4400$'
                    },
                ],
                currProd: {},
            }
        },
        methods: {
            getImgUrl(pic) {
                return require('../../assets/images/products/product-'+ pic +'.jpg')
            },
            getCurrProd(currProd) {
                // console.log(currProd);
                this.currProd = currProd;
            },
            onClickChild (value) {
                this.show = value;
            }
        }
    }
</script>

<style lang="scss">
    @import './products.scss';
</style>

<style scoped lang="scss">

</style>