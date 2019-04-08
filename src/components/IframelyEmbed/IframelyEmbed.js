
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
            await fetch(`https://cdn.iframe.ly/api/oembed?url=${encodeURI(this.url)}&api_key=${this.apiKey}&iframe=card-small&align=left&omit_script=1`);

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
    methods: {
        registerIframely() {
            var tag = document.createElement('script');
            tag.src = `//cdn.iframe.ly/embed.js?api_key=${this.apiKey}`;
            tag.defer = true;
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    },
};

