// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,g=/\.0$/,d=/\.0*e/,N=/(\..*[^0])0*e/;function b(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,N,"$1e"),e=l.call(e,d,"e"),e=l.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,p,"e+0$1"),e=l.call(e,v,"e-0$1"),r.alternate&&(e=l.call(e,y,"$1."),e=l.call(e,h,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function m(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var w=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function k(r){var n,t,e,o,a,f,c,s,l,p,v,y,h;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,A(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!A(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(a)?String(e.arg):w(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=b(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(p=e.arg,v=e.width,y=e.padRight,h=void 0,(h=v-p.length)<0?p:p=y?p+m(h):m(h)+p)),f+=e.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function j(r){var n,t,e,i;for(t=[],i=0,e=S.exec(r);e;)(n=r.slice(i,S.lastIndex-e[0].length)).length&&t.push(n),t.push(U(e)),i=S.lastIndex,e=S.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function I(r){var n,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[j(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return k.apply(null,n)}var x=Object.prototype,T=x.toString,F=x.__defineGetter__,O=x.__defineSetter__,V=x.__lookupGetter__,P=x.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,n)||P.call(r,n)?(e=r.__proto__,r.__proto__=x,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,n,t.get),a&&O&&O.call(r,n,t.set),r};function G(r,n,t){$(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function C(r,n,t){$(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function H(r){return r!=r}var L=Number.POSITIVE_INFINITY,M=Number,W=M.NEGATIVE_INFINITY;function R(r){return r===L||r===W}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return Z&&"symbol"==typeof Symbol.toStringTag}var X,Y=Object.prototype.toString,z=Object.prototype.hasOwnProperty,B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"",J=q()?function(r){var n,t,e,i,o;if(null==r)return Y.call(r);t=r[D],o=D,n=null!=(i=r)&&z.call(i,o);try{r[D]=void 0}catch(n){return Y.call(r)}return e=Y.call(r),n?r[D]=t:delete r[D],e}:function(r){return Y.call(r)},K="function"==typeof Uint32Array,Q="function"==typeof Uint32Array?Uint32Array:null,rr="function"==typeof Uint32Array?Uint32Array:void 0;X=function(){var r,n,t;if("function"!=typeof Q)return!1;try{n=new Q(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(K&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var nr,tr=X,er="function"==typeof Float64Array,ir="function"==typeof Float64Array?Float64Array:null,or="function"==typeof Float64Array?Float64Array:void 0;nr=function(){var r,n,t;if("function"!=typeof ir)return!1;try{n=new ir([1,3.14,-3.14,NaN]),t=n,r=(er&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ar,ur=nr,fr="function"==typeof Uint8Array,cr="function"==typeof Uint8Array?Uint8Array:null,sr="function"==typeof Uint8Array?Uint8Array:void 0;ar=function(){var r,n,t;if("function"!=typeof cr)return!1;try{n=new cr(n=[1,3.14,-3.14,256,257]),t=n,r=(fr&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr=ar,vr="function"==typeof Uint16Array,yr="function"==typeof Uint16Array?Uint16Array:null,hr="function"==typeof Uint16Array?Uint16Array:void 0;lr=function(){var r,n,t;if("function"!=typeof yr)return!1;try{n=new yr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(vr&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var gr,dr={uint16:lr,uint8:pr};(gr=new dr.uint16(1))[0]=4660;var Nr=52===new dr.uint8(gr.buffer)[0],br=!0===Nr?1:0,mr=new ur(1),wr=new tr(mr.buffer);function Ar(r){return mr[0]=r,wr[br]}function _r(r,n){var t,e,i,o;return i=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*e-r*n))}var Er=-.16666666666666632,kr=.00833333333332249,Sr=-.0001984126982985795,Ur=27557313707070068e-22,jr=-2.5050760253406863e-8,Ir=1.58969099521155e-10;function xr(r,n){var t,e,i;return t=kr+(i=r*r)*(Sr+i*Ur)+i*(i*i)*(jr+i*Ir),e=i*r,0===n?r+e*(Er+i*t):r-(i*(.5*n-e*t)-n-e*Er)}var Tr,Fr,Or=2147483647,Vr=2146435072,Pr=1048575,$r=!0===Nr?0:1,Gr=new ur(1),Cr=new tr(Gr.buffer);!0===Nr?(Tr=1,Fr=0):(Tr=0,Fr=1);var Hr={HIGH:Tr,LOW:Fr},Lr=new ur(1),Mr=new tr(Lr.buffer),Wr=Hr.HIGH,Rr=Hr.LOW;function Zr(r,n){return Mr[Wr]=r,Mr[Rr]=n,Lr[0]}var qr,Xr,Yr=Math.floor,zr=1023,Br=1023,Dr=-1023,Jr=-1074,Kr=2147483648;!0===Nr?(qr=1,Xr=0):(qr=0,Xr=1);var Qr={HIGH:qr,LOW:Xr},rn=new ur(1),nn=new tr(rn.buffer),tn=Qr.HIGH,en=Qr.LOW;function on(r,n,t,e){return rn[0]=r,n[e]=nn[tn],n[e+t]=nn[en],n}function an(r){return on(r,[0,0],1,0)}C(an,"assign",on);var un=[0,0];function fn(r,n){var t,e;return an.assign(r,un,1,0),t=un[0],t&=Or,e=Ar(n),Zr(t|=e&=Kr,un[1])}var cn=22250738585072014e-324;function sn(r){return Math.abs(r)}var ln=4503599627370496;function pn(r,n,t,e){return H(r)||R(r)?(n[e]=r,n[e+t]=0,n):0!==r&&sn(r)<cn?(n[e]=r*ln,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}C((function(r){return pn(r,[0,0],1,0)}),"assign",pn);var vn=2220446049250313e-31,yn=2148532223,hn=[0,0],gn=[0,0];function dn(r,n){var t,e;return 0===n||0===r||H(r)||R(r)?r:(pn(r,hn,1,0),r=hn[0],n+=hn[1],n+=function(r){var n=Ar(r);return(n=(n&Vr)>>>20)-zr|0}(r),n<Jr?fn(0,r):n>Br?r<0?W:L:(n<=Dr?(n+=52,e=vn):e=1,an.assign(r,gn,1,0),t=gn[0],t&=yn,e*Zr(t|=n+zr<<20,gn[1])))}function Nn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var bn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],mn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],wn=16777216,An=5.960464477539063e-8,_n=Nn(20),En=Nn(20),kn=Nn(20),Sn=Nn(20);function Un(r,n,t,e,i,o,a,u,f){var c,s,l,p,v,y,h,g,d;for(p=o,d=e[t],g=t,v=0;g>0;v++)s=An*d|0,Sn[v]=d-wn*s|0,d=e[g-1]+s,g-=1;if(d=dn(d,i),d-=8*Yr(.125*d),d-=h=0|d,l=0,i>0?(h+=v=Sn[t-1]>>24-i,Sn[t-1]-=v<<24-i,l=Sn[t-1]>>23-i):0===i?l=Sn[t-1]>>23:d>=.5&&(l=2),l>0){for(h+=1,c=0,v=0;v<t;v++)g=Sn[v],0===c?0!==g&&(c=1,Sn[v]=16777216-g):Sn[v]=16777215-g;if(i>0)switch(i){case 1:Sn[t-1]&=8388607;break;case 2:Sn[t-1]&=4194303}2===l&&(d=1-d,0!==c&&(d-=dn(1,i)))}if(0===d){for(g=0,v=t-1;v>=o;v--)g|=Sn[v];if(0===g){for(y=1;0===Sn[o-y];y++);for(v=t+1;v<=t+y;v++){for(f[u+v]=bn[a+v],s=0,g=0;g<=u;g++)s+=r[g]*f[u+(v-g)];e[v]=s}return Un(r,n,t+=y,e,i,o,a,u,f)}}if(0===d)for(t-=1,i-=24;0===Sn[t];)t-=1,i-=24;else(d=dn(d,-i))>=wn?(s=An*d|0,Sn[t]=d-wn*s|0,i+=24,Sn[t+=1]=s):Sn[t]=0|d;for(s=dn(1,i),v=t;v>=0;v--)e[v]=s*Sn[v],s*=An;for(v=t;v>=0;v--){for(s=0,y=0;y<=p&&y<=t-v;y++)s+=mn[y]*e[v+y];kn[t-v]=s}for(s=0,v=t;v>=0;v--)s+=kn[v];for(n[0]=0===l?s:-s,s=kn[0]-s,v=1;v<=t;v++)s+=kn[v];return n[1]=0===l?s:-s,7&h}function jn(r,n,t,e){var i,o,a,u,f,c,s;for((o=(t-3)/24|0)<0&&(o=0),u=t-24*(o+1),c=o-(a=e-1),s=a+4,f=0;f<=s;f++)_n[f]=c<0?0:bn[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*_n[a+(f-c)];En[f]=i}return Un(r,n,4,En,u,4,o,a,_n)}var In=Math.round,xn=.6366197723675814,Tn=1.5707963267341256,Fn=6077100506506192e-26,On=6077100506303966e-26,Vn=20222662487959506e-37,Pn=20222662487111665e-37,$n=84784276603689e-45,Gn=2047;function Cn(r,n,t){var e,i,o,a,u;return o=r-(e=In(r*xn))*Tn,a=e*Fn,u=n>>20|0,t[0]=o-a,u-(Ar(t[0])>>20&Gn)>16&&(a=e*Vn-((i=o)-(o=i-(a=e*On))-a),t[0]=o-a,u-(Ar(t[0])>>20&Gn)>49&&(a=e*$n-((i=o)-(o=i-(a=e*Pn))-a),t[0]=o-a)),t[1]=o-t[0]-a,e}var Hn=0,Ln=16777216,Mn=1.5707963267341256,Wn=6077100506506192e-26,Rn=2*Wn,Zn=3*Wn,qn=4*Wn,Xn=598523,Yn=1072243195,zn=1073928572,Bn=1074752122,Dn=1074977148,Jn=1075183036,Kn=1075388923,Qn=1075594811,rt=1094263291,nt=[0,0,0],tt=[0,0];function et(r,n){var t,e,i,o,a,u,f;if((i=Ar(r)&Or|0)<=Yn)return n[0]=r,n[1]=0,0;if(i<=Bn)return(i&Pr)===Xn?Cn(r,i,n):i<=zn?r>0?(f=r-Mn,n[0]=f-Wn,n[1]=f-n[0]-Wn,1):(f=r+Mn,n[0]=f+Wn,n[1]=f-n[0]+Wn,-1):r>0?(f=r-2*Mn,n[0]=f-Rn,n[1]=f-n[0]-Rn,2):(f=r+2*Mn,n[0]=f+Rn,n[1]=f-n[0]+Rn,-2);if(i<=Qn)return i<=Jn?i===Dn?Cn(r,i,n):r>0?(f=r-3*Mn,n[0]=f-Zn,n[1]=f-n[0]-Zn,3):(f=r+3*Mn,n[0]=f+Zn,n[1]=f-n[0]+Zn,-3):i===Kn?Cn(r,i,n):r>0?(f=r-4*Mn,n[0]=f-qn,n[1]=f-n[0]-qn,4):(f=r+4*Mn,n[0]=f+qn,n[1]=f-n[0]+qn,-4);if(i<rt)return Cn(r,i,n);if(i>=Vr)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Gr[0]=r,Cr[$r]}(r),f=Zr(i-((e=(i>>20)-1046)<<20|0),t),a=0;a<2;a++)nt[a]=0|f,f=(f-nt[a])*Ln;for(nt[2]=f,o=3;nt[o-1]===Hn;)o-=1;return u=jn(nt,tt,e,o),r<0?(n[0]=-tt[0],n[1]=-tt[1],-u):(n[0]=tt[0],n[1]=tt[1],u)}var it=[0,0],ot=2147483647,at=1072243195,ut=1044381696,ft=2146435072;function ct(r){var n;if(n=Ar(r),(n&=ot)<=at)return n<ut?1:_r(r,0);if(n>=ft)return NaN;switch(3&et(r,it)){case 0:return _r(it[0],it[1]);case 1:return-xr(it[0],it[1]);case 2:return-_r(it[0],it[1]);default:return xr(it[0],it[1])}}var st=1072243195,lt=1045430272,pt=[0,0];function vt(r){var n;if(n=Ar(r),(n&=Or)<=st)return n<lt?r:xr(r,0);if(n>=Vr)return NaN;switch(3&et(r,pt)){case 0:return xr(pt[0],pt[1]);case 1:return _r(pt[0],pt[1]);case 2:return-xr(pt[0],pt[1]);default:return-_r(pt[0],pt[1])}}var yt=3.141592653589793;function ht(r){var n,t;return H(r)||R(r)?NaN:0===(n=sn(t=r%2))||1===n?fn(0,t):n<.25?vt(yt*t):n<.75?fn(ct(yt*(n=.5-n)),t):n<1.25?(t=fn(1,t)-t,vt(yt*t)):n<1.75?-fn(ct(yt*(n-=1.5)),t):(t-=fn(2,t),vt(yt*t))}function gt(r,n,t){var e;return H(r)||H(n)||H(t)||t<0?NaN:0===t?r<n?0:1:r<n-t?0:r>n+t?1:(1+(e=(r-n)/t)+ht(e)/yt)/2}function dt(r){return function(){return r}}function Nt(r){return H(r)?dt(NaN):function(n){return H(n)?NaN:n<r?0:1}}function bt(r,n,t){$(r,n,{configurable:!1,enumerable:!1,get:t})}function mt(r){return"number"==typeof r}C((function(r,n){return H(r)||H(n)?NaN:r<n?0:1}),"factory",Nt),C(gt,"factory",(function(r,n){return H(r)||H(n)||n<0?dt(NaN):0===n?Nt(r):function(t){var e;return H(t)?NaN:t<r-n?0:t>r+n?1:(1+(e=(t-r)/n)+ht(e)/yt)/2}}));var wt=M.prototype.toString,At=q();function _t(r){return"object"==typeof r&&(r instanceof M||(At?function(r){try{return wt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Et(r){return mt(r)||_t(r)}function kt(r){return mt(r)&&r>0}function St(r){return _t(r)&&r.valueOf()>0}function Ut(r){return kt(r)||St(r)}function jt(r){return mt(r)&&H(r)}function It(r){return _t(r)&&H(r.valueOf())}function xt(r){return jt(r)||It(r)}function Tt(r){return Yr(r)===r}function Ft(r){return Tt(r/2)}function Ot(r){return Ft(r>0?r-1:r+1)}C(Et,"isPrimitive",mt),C(Et,"isObject",_t),C(Ut,"isPrimitive",kt),C(Ut,"isObject",St),C(xt,"isPrimitive",jt),C(xt,"isObject",It);var Vt=Math.sqrt,Pt=!0===Nr?0:1,$t=new ur(1),Gt=new tr($t.buffer);function Ct(r,n){return $t[0]=r,Gt[Pt]=n>>>0,$t[0]}function Ht(r){return 0|r}var Lt=1072693247,Mt=1e300,Wt=1e-300,Rt=!0===Nr?1:0,Zt=new ur(1),qt=new tr(Zt.buffer);function Xt(r,n){return Zt[0]=r,qt[Rt]=n>>>0,Zt[0]}var Yt=1048575,zt=1048576,Bt=1072693248,Dt=536870912,Jt=524288,Kt=20,Qt=9007199254740992,re=.9617966939259756,ne=.9617967009544373,te=-7.028461650952758e-9,ee=[1,1.5],ie=[0,.5849624872207642],oe=[0,1.350039202129749e-8],ae=1.4426950408889634,ue=1.4426950216293335,fe=1.9259629911266175e-8,ce=.6931471805599453,se=1048576,le=1071644672,pe=20,ve=.6931471824645996,ye=-1.904654299957768e-9,he=1072693247,ge=1105199104,de=1139802112,Ne=1083179008,be=1072693248,me=1083231232,we=3230714880,Ae=31,_e=1e300,Ee=1e-300,ke=8008566259537294e-32,Se=[0,0],Ue=[0,0];function je(r,n){var t,e,i,o,a,u,f,c,s,l,p,v,y,h;if(H(r)||H(n))return NaN;if(an.assign(n,Se,1,0),a=Se[0],0===Se[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Vt(r);if(-.5===n)return 1/Vt(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(R(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:sn(r)<1==(n===L)?0:L}(r,n)}if(an.assign(r,Se,1,0),o=Se[0],0===Se[1]){if(0===o)return function(r,n){return n===W?L:n===L?0:n>0?Ot(n)?r:0:Ot(n)?fn(L,r):L}(r,n);if(1===r)return 1;if(-1===r&&Ot(n))return-1;if(R(r))return r===W?je(-0,-n):n<0?0:L}if(r<0&&!1===Tt(n))return(r-r)/(r-r);if(i=sn(r),t=o&Or|0,e=a&Or|0,f=a>>>Ae|0,u=(u=o>>>Ae|0)&&Ot(n)?-1:1,e>ge){if(e>de)return function(r,n){return(Ar(r)&Or)<=Lt?n<0?Mt*Mt:Wt*Wt:n>0?Mt*Mt:Wt*Wt}(r,n);if(t<he)return 1===f?u*_e*_e:u*Ee*Ee;if(t>be)return 0===f?u*_e*_e:u*Ee*Ee;p=function(r,n){var t,e,i,o,a,u,f;return o=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(u=i*fe-o*ae)-((e=Ct(e=(a=ue*i)+u,0))-a),r[0]=e,r[1]=t,r}(Ue,i)}else p=function(r,n,t){var e,i,o,a,u,f,c,s,l,p,v,y,h,g,d,N,b,m,w,A,_;return m=0,t<zt&&(m-=53,t=Ar(n*=Qt)),m+=(t>>Kt)-zr|0,t=(w=t&Yt|0)|Bt|0,w<=235662?A=0:w<767610?A=1:(A=0,m+=1,t-=zt),a=Ct(i=(N=(n=Xt(n,t))-(c=ee[A]))*(b=1/(n+c)),0),e=(t>>1|Dt)+Jt,f=Xt(0,e+=A<<18),d=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Ct(f=3+(o=a*a)+(d+=(u=b*(N-a*f-a*(n-(f-c))))*(a+i)),0),l=Ct(l=(N=a*f)+(b=u*f+(d-(f-3-o))*i),0),p=ne*l,h=(v=te*l+(b-(l-N))*re+oe[A])-((y=Ct(y=p+v+(s=ie[A])+(g=m),0))-g-s-p),r[0]=y,r[1]=h,r}(Ue,i,t);if(v=(l=(n-(c=Ct(n,0)))*p[0]+n*p[1])+(s=c*p[0]),an.assign(v,Se,1,0),y=Ht(Se[0]),h=Ht(Se[1]),y>=Ne){if(0!=(y-Ne|h))return u*_e*_e;if(l+ke>v-s)return u*_e*_e}else if((y&Or)>=me){if(0!=(y-we|h))return u*Ee*Ee;if(l<=v-s)return u*Ee*Ee}return v=function(r,n,t){var e,i,o,a,u,f,c,s,l,p;return l=((s=r&Or|0)>>pe)-zr|0,c=0,s>le&&(i=Xt(0,((c=r+(se>>l+1)>>>0)&~(Pr>>(l=((c&Or)>>pe)-zr|0)))>>>0),c=(c&Pr|se)>>pe-l>>>0,r<0&&(c=-c),n-=i),r=Ht(r=Ar(f=1-((f=(o=(i=Ct(i=t+n,0))*ve)+(a=(t-(i-n))*ce+i*ye))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<pe>>>0)>>pe<=0?dn(f,c):Xt(f,r)}(y,s,l),u*v}var Ie=9.869604401089358;function xe(r,n){var t;return H(r)||H(n)||n<=0?NaN:(t=6*(90-Ie*Ie),t/=5*je(Ie-6,2))}function Te(r,n){return H(r)||H(n)||n<=0?NaN:r}function Fe(r,n){return H(r)||H(n)||n<=0?NaN:r}function Oe(r,n){return H(r)||H(n)||n<=0?NaN:r}function Ve(r,n){return H(r)||H(n)||n<=0?NaN:0}function Pe(r,n){return H(r)||H(n)||n<=0?NaN:n*Vt(1/3-2/Ie)}function $e(r,n){return H(r)||H(n)||n<=0?NaN:n*n*(1/3-2/Ie)}var Ge=.6931471803691238,Ce=1.9082149292705877e-10,He=0x40000000000000,Le=.3333333333333333,Me=1048575,We=2146435072,Re=1048576,Ze=1072693248;function qe(r){var n,t,e,i,o,a,u,f,c,s,l,p;return 0===r?W:H(r)||r<0?NaN:(o=0,(t=Ar(r))<Re&&(o-=54,t=Ar(r*=He)),t>=We?r+r:(o+=(t>>20)-zr|0,o+=(f=614244+(t&=Me)&1048576|0)>>20|0,u=(r=Xt(r,t|f^Ze))-1,(Me&2+t)<3?0===u?0===o?0:o*Ge+o*Ce:(a=u*u*(.5-Le*u),0===o?u-a:o*Ge-(a-o*Ce-u)):(f=t-398458|0,c=440401-t|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-s*(n+a)):o*Ge-(n-(s*(n+a)+o*Ce)-u)):0===o?u-s*(u-a):o*Ge-(s*(u-a)-o*Ce-u))))}function Xe(r,n,t){var e;return H(r)||H(n)||H(t)||t<0?NaN:0===t?r<n?W:0:r<n-t?W:r>n+t?0:qe((1+(e=(r-n)/t)+ht(e)/yt)/2)}function Ye(r){return H(r)?dt(NaN):function(n){return H(n)?NaN:n<r?W:0}}C((function(r,n){return H(r)||H(n)?NaN:r<n?W:0}),"factory",Ye),C(Xe,"factory",(function(r,n){return H(r)||H(n)||n<0?dt(NaN):0===n?Ye(r):function(t){var e;return H(t)?NaN:t<r-n?W:t>r+n?0:qe((1+(e=(t-r)/n)+ht(e)/yt)/2)}}));var ze=9007199254740992;function Be(r){var n,t,e,i;return H(r)||R(r)?NaN:(n=sn(r))>ze?1:.5==(e=n-(t=Yr(n)))?0:(i=e<.25?ct(yt*e):e<.75?vt(yt*(e=.5-e)):-ct(yt*(e=1-e)),t%2==1?-i:i)}function De(r,n,t){return H(r)||H(n)||H(t)||t<0?NaN:0===t?r===n?L:W:r<n-t||r>n+t?W:qe(1+Be((r-n)/t))-qe(2*t)}function Je(r){return H(r)?dt(NaN):function(n){return H(n)?NaN:n===r?L:W}}C((function(r,n){return H(r)||H(n)?NaN:r===n?L:W}),"factory",Je),C(De,"factory",(function(r,n){return H(r)||H(n)||n<0?dt(NaN):0===n?Je(r):function(t){return H(t)?NaN:t<r-n||t>r+n?W:qe(1+Be((t-r)/n))-qe(2*n)}}));var Ke=Math.ceil;function Qe(r){return r<0?Ke(r):Yr(r)}var ri=.6931471803691238,ni=1.9082149292705877e-10,ti=1.4426950408889634,ei=709.782712893384,ii=-745.1332191019411,oi=1/(1<<28),ai=-oi;function ui(r){var n;return H(r)||r===L?r:r===W?0:r>ei?L:r<ii?0:r>ai&&r<oi?1+r:function(r,n,t){var e,i,o,a;return dn(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-(n=Qe(r<0?ti*r-.5:ti*r+.5))*ri,n*ni,n)}var fi=709.782712893384,ci=fi+ce,si=-708.3964185322641-ce,li=fi-ce;function pi(r){var n;return 0===r?r:r>ci||r<si?r>0?L:W:(n=sn(r))>1?n>=li?(n=ui(.5*n),n*=.5*n,r<0&&(n=-n),n):(n=.5*(n=ui(n))-.5/n,r<0&&(n=-n),n):r+r*(n*=n)*function(r){var n,t;return 0===r?.16666666666666666:((r<0?-r:r)<=1?(n=r*(r*(-.789474443963537*r-163.72585752598383)-11561.443576500522)-351754.9648081514,t=r*(36157.827983443196+r*(1*r-277.7110814206028))-2110529.7888489086):(n=(r=1/r)*(r*(-351754.9648081514*r-11561.443576500522)-163.72585752598383)-.789474443963537,t=1+r*(r*(36157.827983443196+-2110529.7888489086*r)-277.7110814206028)),n/t)}(n)}function vi(r,n,t){var e,i;return H(r)||H(n)||H(t)||t<=0?NaN:(e=Ie*pi(i=t*r),e/=i*(Ie+i*i),e*=ui(n*r))}function yi(r,n,t){return H(r)||H(n)||H(t)||t<0?NaN:0===t?r===n?L:0:r<n-t||r>n+t?0:(1+Be((r-n)/t))/(2*t)}function hi(r){return H(r)?dt(NaN):function(n){return H(n)?NaN:n===r?L:0}}C(vi,"factory",(function(r,n){return H(r)||H(n)||n<=0?dt(NaN):function(t){var e,i;return H(t)?NaN:(e=Ie*pi(i=n*t),e/=i*(Ie+i*i),e*=ui(r*t))}})),C((function(r,n){return H(r)||H(n)?NaN:r===n?L:0}),"factory",hi),C(yi,"factory",(function(r,n){return H(r)||H(n)||n<0?dt(NaN):0===n?hi(r):function(t){return H(t)?NaN:t<r-n||t>r+n?0:(1+Be((t-r)/n))/(2*n)}}));var gi=1e4,di=1e-12;function Ni(r,n,t){var e,i,o,a;for(a=1,e=n-t,i=n+t;a<gi;){if(o=(e+i)/2,i-e<di)return o;r>gt(o,n,t)?e=o:i=o,a+=1}return o}function bi(r,n,t){return H(n)||H(t)||H(r)||t<0||r<0||r>1?NaN:0===t?n:Ni(r,n,t)}function mi(r){return H(r)?dt(NaN):function(n){return H(n)||n<0||n>1?NaN:r}}function wi(){var r,n;if(!(this instanceof wi))return 0===arguments.length?new wi:new wi(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!mt(r=arguments[0])||xt(r))throw new TypeError(I("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!kt(n))throw new TypeError(I("invalid argument. Scale parameter must be a positive number. Value: `%s`.",n))}else r=0,n=1;return $(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!mt(n)||xt(n))throw new TypeError(I("invalid assignment. Must be a number. Value: `%s`.",n));r=n}}),$(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!kt(r))throw new TypeError(I("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}C((function(r,n){return H(r)||r<0||r>1?NaN:n}),"factory",mi),C(bi,"factory",(function(r,n){return H(r)||H(n)||n<0?dt(NaN):0===n?mi(r):function(t){return H(t)||t<0||t>1?NaN:Ni(t,r,n)}})),bt(wi.prototype,"kurtosis",(function(){return xe(this.mu,this.s)})),bt(wi.prototype,"mean",(function(){return Te(this.mu,this.s)})),bt(wi.prototype,"median",(function(){return Fe(this.mu,this.s)})),bt(wi.prototype,"mode",(function(){return Oe(this.mu,this.s)})),bt(wi.prototype,"skewness",(function(){return Ve(this.mu,this.s)})),bt(wi.prototype,"stdev",(function(){return Pe(this.mu,this.s)})),bt(wi.prototype,"variance",(function(){return $e(this.mu,this.s)})),C(wi.prototype,"cdf",(function(r){return gt(r,this.mu,this.s)})),C(wi.prototype,"logcdf",(function(r){return Xe(r,this.mu,this.s)})),C(wi.prototype,"logpdf",(function(r){return De(r,this.mu,this.s)})),C(wi.prototype,"mgf",(function(r){return vi(r,this.mu,this.s)})),C(wi.prototype,"pdf",(function(r){return yi(r,this.mu,this.s)})),C(wi.prototype,"quantile",(function(r){return bi(r,this.mu,this.s)}));var Ai={};return G(Ai,"cdf",gt),G(Ai,"Cosine",wi),G(Ai,"kurtosis",xe),G(Ai,"logcdf",Xe),G(Ai,"logpdf",De),G(Ai,"mean",Te),G(Ai,"median",Fe),G(Ai,"mgf",vi),G(Ai,"mode",Oe),G(Ai,"pdf",yi),G(Ai,"quantile",bi),G(Ai,"skewness",Ve),G(Ai,"stdev",Pe),G(Ai,"variance",$e),Ai},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).cosine=n();
//# sourceMappingURL=index.js.map
