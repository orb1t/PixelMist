(this["webpackJsonppixel-mist"]=this["webpackJsonppixel-mist"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('[{"filename":"warp.jpg","r":"sqrt(abs(x * y)) % (hypot(x-w/2, y-h/2) + 1) % (255 * tan(x ^ y) + 1) % (abs(x - y) + 1) % 256","g":"sqrt(abs(x * y)) % (hypot(x-w/2, y-h/2) + 1) % (255 * tan(x ^ y) + 1) % (abs(x - y) + 1) % 171","b":"sqrt(abs(x * y)) % (hypot(x-w/2, y-h/2) + 1) % (255 * tan(x ^ y) + 1) % (abs(x - y) + 1) % 86","w":1000,"h":1000},{"filename":"disco.jpg","r":"hypot(x, y + x) % 100","g":"hypot(1 - abs(x/w), 1 - abs(y/h))","b":"hypot(x - y, y) % 150","w":1000,"h":1000},{"filename":"hotspot.jpg","r":"hypot(x, y)","g":"(255 * tan(x ^ y) + 1) % 256","b":"(255 * tan(x ^ y) + 1) % 256","w":1000,"h":1000},{"filename":"spiderweb.jpg","r":"sqrt(abs(x) % abs(y)) * sqrt(abs(y) % abs(x)) % 100","g":"sqrt(abs(x) % abs(y)) * sqrt(abs(y) % abs(x)) % 200","b":"sqrt(abs(x) % abs(y)) * sqrt(abs(y) % abs(x)) % 50","w":1000,"h":1000},{"filename":"cursed_eclipse.jpg","r":"hypot(x, y + 500)","g":"hypot(x, y) % (500 % hypot(x, y))","b":"hypot(x, y - 500)","w":1000,"h":1000},{"filename":"deep_bass.jpg","r":"hypot(x,y)","g":"hypot(x + (28 * sin(x)), y + x) % 100","b":"hypot(x + (28 * cos(x)), y + x) % 110","w":1000,"h":1000},{"filename":"sierpinski.jpg","r":"tanh(x & y)","g":"tanh(x & y)","b":"tanh(x & y)","powerOf2Dim":true},{"filename":"circus.jpg","r":"cos(hypot(x, y) / hypot(w / 2.5, h / 2.5)) * tanh(x + y)","g":"cos(hypot(x, y) / hypot(w / 2.5, h / 2.5)) * tanh(x * y)","b":"cos(hypot(x, y) / hypot(w / 2.5, h / 2.5)) * tanh(x - y)","w":1000,"h":1000},{"filename":"rainbow.jpg","r":"x + y","g":"x * y","b":"x - y","w":1000,"h":1000}]')},18:function(e,t,a){},27:function(e,t,a){var n=a(46),r=["clamp","linearInterpolate","PixelGeneratorResult","PixelGenerator","calculateBase64"];e.exports=function(){var e=new Worker(a.p+"8136daaf7b9b6e1dd8ef.worker.js",{name:"[hash].worker.js"});return n(e,r),e}},30:function(e,t,a){e.exports=a(50)},37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),i=a.n(l),o=a(15),s=a(7),c=(a(37),a(11)),m=a(28);a(39),a(18),a(40);function u(){return r.a.createElement("h1",{className:"pixel-mist-title"},r.a.createElement(s.b,{to:"/"},"PIXEL MIST"))}var h=a(6),p=a.n(h),d=a(29);function b(){for(var e=window.screen.width,t=4;t<12&&Math.pow(2,t)<e;)t++;var a=Math.max(8,t-1);return Math.pow(2,a)}function f(e){var t=window.screen.width/1440;return Math.round(e*t)}var y=a(16),g=(a(45),a(4)),x=a(27),E=a.n(x),w=(a(47),E()()),v=!1;function k(e){var t=e.width,a=e.height,l=e.red,i=e.green,o=e.blue,s=Object(n.useState)(null),c=Object(g.a)(s,2),m=c[0],u=c[1],h=Object(n.useState)(v),d=Object(g.a)(h,2),b=d[0],f=d[1],y=Object(n.useState)(null),x=Object(g.a)(y,2),E=x[0],k=x[1],j=Object(n.useState)(null),M=Object(g.a)(j,2),P=M[0],S=M[1],N=Object(n.useState)(0),O=Object(g.a)(N,2),q=O[0],I=O[1],B={scale:1024,width:t,height:a,red:l,green:i,blue:o},R=!p.a.isEqual(B,E),G=p.a.isEqual(B,P);Object(n.useEffect)((function(){w.onmessage=function(e){if(p.a.isEqual(e.data,{type:"RPC",method:"ready"}))f(!0),v=!0;else if(e.data.imageSource)u(e.data.imageSource),k(e.data.renderedParams),S(null);else if(e.data.totalProgress){var t=Math.round(100*e.data.totalProgress);I(t)}},b&&R&&!G&&(S(B),w.calculateBase64(B))}));var _=function(){return 100===q?r.a.createElement("p",null,"Finishing Touches..."):r.a.createElement("p",null,"Loading ","".concat(q,"%"),"...")};return p.a.isNil(m)||!b||R&&G?r.a.createElement(_,null):r.a.createElement("img",{width:"".concat(t,"px"),height:"".concat(a,"px"),src:m,className:"main-canvas"})}var j=Math.min(1024,b()),M={r:"(hypot(abs(x), abs(y)) + (abs(x) & abs(y))) / 2",g:"tanh(abs(x) & abs(y))",b:"abs(x) ^ abs(y)",h:j,w:j};function P(){console.log("Called ExpressionBasedPixelGen");var e=Object(c.g)(),t=Object(c.h)(),a=Object(d.a)(),n=a.register,l=a.handleSubmit,i=new URLSearchParams(t.search),o=i.get("example")||null,m=o&&function(e){var t=p.a.find(y,{filename:e});return t&&(t.w=Math.min(t.w,f(t.w)),t.h=Math.min(t.h,f(t.h))),t?p.a.pick(t,["r","g","b","w","h","powerOf2Dim"]):null}(o)||{},u=Object.fromEntries(i.entries()),h=p.a.defaults(p.a.cloneDeep(u),m,M);"true"!==h.powerOf2Dim&&!0!==h.powerOf2Dim||(h.w=b(),h.h=b(),console.log({queryParamsAfterDefaults:h}),delete h.powerOf2Dim);var g=p.a.pick(h,Object.keys(M));if(!p.a.isEqual(g,u))return e.push({pathname:t.pathname,search:new URLSearchParams(g).toString()}),null;var x=h.r,E=h.g,w=h.b,v=h.w,j=h.h;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement(k,{width:Number(v),height:Number(j),red:x,green:E,blue:w}),r.a.createElement("form",{className:"expression-form",autoComplete:"off",autoCapitalize:"off",onSubmit:l((function(a){var n=p.a.pick(a,Object.keys(M));e.push({pathname:t.pathname,search:new URLSearchParams(n).toString()})}))},r.a.createElement("input",{type:"hidden",autoComplete:"false"}),r.a.createElement("input",{type:"number",name:"w",min:"1",placeholder:"Width in pixels",className:"form-input",defaultValue:Number(v),ref:n({required:!0})}),r.a.createElement("input",{type:"number",name:"h",min:"1",placeholder:"Height in pixels",className:"form-input",defaultValue:Number(j),ref:n({required:!0})}),r.a.createElement("br",null),r.a.createElement("input",{type:"input",name:"r",placeholder:"Red Expression",className:"form-input red",defaultValue:x,ref:n({required:!0})}),r.a.createElement("br",null),r.a.createElement("input",{type:"input",name:"g",placeholder:"Green Expression",className:"form-input green",defaultValue:E,ref:n({required:!0})}),r.a.createElement("br",null),r.a.createElement("input",{type:"input",name:"b",placeholder:"Blue Expression",className:"form-input blue",defaultValue:w,ref:n({required:!0})}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("div",{className:"footer"},r.a.createElement(s.b,{to:"/about"},r.a.createElement("h2",{className:"footer-link"},"About")),r.a.createElement(s.b,{to:"/examples"},r.a.createElement("h2",{className:"footer-link"},"Examples")))))}a(48);function S(){return r.a.createElement("div",null,r.a.createElement("div",{className:"about-container"},r.a.createElement("h1",null,"What is this?"),r.a.createElement("p",null,"Pixel Mist is a tool that gives you a new way to visualize mathematical expressions. It's kind of like a pixel shader but a lot simpler and more approachable. You can use it to create custom gradients, generate interesting patterns, and get a better understanding of mathematics."),r.a.createElement("h1",null,"How does it work?"),r.a.createElement("p",null,"I'm gonna assume you know about the ",r.a.createElement("a",{target:"_blank",href:"https://en.wikipedia.org/wiki/RGB_color_model"},"RGB color model"),".",r.a.createElement("br",null),r.a.createElement("br",null),"You are given five form fields to fill out:",r.a.createElement("ul",null,r.a.createElement("li",null,"Width"),r.a.createElement("li",null,"Height"),r.a.createElement("li",null,"Red Expression"),r.a.createElement("li",null,"Green Expression"),r.a.createElement("li",null,"Blue Expression")),"Width & height are used to specify dimensions of the generated image in number of pixels.",r.a.createElement("br",null),r.a.createElement("br",null),"The RGB expressions are used to dictate what the color of each individual pixel should be at each XY coordinate in the image. This uses a cartesian coordinate system where the origin (0,0) is at the center of the image. Both the X & Y axis have a maximum absolute value of 1024.",r.a.createElement("br",null),r.a.createElement("br",null),"You're really specifying ",r.a.createElement("code",null,"R(x, y), G(x, y), B(x, y)"),". Those values are calculated for the entire dimensions of the image.",r.a.createElement("br",null),r.a.createElement("br",null),"The min & max values generated by your expression are mapped to 0 and 255 respectively with every other value in between being linearly interpolated. The outputs for the individual R, G, & B channels are then coalesced to create the resulting image.",r.a.createElement("br",null),r.a.createElement("br",null),"The expressions you write can do anything you can do in vanilla Javascript. That means you have full access to the ",r.a.createElement("a",{target:"_blank",href:"https://www.w3schools.com/js/js_math.asp"},"Math")," object. For convenience, you can access all ",r.a.createElement("code",null,"Math")," properties without having to write the ",r.a.createElement("code",null,"Math.")," prefix. For example, instead of writing ",r.a.createElement("code",null,"Math.sin(x)"),", just write ",r.a.createElement("code",null,"sin(x)"),". Also, in addition to being able to use the dynamic variables x & y which represent a pixel's coordinate position, you can also reference static variables w & h which represent the width & height of the output image.",r.a.createElement("br",null),r.a.createElement("br",null),"P.S. All the computation is happening in the browser on ",r.a.createElement("i",null,"your computer"),". There's no backend for this website at all because I'm not paying for that \ud83d\ude1b"),r.a.createElement("h1",null,"Who made it?"),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",href:"https://github.com/sourabhdesai/"},"I did")),r.a.createElement("h1",null,"Where can I report a bug or submit a feature request?"),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",href:"https://github.com/sourabhdesai/PixelMist/issues/new"},"Here")),r.a.createElement("h1",null,"Why does this exist?"),r.a.createElement("p",null,"It was the summer after freshman year of my Computer Science undergrad and the world of programming was consuming me. I was playing around with a homework assignment I had gotten during the school year that involved editing images pixel-by-pixel. I decided to see what would happen if I generated an entire image from code by specifying mathematical equations for each RGB color channel.",r.a.createElement("br",null),r.a.createElement("br",null),"I quickly realized that I could make images with fascinating patterns using this method. For example, I found that using the expression Math.tanh(x & y) would result in a ",r.a.createElement("a",{target:"_blank",href:"https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle"},"Sierpi\u0144ski triangle"),"pattern (",r.a.createElement(s.b,{to:"/PixelMist/?r=Math.tanh%28x+%26+y%29&g=Math.tanh%28x+%26+y%29&b=Math.tanh%28x+%26+y%29&h=".concat(f(500),"&w=").concat(f(500))},"try for yourself"),"). I could utilize my mathematical knowledge to adjust images to match my aesthetic preferences.",r.a.createElement("br",null),r.a.createElement("br",null),"Besides being a way to keep my coding skills sharp over the summer, I found myself spending hours just creating new interesting patterns with this tool. I'm pretty certain I'm not the only one that would find this interesting to play with.",r.a.createElement("br",null),r.a.createElement("br",null),"Fast forward 8 years and the world is undergoing a global pandemic which leaves me with a lot of free time being at home in quarantine. Enough free time to dust off the old side project from all those years ago and turn it into a website so everyone can be as captivated by it as I was.")))}a(49);function N(e){var t=e.filename,a=new URLSearchParams({example:t});return r.a.createElement("a",{href:"/PixelMist?".concat(a.toString()),key:t},r.a.createElement("img",{alt:t,id:t,className:"example-img",src:"/PixelMist/images/examples/".concat(t)}))}function O(){return r.a.createElement("div",null,r.a.createElement("p",null,"A few examples to get you started",r.a.createElement("br",null),"Click image to open in editor"),y.map(N))}var q=function(){return function(e){o.a.set({page:e.pathname}),o.a.pageview(e.pathname)}(Object(c.h)()),r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/PixelMist"},r.a.createElement(P,null)),r.a.createElement(c.b,{exact:!0,path:"/PixelMist/about"},r.a.createElement(S,null)),r.a.createElement(c.b,{exact:!0,path:"/PixelMist/examples"},r.a.createElement(O,null)),r.a.createElement(c.a,{to:"/PixelMist"})),r.a.createElement("div",{className:"footer"},r.a.createElement(s.b,{to:"/PixelMist/about"},r.a.createElement("h2",{className:"footer-link"},"About")),r.a.createElement(s.b,{to:"/PixelMist/examples"},r.a.createElement("h2",{className:"footer-link"},"Examples")),r.a.createElement("div",{className:"github-btn"},r.a.createElement(m.a,{href:"https://github.com/sourabhdesai/PixelMist","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-icon":"octicon-star","aria-label":"Star sourabhdesai/PixelMist on GitHub"},"Star"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.initialize("UA-68475136-3"),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.ff92ff37.chunk.js.map