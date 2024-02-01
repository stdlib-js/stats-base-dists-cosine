// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var n,e,a;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,a=parseInt(e,10),!isFinite(a)){if(!t(e))throw new Error("invalid integer. Value: "+e);a=0}return a<0&&("u"===r.specifier||10!==n)&&(a=4294967295+a+1),a<0?(e=(-a).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=a.toString(n),a||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):o.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,h=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,N=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,b,"$1e"),e=p.call(e,N,"e"),e=p.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,h,"$1."),e=p.call(e,g,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===l.call(r.specifier)?l.call(e):s.call(e)}function w(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function A(r,n,t){var e=n-r.length;return e<0?r:r=t?r+w(e):w(e)+r}var _=String.fromCharCode,E=isNaN,k=Array.isArray;function S(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function U(r){var n,t,e,o,u,c,s,l,p;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(e=r[l]))c+=e;else{if(n=void 0!==e.precision,!(e=S(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+e+"`.");for(e.mapping&&(s=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[s],10),s+=1,E(e.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[s],10),s+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[s],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!E(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(u)?String(e.arg):_(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),c+=e.arg||"",s+=1}return c}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function x(r){var n,t,e,i;for(t=[],i=0,e=j.exec(r);e;)(n=r.slice(i,j.lastIndex-e[0].length)).length&&t.push(n),t.push(I(e)),i=j.lastIndex,e=j.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function T(r){return"string"==typeof r}function F(r){var n,t,e;if(!T(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=x(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return U.apply(null,t)}var O=Object.prototype,V=O.toString,P=O.__defineGetter__,$=O.__defineSetter__,G=O.__lookupGetter__,C=O.__lookupSetter__,H=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,o,u;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,n)||C.call(r,n)?(e=r.__proto__,r.__proto__=O,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,u="set"in t,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,n,t.get),u&&$&&$.call(r,n,t.set),r};function L(r,n,t){H(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function M(r,n,t){H(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return r!=r}var R=Number.POSITIVE_INFINITY,Z=Number,q=Z.NEGATIVE_INFINITY;function X(r){return r===R||r===q}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return Y&&"symbol"==typeof Symbol.toStringTag}var B,D=Object.prototype.toString,J=Object.prototype.hasOwnProperty,K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"",rr=z()?function(r){var n,t,e,i,o;if(null==r)return D.call(r);t=r[Q],o=Q,n=null!=(i=r)&&J.call(i,o);try{r[Q]=void 0}catch(n){return D.call(r)}return e=D.call(r),n?r[Q]=t:delete r[Q],e}:function(r){return D.call(r)},nr="function"==typeof Uint32Array,tr="function"==typeof Uint32Array?Uint32Array:null,er="function"==typeof Uint32Array?Uint32Array:void 0;B=function(){var r,n,t;if("function"!=typeof tr)return!1;try{n=new tr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(nr&&t instanceof Uint32Array||"[object Uint32Array]"===rr(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?er:function(){throw new Error("not implemented")};var ir,or=B,ur="function"==typeof Float64Array,ar="function"==typeof Float64Array?Float64Array:null,fr="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,n,t;if("function"!=typeof ar)return!1;try{n=new ar([1,3.14,-3.14,NaN]),t=n,r=(ur&&t instanceof Float64Array||"[object Float64Array]"===rr(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr,sr=ir,lr="function"==typeof Uint8Array,pr="function"==typeof Uint8Array?Uint8Array:null,yr="function"==typeof Uint8Array?Uint8Array:void 0;cr=function(){var r,n,t;if("function"!=typeof pr)return!1;try{n=new pr(n=[1,3.14,-3.14,256,257]),t=n,r=(lr&&t instanceof Uint8Array||"[object Uint8Array]"===rr(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var vr,hr=cr,gr="function"==typeof Uint16Array,dr="function"==typeof Uint16Array?Uint16Array:null,Nr="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,n,t;if("function"!=typeof dr)return!1;try{n=new dr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(gr&&t instanceof Uint16Array||"[object Uint16Array]"===rr(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var br,mr={uint16:vr,uint8:hr};(br=new mr.uint16(1))[0]=4660;var wr=52===new mr.uint8(br.buffer)[0],Ar=!0===wr?1:0,_r=new sr(1),Er=new or(_r.buffer);function kr(r){return _r[0]=r,Er[Ar]}function Sr(r,n){var t,e,i,o;return i=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*e-r*n))}var Ur=-.16666666666666632;function jr(r,n){var t,e,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),e=i*r,0===n?r+e*(Ur+i*t):r-(i*(.5*n-e*t)-n-e*Ur)}var Ir,xr,Tr=2147483647,Fr=2146435072,Or=1048575,Vr=!0===wr?0:1,Pr=new sr(1),$r=new or(Pr.buffer);!0===wr?(Ir=1,xr=0):(Ir=0,xr=1);var Gr={HIGH:Ir,LOW:xr},Cr=new sr(1),Hr=new or(Cr.buffer),Lr=Gr.HIGH,Mr=Gr.LOW;function Wr(r,n){return Hr[Lr]=r,Hr[Mr]=n,Cr[0]}var Rr,Zr,qr=Math.floor,Xr=1023;!0===wr?(Rr=1,Zr=0):(Rr=0,Zr=1);var Yr={HIGH:Rr,LOW:Zr},zr=new sr(1),Br=new or(zr.buffer),Dr=Yr.HIGH,Jr=Yr.LOW;function Kr(r,n,t,e){return zr[0]=r,n[e]=Br[Dr],n[e+t]=Br[Jr],n}function Qr(r){return Kr(r,[0,0],1,0)}M(Qr,"assign",Kr);var rn=[0,0];function nn(r,n){var t,e;return Qr.assign(r,rn,1,0),t=rn[0],t&=Tr,e=kr(n),Wr(t|=e&=2147483648,rn[1])}function tn(r){return Math.abs(r)}function en(r,n,t,e){return W(r)||X(r)?(n[e]=r,n[e+t]=0,n):0!==r&&tn(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}M((function(r){return en(r,[0,0],1,0)}),"assign",en);var on=[0,0],un=[0,0];function an(r,n){var t,e;return 0===n||0===r||W(r)||X(r)?r:(en(r,on,1,0),n+=on[1],n+=function(r){var n=kr(r);return(n=(n&Fr)>>>20)-Xr|0}(r=on[0]),n<-1074?nn(0,r):n>1023?r<0?q:R:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Qr.assign(r,un,1,0),t=un[0],t&=2148532223,e*Wr(t|=n+Xr<<20,un[1])))}function fn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var cn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],sn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ln=16777216,pn=5.960464477539063e-8,yn=fn(20),vn=fn(20),hn=fn(20),gn=fn(20);function dn(r,n,t,e,i,o,u,a,f){var c,s,l,p,y,v,h,g,d;for(p=o,d=e[t],g=t,y=0;g>0;y++)s=pn*d|0,gn[y]=d-ln*s|0,d=e[g-1]+s,g-=1;if(d=an(d,i),d-=8*qr(.125*d),d-=h=0|d,l=0,i>0?(h+=y=gn[t-1]>>24-i,gn[t-1]-=y<<24-i,l=gn[t-1]>>23-i):0===i?l=gn[t-1]>>23:d>=.5&&(l=2),l>0){for(h+=1,c=0,y=0;y<t;y++)g=gn[y],0===c?0!==g&&(c=1,gn[y]=16777216-g):gn[y]=16777215-g;if(i>0)switch(i){case 1:gn[t-1]&=8388607;break;case 2:gn[t-1]&=4194303}2===l&&(d=1-d,0!==c&&(d-=an(1,i)))}if(0===d){for(g=0,y=t-1;y>=o;y--)g|=gn[y];if(0===g){for(v=1;0===gn[o-v];v++);for(y=t+1;y<=t+v;y++){for(f[a+y]=cn[u+y],s=0,g=0;g<=a;g++)s+=r[g]*f[a+(y-g)];e[y]=s}return dn(r,n,t+=v,e,i,o,u,a,f)}}if(0===d)for(t-=1,i-=24;0===gn[t];)t-=1,i-=24;else(d=an(d,-i))>=ln?(s=pn*d|0,gn[t]=d-ln*s|0,i+=24,gn[t+=1]=s):gn[t]=0|d;for(s=an(1,i),y=t;y>=0;y--)e[y]=s*gn[y],s*=pn;for(y=t;y>=0;y--){for(s=0,v=0;v<=p&&v<=t-y;v++)s+=sn[v]*e[y+v];hn[t-y]=s}for(s=0,y=t;y>=0;y--)s+=hn[y];for(n[0]=0===l?s:-s,s=hn[0]-s,y=1;y<=t;y++)s+=hn[y];return n[1]=0===l?s:-s,7&h}function Nn(r,n,t,e){var i,o,u,a,f,c,s;for((o=(t-3)/24|0)<0&&(o=0),a=t-24*(o+1),c=o-(u=e-1),s=u+4,f=0;f<=s;f++)yn[f]=c<0?0:cn[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=r[c]*yn[u+(f-c)];vn[f]=i}return dn(r,n,4,vn,a,4,o,u,yn)}var bn=Math.round;function mn(r,n,t){var e,i,o,u,a;return o=r-1.5707963267341256*(e=bn(.6366197723675814*r)),u=6077100506506192e-26*e,a=n>>20|0,t[0]=o-u,a-(kr(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((i=o)-(o=i-(u=6077100506303966e-26*e))-u),t[0]=o-u,a-(kr(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((i=o)-(o=i-(u=20222662487111665e-37*e))-u),t[0]=o-u)),t[1]=o-t[0]-u,e}var wn=1.5707963267341256,An=6077100506506192e-26,_n=2*An,En=3*An,kn=4*An,Sn=[0,0,0],Un=[0,0];function jn(r,n){var t,e,i,o,u,a,f;if((i=kr(r)&Tr|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(i&Or)?mn(r,i,n):i<=1073928572?r>0?(f=r-wn,n[0]=f-An,n[1]=f-n[0]-An,1):(f=r+wn,n[0]=f+An,n[1]=f-n[0]+An,-1):r>0?(f=r-2*wn,n[0]=f-_n,n[1]=f-n[0]-_n,2):(f=r+2*wn,n[0]=f+_n,n[1]=f-n[0]+_n,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?mn(r,i,n):r>0?(f=r-3*wn,n[0]=f-En,n[1]=f-n[0]-En,3):(f=r+3*wn,n[0]=f+En,n[1]=f-n[0]+En,-3):1075388923===i?mn(r,i,n):r>0?(f=r-4*wn,n[0]=f-kn,n[1]=f-n[0]-kn,4):(f=r+4*wn,n[0]=f+kn,n[1]=f-n[0]+kn,-4);if(i<1094263291)return mn(r,i,n);if(i>=Fr)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Pr[0]=r,$r[Vr]}(r),f=Wr(i-((e=(i>>20)-1046)<<20|0),t),u=0;u<2;u++)Sn[u]=0|f,f=16777216*(f-Sn[u]);for(Sn[2]=f,o=3;0===Sn[o-1];)o-=1;return a=Nn(Sn,Un,e,o),r<0?(n[0]=-Un[0],n[1]=-Un[1],-a):(n[0]=Un[0],n[1]=Un[1],a)}var In=[0,0];function xn(r){var n;if(n=kr(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Sr(r,0);if(n>=2146435072)return NaN;switch(3&jn(r,In)){case 0:return Sr(In[0],In[1]);case 1:return-jr(In[0],In[1]);case 2:return-Sr(In[0],In[1]);default:return jr(In[0],In[1])}}var Tn=[0,0];function Fn(r){var n;if(n=kr(r),(n&=Tr)<=1072243195)return n<1045430272?r:jr(r,0);if(n>=Fr)return NaN;switch(3&jn(r,Tn)){case 0:return jr(Tn[0],Tn[1]);case 1:return Sr(Tn[0],Tn[1]);case 2:return-jr(Tn[0],Tn[1]);default:return-Sr(Tn[0],Tn[1])}}var On=3.141592653589793;function Vn(r){var n,t;return W(r)||X(r)?NaN:0===(n=tn(t=r%2))||1===n?nn(0,t):n<.25?Fn(On*t):n<.75?nn(xn(On*(n=.5-n)),t):n<1.25?(t=nn(1,t)-t,Fn(On*t)):n<1.75?-nn(xn(On*(n-=1.5)),t):(t-=nn(2,t),Fn(On*t))}function Pn(r,n,t){var e;return W(r)||W(n)||W(t)||t<0?NaN:0===t?r<n?0:1:r<n-t?0:r>n+t?1:(1+(e=(r-n)/t)+Vn(e)/On)/2}function $n(r){return function(){return r}}function Gn(r){return W(r)?$n(NaN):function(n){return W(n)?NaN:n<r?0:1}}function Cn(r,n,t){H(r,n,{configurable:!1,enumerable:!1,get:t})}function Hn(r){return"number"==typeof r}M((function(r,n){return W(r)||W(n)?NaN:r<n?0:1}),"factory",Gn),M(Pn,"factory",(function(r,n){return W(r)||W(n)||n<0?$n(NaN):0===n?Gn(r):function(t){var e;return W(t)?NaN:t<r-n?0:t>r+n?1:(1+(e=(t-r)/n)+Vn(e)/On)/2}}));var Ln=Z.prototype.toString,Mn=z();function Wn(r){return"object"==typeof r&&(r instanceof Z||(Mn?function(r){try{return Ln.call(r),!0}catch(r){return!1}}(r):"[object Number]"===rr(r)))}function Rn(r){return Hn(r)||Wn(r)}function Zn(r){return Hn(r)&&r>0}function qn(r){return Wn(r)&&r.valueOf()>0}function Xn(r){return Zn(r)||qn(r)}function Yn(r){return Hn(r)&&W(r)}function zn(r){return Wn(r)&&W(r.valueOf())}function Bn(r){return Yn(r)||zn(r)}function Dn(r){return qr(r)===r}function Jn(r){return Dn(r/2)}function Kn(r){return Jn(r>0?r-1:r+1)}M(Rn,"isPrimitive",Hn),M(Rn,"isObject",Wn),M(Xn,"isPrimitive",Zn),M(Xn,"isObject",qn),M(Bn,"isPrimitive",Yn),M(Bn,"isObject",zn);var Qn=Math.sqrt,rt=!0===wr?0:1,nt=new sr(1),tt=new or(nt.buffer);function et(r,n){return nt[0]=r,tt[rt]=n>>>0,nt[0]}function it(r){return 0|r}var ot=!0===wr?1:0,ut=new sr(1),at=new or(ut.buffer);function ft(r,n){return ut[0]=r,at[ot]=n>>>0,ut[0]}var ct=1048576,st=[1,1.5],lt=[0,.5849624872207642],pt=[0,1.350039202129749e-8],yt=.6931471805599453,vt=1048576,ht=1083179008,gt=1e300,dt=1e-300,Nt=[0,0],bt=[0,0];function mt(r,n){var t,e,i,o,u,a,f,c,s,l,p,y,v,h;if(W(r)||W(n))return NaN;if(Qr.assign(n,Nt,1,0),u=Nt[0],0===Nt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Qn(r);if(-.5===n)return 1/Qn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(X(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:tn(r)<1==(n===R)?0:R}(r,n)}if(Qr.assign(r,Nt,1,0),o=Nt[0],0===Nt[1]){if(0===o)return function(r,n){return n===q?R:n===R?0:n>0?Kn(n)?r:0:Kn(n)?nn(R,r):R}(r,n);if(1===r)return 1;if(-1===r&&Kn(n))return-1;if(X(r))return r===q?mt(-0,-n):n<0?0:R}if(r<0&&!1===Dn(n))return(r-r)/(r-r);if(i=tn(r),t=o&Tr|0,e=u&Tr|0,f=u>>>31|0,a=(a=o>>>31|0)&&Kn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(kr(r)&Tr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?a*gt*gt:a*dt*dt;if(t>1072693248)return 0===f?a*gt*gt:a*dt*dt;p=function(r,n){var t,e,i,o,u,a;return t=(u=1.9259629911266175e-8*(i=n-1)-i*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=et(e=(o=1.4426950216293335*i)+u,0))-o),r[0]=e,r[1]=t,r}(bt,i)}else p=function(r,n,t){var e,i,o,u,a,f,c,s,l,p,y,v,h,g,d,N,b,m,w,A,_;return m=0,t<ct&&(m-=53,t=kr(n*=9007199254740992)),m+=(t>>20)-Xr|0,t=1072693248|(w=1048575&t|0),w<=235662?A=0:w<767610?A=1:(A=0,m+=1,t-=ct),u=et(i=(N=(n=ft(n,t))-(c=st[A]))*(b=1/(n+c)),0),e=524288+(t>>1|536870912),f=ft(0,e+=A<<18),d=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=et(f=3+(o=u*u)+(d+=(a=b*(N-u*f-u*(n-(f-c))))*(u+i)),0),h=(y=-7.028461650952758e-9*(l=et(l=(N=u*f)+(b=a*f+(d-(f-3-o))*i),0))+.9617966939259756*(b-(l-N))+pt[A])-((v=et(v=(p=.9617967009544373*l)+y+(s=lt[A])+(g=m),0))-g-s-p),r[0]=v,r[1]=h,r}(bt,i,t);if(y=(l=(n-(c=et(n,0)))*p[0]+n*p[1])+(s=c*p[0]),Qr.assign(y,Nt,1,0),v=it(Nt[0]),h=it(Nt[1]),v>=ht){if(0!=(v-ht|h))return a*gt*gt;if(l+8008566259537294e-32>y-s)return a*gt*gt}else if((v&Tr)>=1083231232){if(0!=(v-3230714880|h))return a*dt*dt;if(l<=y-s)return a*dt*dt}return y=function(r,n,t){var e,i,o,u,a,f,c,s,l,p;return l=((s=r&Tr|0)>>20)-Xr|0,c=0,s>1071644672&&(i=ft(0,((c=r+(vt>>l+1)>>>0)&~(Or>>(l=((c&Tr)>>20)-Xr|0)))>>>0),c=(c&Or|vt)>>20-l>>>0,r<0&&(c=-c),n-=i),r=it(r=kr(f=1-((f=(o=.6931471824645996*(i=et(i=t+n,0)))+(u=(t-(i-n))*yt+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((a=u-(f-o))+f*a)-f))),(r+=c<<20>>>0)>>20<=0?an(f,c):ft(f,r)}(v,s,l),a*y}var wt=9.869604401089358;function At(r,n){var t;return W(r)||W(n)||n<=0?NaN:(t=-44.45454620401458,t/=5*mt(wt-6,2))}function _t(r,n){return W(r)||W(n)||n<=0?NaN:r}function Et(r,n){return W(r)||W(n)||n<=0?NaN:r}function kt(r,n){return W(r)||W(n)||n<=0?NaN:r}function St(r,n){return W(r)||W(n)||n<=0?NaN:0}function Ut(r,n){return W(r)||W(n)||n<=0?NaN:n*Qn(1/3-2/wt)}function jt(r,n){return W(r)||W(n)||n<=0?NaN:n*n*(1/3-2/wt)}var It=.6931471803691238,xt=1.9082149292705877e-10,Tt=1048575;function Ft(r){var n,t,e,i,o,u,a,f,c,s,l,p;return 0===r?q:W(r)||r<0?NaN:(o=0,(t=kr(r))<1048576&&(o-=54,t=kr(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-Xr|0,o+=(f=614244+(t&=Tt)&1048576|0)>>20|0,a=(r=ft(r,t|1072693248^f))-1,(Tt&2+t)<3?0===a?0===o?0:o*It+o*xt:(u=a*a*(.5-.3333333333333333*a),0===o?a-u:o*It-(u-o*xt-a)):(f=t-398458|0,c=440401-t|0,i=(l=(p=(s=a/(2+a))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),u=e+i,(f|=c)>0?(n=.5*a*a,0===o?a-(n-s*(n+u)):o*It-(n-(s*(n+u)+o*xt)-a)):0===o?a-s*(a-u):o*It-(s*(a-u)-o*xt-a))))}function Ot(r,n,t){var e;return W(r)||W(n)||W(t)||t<0?NaN:0===t?r<n?q:0:r<n-t?q:r>n+t?0:Ft((1+(e=(r-n)/t)+Vn(e)/On)/2)}function Vt(r){return W(r)?$n(NaN):function(n){return W(n)?NaN:n<r?q:0}}function Pt(r){var n,t,e,i;return W(r)||X(r)?NaN:(n=tn(r))>9007199254740992?1:.5==(e=n-(t=qr(n)))?0:(i=e<.25?xn(On*e):e<.75?Fn(On*(e=.5-e)):-xn(On*(e=1-e)),t%2==1?-i:i)}function $t(r,n,t){return W(r)||W(n)||W(t)||t<0?NaN:0===t?r===n?R:q:r<n-t||r>n+t?q:Ft(1+Pt((r-n)/t))-Ft(2*t)}function Gt(r){return W(r)?$n(NaN):function(n){return W(n)?NaN:n===r?R:q}}M((function(r,n){return W(r)||W(n)?NaN:r<n?q:0}),"factory",Vt),M(Ot,"factory",(function(r,n){return W(r)||W(n)||n<0?$n(NaN):0===n?Vt(r):function(t){var e;return W(t)?NaN:t<r-n?q:t>r+n?0:Ft((1+(e=(t-r)/n)+Vn(e)/On)/2)}})),M((function(r,n){return W(r)||W(n)?NaN:r===n?R:q}),"factory",Gt),M($t,"factory",(function(r,n){return W(r)||W(n)||n<0?$n(NaN):0===n?Gt(r):function(t){return W(t)?NaN:t<r-n||t>r+n?q:Ft(1+Pt((t-r)/n))-Ft(2*n)}}));var Ct=Math.ceil;function Ht(r){return r<0?Ct(r):qr(r)}var Lt=1.4426950408889634,Mt=1/(1<<28);function Wt(r){var n;return W(r)||r===R?r:r===q?0:r>709.782712893384?R:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Mt?1+r:function(r,n,t){var e,i,o,u;return an(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=Ht(r<0?Lt*r-.5:Lt*r+.5)),1.9082149292705877e-10*n,n)}function Rt(r){var n;return 0===r?r:r>710.4758600739439||r<-709.089565712824?r>0?R:q:(n=tn(r))>1?n>=709.0895657128241?(n=Wt(.5*n),n*=.5*n,r<0&&(n=-n),n):(n=.5*(n=Wt(n))-.5/n,r<0&&(n=-n),n):r+r*(n*=n)*function(r){var n,t;return 0===r?.16666666666666666:((r<0?-r:r)<=1?(n=r*(r*(-.789474443963537*r-163.72585752598383)-11561.443576500522)-351754.9648081514,t=r*(36157.827983443196+r*(1*r-277.7110814206028))-2110529.7888489086):(n=(r=1/r)*(r*(-351754.9648081514*r-11561.443576500522)-163.72585752598383)-.789474443963537,t=1+r*(r*(36157.827983443196+-2110529.7888489086*r)-277.7110814206028)),n/t)}(n)}function Zt(r,n,t){var e,i;return W(r)||W(n)||W(t)||t<=0?NaN:(e=wt*Rt(i=t*r),e/=i*(wt+i*i),e*=Wt(n*r))}function qt(r,n,t){return W(r)||W(n)||W(t)||t<0?NaN:0===t?r===n?R:0:r<n-t||r>n+t?0:(1+Pt((r-n)/t))/(2*t)}function Xt(r){return W(r)?$n(NaN):function(n){return W(n)?NaN:n===r?R:0}}function Yt(r,n,t){var e,i,o,u;for(u=1,e=n-t,i=n+t;u<1e4;){if(o=(e+i)/2,i-e<1e-12)return o;r>Pn(o,n,t)?e=o:i=o,u+=1}return o}function zt(r,n,t){return W(n)||W(t)||W(r)||t<0||r<0||r>1?NaN:0===t?n:Yt(r,n,t)}function Bt(r){return W(r)?$n(NaN):function(n){return W(n)||n<0||n>1?NaN:r}}function Dt(){var r,n;if(!(this instanceof Dt))return 0===arguments.length?new Dt:new Dt(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!Hn(r=arguments[0])||Bn(r))throw new TypeError(F("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!Zn(n))throw new TypeError(F("invalid argument. Scale parameter must be a positive number. Value: `%s`.",n))}else r=0,n=1;return H(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Hn(n)||Bn(n))throw new TypeError(F("invalid assignment. Must be a number. Value: `%s`.",n));r=n}}),H(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!Zn(r))throw new TypeError(F("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}M(Zt,"factory",(function(r,n){return W(r)||W(n)||n<=0?$n(NaN):function(t){var e,i;return W(t)?NaN:(e=wt*Rt(i=n*t),e/=i*(wt+i*i),e*=Wt(r*t))}})),M((function(r,n){return W(r)||W(n)?NaN:r===n?R:0}),"factory",Xt),M(qt,"factory",(function(r,n){return W(r)||W(n)||n<0?$n(NaN):0===n?Xt(r):function(t){return W(t)?NaN:t<r-n||t>r+n?0:(1+Pt((t-r)/n))/(2*n)}})),M((function(r,n){return W(r)||r<0||r>1?NaN:n}),"factory",Bt),M(zt,"factory",(function(r,n){return W(r)||W(n)||n<0?$n(NaN):0===n?Bt(r):function(t){return W(t)||t<0||t>1?NaN:Yt(t,r,n)}})),Cn(Dt.prototype,"kurtosis",(function(){return At(this.mu,this.s)})),Cn(Dt.prototype,"mean",(function(){return _t(this.mu,this.s)})),Cn(Dt.prototype,"median",(function(){return Et(this.mu,this.s)})),Cn(Dt.prototype,"mode",(function(){return kt(this.mu,this.s)})),Cn(Dt.prototype,"skewness",(function(){return St(this.mu,this.s)})),Cn(Dt.prototype,"stdev",(function(){return Ut(this.mu,this.s)})),Cn(Dt.prototype,"variance",(function(){return jt(this.mu,this.s)})),M(Dt.prototype,"cdf",(function(r){return Pn(r,this.mu,this.s)})),M(Dt.prototype,"logcdf",(function(r){return Ot(r,this.mu,this.s)})),M(Dt.prototype,"logpdf",(function(r){return $t(r,this.mu,this.s)})),M(Dt.prototype,"mgf",(function(r){return Zt(r,this.mu,this.s)})),M(Dt.prototype,"pdf",(function(r){return qt(r,this.mu,this.s)})),M(Dt.prototype,"quantile",(function(r){return zt(r,this.mu,this.s)}));var Jt={};return L(Jt,"cdf",Pn),L(Jt,"Cosine",Dt),L(Jt,"kurtosis",At),L(Jt,"logcdf",Ot),L(Jt,"logpdf",$t),L(Jt,"mean",_t),L(Jt,"median",Et),L(Jt,"mgf",Zt),L(Jt,"mode",kt),L(Jt,"pdf",qt),L(Jt,"quantile",zt),L(Jt,"skewness",St),L(Jt,"stdev",Ut),L(Jt,"variance",jt),Jt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).cosine=n();
//# sourceMappingURL=index.js.map
