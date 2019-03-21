<template>
    <div id="HomeView">
        <v-container fluid style="padding-bottom: 0 !important;" pt-5>
            <p class="mx-auto" :style="{ 'margin-top': $vuetify.breakpoint.mdAndUp ? '48px': 'unset' }">
                Pure CSS spinners made with simplicity in mind. Simple to use, easy to setup on any website. 
            </p>

            <p class="mx-auto">
                You are free to use any spinner as you like. 
                Choose the spinner of your choice, and simple copy &amp; paste the CSS link into your website, and add the appropriate class to your element.
                More spinners coming soon...
            </p>

            <v-carousel v-model="currentItem" hide-delimiters :cycle="false" height="40vh">
                <v-carousel-item v-for="spinner in spinners" :key="spinner.name" class="spinner-container">
                    <component :is="spinner" />
                </v-carousel-item>
            </v-carousel>
        </v-container>

        <v-container style="max-width: 1000px;">
            <v-scroll-y-transition mode="out-in">
                <v-tabs dark color="#212121">
                    <v-tab key="html">
                        Html
                    </v-tab>
                    <v-tab key="vue">
                        Vue
                    </v-tab>
                    <v-tab disabled>
                        More soon
                    </v-tab>
                    
                    <v-tab-item key="html">
                        <v-sheet dark color="#212121" class="markup pa-3">
                            <!-- <small style="color: #dc64b2">name:</small> {{ spinners[currentItem].name | spinnerName }} -->

                            <code>
                                <div v-html="$options.filters.htmlComment('Copy and paste the link below into your HTML head')"></div>
                                <div v-html="$options.filters.htmlLink(`https://unpkg.com/@knekk/spinners@${ version }/dist/${ $options.filters.spinnerLinkName(spinners[currentItem].name) }.css`)"></div>
                            </code>

                            <code>
                                <div v-html="$options.filters.htmlComment('Copy and paste the spinner element where you want it in your HTML body')"></div>
                                <div v-html="$options.filters.htmlSpinner($options.filters.spinnerClass(spinners[currentItem].name))"></div>
                            </code>
                        </v-sheet>
                    </v-tab-item>
                    <v-tab-item key="vue">
                        <v-sheet dark color="#212121" class="markup pa-3">
                            <!-- <small style="color: #dc64b2">name:</small> {{ spinners[currentItem].name | spinnerName }} -->

                            <code>
                                <div v-html="$options.filters.bashComment('Install with npm')"></div>
                                <div v-html="$options.filters.bashCommand('npm install @knekk/spinners')"></div>
                            </code>

                            <code>
                                <div v-html="$options.filters.javascriptComment('Import and use in components')"></div>
                                <div><span class="javascript--statement">import</span><span class="javascript--code"> { {{ spinners[currentItem].name | spinnerName }} } </span><span class="javascript--statement">from</span> '@knekk/spinners'</div>
                                <div><span class="javascript--statement">export</span><span class="javascript--keyword"> default </span> <span class="javascript--code">{</span></div>
                                <div class="pl-3"><span class="javascript--code">components: {</span></div>
                                <div class="pl-5"><span class="javascript--code">{{ spinners[currentItem].name | spinnerName }}</span></div>
                                <div class="pl-3"><span class="javascript--code">}</span></div>
                                <div><span class="javascript--code">}</span></div>
                            </code>

                            <code>
                                <div v-html="$options.filters.htmlComment('In SFC, string templates, and JSX')"></div>
                                <div v-html="$options.filters.htmlElement(`${ $options.filters.spinnerName(spinners[currentItem].name) }/`)"></div>
                            </code>

                            <code>
                                <div v-html="$options.filters.htmlComment('Or in DOM templates')"></div>
                                <div><span v-html="$options.filters.htmlElement(spinners[currentItem].name)"></span><span v-html="$options.filters.htmlElement(`/${ spinners[currentItem].name }`)"></span></div>
                            </code>
                        </v-sheet>
                    </v-tab-item>
                </v-tabs>
            </v-scroll-y-transition>
        </v-container>
    </div>
</template>

<script>
import { KSpinnerSpin, KSpinnerPulse, KSpinnerSwirl, KSpinnerSignal } from '@knekk/spinners'

export default {
    name: 'SpinnersView',
    data() {
        return {
            spinners: [
                KSpinnerSpin,
                KSpinnerPulse,
                KSpinnerSwirl,
                KSpinnerSignal
            ],
            currentItem: 0,
            version: process.env['@knekk/spinners']
        }
    },
    filters: {
        bashComment(value) {
            return `<div class="bash--comment"># ${ value }</div>`
        },

        bashCommand(value) {
            return `<div class="bash--command">${ value }</div>`
        },

        htmlComment(value) {
            return `<div class="html--comment">&#60;!-- ${ value } --&#62;</div>`;
        },

        htmlElement(value) {
            return `<span class="html--entity">&#60;</span><span class="html--element">${ value }</span><span class="html--entity">&#62;</span>`
        },

        htmlLink(link) {
            return `<span class="html--entity">&#60;</span><span class="html--element">link</span> <span class="html--attribute">rel</span><span class="html--operator">=</span>"stylesheet" <span class="html--attribute">type</span><span class="html--operator">=</span>"text/css" <span class="html--attribute">href</span><span class="html--operator">=</span>"${ link }"<span class="html--entity">&#62;</span>`;
        },

        htmlSpinner(name) {
            return `<span class="html--entity">&#60;</span><span class="html--element">i</span> </span><span class="html--attribute">class</span><span class="html--operator">=</span>"${ name }"<span class="html--entity">&#62;</span><span class="html--entity">&#60;</span><span class="html--element">/i</span><span class="html--entity">&#62;</span>`;
        },

        javascriptComment(value) {
            return `<div class="javascript--comment">// ${ value }</div>`
        },

        spinnerLinkName(name) {
            return name.split('-').map((n, i) => i > 0 ? n.charAt(0).toUpperCase() + n.substring(1) : n).join('');
        },

        spinnerName(name) {
            return name.split('-').map(n => n.charAt(0).toUpperCase() + n.substring(1)).join('');
        },

        spinnerClass(name) {
            return name.replace(/(-[a-z]+$)/g, '-$1');
        }
    }
}
</script>

<style lang="scss" scoped>
.markup {
    height: 200px;
    overflow-x: auto;

    code {
        color: #A17052;
        margin: 1.5rem 0;

        &::before, &::after {
            content: unset;
        }
    }

    /* HTML */
    :global(.html--entity), :global(.html--operator), :global(.html--comment) {
        color: gray;
    }

    :global(.html--element), :global(.html--attribute) {
        color: #5792BA;
    }

    /* Bash */
    :global(.bash--comment) {
        color: gray;
    }

    :global(.bash--command) {
        color: lightgray;
    }

    /* Javascript */
    :global(.javascript--statement) {
        color: #dc64b2;
    }

    :global(.javascript--code) {
        color: lightgray;
    }

    :global(.javascript--comment) {
        color: gray;
    }

    :global(.javascript--keyword) {
        color: #5792BA;
    }
}

p {
    max-width: 700px;
}

code {
    display: block;
    background-color: transparent;
    font-family: monospace;
    box-shadow: unset;
}

.spinner-container {
    & > :global(.v-carousel__item) {
        align-items: center;
        text-align: center;
    }

    [class*="k-spinner"] {
        display: inline-flex;
    }
}

.v-carousel {
    box-shadow: unset;
}
</style>
