<template>
    <div>
        <transition
                type="animation"
                name="ma"
        >
            <div v-if="show">
                <div class="popup">
                    <div class="popup-left">
                        <div class="popup__image">
                            <img :src="getImgUrl(computedCurrProd.id)" alt="">
                        </div>
                    </div>
                    <div class="popup-right">
                        <button class="popup__close" @click="show = !show; onClose(show)">
                            <v-icon name="times" width="30" height="30"/>
                        </button>
                        <div class="popup__name">{{ computedCurrProd.name }}</div>
                        <div class="popup__price">{{ computedCurrProd.price }}</div>
                        <div class="popup-description">
                            <div class="popup-description__title">Description</div>
                            <p class="popup-description__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic possimus recusandae sequi vel. Beatae earum id laboriosam obcaecati perspiciatis quisquam.</p>
                        </div>
                        <div class="popup__btn">
                            Add to cart
                            <v-icon name="shopping-cart" width="20" height="20"/>
                        </div>
                    </div>
                </div>
                <div class="overlay" @click="show = !show; onClose(show)"></div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: ['show', 'currProd'],
        data() {
            return {
                // show: false
                dataCurrProd: this.currProd
            }
        },
        methods: {
            onClose (event) {
                this.currProd = {}
                this.$emit('clicked', event)
            },
            getImgUrl(pic) {
                return require('../../assets/images/products/product-'+ pic +'.jpg')
            },
        },
        computed: {
            computedCurrProd: function () {
                return this.currProd
            }
        }
    }
</script>

<style scoped lang="scss">
    .popup {
        position: absolute;
        z-index: 3;
        display: flex;

        padding: 1rem;
        /*max-width: 1000px;*/
        background-color: white;
        border: solid 1rem rgba(0,0,0, 1);

        @media (max-width: 767.98px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        &__image {
            display: flex;
            width: 300px;
            height: 450px;

            img {
                width: 100%;
                object-fit: cover;
            }

            @media (max-width: 767.98px) {
                width: 200px;
                height: 250px;
            }
        }

        &__close {
            padding: 0;
            margin: 0;
            margin-left: auto;
            border: none;
            background-color: transparent;
            transition: all 200ms ease-in;

            &:hover {
                transform: rotate(180deg);
            }
        }
        &__name {
            margin-bottom: 1rem;
            font-weight: bold;
            font-size: 2rem;
        }
        &__price{
            margin-bottom: 3rem;
            color: grey;
            font-size: 1.2rem;
        }

        &__btn {
            display: flex;
            flex-grow: 0;
            margin: auto;
            margin-left: 0;
            /*width: 9rem;*/

            padding: .5rem .7rem .3rem;
            text-transform: uppercase;
            text-decoration: none;
            font-size: .7rem;
            color: white;
            border-radius: 15px;

            background-color: #e91e63;
            transition: all 200ms ease-in;

            @media (max-width: 767.98px) {
                margin: auto;
            }

            &:hover,
            &:active {
                cursor: pointer;
                color: white;
                background-color: #7d21a3;
            }

            svg {
                margin-left: 1rem;
            }
        }
    }

    .popup-description {
        &__title {
            margin-bottom: 1rem;
            color: #e91e63;
            border-bottom: solid 1px #d2d2d2;
        }
        &__text {
            margin-bottom: 3rem;
            font-size: .8em;
        }

        @media (max-width: 767.98px) {
            text-align: center;
        }
    }

    .popup-left {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2.5rem 2rem;
        width: 40%;
    }

    .popup-right {
        display: flex;
        flex-grow: 1;
        flex-direction: column;

        @media (max-width: 767.98px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    .overlay{
        position: fixed;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        cursor: pointer;
        background-color: rgba(180, 145, 186, .7);
    }

    .ma-enter {
        opacity: 0;
    }
    .ma-enter-active {
        transition: opacity 1s;
    }
    .ma-enter-to {}

    .ma-leave {}
    .ma-leave-active {
        animation: 1s ma-slide forwards;
        transition: opacity 3s;
    }
    .ma-leave-to {
        opacity: 0;
    }

    @keyframes ma-slide {
        from {
            transform:  translateX(0px);
        }
        to {
            transform:  translateX(-1500px);
        }
    }
</style>