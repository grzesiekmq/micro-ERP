<template>
    <div id="app">
        <v-card>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBhLBArellMOOXEjd6JMWcpoH6fmfI1Czd9i9g2JFdU8A_DgG7g">
            <Home msg="Welcome to micro ERP App" />
            <router-link to="/">Home </router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/about"> About</router-link>
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
    font-size: 5em;
    text-decoration: none;
    display: block;
}

a:hover {
    background-color: #2d495e;
    color: #29b485;
}
</style>