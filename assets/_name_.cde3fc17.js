import{X as _,q as p,n as f,d as N,u as k,Q as h,o as c,c as i,b as e,t as r,e as n,K as x,U as b,Y as y,a as w,w as C,j as S,f as V,r as g}from"./app.6bfe996c.js";const B=_("user",()=>{const t=p(""),a=p(new Set),m=f(()=>Array.from(a.value)),o=f(()=>m.value.filter(u=>u!==t.value));function s(u){t.value&&a.value.add(t.value),t.value=u}return{setNewName:s,otherNames:o,savedName:t}}),E=e("div",{"text-4xl":""},[e("div",{"i-carbon-pedestrian":"","inline-block":""})],-1),U={"text-sm":"","opacity-75":""},$={key:0,"text-sm":"","mt-4":""},j={"opacity-75":""},A=N({__name:"[name]",props:{name:null},setup(t){const a=t,m=V(),o=B(),{t:s}=k();return h(()=>{o.setNewName(a.name)}),(u,d)=>{const v=g("router-link");return c(),i("div",null,[E,e("p",null,r(n(s)("intro.hi",{name:a.name})),1),e("p",U,[e("em",null,r(n(s)("intro.dynamic-route")),1)]),n(o).otherNames.length?(c(),i("p",$,[e("span",j,r(n(s)("intro.aka"))+":",1),e("ul",null,[(c(!0),i(x,null,b(n(o).otherNames,l=>(c(),i("li",{key:l},[w(v,{to:`/hi/${l}`,replace:""},{default:C(()=>[S(r(l),1)]),_:2},1032,["to"])]))),128))])])):y("v-if",!0),e("div",null,[e("button",{btn:"",m:"3 t6","text-sm":"",onClick:d[0]||(d[0]=l=>n(m).back())},r(n(s)("button.back")),1)])])}}});export{A as default};
