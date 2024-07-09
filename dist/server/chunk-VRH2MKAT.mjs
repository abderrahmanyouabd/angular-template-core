import './polyfills.server.mjs';
import{$ as Fe,A as s,B as l,C as k,D as Ce,E as f,F as K,G as u,H as J,I as Q,J as ee,K as te,L as j,N as Ve,S as De,U as be,V as ie,X as Me,Y as Ae,Z as T,_ as Ee,a as he,aa as we,b as fe,c as pe,d as O,da as Ie,e as N,f as E,g as m,h as b,ha as Se,i as me,j as F,ja as xe,k as h,ka as Oe,l as g,la as ne,m as y,n as ge,o as ye,p as ve,q as _e,r as z,s as C,t as _,u as a,v as Z,w as V,x as X,y as P,z as Y}from"./chunk-2BJWWLIZ.mjs";import{a as v,b as D}from"./chunk-VVCT4QZE.mjs";var Ne=(()=>{let e=class e{constructor(){this.list=[],this.init()}init(){this.insert({email:"a1st",password:"3477"}),this.insert({email:"abdo",password:"7590"}),this.insert({email:"khalid",password:"0000"})}insert(i){this.list.push(i)}getAllMessages(){return this.list}deleteMessage(i){this.list.splice(i,1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Re=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(Z),a(z))},e.\u0275dir=y({type:e});let t=e;return t})(),ft=(()=>{let e=class e extends Re{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=_e(e)))(o||e)}})(),e.\u0275dir=y({type:e,features:[V]});let t=e;return t})(),He=new b("");var pt={provide:He,useExisting:N(()=>q),multi:!0};function mt(){let t=ie()?ie().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var gt=new b(""),q=(()=>{let e=class e extends Re{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!mt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(Z),a(z),a(gt,8))},e.\u0275dir=y({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&f("input",function(d){return o._handleInput(d.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(d){return o._compositionEnd(d.target.value)})},features:[j([pt]),V]});let t=e;return t})();var Le=new b(""),qe=new b("");function We(t){return t!=null}function $e(t){return Ve(t)?he(t):t}function ze(t){let e={};return t.forEach(n=>{e=n!=null?v(v({},e),n):e}),Object.keys(e).length===0?null:e}function Ze(t,e){return e.map(n=>n(t))}function yt(t){return!t.validate}function Xe(t){return t.map(e=>yt(e)?e:n=>e.validate(n))}function vt(t){if(!t)return null;let e=t.filter(We);return e.length==0?null:function(n){return ze(Ze(n,e))}}function oe(t){return t!=null?vt(Xe(t)):null}function _t(t){if(!t)return null;let e=t.filter(We);return e.length==0?null:function(n){let i=Ze(n,e).map($e);return pe(i).pipe(fe(ze))}}function se(t){return t!=null?_t(Xe(t)):null}function Pe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ct(t){return t._rawValidators}function Vt(t){return t._rawAsyncValidators}function re(t){return t?Array.isArray(t)?t:[t]:[]}function U(t,e){return Array.isArray(t)?t.includes(e):t===e}function ke(t,e){let n=re(e);return re(t).forEach(r=>{U(n,r)||n.push(r)}),n}function je(t,e){return re(e).filter(n=>!U(t,n))}var B=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=oe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=se(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},A=class extends B{get formDirective(){return null}get path(){return null}},x=class extends B{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},R=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Dt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},mi=D(v({},Dt),{"[class.ng-submitted]":"isSubmitted"}),Ye=(()=>{let e=class e extends R{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(x,2))},e.\u0275dir=y({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&Y("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[V]});let t=e;return t})(),Ke=(()=>{let e=class e extends R{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(A,10))},e.\u0275dir=y({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&Y("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[V]});let t=e;return t})();var w="VALID",G="INVALID",M="PENDING",I="DISABLED";function Je(t){return(W(t)?t.validators:t)||null}function bt(t){return Array.isArray(t)?oe(t):t||null}function Qe(t,e){return(W(e)?e.asyncValidators:t)||null}function Mt(t){return Array.isArray(t)?se(t):t||null}function W(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function At(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new O(1e3,"");if(!i[n])throw new O(1001,"")}function Et(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new O(1002,"")})}var H=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===w}get invalid(){return this.status===G}get pending(){return this.status==M}get disabled(){return this.status===I}get enabled(){return this.status!==I}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ke(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ke(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(je(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(je(e,this._rawAsyncValidators))}hasValidator(e){return U(this._rawValidators,e)}hasAsyncValidator(e){return U(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=M,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=I,this.errors=null,this._forEachChild(i=>{i.disable(D(v({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(D(v({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(i=>{i.enable(D(v({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(D(v({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===M)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=M,this._hasOwnPendingAsyncValidator=!0;let n=$e(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new C,this.statusChanges=new C}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M)?M:this._anyControlsHaveStatus(G)?G:w}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){W(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=bt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Mt(this._rawAsyncValidators)}},L=class extends H{constructor(e,n,i){super(Je(n),Qe(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Et(this,!0,e),Object.keys(e).forEach(i=>{At(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ae=new b("CallSetDisabledState",{providedIn:"root",factory:()=>le}),le="always";function Ft(t,e){return[...e.path,t]}function et(t,e,n=le){tt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),It(t,e),xt(t,e),St(t,e),wt(t,e)}function Te(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function wt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function tt(t,e){let n=Ct(t);e.validator!==null?t.setValidators(Pe(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Vt(t);e.asyncValidator!==null?t.setAsyncValidators(Pe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Te(e._rawValidators,r),Te(e._rawAsyncValidators,r)}function It(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&it(t,e)})}function St(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&it(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function it(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function xt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Ot(t,e){t==null,tt(t,e)}function Nt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Pt(t){return Object.getPrototypeOf(t.constructor)===ft}function kt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function jt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===q?n=o:Pt(o)?i=o:r=o}),r||i||n||null}var Tt={provide:A,useExisting:N(()=>ue)},S=Promise.resolve(),ue=(()=>{let e=class e extends A{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new C,this.form=new L({},oe(i),se(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){S.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),et(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){S.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){S.then(()=>{let r=this._findContainer(i.path),o=new L({});Ot(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){S.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){S.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,kt(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(a(Le,10),a(qe,10),a(ae,8))},e.\u0275dir=y({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&f("submit",function(d){return o.onSubmit(d)})("reset",function(){return o.onReset()})},inputs:{options:[F.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[j([Tt]),V]});let t=e;return t})();function Ge(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ue(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Gt=class extends H{constructor(e=null,n,i){super(Je(n),Qe(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),W(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ue(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ge(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ge(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ut={provide:x,useExisting:N(()=>de)},Be=Promise.resolve(),de=(()=>{let e=class e extends x{constructor(i,r,o,c,d,ct){super(),this._changeDetectorRef=d,this.callSetDisabledState=ct,this.control=new Gt,this._registered=!1,this.name="",this.update=new C,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=jt(this,c)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),Nt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){et(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Be.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&be(r);Be.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Ft(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(a(A,9),a(Le,10),a(qe,10),a(He,10),a(De,8),a(ae,8))},e.\u0275dir=y({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[F.None,"disabled","isDisabled"],model:[F.None,"ngModel","model"],options:[F.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[j([Ut]),V,ge]});let t=e;return t})(),nt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=y({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Bt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=m({});let t=e;return t})();var rt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ae,useValue:i.callSetDisabledState??le}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=m({imports:[Bt]});let t=e;return t})();var ot=(()=>{let e=class e{constructor(){this.message={},this.index=-1,this.delete=new C}onDelete(){this.delete.emit(this.index)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-form-details"]],inputs:{message:"message",index:"index"},outputs:{delete:"delete"},decls:8,vars:2,consts:[[1,"form-card"],[1,"form-header"],["type","button",3,"click"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"div",1)(2,"h3"),u(3),l(),s(4,"p"),u(5),l()(),s(6,"button",2),f("click",function(){return o.onDelete()}),u(7,"Delete"),l()()),r&2&&(_(3),J(o.message.email),_(2),J(o.message.password))},styles:[".form-card[_ngcontent-%COMP%]{width:120px;margin:10px;padding:10px;border:1px solid #ccc;background-color:#f7f7f7;border-radius:4px}.form-header[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;padding:10px;border-radius:4px 4px 0 0}"]});let t=e;return t})();function Lt(t,e){if(t&1){let n=Ce();s(0,"app-form-details",14),f("delete",function(r){ye(n);let o=K(2);return ve(o.deleteCard(r))}),l()}if(t&2){let n=e.$implicit,i=e.index;P("message",n)("index",i)}}function qt(t,e){if(t&1&&(s(0,"div",12),X(1,Lt,1,2,"app-form-details",13),l()),t&2){let n=K();_(),P("ngForOf",n.list)}}var st=(()=>{let e=class e{constructor(i){this.service=i,this.email="",this.password="",this.list=[],this.isSubmitted=!1,this.list=this.service.getAllMessages(),this.isSubmitted=this.list.length>0}onSubmit(){this.isSubmitted=!0,this.service.insert({email:this.email,password:this.password})}deleteCard(i){this.service.deleteMessage(i)}};e.\u0275fac=function(r){return new(r||e)(a(Ne))},e.\u0275cmp=h({type:e,selectors:[["app-my-first-comp"]],decls:18,vars:3,consts:[[3,"ngSubmit"],[1,"form-group"],["for","exampleInputEmail1"],["type","email","name","first","id","exampleInputEmail1","aria-describedby","emailHelp","placeholder","Enter email",1,"form-control",3,"ngModelChange","ngModel"],["id","emailHelp",1,"form-text","text-muted"],["for","exampleInputPassword1"],["type","password","name","second","id","exampleInputPassword1","placeholder","Password",1,"form-control",3,"ngModelChange","ngModel"],[1,"form-group","form-check"],["type","checkbox","id","exampleCheck1",1,"form-check-input"],["for","exampleCheck1",1,"form-check-label"],["type","submit",1,"btn","btn-primary"],["class","flex-container",4,"ngIf"],[1,"flex-container"],[3,"message","index","delete",4,"ngFor","ngForOf"],[3,"delete","message","index"]],template:function(r,o){r&1&&(s(0,"form",0),f("ngSubmit",function(){return o.onSubmit()}),s(1,"div",1)(2,"label",2),u(3,"Email address"),l(),s(4,"input",3),te("ngModelChange",function(d){return ee(o.email,d)||(o.email=d),d}),l(),s(5,"small",4),u(6,"We'll never share your email with anyone else."),l()(),s(7,"div",1)(8,"label",5),u(9,"Password"),l(),s(10,"input",6),te("ngModelChange",function(d){return ee(o.password,d)||(o.password=d),d}),l()(),s(11,"div",7),k(12,"input",8),s(13,"label",9),u(14,"Check me out"),l()(),s(15,"button",10),u(16,"Submit"),l()(),X(17,qt,2,1,"div",11)),r&2&&(_(4),Q("ngModel",o.email),_(6),Q("ngModel",o.password),_(7),P("ngIf",o.isSubmitted))},dependencies:[Me,Ae,nt,q,Ye,Ke,de,ue,ot],styles:['@import"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css";form[_ngcontent-%COMP%]{border:white 2px solid;border-width:200px}.flex-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;flex-wrap:wrap}']});let t=e;return t})();var at=(()=>{let e=class e{constructor(i){this.httpClient=i,this.baseUrl="https://fakestoreapi.com/"}getProducts(i=5){let r=this.baseUrl.concat(`products?limit=${i}`);return this.httpClient.get(r)}createProduct(i){let r=this.baseUrl.concat("products");return this.httpClient.post(r,i)}};e.\u0275fac=function(r){return new(r||e)(me(T))},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ce=(()=>{let e=class e{constructor(i){this.productService=i;let r={title:"My Product",description:"clean and wash",price:20,category:"Any Category",image:"https://some-image.jpg"};this.productService.createProduct(r).subscribe({next:o=>{console.log(o)},error:o=>{console.log(o.message)}})}};e.\u0275fac=function(r){return new(r||e)(a(at))},e.\u0275cmp=h({type:e,selectors:[["app-about"]],decls:9,vars:0,consts:[[1,"about-container"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"h2"),u(2,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aut culpa debitis deserunt dignissimos dolor, doloribus ducimus ea enim error harum nulla quibusdam quisquam ratione sint soluta vero voluptates?"),l(),s(3,"p"),u(4,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi consectetur consequuntur debitis distinctio earum explicabo fuga hic itaque minima natus, nesciunt, nulla provident quam quidem repellendus veritatis voluptate voluptatem!"),l(),s(5,"p"),u(6,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus error labore saepe unde? Asperiores distinctio porro quod sint voluptate? Ad blanditiis dignissimos minus nam nulla optio qui reiciendis sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut blanditiis dolorem error esse fugit in magnam magni, molestias qui quidem quos, saepe sapiente sequi sit, soluta tenetur totam vero."),l(),s(7,"p"),u(8," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur culpa dignissimos dolorum earum id laborum nemo, neque non omnis pariatur perferendis quae, quos repudiandae sapiente sequi, temporibus ut vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam cum dolorem hic iste iusto neque, perspiciatis porro quidem quisquam quod repellendus saepe, sapiente totam velit vitae voluptates? Accusamus, autem! "),l()())},styles:[".about-container[_ngcontent-%COMP%]{max-width:800px;margin:0 auto;padding:20px;background-color:#f5f5f5;border-radius:5px;box-shadow:0 2px 4px #0000001a}h2[_ngcontent-%COMP%]{color:#333}p[_ngcontent-%COMP%]{color:#555;line-height:1.6}"]});let t=e;return t})();var $t=[{path:"home",component:st},{path:"about",component:ce},{path:"about/:username",component:ce}],lt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=m({imports:[ne.forRoot($t),ne]});let t=e;return t})();var ut=(()=>{let e=class e{constructor(i){this.router=i}navigateToAbout(){this.router.navigate(["about"]).then(i=>0)}};e.\u0275fac=function(r){return new(r||e)(a(xe))},e.\u0275cmp=h({type:e,selectors:[["app-menu"]],decls:8,vars:0,consts:[[1,"menu"],["routerLink","/home"],["href","javascript:void(0)",3,"click"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"ul")(2,"li")(3,"a",1),u(4,"Home"),l()(),s(5,"li")(6,"a",2),f("click",function(){return o.navigateToAbout()}),u(7,"About"),l()()()())},dependencies:[Oe],styles:[".menu[_ngcontent-%COMP%]{background-color:#333;color:#fff;padding:10px}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-left:20px}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-right:0}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;padding:5px 10px;border-radius:5px}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#555}"]});let t=e;return t})();var $=(()=>{let e=class e{constructor(){this.title="a1st-project"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-root"]],decls:2,vars:0,template:function(r,o){r&1&&k(0,"app-menu")(1,"router-outlet")},dependencies:[Se,ut]});let t=e;return t})();var dt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e,bootstrap:[$]}),e.\u0275inj=m({providers:[we(),T],imports:[Fe,lt,rt,Ee]});let t=e;return t})();var Xt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e,bootstrap:[$]}),e.\u0275inj=m({imports:[dt,Ie]});let t=e;return t})();export{Xt as a};
