<template>
    <div class="login">
        <v-card>
            <v-container>
                <form>
                    <span>
            Username  
            </span>
                    <input type="text" name="username" id="username" required>
                    <p></p>
                    <span>
                Password
            </span>
                    <input type="password" name="password" id="password" required>
                    <p></p>
                    <button type="submit">Login</button>
                    <hr>
                    <a href="#">
                        <button type="button">Register</button>
                    </a>
                </form>
            </v-container>
        </v-card>
    </div>
</template>
<script>
export default {
    name: 'Login',
    props: {
        msg: String
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}


a {
    color: #42b983;
}

.login {
    margin: 0 auto;
    max-width: 40em;
}

.v-card {
    border-top: .2em solid #2dada9
}

;
</style>