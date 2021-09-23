Vue.createApp({
    data() {
        return {
            word: ""
        }
    },
    methods: {
        upper() {
           return this.word.toUpperCase();
        },
        lower() {
           return this.word.toLowerCase();
        }
    }
}).mount("#app")