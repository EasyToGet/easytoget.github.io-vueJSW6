(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c1ad972"],{"1dde":function(t,e,a){var c=a("d039"),s=a("b622"),n=a("2d00"),o=s("species");t.exports=function(t){return n>=51||!c((function(){var e=[],a=e.constructor={};return a[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},8418:function(t,e,a){"use strict";var c=a("c04e"),s=a("9bf2"),n=a("5c6c");t.exports=function(t,e,a){var o=c(e);o in t?s.f(t,o,n(0,a)):t[o]=a}},"99af":function(t,e,a){"use strict";var c=a("23e7"),s=a("d039"),n=a("e8b5"),o=a("861d"),r=a("7b0b"),l=a("50c4"),i=a("8418"),d=a("65f0"),u=a("1dde"),b=a("b622"),h=a("2d00"),m=b("isConcatSpreadable"),f=9007199254740991,j="Maximum allowed index exceeded",O=h>=51||!s((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),p=u("concat"),g=function(t){if(!o(t))return!1;var e=t[m];return void 0!==e?!!e:n(t)},v=!O||!p;c({target:"Array",proto:!0,forced:v},{concat:function(t){var e,a,c,s,n,o=r(this),u=d(o,0),b=0;for(e=-1,c=arguments.length;e<c;e++)if(n=-1===e?o:arguments[e],g(n)){if(s=l(n.length),b+s>f)throw TypeError(j);for(a=0;a<s;a++,b++)a in n&&i(u,b,n[a])}else{if(b>=f)throw TypeError(j);i(u,b++,n)}return u.length=b,u}})},b0c0:function(t,e,a){var c=a("83ab"),s=a("9bf2").f,n=Function.prototype,o=n.toString,r=/^\s*function ([^ (]*)/,l="name";c&&!(l in n)&&s(n,l,{configurable:!0,get:function(){try{return o.call(this).match(r)[1]}catch(t){return""}}})},b789:function(t,e,a){"use strict";a.r(e);a("b0c0");var c=a("7a23"),s=Object(c["h"])("h2",{class:"mt-3 text-center"},"前台購物車",-1),n={class:"container"},o={class:"row justify-content-center"},r={class:"col-md-6"},l={class:"text-end"},i={class:"table align-middle"},d=Object(c["h"])("thead",null,[Object(c["h"])("tr",null,[Object(c["h"])("th"),Object(c["h"])("th",null,"品名"),Object(c["h"])("th",{style:{width:"200px"}},"數量/單位"),Object(c["h"])("th",{class:"text-end"},"單價")])],-1),u={key:0,class:"spinner-border spinner-border-sm",role:"status"},b=Object(c["g"])(" 刪除 "),h={key:0,class:"text-success"},m={class:"input-group input-group-sm"},f={class:"input-group mb-3"},j={class:"input-group-text",id:"basic-addon2",style:{width:"100px"}},O={class:"text-end"},p={key:0,class:"text-success"},g=Object(c["h"])("td",{colspan:"3",class:"text-end"},"總計",-1),v={class:"text-end"},y={key:0},x=Object(c["h"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),C={class:"text-end text-success"},k={class:"my-5 row justify-content-center"},w={class:"mb-3"},L=Object(c["h"])("label",{for:"email",class:"form-label"},"Email",-1),V={class:"mb-3"},S=Object(c["h"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),I={class:"mb-3"},U=Object(c["h"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),_={class:"mb-3"},A=Object(c["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),q={class:"mb-3"},$=Object(c["h"])("label",{for:"message",class:"form-label"},"留言",-1),F={class:"text-end"};function D(t,e,a,D,E,G){var J=Object(c["A"])("Loading"),M=Object(c["A"])("Field"),P=Object(c["A"])("ErrorMessage"),T=Object(c["A"])("Form");return Object(c["t"])(),Object(c["e"])(c["a"],null,[s,Object(c["h"])(J,{active:E.isLoading},null,8,["active"]),Object(c["h"])("div",n,[Object(c["h"])("div",o,[Object(c["h"])("div",r,[Object(c["h"])("div",l,[Object(c["h"])("button",{class:["btn btn-outline-danger",{disabled:0===E.cart.final_total}],type:"button",onClick:e[1]||(e[1]=function(){return G.deleteAllCarts&&G.deleteAllCarts.apply(G,arguments)})}," 清空購物車 ",2)]),Object(c["h"])("table",i,[d,Object(c["h"])("tbody",null,[E.cart.carts?(Object(c["t"])(!0),Object(c["e"])(c["a"],{key:0},Object(c["y"])(E.cart.carts,(function(t){return Object(c["t"])(),Object(c["e"])("tr",{key:t.id},[Object(c["h"])("td",null,[Object(c["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return G.removeCartItem(t)},disabled:E.loadingStatus.loadingItem===t.id},[E.loadingStatus.loadingItem===t.id?(Object(c["t"])(),Object(c["e"])("div",u)):Object(c["f"])("",!0),b],8,["onClick","disabled"])]),Object(c["h"])("td",null,[Object(c["g"])(Object(c["D"])(t.product.title)+" ",1),t.coupon?(Object(c["t"])(),Object(c["e"])("div",h," 已套用優惠券 ")):Object(c["f"])("",!0)]),Object(c["h"])("td",null,[Object(c["h"])("div",m,[Object(c["h"])("div",f,[Object(c["L"])(Object(c["h"])("input",{min:"1",type:"number",onChange:function(e){return G.updateCart(t)},disabled:E.loadingStatus.loadingItem===t.id,class:"form-control","onUpdate:modelValue":function(e){return t.qty=e},style:{width:"50px"}},null,40,["onChange","disabled","onUpdate:modelValue"]),[[c["G"],t.qty,void 0,{number:!0}]]),Object(c["h"])("span",j,Object(c["D"])(t.product.unit),1)])])]),Object(c["h"])("td",O,[E.cart.final_total!==E.cart.total?(Object(c["t"])(),Object(c["e"])("small",p,"折扣價：")):Object(c["f"])("",!0),Object(c["g"])(" "+Object(c["D"])(t.final_total),1)])])})),128)):Object(c["f"])("",!0)]),Object(c["h"])("tfoot",null,[Object(c["h"])("tr",null,[g,Object(c["h"])("td",v,Object(c["D"])(E.cart.total),1)]),E.cart.final_total!==E.cart.total?(Object(c["t"])(),Object(c["e"])("tr",y,[x,Object(c["h"])("td",C,Object(c["D"])(E.cart.final_total),1)])):Object(c["f"])("",!0)])])])]),Object(c["h"])("div",k,[Object(c["h"])(T,{ref:"form",class:"col-md-6",onSubmit:G.createOrder},{default:Object(c["K"])((function(t){var a=t.errors;return[Object(c["h"])("div",w,[L,Object(c["h"])(M,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":a["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:E.form.user.email,"onUpdate:modelValue":e[2]||(e[2]=function(t){return E.form.user.email=t})},null,8,["class","modelValue"]),Object(c["h"])(P,{name:"email",class:"invalid-feedback"})]),Object(c["h"])("div",V,[S,Object(c["h"])(M,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":a["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:E.form.user.name,"onUpdate:modelValue":e[3]||(e[3]=function(t){return E.form.user.name=t})},null,8,["class","modelValue"]),Object(c["h"])(P,{name:"姓名",class:"invalid-feedback"})]),Object(c["h"])("div",I,[U,Object(c["h"])(M,{id:"tel",name:"電話",type:"tel",class:["form-control",{"is-invalid":a["電話"]}],placeholder:"請輸入電話",rules:G.isPhone,modelValue:E.form.user.tel,"onUpdate:modelValue":e[4]||(e[4]=function(t){return E.form.user.tel=t})},null,8,["class","rules","modelValue"]),Object(c["h"])(P,{name:"電話",class:"invalid-feedback"})]),Object(c["h"])("div",_,[A,Object(c["h"])(M,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":a["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:E.form.user.address,"onUpdate:modelValue":e[5]||(e[5]=function(t){return E.form.user.address=t})},null,8,["class","modelValue"]),Object(c["h"])(P,{name:"地址",class:"invalid-feedback"})]),Object(c["h"])("div",q,[$,Object(c["L"])(Object(c["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[6]||(e[6]=function(t){return E.form.message=t})},null,512),[[c["G"],E.form.message]])]),Object(c["h"])("div",F,[Object(c["h"])("button",{type:"submit",class:["btn btn-danger",{disabled:0===E.cart.final_total}]}," 送出訂單 ",2)])]})),_:1},8,["onSubmit"])])])],64)}a("99af");var E={name:"Cart",data:function(){return{loadingStatus:{loadingItem:""},isLoading:!1,cart:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},coupon_code:""}},methods:{getCart:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("easytoget","/cart");this.$http.get(e).then((function(e){e.data.success?(t.cart=e.data.data,t.isLoading=!1):alert(e.data.message)}))},deleteAllCarts:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("easytoget","/carts");this.$http.delete(e).then((function(e){e.data.success?(alert(e.data.message),t.isLoading=!1,t.getCart()):alert(e.data.message)}))},removeCartItem:function(t){var e=this;this.isLoading=!0,this.loadingStatus.loadingItem=t.id;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("easytoget","/cart/").concat(t.id);this.$http.delete(a).then((function(t){t.data.success?(alert(t.data.message),e.getCart()):alert(t.data.message),e.loadingStatus.loadingItem="",e.isLoading=!1}))},updateCart:function(t){var e=this;this.isLoading=!0,this.loadingStatus.loadingItem=t.id;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("easytoget","/cart/").concat(t.id),c={product_id:t.product.id,qty:t.qty};this.$http.put(a,{data:c}).then((function(t){t.data.success?(alert(t.data.message),e.getCart()):alert(t.data.message),e.loadingStatus.loadingItem="",e.isLoading=!1}))},createOrder:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("easytoget","/order"),a=this.form;this.$http.post(e,{data:a}).then((function(e){e.data.success?(alert(e.data.message),t.$refs.form.resetForm(),t.resetFormUser(),t.getCart()):alert(e.data.message),t.isLoading=!1}))},isPhone:function(t){var e=/^(09)[0-9]{8}$/;return!!e.test(t)||"需要正確的電話號碼"},resetFormUser:function(){this.form.user.email="",this.form.user.name="",this.form.user.tel="",this.form.user.address="",this.form.message=""}},created:function(){this.getCart()}};E.render=D;e["default"]=E}}]);
//# sourceMappingURL=chunk-0c1ad972.88c5789d.js.map