// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,i=e.toString,o=e.__defineGetter__,u=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,n,t.get),p&&u&&u.call(r,n,t.set),r};function s(r,n,t){c(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(r){return r!=r}var y=Number.POSITIVE_INFINITY,v=Number,h=v.NEGATIVE_INFINITY;function d(r){return r===y||r===h}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return g&&"symbol"==typeof Symbol.toStringTag}var m,b=Object.prototype.toString,w=Object.prototype.hasOwnProperty,A="function"==typeof Symbol?Symbol.toStringTag:"",_=N()?function(r){var n,t,e,i,o;if(null==r)return b.call(r);t=r[A],o=A,n=null!=(i=r)&&w.call(i,o);try{r[A]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[A]=t:delete r[A],e}:function(r){return b.call(r)},E="function"==typeof Uint32Array,k="function"==typeof Uint32Array?Uint32Array:null,j="function"==typeof Uint32Array?Uint32Array:void 0;m=function(){var r,n,t;if("function"!=typeof k)return!1;try{n=new k(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(E&&t instanceof Uint32Array||"[object Uint32Array]"===_(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var S,U=m,x="function"==typeof Float64Array,I="function"==typeof Float64Array?Float64Array:null,T="function"==typeof Float64Array?Float64Array:void 0;S=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I([1,3.14,-3.14,NaN]),t=n,r=(x&&t instanceof Float64Array||"[object Float64Array]"===_(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var O,F=S,V="function"==typeof Uint8Array,P="function"==typeof Uint8Array?Uint8Array:null,$="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),t=n,r=(V&&t instanceof Uint8Array||"[object Uint8Array]"===_(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?$:function(){throw new Error("not implemented")};var C,G=O,M="function"==typeof Uint16Array,H="function"==typeof Uint16Array?Uint16Array:null,L="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,65536,65537]),t=n,r=(M&&t instanceof Uint16Array||"[object Uint16Array]"===_(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var W,R={uint16:C,uint8:G};(W=new R.uint16(1))[0]=4660;var Z=52===new R.uint8(W.buffer)[0],q=!0===Z?1:0,X=new F(1),Y=new U(X.buffer);function z(r){return X[0]=r,Y[q]}function B(r,n){var t,e,i,o;return i=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*e-r*n))}var D=-.16666666666666632;function J(r,n){var t,e,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),e=i*r,0===n?r+e*(D+i*t):r-(i*(.5*n-e*t)-n-e*D)}var K,Q,rr=!0===Z?0:1,nr=new F(1),tr=new U(nr.buffer);!0===Z?(K=1,Q=0):(K=0,Q=1);var er={HIGH:K,LOW:Q},ir=new F(1),or=new U(ir.buffer),ur=er.HIGH,ar=er.LOW;function fr(r,n){return or[ur]=r,or[ar]=n,ir[0]}var cr,sr,lr=Math.floor,pr=1023;!0===Z?(cr=1,sr=0):(cr=0,sr=1);var yr={HIGH:cr,LOW:sr},vr=new F(1),hr=new U(vr.buffer),dr=yr.HIGH,gr=yr.LOW;function Nr(r,n){return vr[0]=n,r[0]=hr[dr],r[1]=hr[gr],r}function mr(r,n){return 1===arguments.length?Nr([0,0],r):Nr(r,n)}var br=[0,0];function wr(r,n){var t,e;return mr(br,r),t=br[0],t&=2147483647,e=z(n),fr(t|=e&=2147483648,br[1])}function Ar(r){return Math.abs(r)}function _r(r,n){return p(n)||d(n)?(r[0]=n,r[1]=0,r):0!==n&&Ar(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Er=[0,0],kr=[0,0];function jr(r,n){var t,e;return 0===n||0===r||p(r)||d(r)?r:(function(r,n){1===arguments.length?_r([0,0],r):_r(r,n)}(Er,r),n+=Er[1],n+=function(r){var n=z(r);return(n=(2146435072&n)>>>20)-pr|0}(r=Er[0]),n<-1074?wr(0,r):n>1023?r<0?h:y:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,mr(kr,r),t=kr[0],t&=2148532223,e*fr(t|=n+pr<<20,kr[1])))}function Sr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ur=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],xr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ir=16777216,Tr=5.960464477539063e-8,Or=Sr(20),Fr=Sr(20),Vr=Sr(20),Pr=Sr(20);function $r(r,n,t,e,i,o,u,a,f){var c,s,l,p,y,v,h,d,g;for(p=o,g=e[t],d=t,y=0;d>0;y++)s=Tr*g|0,Pr[y]=g-Ir*s|0,g=e[d-1]+s,d-=1;if(g=jr(g,i),g-=8*lr(.125*g),g-=h=0|g,l=0,i>0?(h+=y=Pr[t-1]>>24-i,Pr[t-1]-=y<<24-i,l=Pr[t-1]>>23-i):0===i?l=Pr[t-1]>>23:g>=.5&&(l=2),l>0){for(h+=1,c=0,y=0;y<t;y++)d=Pr[y],0===c?0!==d&&(c=1,Pr[y]=16777216-d):Pr[y]=16777215-d;if(i>0)switch(i){case 1:Pr[t-1]&=8388607;break;case 2:Pr[t-1]&=4194303}2===l&&(g=1-g,0!==c&&(g-=jr(1,i)))}if(0===g){for(d=0,y=t-1;y>=o;y--)d|=Pr[y];if(0===d){for(v=1;0===Pr[o-v];v++);for(y=t+1;y<=t+v;y++){for(f[a+y]=Ur[u+y],s=0,d=0;d<=a;d++)s+=r[d]*f[a+(y-d)];e[y]=s}return $r(r,n,t+=v,e,i,o,u,a,f)}}if(0===g)for(t-=1,i-=24;0===Pr[t];)t-=1,i-=24;else(g=jr(g,-i))>=Ir?(s=Tr*g|0,Pr[t]=g-Ir*s|0,i+=24,Pr[t+=1]=s):Pr[t]=0|g;for(s=jr(1,i),y=t;y>=0;y--)e[y]=s*Pr[y],s*=Tr;for(y=t;y>=0;y--){for(s=0,v=0;v<=p&&v<=t-y;v++)s+=xr[v]*e[y+v];Vr[t-y]=s}for(s=0,y=t;y>=0;y--)s+=Vr[y];for(n[0]=0===l?s:-s,s=Vr[0]-s,y=1;y<=t;y++)s+=Vr[y];return n[1]=0===l?s:-s,7&h}function Cr(r,n,t,e){var i,o,u,a,f,c,s;for((o=(t-3)/24|0)<0&&(o=0),a=t-24*(o+1),c=o-(u=e-1),s=u+4,f=0;f<=s;f++)Or[f]=c<0?0:Ur[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=r[c]*Or[u+(f-c)];Fr[f]=i}return $r(r,n,4,Fr,a,4,o,u,Or)}var Gr=Math.round;function Mr(r,n,t){var e,i,o,u,a;return o=r-1.5707963267341256*(e=Gr(.6366197723675814*r)),u=6077100506506192e-26*e,a=n>>20|0,t[0]=o-u,a-(z(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((i=o)-(o=i-(u=6077100506303966e-26*e))-u),t[0]=o-u,a-(z(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((i=o)-(o=i-(u=20222662487111665e-37*e))-u),t[0]=o-u)),t[1]=o-t[0]-u,e}var Hr=1.5707963267341256,Lr=6077100506506192e-26,Wr=2*Lr,Rr=3*Lr,Zr=4*Lr,qr=[0,0,0],Xr=[0,0];function Yr(r,n){var t,e,i,o,u,a,f;if((i=2147483647&z(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?Mr(r,i,n):i<=1073928572?r>0?(f=r-Hr,n[0]=f-Lr,n[1]=f-n[0]-Lr,1):(f=r+Hr,n[0]=f+Lr,n[1]=f-n[0]+Lr,-1):r>0?(f=r-2*Hr,n[0]=f-Wr,n[1]=f-n[0]-Wr,2):(f=r+2*Hr,n[0]=f+Wr,n[1]=f-n[0]+Wr,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?Mr(r,i,n):r>0?(f=r-3*Hr,n[0]=f-Rr,n[1]=f-n[0]-Rr,3):(f=r+3*Hr,n[0]=f+Rr,n[1]=f-n[0]+Rr,-3):1075388923===i?Mr(r,i,n):r>0?(f=r-4*Hr,n[0]=f-Zr,n[1]=f-n[0]-Zr,4):(f=r+4*Hr,n[0]=f+Zr,n[1]=f-n[0]+Zr,-4);if(i<1094263291)return Mr(r,i,n);if(i>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return nr[0]=r,tr[rr]}(r),f=fr(i-((e=(i>>20)-1046)<<20|0),t),u=0;u<2;u++)qr[u]=0|f,f=16777216*(f-qr[u]);for(qr[2]=f,o=3;0===qr[o-1];)o-=1;return a=Cr(qr,Xr,e,o),r<0?(n[0]=-Xr[0],n[1]=-Xr[1],-a):(n[0]=Xr[0],n[1]=Xr[1],a)}var zr=[0,0];function Br(r){var n;if(n=z(r),(n&=2147483647)<=1072243195)return n<1044381696?1:B(r,0);if(n>=2146435072)return NaN;switch(3&Yr(r,zr)){case 0:return B(zr[0],zr[1]);case 1:return-J(zr[0],zr[1]);case 2:return-B(zr[0],zr[1]);default:return J(zr[0],zr[1])}}var Dr=[0,0];function Jr(r){var n;if(n=z(r),(n&=2147483647)<=1072243195)return n<1045430272?r:J(r,0);if(n>=2146435072)return NaN;switch(3&Yr(r,Dr)){case 0:return J(Dr[0],Dr[1]);case 1:return B(Dr[0],Dr[1]);case 2:return-J(Dr[0],Dr[1]);default:return-B(Dr[0],Dr[1])}}var Kr=3.141592653589793;function Qr(r){var n,t;return p(r)||d(r)?NaN:0===(n=Ar(t=r%2))||1===n?wr(0,t):n<.25?Jr(Kr*t):n<.75?wr(Br(Kr*(n=.5-n)),t):n<1.25?(t=wr(1,t)-t,Jr(Kr*t)):n<1.75?-wr(Br(Kr*(n-=1.5)),t):(t-=wr(2,t),Jr(Kr*t))}function rn(r,n,t){var e;return p(r)||p(n)||p(t)||t<0?NaN:0===t?r<n?0:1:r<n-t?0:r>n+t?1:(1+(e=(r-n)/t)+Qr(e)/Kr)/2}function nn(r){return function(){return r}}function tn(r){return p(r)?nn(NaN):function(n){return p(n)?NaN:n<r?0:1}}function en(r,n,t){c(r,n,{configurable:!1,enumerable:!1,get:t})}function on(r){return"number"==typeof r}l((function(r,n){return p(r)||p(n)?NaN:r<n?0:1}),"factory",tn),l(rn,"factory",(function(r,n){return p(r)||p(n)||n<0?nn(NaN):0===n?tn(r):function(t){var e;return p(t)?NaN:t<r-n?0:t>r+n?1:(1+(e=(t-r)/n)+Qr(e)/Kr)/2}}));var un=v.prototype.toString,an=N();function fn(r){return"object"==typeof r&&(r instanceof v||(an?function(r){try{return un.call(r),!0}catch(r){return!1}}(r):"[object Number]"===_(r)))}function cn(r){return on(r)||fn(r)}function sn(r){return on(r)&&r>0}function ln(r){return fn(r)&&r.valueOf()>0}function pn(r){return sn(r)||ln(r)}function yn(r){return on(r)&&p(r)}function vn(r){return fn(r)&&p(r.valueOf())}function hn(r){return yn(r)||vn(r)}function dn(r){return lr(r)===r}function gn(r){return dn(r/2)}function Nn(r){return gn(r>0?r-1:r+1)}l(cn,"isPrimitive",on),l(cn,"isObject",fn),l(pn,"isPrimitive",sn),l(pn,"isObject",ln),l(hn,"isPrimitive",yn),l(hn,"isObject",vn);var mn=Math.sqrt,bn=!0===Z?0:1,wn=new F(1),An=new U(wn.buffer);function _n(r,n){return wn[0]=r,An[bn]=n>>>0,wn[0]}function En(r){return 0|r}var kn=!0===Z?1:0,jn=new F(1),Sn=new U(jn.buffer);function Un(r,n){return jn[0]=r,Sn[kn]=n>>>0,jn[0]}var xn=1048576,In=[1,1.5],Tn=[0,.5849624872207642],On=[0,1.350039202129749e-8],Fn=.6931471805599453,Vn=2147483647,Pn=1048575,$n=1048576,Cn=2147483647,Gn=1083179008,Mn=1e300,Hn=1e-300,Ln=[0,0],Wn=[0,0];function Rn(r,n){var t,e,i,o,u,a,f,c,s,l,v,g,N,m;if(p(r)||p(n))return NaN;if(mr(Ln,n),u=Ln[0],0===Ln[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return mn(r);if(-.5===n)return 1/mn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(d(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Ar(r)<1==(n===y)?0:y}(r,n)}if(mr(Ln,r),o=Ln[0],0===Ln[1]){if(0===o)return function(r,n){return n===h?y:n===y?0:n>0?Nn(n)?r:0:Nn(n)?wr(y,r):y}(r,n);if(1===r)return 1;if(-1===r&&Nn(n))return-1;if(d(r))return r===h?Rn(-0,-n):n<0?0:y}if(r<0&&!1===dn(n))return(r-r)/(r-r);if(i=Ar(r),t=o&Cn|0,e=u&Cn|0,f=u>>>31|0,a=(a=o>>>31|0)&&Nn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&z(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?a*Mn*Mn:a*Hn*Hn;if(t>1072693248)return 0===f?a*Mn*Mn:a*Hn*Hn;v=function(r,n){var t,e,i,o,u,a;return t=(u=1.9259629911266175e-8*(i=n-1)-i*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=_n(e=(o=1.4426950216293335*i)+u,0))-o),r[0]=e,r[1]=t,r}(Wn,i)}else v=function(r,n,t){var e,i,o,u,a,f,c,s,l,p,y,v,h,d,g,N,m,b,w,A,_;return b=0,t<xn&&(b-=53,t=z(n*=9007199254740992)),b+=(t>>20)-pr|0,t=1072693248|(w=1048575&t|0),w<=235662?A=0:w<767610?A=1:(A=0,b+=1,t-=xn),u=_n(i=(N=(n=Un(n,t))-(c=In[A]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),f=Un(0,e+=A<<18),g=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=_n(f=3+(o=u*u)+(g+=(a=m*(N-u*f-u*(n-(f-c))))*(u+i)),0),h=(y=-7.028461650952758e-9*(l=_n(l=(N=u*f)+(m=a*f+(g-(f-3-o))*i),0))+.9617966939259756*(m-(l-N))+On[A])-((v=_n(v=(p=.9617967009544373*l)+y+(s=Tn[A])+(d=b),0))-d-s-p),r[0]=v,r[1]=h,r}(Wn,i,t);if(l=(n-(c=_n(n,0)))*v[0]+n*v[1],s=c*v[0],mr(Ln,g=l+s),N=En(Ln[0]),m=En(Ln[1]),N>=Gn){if(0!=(N-Gn|m))return a*Mn*Mn;if(l+8008566259537294e-32>g-s)return a*Mn*Mn}else if((N&Cn)>=1083231232){if(0!=(N-3230714880|m))return a*Hn*Hn;if(l<=g-s)return a*Hn*Hn}return g=function(r,n,t){var e,i,o,u,a,f,c,s,l,p;return l=((s=r&Vn|0)>>20)-pr|0,c=0,s>1071644672&&(i=Un(0,((c=r+($n>>l+1)>>>0)&~(Pn>>(l=((c&Vn)>>20)-pr|0)))>>>0),c=(c&Pn|$n)>>20-l>>>0,r<0&&(c=-c),n-=i),r=En(r=z(f=1-((f=(o=.6931471824645996*(i=_n(i=t+n,0)))+(u=(t-(i-n))*Fn+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((a=u-(f-o))+f*a)-f))),(r+=c<<20>>>0)>>20<=0?jr(f,c):Un(f,r)}(N,s,l),a*g}var Zn=9.869604401089358;function qn(r,n){var t;return p(r)||p(n)||n<=0?NaN:(t=-44.45454620401458,t/=5*Rn(Zn-6,2))}function Xn(r,n){return p(r)||p(n)||n<=0?NaN:r}function Yn(r,n){return p(r)||p(n)||n<=0?NaN:r}function zn(r,n){return p(r)||p(n)||n<=0?NaN:r}function Bn(r,n){return p(r)||p(n)||n<=0?NaN:0}function Dn(r,n){return p(r)||p(n)||n<=0?NaN:n*mn(1/3-2/Zn)}function Jn(r,n){return p(r)||p(n)||n<=0?NaN:n*n*(1/3-2/Zn)}var Kn=.6931471803691238,Qn=1.9082149292705877e-10,rt=1048575;function nt(r){var n,t,e,i,o,u,a,f,c,s,l,y;return 0===r?h:p(r)||r<0?NaN:(o=0,(t=z(r))<1048576&&(o-=54,t=z(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-pr|0,o+=(f=614244+(t&=rt)&1048576|0)>>20|0,a=(r=Un(r,t|1072693248^f))-1,(rt&2+t)<3?0===a?0===o?0:o*Kn+o*Qn:(u=a*a*(.5-.3333333333333333*a),0===o?a-u:o*Kn-(u-o*Qn-a)):(f=t-398458|0,c=440401-t|0,i=(l=(y=(s=a/(2+a))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),u=e+i,(f|=c)>0?(n=.5*a*a,0===o?a-(n-s*(n+u)):o*Kn-(n-(s*(n+u)+o*Qn)-a)):0===o?a-s*(a-u):o*Kn-(s*(a-u)-o*Qn-a))))}function tt(r,n,t){var e;return p(r)||p(n)||p(t)||t<0?NaN:0===t?r<n?h:0:r<n-t?h:r>n+t?0:nt((1+(e=(r-n)/t)+Qr(e)/Kr)/2)}function et(r){return p(r)?nn(NaN):function(n){return p(n)?NaN:n<r?h:0}}function it(r){var n,t,e,i;return p(r)||d(r)?NaN:(n=Ar(r))>9007199254740992?1:.5==(e=n-(t=lr(n)))?0:(i=e<.25?Br(Kr*e):e<.75?Jr(Kr*(e=.5-e)):-Br(Kr*(e=1-e)),t%2==1?-i:i)}function ot(r,n,t){return p(r)||p(n)||p(t)||t<0?NaN:0===t?r===n?y:h:r<n-t||r>n+t?h:nt(1+it((r-n)/t))-nt(2*t)}function ut(r){return p(r)?nn(NaN):function(n){return p(n)?NaN:n===r?y:h}}l((function(r,n){return p(r)||p(n)?NaN:r<n?h:0}),"factory",et),l(tt,"factory",(function(r,n){return p(r)||p(n)||n<0?nn(NaN):0===n?et(r):function(t){var e;return p(t)?NaN:t<r-n?h:t>r+n?0:nt((1+(e=(t-r)/n)+Qr(e)/Kr)/2)}})),l((function(r,n){return p(r)||p(n)?NaN:r===n?y:h}),"factory",ut),l(ot,"factory",(function(r,n){return p(r)||p(n)||n<0?nn(NaN):0===n?ut(r):function(t){return p(t)?NaN:t<r-n||t>r+n?h:nt(1+it((t-r)/n))-nt(2*n)}}));var at=Math.ceil;function ft(r){return r<0?at(r):lr(r)}var ct=1.4426950408889634,st=1/(1<<28);function lt(r){var n;return p(r)||r===y?r:r===h?0:r>709.782712893384?y:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<st?1+r:function(r,n,t){var e,i,o,u;return jr(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=ft(r<0?ct*r-.5:ct*r+.5)),1.9082149292705877e-10*n,n)}function pt(r){var n;return 0===r?r:(n=Ar(r),r>710.4758600739439||r<-709.089565712824?r>0?y:h:n>1?n>=709.0895657128241?(n=lt(.5*n),n*=.5*n,r<0&&(n=-n),n):(n=.5*(n=lt(n))-.5/n,r<0&&(n=-n),n):r+r*(n*=n)*function(r){var n,t;return 0===r?.16666666666666666:((r<0?-r:r)<=1?(n=r*(r*(-.789474443963537*r-163.72585752598383)-11561.443576500522)-351754.9648081514,t=r*(36157.827983443196+r*(1*r-277.7110814206028))-2110529.7888489086):(n=(r=1/r)*(r*(-351754.9648081514*r-11561.443576500522)-163.72585752598383)-.789474443963537,t=1+r*(r*(36157.827983443196+-2110529.7888489086*r)-277.7110814206028)),n/t)}(n))}function yt(r,n,t){var e,i;return p(r)||p(n)||p(t)||t<=0?NaN:(e=Zn*pt(i=t*r),e/=i*(Zn+i*i),e*=lt(n*r))}function vt(r,n,t){return p(r)||p(n)||p(t)||t<0?NaN:0===t?r===n?y:0:r<n-t||r>n+t?0:(1+it((r-n)/t))/(2*t)}function ht(r){return p(r)?nn(NaN):function(n){return p(n)?NaN:n===r?y:0}}function dt(r,n,t){var e,i,o,u;for(u=1,e=n-t,i=n+t;u<1e4;){if(o=(e+i)/2,i-e<1e-12)return o;r>rn(o,n,t)?e=o:i=o,u+=1}return o}function gt(r,n,t){return p(n)||p(t)||p(r)||t<0||r<0||r>1?NaN:0===t?n:dt(r,n,t)}function Nt(r){return p(r)?nn(NaN):function(n){return p(n)||n<0||n>1?NaN:r}}function mt(r){return"number"==typeof r}function bt(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function wt(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+bt(i):bt(i)+r,e&&(r="-"+r)),r}l(yt,"factory",(function(r,n){return p(r)||p(n)||n<=0?nn(NaN):function(t){var e,i;return p(t)?NaN:(e=Zn*pt(i=n*t),e/=i*(Zn+i*i),e*=lt(r*t))}})),l((function(r,n){return p(r)||p(n)?NaN:r===n?y:0}),"factory",ht),l(vt,"factory",(function(r,n){return p(r)||p(n)||n<0?nn(NaN):0===n?ht(r):function(t){return p(t)?NaN:t<r-n||t>r+n?0:(1+it((t-r)/n))/(2*n)}})),l((function(r,n){return p(r)||r<0||r>1?NaN:n}),"factory",Nt),l(gt,"factory",(function(r,n){return p(r)||p(n)||n<0?nn(NaN):0===n?Nt(r):function(t){return p(t)||t<0||t>1?NaN:dt(t,r,n)}}));var At=String.prototype.toLowerCase,_t=String.prototype.toUpperCase;function Et(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!mt(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=wt(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=wt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===_t.call(r.specifier)?_t.call(t):At.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function kt(r){return"string"==typeof r}var jt=Math.abs,St=String.prototype.toLowerCase,Ut=String.prototype.toUpperCase,xt=String.prototype.replace,It=/e\+(\d)$/,Tt=/e-(\d)$/,Ot=/^(\d+)$/,Ft=/^(\d+)e/,Vt=/\.0$/,Pt=/\.0*e/,$t=/(\..*[^0])0*e/;function Ct(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!mt(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":jt(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=xt.call(t,$t,"$1e"),t=xt.call(t,Pt,"e"),t=xt.call(t,Vt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=xt.call(t,It,"e+0$1"),t=xt.call(t,Tt,"e-0$1"),r.alternate&&(t=xt.call(t,Ot,"$1."),t=xt.call(t,Ft,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Ut.call(r.specifier)?Ut.call(t):St.call(t)}function Gt(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function Mt(r,n,t){var e=n-r.length;return e<0?r:r=t?r+Gt(e):Gt(e)+r}var Ht=String.fromCharCode,Lt=isNaN,Wt=Array.isArray;function Rt(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function Zt(r){var n,t,e,i,o,u,a,f,c;if(!Wt(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",a=1,f=0;f<r.length;f++)if(kt(e=r[f]))u+=e;else{if(n=void 0!==e.precision,!(e=Rt(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(a=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[a],10),a+=1,Lt(e.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[a],10),a+=1,Lt(e.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[a],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=Et(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!Lt(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Lt(o)?String(e.arg):Ht(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=Ct(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=wt(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Mt(e.arg,e.width,e.padRight)),u+=e.arg||"",a+=1}return u}var qt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Xt(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function Yt(r){var n,t,e,i;for(t=[],i=0,e=qt.exec(r);e;)(n=r.slice(i,qt.lastIndex-e[0].length)).length&&t.push(n),t.push(Xt(e)),i=qt.lastIndex,e=qt.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function zt(r){return"string"==typeof r}function Bt(r){var n,t,e;if(!zt(r))throw new TypeError(Bt("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=Yt(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return Zt.apply(null,t)}function Dt(){var r,n;if(!(this instanceof Dt))return 0===arguments.length?new Dt:new Dt(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!on(r=arguments[0])||hn(r))throw new TypeError(Bt("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!sn(n))throw new TypeError(Bt("invalid argument. Scale parameter must be a positive number. Value: `%s`.",n))}else r=0,n=1;return c(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!on(n)||hn(n))throw new TypeError(Bt("invalid assignment. Must be a number. Value: `%s`.",n));r=n}}),c(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!sn(r))throw new TypeError(Bt("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}en(Dt.prototype,"kurtosis",(function(){return qn(this.mu,this.s)})),en(Dt.prototype,"mean",(function(){return Xn(this.mu,this.s)})),en(Dt.prototype,"median",(function(){return Yn(this.mu,this.s)})),en(Dt.prototype,"mode",(function(){return zn(this.mu,this.s)})),en(Dt.prototype,"skewness",(function(){return Bn(this.mu,this.s)})),en(Dt.prototype,"stdev",(function(){return Dn(this.mu,this.s)})),en(Dt.prototype,"variance",(function(){return Jn(this.mu,this.s)})),l(Dt.prototype,"cdf",(function(r){return rn(r,this.mu,this.s)})),l(Dt.prototype,"logcdf",(function(r){return tt(r,this.mu,this.s)})),l(Dt.prototype,"logpdf",(function(r){return ot(r,this.mu,this.s)})),l(Dt.prototype,"mgf",(function(r){return yt(r,this.mu,this.s)})),l(Dt.prototype,"pdf",(function(r){return vt(r,this.mu,this.s)})),l(Dt.prototype,"quantile",(function(r){return gt(r,this.mu,this.s)}));var Jt={};s(Jt,"cdf",rn),s(Jt,"Cosine",Dt),s(Jt,"kurtosis",qn),s(Jt,"logcdf",tt),s(Jt,"logpdf",ot),s(Jt,"mean",Xn),s(Jt,"median",Yn),s(Jt,"mgf",yt),s(Jt,"mode",zn),s(Jt,"pdf",vt),s(Jt,"quantile",gt),s(Jt,"skewness",Bn),s(Jt,"stdev",Dn),s(Jt,"variance",Jn),r.Cosine=Dt,r.cdf=rn,r.default=Jt,r.kurtosis=qn,r.logcdf=tt,r.logpdf=ot,r.mean=Xn,r.median=Yn,r.mgf=yt,r.mode=zn,r.pdf=vt,r.quantile=gt,r.skewness=Bn,r.stdev=Dn,r.variance=Jn,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).cosine={});
//# sourceMappingURL=browser.js.map
