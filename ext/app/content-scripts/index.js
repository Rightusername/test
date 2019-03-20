import Vue from 'vue'
import SelectArea from './components/SelectArea.vue'


  // sendMessage (msg) {
  //   console.debug('sending message', msg)
  //   try {
  //     // poor man's way of detecting whether this script was injected by an actual extension, or is loaded for
  //     // testing purposes
  //     if (chrome.runtime && chrome.runtime.onMessage) {
  //       chrome.runtime.sendMessage(msg)
  //     } else {
  //       this.eventLog.push(msg)
  //     }
  //   } catch (err) {
  //     console.debug('caught error', err)
  //   }
  // }

(()=>{
  let div = document.createElement('div');
  div.id = 'modal_root';

  document.body.appendChild(div);
  // document.body.style.position = 'relative';
  // document.body.style.margin = '0px';

  chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction'
  });
  Vue.config.productionTip = false

  Vue.prototype.$chrome = chrome

  new Vue({
    el: '#modal_root',
    render: h => h(SelectArea)
  })

  // Listen for messages from the popup
  // chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  //   // First, validate the message's structure
  //   if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
  //       // div.style.background = "blue";
  //       // import '../styles/style.scss'

        

  //   }
  // });
})();




