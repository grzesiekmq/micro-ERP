<template>
    <div class="about">
        <v-card>
            <div class="headline">app info</div>
            <p>micro Enterprise Resource Planning app is about managing the company with modules like CRM, Accounting, E-commerce, HR, Sales </p>
            <div class="subheading">Technologies used</div>
            <p>mainly</p>
            <div>
                <img src="https://hollowtree.gallerycdn.vsassets.io/extensions/hollowtree/vue-snippets/0.1.8/1529850645409/Microsoft.VisualStudio.Services.Icons.Default" height="20" width="20"> &nbsp;
                <img src="https://www.shareicon.net/data/256x256/2016/06/19/603895_prog_512x512.png" height="20" width="20">
            </div>
            <p>other</p>
            grunt git
            <div class="subheading">
                Libraries used
            </div> axios
        </v-card>
        <v-footer height="auto">
            <v-card class="teal social">
                <v-card-title class="justify-center">
                    <strong class="subheading">Social</strong>
                </v-card-title>
                <div>
                    <a href="https://github.com/grzesiekmq"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" height="30" width="30"></a> &nbsp;
                    <a href="https://linkedin.com/in/grzegorz-futa-71016a60/"><img src="https://yt3.ggpht.com/a-/ACSszfGDvjYK2vL_d3Bglghs2VQhTwbPrTGWxBaNDQ=s900-mo-c-c0xffffffff-rj-k-no" height="30" width="30"></a>
                </div>
                <v-card-actions class="grey darken-3 justify-center">
                    &copy;2018 — <strong>grzesiekmq</strong>
                </v-card-actions>
            </v-card>
        </v-footer>
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
    background-color: #2d495e;
}

.social {
    width: 40em;
}

a {
    font-size: 1em;
}
</style>