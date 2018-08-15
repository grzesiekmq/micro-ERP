<template>
    <div class="modules">
        <v-container>
            <v-layout row wrap>
                <v-flex v-for="i in 20" :key="`3${i}`" lg3>
                    <v-card dark color="secondary">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBhLBArellMOOXEjd6JMWcpoH6fmfI1Czd9i9g2JFdU8A_DgG7g" height="50" width="50">
                        <v-card-text class="px-0"></v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        Accounting CRM E-commerce HR Sales
    </div>
</template>
<script>
export default {
    name: 'Main',
    props: {
        msg: String
    }
}
</script>