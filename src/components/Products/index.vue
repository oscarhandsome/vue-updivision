<template>
    <div>
        <h3>Products</h3>

        <router-link
            tag="div"
            v-for="product in 5"
            to="'/products/' + product"
            :key="product"
        >
            Product {{ product }}
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>