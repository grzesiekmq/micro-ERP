<template>
    <div class="login">
        <v-card>
            <v-container>
                <v-form>
                    <v-text-field v-model="username" label="Username" id="username" required>
                    </v-text-field>
                    <v-text-field v-model="password" label="Password" id="password" required>
                    </v-text-field>
                    <router-link to="/dashboard">
                        <v-btn block>Dashboard</v-btn>
                    </router-link>
                    <v-divider></v-divider>
                    <router-link to="/register">
                        <v-btn block>Register</v-btn>
                    </router-link>
                </v-form>
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




.login {
    margin: 0 auto;
    max-width: 40em;
}

.v-card {
    border-top: .2em solid #2dada9
}

;
</style>