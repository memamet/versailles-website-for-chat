(function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
    window.voiceflow.chat.load({
        verify: { projectID: '655c9d762f4989aab2cfae2a' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
    });
    }
    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
})(document, 'script');
