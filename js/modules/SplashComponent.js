export default {
    template: `<h1>{{ message }}</h1>`,

    created: function() {
        console.log('our splash component rendered');
    },

    data: function() {
        return {
            message: "Welcome to my Super Awesome App"
        }
    }
}
