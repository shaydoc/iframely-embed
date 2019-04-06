import Vue from 'vue'
import CusomtElementWrapper from '@vue/web-component-wrapper';
import IframelyEmbed from './components/IframelyEmbed/IframelyEmbed';

const IframelyEmbedWebComponent = CusomtElementWrapper(Vue, IframelyEmbed);
window.customElements.define('iframely-embed', IframelyEmbedWebComponent)
