<template>
    <v-app>
        <v-toolbar :app="$vuetify.breakpoint.lgAndUp" flat color="transparent" dark class="px-2">
            <v-toolbar-title>
                <h2 class="text--body">Pure CSS spinners</h2>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat href="https://github.com/knekki">Github</v-btn>
                <v-btn depressed href="https://twitter.com/knekkii" target="_blank">Kenneth Aamås</v-btn>
            </v-toolbar-items>

            <v-menu class="hidden-sm-and-up" nudge-right="20" transition="slide-x-reverse-transition">
                <v-btn slot="activator" flat icon><v-icon>code</v-icon></v-btn>

                <v-list>
                    <v-list-tile href="https://github.com/knekki">Github</v-list-tile>
                    <v-list-tile href="https://twitter.com/knekkii" target="_blank">
                        Kenneth Aamås
                        <v-avatar size="28" class="pl-3 mr-1">
                            <img src="https://pbs.twimg.com/profile_images/1074491865968177153/E5LlLuFn_400x400.jpg" alt="avatar"/>
                        </v-avatar>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>

        <v-content class="px-2">
            <router-view/>

            <footer>
                <v-container fluid pt-5>
                    Copyright &copy; {{ new Date().getFullYear() }} Kenneth Aamås 
                </v-container>
            </footer>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: "App"
}
</script>

<style lang="scss">
body {
    margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Spectral", serif;
}

.text--body {
    font-size: 1.25em;
    font-family: inherit;
}

.theme--light {
    &.application {
        background-color: #594453;
        background-image: radial-gradient(circle at center, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom, rgba(57,173,219,.25) 0%,rgba(98,140,152,.4) 100%), linear-gradient(135deg, #670d10 0%,#388697 100%);
        background-size: 400% 400%;
        animation: gradient-shift 30s linear infinite;
        color: white;
    }
}

// https://www.mathopenref.com/coordpolycalc.html
@keyframes gradient-shift {
    from {
        background-position: 50% 0%;
    }
    10% {
        background-position: 21% 10%;
    }
    20% {
        background-position: 2% 35%;
    }
    30% {
        background-position: 2% 65%;
    }
    40% {
        background-position: 21% 90%;
    }
    50% {
        background-position: 50% 100%;
    }
    60% {
        background-position: 79% 90%;
    }
    70% {
        background-position: 98% 65%;
    }
    80% {
        background-position: 98% 35%;
    }
    90% {
        background-position: 79% 10%;
    }
    to {
        background-position: 50% 0%;
    }
}
</style>

