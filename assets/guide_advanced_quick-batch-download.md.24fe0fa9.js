import{_ as e,a}from"./chunks/batchDownload-select.0239976c.js";import{_ as o,o as s,c as n,a as c}from"./app.2364563f.js";const b=JSON.parse('{"title":"\u901A\u8FC7\u914D\u7F6E\u4E00\u952E\u4E0B\u8F7D","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB","link":"#\u7B80\u4ECB","children":[]},{"level":2,"title":"\u64CD\u4F5C","slug":"\u64CD\u4F5C","link":"#\u64CD\u4F5C","children":[]},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E","link":"#\u914D\u7F6E","children":[]},{"level":2,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879","link":"#\u6CE8\u610F\u4E8B\u9879","children":[]}],"relativePath":"guide/advanced/quick-batch-download.md","lastUpdated":1666586086000}'),l={name:"guide/advanced/quick-batch-download.md"},d=c('<h1 id="\u901A\u8FC7\u914D\u7F6E\u4E00\u952E\u4E0B\u8F7D" tabindex="-1">\u901A\u8FC7\u914D\u7F6E\u4E00\u952E\u4E0B\u8F7D <a class="header-anchor" href="#\u901A\u8FC7\u914D\u7F6E\u4E00\u952E\u4E0B\u8F7D" aria-hidden="true">#</a></h1><h2 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>\u5148\u8BF4\u4E00\u4E0B\uFF0C\u6211\u4EEC\u4E00\u952E\u4E0B\u8F7D\u7684\u80CC\u666F\u662F\u4EC0\u4E48\u3002\u5148\u60F3\u8C61\u4E00\u4E0B\u4EE5\u4E0B\u573A\u666F\uFF1A<br> \u5E73\u65F6\u5237\u89C6\u9891\uFF0C<code>\u6211</code>\u628A\u611F\u5174\u8DA3\u7684\u5185\u5BB9\u5206\u95E8\u522B\u7C7B\u653E\u8FDB\u6536\u85CF\u5939\u3002<br> \u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\uFF0C<code>\u6211</code>\u4F1A\u6253\u5F00<code>BilibiliDown</code>\uFF0C</p><p>\u9009\u62E9\u6536\u85CF\u59391\u3001<code>\u67E5\u627E</code>\u3001<code>\u4E0B\u4E00\u9875</code>\u3001<code>\u4E0B\u4E00\u9875</code>\u3001\u83DC\u5355\u6279\u91CF\u4E0B\u8F7D\u3001\u5173\u95ED\u9875\u9762\u3001<code>\u4E0B\u4E00\u9875</code>\u3001<code>\u4E0B\u4E00\u9875</code>\u3001\u83DC\u5355\u6279\u91CF\u4E0B\u8F7D...\u76F4\u5230\u5F39\u51FA\u63D0\u793A\u5DF2\u4E0B\u8F7D</p><p>\u9009\u62E9\u6536\u85CF\u59392\u3001<code>\u67E5\u627E</code>\u3001<code>\u4E0B\u4E00\u9875</code>\u3001<code>\u4E0B\u4E00\u9875</code>\u3001\u83DC\u5355\u6279\u91CF\u4E0B\u8F7D\u3001\u5173\u95ED\u9875\u9762\u3001<code>\u4E0B\u4E00\u9875</code>\u3001<code>\u4E0B\u4E00\u9875</code>\u3001\u83DC\u5355\u6279\u91CF\u4E0B\u8F7D...\u76F4\u5230\u5F39\u51FA\u63D0\u793A\u5DF2\u4E0B\u8F7D</p><p>\u9009\u62E9\u6536\u85CF\u59393\u3001<code>\u67E5\u627E</code>\u3001<code>\u4E0B\u4E00\u9875</code>\u3001<code>\u4E0B\u4E00\u9875</code>\u3001\u83DC\u5355\u6279\u91CF\u4E0B\u8F7D\u3001\u5173\u95ED\u9875\u9762\u3001<code>\u4E0B\u4E00\u9875</code>\u3001<code>\u4E0B\u4E00\u9875</code>\u3001\u83DC\u5355\u6279\u91CF\u4E0B\u8F7D...\u76F4\u5230\u5F39\u51FA\u63D0\u793A\u5DF2\u4E0B\u8F7D<br> ...</p><p>\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u5C31\u662F\u901A\u8FC7\u53EA\u70B9\u4E00\u4E0B\uFF0C\u6A21\u62DF\u5B9E\u73B0\u4E0A\u8FF0\u7684\u573A\u666F\u3002</p><h2 id="\u64CD\u4F5C" tabindex="-1">\u64CD\u4F5C <a class="header-anchor" href="#\u64CD\u4F5C" aria-hidden="true">#</a></h2><ul><li><p>\u76EE\u524D<code>\u4E00\u952E\u4E0B\u8F7D</code>\u5728\u64CD\u4F5C\u83DC\u5355\u91CC\u7684\u4F4D\u7F6E\u662F\u8FD9\u6837\uFF0C\u4E0D\u6392\u9664\u4EE5\u540E\u4F1A\u6709\u66F4\u6539\u3002<br><img src="'+e+'" alt=""></p></li><li><p>\u7A0B\u5E8F\u4F1A\u626B\u63CF<code>config</code>\u6587\u4EF6\u5939\u4E0B<code>batchDownload</code>\u5F00\u5934\u3001<code>.config</code>\u7ED3\u5C3E\u7684\u6587\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u5728\u8FD9\u4E9B\u914D\u7F6E\u4E4B\u95F4\u5FEB\u901F\u5207\u6362\u3002<br><img src="'+a+`" alt=""></p></li><li><p>\u63A5\u4E0B\u6765\u7684\u91CD\u70B9\u662F\u914D\u7F6E<code>config/batchDownload.config</code></p></li></ul><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u8BE5\u529F\u80FD\u76EE\u524D\u8FD8\u5728\u8BD5\u9A8C\u9636\u6BB5\uFF0C\u76EE\u524D\u5148\u653E\u51FA\u5B9E\u7528\u6027\u7684\u6837\u672C\u914D\u7F6E\u3002<br> \u914D\u7F6E\u8BF7\u4EE5<code>utf-8</code>\u7F16\u7801\u65B9\u5F0F\u4FDD\u5B58\u3002</p><p>\u4E0B\u9762\u662F\u4E0B\u8F7D<code>\u6536\u85CF\u59391</code>\u3001<code>\u6536\u85CF\u59392</code>\u3001<code>\u6536\u85CF\u59393</code>\uFF0C<br> \u4ECE\u7B2C<code>1</code>\u9875\u5F00\u59CB\uFF0C<br> \u5728\u9047\u5230\u5DF2\u7ECF\u4E0B\u8F7D\u8FC7\u7684\u89C6\u9891\u6216\u8005\u9875\u6570\u7B49\u4E8E<code>10</code>\u7684\u65F6\u5019\uFF0C\u505C\u6B62\u67E5\u8BE2\uFF0C<br> \u5728\u51FA\u6765\u7684\u7ED3\u679C\u91CC\u9762\uFF0C\u4F1A\u628A\u6CA1\u6709\u4E0B\u8F7D\u8FC7\u7684\u89C6\u9891\u63D0\u4EA4\u5230\u4E0B\u8F7D\u961F\u5217\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[favorite:\u6536\u85CF\u59391,\u6536\u85CF\u59392,\u6536\u85CF\u59393]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">start.page = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">stop.condition = page:10</span></span>
<span class="line"><span style="color:#A6ACCD;">stop.condition = _:downloaded</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u8868\u793A \u53EA\u4E0B\u8F7D\u6CA1\u6709\u4E0B\u8F7D\u8FC7\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">download.condition = _!downloaded</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u8868\u793A\u65E0\u6761\u4EF6\u4E0B\u8F7D\uFF0C\u6839\u636E\u60C5\u51B5\u6CE8\u91CA\u6216\u53BB\u6389\u6CE8\u91CA </span></span>
<span class="line"><span style="color:#A6ACCD;">#download.condition = _:_</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u8868\u793A\u4E0D\u5305\u542B\u8FB9\u754C\uFF08\u505C\u6B62\u65F6\u7684\u90A3\u4E2ABV\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">stop.bv.bounds = exclude</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u8868\u793A\u5728\u6BCF\u4E0B\u5B8C\u4E00\u4E2A\u6536\u85CF\u5939\uFF0C\u5C31\u5F39\u51FA\u4E00\u6B21\u63D0\u793A</span></span>
<span class="line"><span style="color:#A6ACCD;">stop.alert = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u4E00\u952E\u4E0B\u8F7D\u8BE5URL\u5BF9\u5E94\u7684\u5408\u96C6</span></span>
<span class="line"><span style="color:#A6ACCD;">[url:https://space.bilibili.com/{\u7528\u6237ID}/favlist?fid={\u6536\u85CF\u5939ID}&amp;ftype=create]</span></span>
<span class="line"><span style="color:#A6ACCD;">stop.condition = page:10</span></span>
<span class="line"><span style="color:#A6ACCD;">stop.condition = _:downloaded</span></span>
<span class="line"><span style="color:#A6ACCD;">download.condition = _!downloaded</span></span>
<span class="line"><span style="color:#A6ACCD;"># start.page\u3001stop.bv.bounds\u53EF\u4EE5\u7F3A\u7701\uFF0C\u6B64\u65F6\u53D6\u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;"># xx.condition \u53EF\u4EE5\u4E3A\u591A\u4E2A\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u662F\`\u6216\`\u7684\u5173\u7CFB</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h2><ul><li><code>[favorite:\u6536\u85CF\u59391,\u6536\u85CF\u59392]</code>\u8DDF\u4E0A<code>\u914D\u7F6EA</code>\uFF0C\u76F8\u5F53\u4E8E<br><code>[url:{\u6536\u85CF\u59391\u94FE\u63A5}]</code>\u8DDF\u4E0A<code>\u914D\u7F6EA</code> +<br><code>[url:{\u6536\u85CF\u59392\u94FE\u63A5}]</code>\u8DDF\u4E0A<code>\u914D\u7F6EA</code></li><li><code>[favorite:\u6536\u85CF\u59391,\u6536\u85CF\u59392,\u6536\u85CF\u59393,...]</code>\u4E2D\u5206\u9694\u7B26\u662F\u82F1\u6587<code>:</code>\u548C<code>,</code>\uFF0C\u4E0D\u8981\u4E0E\u4E2D\u6587\u5F04\u6DF7</li><li><code>[favorite:\u6536\u85CF\u59391,\u6536\u85CF\u59392,\u6536\u85CF\u59393,...]</code>\u4E2D\u6536\u85CF\u5939\u7684\u540D\u5B57\u4E0D\u80FD\u6709<code>,</code></li><li><code>[favorite:\u6536\u85CF\u59391,\u6536\u85CF\u59392,\u6536\u85CF\u59393,...]</code>\u4E2D\uFF0C\u5982\u679C\u4F60\u7684\u6536\u85CF\u5939\u6709\u591A\u4E2A\u540D\u5B57\u4E3A<code>\u6536\u85CF\u59391</code>\uFF0C\u90A3\u4E48\u8FD9\u51E0\u4E2A\u6536\u85CF\u5939\u90FD\u4F1A\u4E0B\u8F7D</li><li>\u4E3A\u4E86\u89E3\u51B3\u4EE5\u4E0A\u95EE\u9898\uFF0C\u4F60\u53EF\u4EE5\u5C06\u5176\u8F6C\u5316\u4E3A<code>[url:{\u6536\u85CF\u5939\u94FE\u63A5}]</code>\u7684\u683C\u5F0F</li><li><code>[url:{url\u94FE\u63A5}]</code>\u4E2D\u7684\u94FE\u63A5\u53EA\u80FD\u662F\u652F\u6301\u5206\u9875\u67E5\u8BE2\u7684\u94FE\u63A5</li></ul>`,15),p=[d];function i(t,r,A,C,h,_){return s(),n("div",null,p)}const f=o(l,[["render",i]]);export{b as __pageData,f as default};