import{a as I}from"./chunk-TNYOLWQX.js";import{a as w}from"./chunk-OAAEGOH5.js";import{b as E,c as M}from"./chunk-Z2PSDNVK.js";import"./chunk-75E2R4P5.js";import{Ab as h,Bb as t,Cb as i,Db as u,Hb as b,Ib as m,Lb as p,Rb as o,Sb as S,Tb as c,Wa as r,Wb as y,ea as _,ja as g,nb as s,wb as x,xb as C,zb as v}from"./chunk-XGADHCNS.js";function D(e,a){e&1&&(t(0,"section",6),u(1,"mat-spinner"),i())}function O(e,a){if(e&1&&(t(0,"div",8)(1,"div",9)(2,"p"),o(3,"Nombre: "),t(4,"b"),o(5),i()(),t(6,"p"),o(7,"Estado: "),t(8,"b"),o(9),i()(),t(10,"p"),o(11,"Especie: "),t(12,"b"),o(13),i()(),t(14,"p"),o(15,"G\xE9nero: "),t(16,"b"),o(17),i()()(),u(18,"app-character-card",10),i()),e&2){let n=a.$implicit;r(5),c(" ",n.name," "),r(4),c(" ",n.status=="Dead"?"Fallecido":"Vivo",""),r(4),c(" ",n.species=="Human"?"Humano":"Alien",""),r(4),c(" ",n.gender=="Male"?"Hombre":"Mujer",""),r(),p("id",n.id),p("characterName",n.name),p("characterImage",n.image)}}function T(e,a){if(e&1&&v(0,O,19,7,"div",8,C),e&2){let n=m(2);h(n.scs.characters())}}function k(e,a){if(e&1&&(t(0,"p"),o(1),i()),e&2){let n=m(2);r(),S(n.scs.notFound())}}function F(e,a){if(e&1&&(t(0,"section",7),s(1,T,2,0)(2,k,2,1),i()),e&2){let n=m();r(),x(1,n.scs.notFound()?2:1)}}var V=(()=>{let a=class a{constructor(){this.scs=_(w)}nameChanging(d){let l=d.target.value.toLowerCase();this.scs.getByName(l)}};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=g({type:a,selectors:[["app-item-detail"]],standalone:!0,features:[y],decls:13,vars:1,consts:[[2,"padding","1rem","font-size","2rem"],[1,"row"],[1,"col","s12"],[1,"input-field","col","s12",2,"max-width","40%"],["id","name","type","text",1,"validate",3,"input"],["for","name"],[1,"flex","spiner-container"],[1,"flex","cards-container"],[1,"tooltip"],[1,"tooltiptext"],[3,"id","characterName","characterImage"]],template:function(l,f){l&1&&(t(0,"h1",0),o(1,"Buscar por nombre"),i(),t(2,"div",1)(3,"form",2)(4,"div",1)(5,"div",3)(6,"input",4),b("input",function(P){return f.nameChanging(P)}),i(),t(7,"label",5),o(8,"Nombre"),i()()()()(),t(9,"div",1)(10,"div",2),s(11,D,2,0,"section",6)(12,F,3,1),i()()),l&2&&(r(11),x(11,f.scs.loading()?11:12))},dependencies:[M,E,I],styles:[".tooltip[_ngcontent-%COMP%]{position:relative;display:inline-block;width:max-content;height:max-content}.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]{opacity:0;width:100%;height:100%;background-color:#0000005b;color:#fff;text-align:center;border-radius:6px;padding:1rem 0;position:absolute;top:0;bottom:0;z-index:3;transition:opacity .3s ease;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%]{visibility:visible;opacity:1}.cards-container[_ngcontent-%COMP%]{padding:1rem 2rem;gap:1rem;flex-wrap:wrap;justify-content:space-evenly;align-items:center;overflow:auto}@media (max-width: 300px){.cards-container[_ngcontent-%COMP%]{padding:1rem}}.spiner-container[_ngcontent-%COMP%]{width:100%;height:100%;justify-content:center;align-items:center}"]});let e=a;return e})();export{V as default};
