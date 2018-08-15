<template>
    <div class="dashboard">
        <router-link to="/modules">ERP modules</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'Dashboard',
    props: {
        msg: String
    }
}
</script>