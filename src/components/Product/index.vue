<template>
    <div>
        Product {{ id }}

        <ul>
            <li>name: ....</li>
            <li>price: .....</li>
            <li>Details: .....</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // id: this.$router.currentRoute.params['id']
                id: this.$route.params['id']
            }
        },
        // watch: {
        //     $route (toR, fromR) {
        //         this.id = toR.params['id']
        //     }
        // }
    }
</script>

<style scoped>

</style>