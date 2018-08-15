<template>
    <div class="about">
        <v-card>
            <h2>Social</h2>
            <ul>
                <li><a href="https://github.com/grzesiekmq"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" height="20" width="20"> GitHub profile</a>
                </li>
                <li><a href="https://linkedin.com/in/grzegorz-futa-71016a60/"><img src="https://yt3.ggpht.com/a-/ACSszfGDvjYK2vL_d3Bglghs2VQhTwbPrTGWxBaNDQ=s900-mo-c-c0xffffffff-rj-k-no" height="20" width="20"> LinkedIn</a></li>
            </ul>
        </v-card>
        <v-card>
            <h2>app info</h2>
            <p>micro Enterprise Resource Planning app is about managing the company with modules like CRM, Accounting, E-commerce, HR, Sales </p>
            <h3>Technologies used</h3>
            <p>mainly</p>
            <div>
                <img src="https://hollowtree.gallerycdn.vsassets.io/extensions/hollowtree/vue-snippets/0.1.8/1529850645409/Microsoft.VisualStudio.Services.Icons.Default" height="20" width="20">
                <img src="https://www.shareicon.net/data/256x256/2016/06/19/603895_prog_512x512.png" height="20" width="20">
            </div>
            <p>other</p>
            grunt git
            <h3>
            Libraries used
        </h3> axios
        </v-card>
    </div>
</template>
<script>
export default {
    name: 'About',
    props: {
        msg: String
    }
}
</script>
<style scoped>
.v-card {
    margin: 1em;
}

ul {
    list-style-type: none;
}
</style>