<template>
    <div class="bg">
        <form class="auth auth-login">
            <h3 class="auth__title">{{title}}</h3>
            <label for="email">
                <v-icon name="envelope" width="20" height="20"/>
                <input id="email" type="email" placeholder="Email..." class="auth__input">
            </label>
            <label for="paswword">
                <v-icon name="unlock-alt" width="20" height="20"/>
                <input id="paswword" type="password" placeholder="Password..." class="auth__input">
            </label>
            <button type="submit" class="auth__btn">Let's go!</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Login"
            }
        }
    }
</script>

<style lang="scss">
    @import './auth.scss';
</style>

<style scoped lang="scss">

</style>