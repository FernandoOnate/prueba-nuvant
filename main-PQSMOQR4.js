import{a as x}from"./chunk-3QRYJ4SM.js";import{a as M,b as D,c as N,d as S,h as T,i as E}from"./chunk-SQLOA6QN.js";import"./chunk-DGJJ5J6M.js";import"./chunk-HRWWFYV7.js";import"./chunk-FFNA7OMH.js";import{b as F,c as I,d as P}from"./chunk-75E2R4P5.js";import"./chunk-IX6G3U3V.js";import{Db as w,Ha as g,Wb as b,Y as d,Ya as f,_ as p,_a as y,ab as v,cb as C,db as A,ea as h,ja as m,ma as c,na as u,pc as R}from"./chunk-XGADHCNS.js";var B="@",H=(()=>{let e=class e{constructor(r,i,n,s,a){this.doc=r,this.delegate=i,this.zone=n,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=h(y,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-V2VIOKAA.js")).catch(i=>{throw new d(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:n})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(r,i){let n=this.delegate.createRenderer(r,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new l(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let _=a.createRenderer(r,i);s.use(_)}).catch(a=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){f()},e.\u0275prov=p({token:e,factory:e.\u0275fac});let o=e;return o})(),l=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,i){this.delegate.insertBefore(e,t,r,i)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,i){this.delegate.setAttribute(e,t,r,i)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,i){this.delegate.setStyle(e,t,r,i)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(i=>i.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(B)}};function O(o="animations"){return C("NgAsyncAnimations"),c([{provide:v,useFactory:(e,t,r)=>new H(e,t,r,o),deps:[R,M,A]},{provide:g,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var k={providers:[F(I()),T(x,E({skipInitialTransition:!0,onViewTransitionCreated:o=>{}})),N(),O(),u(P)]};var V=(()=>{let e=class e{constructor(){this.title="prueba-nuvant"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[b],decls:1,vars:0,template:function(i,n){i&1&&w(0,"router-outlet")},dependencies:[S]});let o=e;return o})();D(V,k).catch(o=>console.error(o));