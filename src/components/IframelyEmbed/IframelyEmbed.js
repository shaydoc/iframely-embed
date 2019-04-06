
// @vue/component
export default {
    props: {
        url: {
            type: String,
            default: 'https://iframe.ly/ACcM3Y',
        },
        apiKey: {
            type: String,
            default: '69e519ba7733455c5fecdc',
        },
    },
    async created() {
        const response =
            await fetch(`https://cdn.iframe.ly/api/iframely?url=${encodeURI(this.url)}&api_key=${this.apiKey}`);

        this.iframelyJson = await response.json();
    },
    data() {
        return {
            iframelyJson: null,
        };
    },
    computed: {
        html() {
            if (this.iframelyJson) {
                return this.iframelyJson.html;
            }
            return '';
        },
    },

};

