<template>
    <div id="app">
        <v-card>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBhLBArellMOOXEjd6JMWcpoH6fmfI1Czd9i9g2JFdU8A_DgG7g">
            <Home msg="Welcome to micro ERP App" />
            <router-link to="/">Home </router-link>
            <router-link to="/login">Login / Register</router-link>
            <router-link to="/about"> About</router-link>
            <v-divider></v-divider>
            <router-view></router-view>
        </v-card>
    </div>
</template>
<script>
import Home from './components/Home.vue'
export default {
    name: 'App',
    components: {
        Home,
    }
}
</script>
<style>
#app,
a {
    color: white;
    text-decoration: none;
}

a {
    font-size: 5em;
}

ul {
    list-style-type: none;
}
</style>
<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    max-width: 40em;
    margin: 0 auto;
    background-color: #29b485;
}

a {
    display: block;
}

a:hover {
    background-color: #2d495e;
    color: #29b485;
}
</style>