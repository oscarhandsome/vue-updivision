<template>
    <div class="bg">
        <div class="overlay"></div>
        <form class="auth">
            <h4 class="auth__subtitle">{{ title }}</h4>
            <label for="name">
                <v-icon name="envelope" width="20" height="20"/>
                <input id="name" type="text" placeholder="Name" class="auth__input">
            </label>
            <label for="email">
                <v-icon name="envelope" width="20" height="20"/>
                <input id="email" type="email" placeholder="Email" class="auth__input">
            </label>
            <label for="eduStartDate">
                <v-icon name="calendar" width="20" height="20"/>
                <input id="eduStartDate" type="date" placeholder="Education Start Date" class="auth__input">
            </label>
            <label for="eduEndDate">
                <v-icon name="calendar" width="20" height="20"/>
                <input id="eduEndDate" type="date" placeholder="Education Start Date" class="auth__input">
            </label>
            <label for="paswword">
                <v-icon name="unlock"/>
                <input id="paswword" type="password" placeholder="Password" class="auth__input">
            </label>
            <label for="paswwordConfirm">
                <v-icon name="unlock-alt" width="20" height="20"/>
                <input id="paswwordConfirm" type="password" placeholder="Confirm Password" class="auth__input">
            </label>
            <div class="form-check">
                <input id="checkRegister" type="checkbox" name="checkRegister">
                <label for="checkRegister" class="form-check__label">I agree with <a href="#">terms and conditions</a></label>
            </div>
            <button type="submit" class="auth__btn auth__btn_secondary">Get started!</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Register"
            }
        }
    }
</script>

<style lang="scss">
    @import './auth.scss';
</style>

<style scoped lang="scss">
    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
</style>