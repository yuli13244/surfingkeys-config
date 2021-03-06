
api.addSearchAlias('fy', '有道翻译', 'https://dict.youdao.com/suggest?num=5&ver=3.0&doctype=json&cache=false&le=en&q=', 's',
'https://dict.youdao.com/suggest?num=5&ver=3.0&doctype=json&cache=false&le=en&q={0}',function(res){
    
    const resObj = JSON.parse(res.text)

        if(resObj['result'] && resObj['result']['code']===200){
            let rst = [];
            
            if(resObj['data'] && resObj['data']['entries']){
                let explains = resObj['data']['entries'];
                for(const explain of explains){
                    rst.push({'html':`<h>${explain['entry']}:${explain['explain']}</h>`})
                }
            }else{
                rst.push({'html':`<h>🔍查询结果为空</h>`})
            }
            
            return rst

        }
        
        return [{'html':`<p>🔍查询结果为空</p>`}]
        
});


api.Front.registerInlineQuery({
    url: function (q) {
        return `https://dict.youdao.com/suggest?num=5&ver=3.0&doctype=json&cache=false&le=en&q=${q}`
    },
    parseResult: function (res) {
        const resObj = JSON.parse(res.text)

        if(resObj['result'] && resObj['result']['code']===200){
            let con = document.createElement('div')
            con.style = "padding:-1 15px;font-size:20px;line-height:1.2;min-height:100px;overflow:auto;"

            if(resObj['data'] && resObj['data']['entries']){
                let explains = resObj['data']['entries'];
                for(const explain of explains){
                    con.innerHTML += `<p>${explain['entry']}:${explain['explain']}<p>`
                }
            }else{
                con.innerHTML += `<p>🔍查询结果为空<p>`
            }
            return con.outerHTML

        }else{
            return false;
        }
    }
});


api.mapkey('glwb', 'weibo.com', function() {
    window.location.href = "https://weibo.com/";
});

api.mapkey('glcn', 'cnBeta', function() {
    window.location.href = "https://m.cnbeta.com";
});

api.mapkey('glos', 'osChina.net', function() {
    window.location.href = "https://m.oschina.net";
});

settings.omnibarMaxResults=20

// -----------------------------------------------------------------------------------------------------------------------
// Change theme solarized-dark background
// // Change fonts
// // Change colors
// -----------------------------------------------------------------------------------------------------------------------
settings.theme = `
.sk_theme input {
    font-family: "Fira Code";
}
.sk_theme .url {
    font-size: 14px;
}
#sk_omnibarSearchResult li div.url {
    font-weight: normal;
}
.sk_theme .omnibar_timestamp {
    font-size: 14px;
    font-weight: bold;
}
#sk_omnibarSearchArea input {
    font-size: 14px;
}
.sk_theme .omnibar_visitcount {
    font-size: 14px;
    font-weight: bold;
}
body {
    font-family: "Fira Code", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 14px;
}
kbd {
    font: 14px "Fira Code", Consolas, "Liberation Mono", Menlo, Courier, monospace;
}
#sk_omnibarSearchArea .prompt, #sk_omnibarSearchArea .resultPage {
    font-size: 14px;
}
.sk_theme {
    background: #002B36;
    color: #f8f8f2;
}
.sk_theme tbody {
    color: #002B36;
}
.sk_theme input {
    color: #ffb86c;
}
.sk_theme .url {
    color: #6272a4;
}
#sk_omnibarSearchResult>ul>li {
    background: #002B36;
}
#sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #002B36;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #002B36;
}
.sk_theme .annotation {
    color: #6272a4;
}
.sk_theme .focused {
    background: #073642 !important;
}
.sk_theme kbd {
    background: #f8f8f2;
    color: #073642;
}
.sk_theme .frame {
    background: #8178DE9E;
}
.sk_theme .omnibar_highlight {
    color: #8be9fd;
}
.sk_theme .omnibar_folder {
    color: #ff79c6;
}
.sk_theme .omnibar_timestamp {
    color: #bd93f9;
}
.sk_theme .omnibar_visitcount {
    color: #f1fa8c;
}

.sk_theme .prompt, .sk_theme .resultPage {
    color: #50fa7b;
}
.sk_theme .feature_name {
    color: #ff5555;
}
.sk_omnibar_middle #sk_omnibarSearchArea {
    border-bottom: 1px solid #282a36;
}
#sk_status {
    border: 1px solid #282a36;
}
#sk_richKeystroke {
    background: #282a36;
    box-shadow: 0px 2px 10px rgba(40, 42, 54, 0.8);
}
#sk_richKeystroke kbd>.candidates {
    color: #ff5555;
}
#sk_keystroke {
    background-color: #282a36;
    color: #f8f8f2;
}
kbd {
    border: solid 1px #f8f8f2;
    border-bottom-color: #f8f8f2;
    box-shadow: inset 0 -1px 0 #f8f8f2;
}
#sk_frame {
    border: 4px solid #ff5555;
    background: #8178DE9E;
    box-shadow: 0px 0px 10px #DA3C0DCC;
}
#sk_banner {
    border: 1px solid #282a36;
    background: rgb(68, 71, 90);
}
div.sk_tabs_bg {
    background: #f8f8f2;
}
div.sk_tab {
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#6272a4), color-stop(100%,#44475a));
}
div.sk_tab_title {
    color: #f8f8f2;
}
div.sk_tab_url {
    color: #8be9fd;
}
div.sk_tab_hint {
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f1fa8c), color-stop(100%,#ffb86c));
    color: #282a36;
    border: solid 1px #282a36;
}
#sk_bubble {
    border: 1px solid #f8f8f2;
    color: #282a36;
    background-color: #f8f8f2;
}
#sk_bubble * {
    color: #282a36 !important;
}
div.sk_arrow[dir=down]>div:nth-of-type(1) {
    border-top: 12px solid #f8f8f2;
}
div.sk_arrow[dir=up]>div:nth-of-type(1) {
    border-bottom: 12px solid #f8f8f2;
}
div.sk_arrow[dir=down]>div:nth-of-type(2) {
    border-top: 10px solid #f8f8f2;
}
div.sk_arrow[dir=up]>div:nth-of-type(2) {
    border-bottom: 10px solid #f8f8f2;
}
#sk_omnibar {
    width: 80%;
    left: 10%;
}
}`;