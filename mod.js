// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,i=e.__defineGetter__,a=e.__defineSetter__,o=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,s,l;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(o.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),s="get"in t,l="set"in t,v&&(s||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,n,t.get),l&&a&&a.call(r,n,t.set),r},s=n()?c:v,l=s;var y=function(r,n,t){l(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})},N=s;var p=function(r,n,t){N(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var m=function(r){return r!=r},b=Number.POSITIVE_INFINITY,h=Number,w=h.NEGATIVE_INFINITY,d=b,g=w;var A=function(r){return r===d||r===g};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return _&&"symbol"==typeof Symbol.toStringTag},U=Object.prototype.toString,O=U;var E=function(r){return O.call(r)},S=Object.prototype.hasOwnProperty;var I=function(r,n){return null!=r&&S.call(r,n)},P="function"==typeof Symbol?Symbol.toStringTag:"",T=I,F=P,k=U;var H=E,V=function(r){var n,t,e;if(null==r)return k.call(r);t=r[F],n=T(r,F);try{r[F]=void 0}catch(n){return k.call(r)}return e=k.call(r),n?r[F]=t:delete r[F],e},G=j()?V:H,M=G,L="function"==typeof Uint32Array;var q="function"==typeof Uint32Array?Uint32Array:null,W=function(r){return L&&r instanceof Uint32Array||"[object Uint32Array]"===M(r)},x=q;var C=function(){var r,n;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,4294967296,4294967297]),r=W(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Y="function"==typeof Uint32Array?Uint32Array:void 0,z=function(){throw new Error("not implemented")},B=C()?Y:z,D=G,J="function"==typeof Float64Array;var K="function"==typeof Float64Array?Float64Array:null,Q=function(r){return J&&r instanceof Float64Array||"[object Float64Array]"===D(r)},R=K;var X=function(){var r,n;if("function"!=typeof R)return!1;try{n=new R([1,3.14,-3.14,NaN]),r=Q(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var Z="function"==typeof Float64Array?Float64Array:void 0,$=function(){throw new Error("not implemented")},rr=X()?Z:$,nr=G,tr="function"==typeof Uint8Array;var er="function"==typeof Uint8Array?Uint8Array:null,ur=function(r){return tr&&r instanceof Uint8Array||"[object Uint8Array]"===nr(r)},ir=er;var ar=function(){var r,n;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,256,257]),r=ur(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var or="function"==typeof Uint8Array?Uint8Array:void 0,fr=function(){throw new Error("not implemented")},cr=ar()?or:fr,vr=G,sr="function"==typeof Uint16Array;var lr="function"==typeof Uint16Array?Uint16Array:null,yr=function(r){return sr&&r instanceof Uint16Array||"[object Uint16Array]"===vr(r)},Nr=lr;var pr=function(){var r,n;if("function"!=typeof Nr)return!1;try{n=new Nr(n=[1,3.14,-3.14,65536,65537]),r=yr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var mr,br="function"==typeof Uint16Array?Uint16Array:void 0,hr=function(){throw new Error("not implemented")},wr={uint16:pr()?br:hr,uint8:cr};(mr=new wr.uint16(1))[0]=4660;var dr=52===new wr.uint8(mr.buffer)[0],gr=B,Ar=!0===dr?1:0,_r=new rr(1),jr=new gr(_r.buffer);var Ur=function(r){return _r[0]=r,jr[Ar]};var Or=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Er=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var Sr=function(r,n){var t,e,u,i;return u=(i=r*r)*i,e=i*Or(i),e+=u*u*Er(i),(u=1-(t=.5*i))+(1-u-t+(i*e-r*n))},Ir=-.16666666666666632;var Pr=function(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(Ir+u*t):r-(u*(.5*n-e*t)-n-e*Ir)},Tr=B,Fr=!0===dr?0:1,kr=new rr(1),Hr=new Tr(kr.buffer);var Vr,Gr,Mr=function(r){return kr[0]=r,Hr[Fr]};!0===dr?(Vr=1,Gr=0):(Vr=0,Gr=1);var Lr=B,qr={HIGH:Vr,LOW:Gr},Wr=new rr(1),xr=new Lr(Wr.buffer),Cr=qr.HIGH,Yr=qr.LOW;var zr,Br,Dr=function(r,n){return xr[Cr]=r,xr[Yr]=n,Wr[0]},Jr=Dr,Kr=Math.floor;!0===dr?(zr=1,Br=0):(zr=0,Br=1);var Qr=B,Rr={HIGH:zr,LOW:Br},Xr=new rr(1),Zr=new Qr(Xr.buffer),$r=Rr.HIGH,rn=Rr.LOW;var nn=function(r,n){return Xr[0]=n,r[0]=Zr[$r],r[1]=Zr[rn],r};var tn=function(r,n){return 1===arguments.length?nn([0,0],r):nn(r,n)},en=tn,un=Ur,an=Jr,on=[0,0];var fn=function(r,n){var t,e;return en(on,r),t=on[0],t&=2147483647,e=un(n),an(t|=e&=2147483648,on[1])};var cn=function(r){return Math.abs(r)},vn=A,sn=m,ln=cn;var yn=function(r,n){return sn(n)||vn(n)?(r[0]=n,r[1]=0,r):0!==n&&ln(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Nn=Ur;var pn=function(r){var n=Nn(r);return(n=(2146435072&n)>>>20)-1023|0},mn=b,bn=w,hn=m,wn=A,dn=fn,gn=function(r,n){return 1===arguments.length?yn([0,0],r):yn(r,n)},An=pn,_n=tn,jn=Jr,Un=[0,0],On=[0,0];var En=function(r,n){var t,e;return 0===n||0===r||hn(r)||wn(r)?r:(gn(Un,r),n+=Un[1],(n+=An(r=Un[0]))<-1074?dn(0,r):n>1023?r<0?bn:mn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,_n(On,r),t=On[0],t&=2148532223,e*jn(t|=n+1023<<20,On[1])))},Sn=En;var In=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var Pn=Kr,Tn=Sn,Fn=function(r){return In(0,r)},kn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Hn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Vn=5.960464477539063e-8,Gn=Fn(20),Mn=Fn(20),Ln=Fn(20),qn=Fn(20);function Wn(r,n,t,e,u,i,a,o,f){var c,v,s,l,y,N,p,m,b;for(l=i,b=e[t],m=t,y=0;m>0;y++)v=Vn*b|0,qn[y]=b-16777216*v|0,b=e[m-1]+v,m-=1;if(b=Tn(b,u),b-=8*Pn(.125*b),b-=p=0|b,s=0,u>0?(p+=y=qn[t-1]>>24-u,qn[t-1]-=y<<24-u,s=qn[t-1]>>23-u):0===u?s=qn[t-1]>>23:b>=.5&&(s=2),s>0){for(p+=1,c=0,y=0;y<t;y++)m=qn[y],0===c?0!==m&&(c=1,qn[y]=16777216-m):qn[y]=16777215-m;if(u>0)switch(u){case 1:qn[t-1]&=8388607;break;case 2:qn[t-1]&=4194303}2===s&&(b=1-b,0!==c&&(b-=Tn(1,u)))}if(0===b){for(m=0,y=t-1;y>=i;y--)m|=qn[y];if(0===m){for(N=1;0===qn[i-N];N++);for(y=t+1;y<=t+N;y++){for(f[o+y]=kn[a+y],v=0,m=0;m<=o;m++)v+=r[m]*f[o+(y-m)];e[y]=v}return Wn(r,n,t+=N,e,u,i,a,o,f)}}if(0===b)for(t-=1,u-=24;0===qn[t];)t-=1,u-=24;else(b=Tn(b,-u))>=16777216?(v=Vn*b|0,qn[t]=b-16777216*v|0,u+=24,qn[t+=1]=v):qn[t]=0|b;for(v=Tn(1,u),y=t;y>=0;y--)e[y]=v*qn[y],v*=Vn;for(y=t;y>=0;y--){for(v=0,N=0;N<=l&&N<=t-y;N++)v+=Hn[N]*e[y+N];Ln[t-y]=v}for(v=0,y=t;y>=0;y--)v+=Ln[y];for(n[0]=0===s?v:-v,v=Ln[0]-v,y=1;y<=t;y++)v+=Ln[y];return n[1]=0===s?v:-v,7&p}var xn=function(r,n,t,e){var u,i,a,o,f,c,v;for(4,(i=(t-3)/24|0)<0&&(i=0),o=t-24*(i+1),c=i-(a=e-1),v=a+4,f=0;f<=v;f++)Gn[f]=c<0?0:kn[c],c+=1;for(f=0;f<=4;f++){for(u=0,c=0;c<=a;c++)u+=r[c]*Gn[a+(f-c)];Mn[f]=u}return 4,Wn(r,n,4,Mn,o,4,i,a,Gn)},Cn=Math.round,Yn=Ur;var zn=Ur,Bn=Mr,Dn=Jr,Jn=xn,Kn=function(r,n,t){var e,u,i,a,o;return i=r-1.5707963267341256*(e=Cn(.6366197723675814*r)),a=6077100506506192e-26*e,o=n>>20|0,t[0]=i-a,o-(Yn(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((u=i)-(i=u-(a=6077100506303966e-26*e))-a),t[0]=i-a,o-(Yn(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((u=i)-(i=u-(a=20222662487111665e-37*e))-a),t[0]=i-a)),t[1]=i-t[0]-a,e},Qn=1.5707963267341256,Rn=6077100506506192e-26,Xn=2*Rn,Zn=4*Rn,$n=[0,0,0],rt=[0,0];var nt=function(r,n){var t,e,u,i,a,o,f;if((u=2147483647&zn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Kn(r,u,n):u<=1073928572?r>0?(f=r-Qn,n[0]=f-Rn,n[1]=f-n[0]-Rn,1):(f=r+Qn,n[0]=f+Rn,n[1]=f-n[0]+Rn,-1):r>0?(f=r-2*Qn,n[0]=f-Xn,n[1]=f-n[0]-Xn,2):(f=r+2*Qn,n[0]=f+Xn,n[1]=f-n[0]+Xn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Kn(r,u,n):r>0?(f=r-3*Qn,n[0]=f-1.8231301519518578e-10,n[1]=f-n[0]-1.8231301519518578e-10,3):(f=r+3*Qn,n[0]=f+1.8231301519518578e-10,n[1]=f-n[0]+1.8231301519518578e-10,-3):1075388923===u?Kn(r,u,n):r>0?(f=r-4*Qn,n[0]=f-Zn,n[1]=f-n[0]-Zn,4):(f=r+4*Qn,n[0]=f+Zn,n[1]=f-n[0]+Zn,-4);if(u<1094263291)return Kn(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Bn(r),f=Dn(u-((e=(u>>20)-1046)<<20|0),t),a=0;a<2;a++)$n[a]=0|f,f=16777216*(f-$n[a]);for($n[2]=f,i=3;0===$n[i-1];)i-=1;return o=Jn($n,rt,e,i),r<0?(n[0]=-rt[0],n[1]=-rt[1],-o):(n[0]=rt[0],n[1]=rt[1],o)},tt=Ur,et=Sr,ut=Pr,it=nt,at=[0,0];var ot=function(r){var n;if(n=tt(r),(n&=2147483647)<=1072243195)return n<1044381696?1:et(r,0);if(n>=2146435072)return NaN;switch(3&it(r,at)){case 0:return et(at[0],at[1]);case 1:return-ut(at[0],at[1]);case 2:return-et(at[0],at[1]);default:return ut(at[0],at[1])}},ft=Ur,ct=Sr,vt=Pr,st=nt,lt=[0,0];var yt=function(r){var n;if(n=ft(r),(n&=2147483647)<=1072243195)return n<1045430272?r:vt(r,0);if(n>=2146435072)return NaN;switch(3&st(r,lt)){case 0:return vt(lt[0],lt[1]);case 1:return ct(lt[0],lt[1]);case 2:return-vt(lt[0],lt[1]);default:return-ct(lt[0],lt[1])}},Nt=3.141592653589793,pt=m,mt=A,bt=ot,ht=yt,wt=cn,dt=fn,gt=Nt;var At=function(r){var n,t;return pt(r)||mt(r)?NaN:0===(n=wt(t=r%2))||1===n?dt(0,t):n<.25?ht(gt*t):n<.75?dt(bt(gt*(n=.5-n)),t):n<1.25?(t=dt(1,t)-t,ht(gt*t)):n<1.75?-dt(bt(gt*(n-=1.5)),t):(t-=dt(2,t),ht(gt*t))},_t=m,jt=At;var Ut=function(r,n,t){var e;return _t(r)||_t(n)||_t(t)||t<0?NaN:0===t?r<n?0:1:r<n-t?0:r>n+t?1:(1+(e=(r-n)/t)+jt(e)/3.141592653589793)/2};var Ot=function(r){return function(){return r}},Et=m;var St=Ot,It=m;var Pt=function(r,n){return Et(r)||Et(n)?NaN:r<n?0:1};p(Pt,"factory",(function(r){return It(r)?St(NaN):function(n){if(It(n))return NaN;return n<r?0:1}}));var Tt=Ot,Ft=Pt.factory,kt=m,Ht=At;var Vt=Ut;p(Vt,"factory",(function(r,n){return kt(r)||kt(n)||n<0?Tt(NaN):0===n?Ft(r):function(t){var e;if(kt(t))return NaN;if(t<r-n)return 0;if(t>r+n)return 1;return(1+(e=(t-r)/n)+Ht(e)/3.141592653589793)/2}}));var Gt=Vt,Mt=s;var Lt=function(r,n,t){Mt(r,n,{configurable:!1,enumerable:!1,get:t})};var qt=function(r){return"number"==typeof r},Wt=h.prototype.toString;var xt=G,Ct=h,Yt=function(r){try{return Wt.call(r),!0}catch(r){return!1}},zt=j();var Bt=function(r){return"object"==typeof r&&(r instanceof Ct||(zt?Yt(r):"[object Number]"===xt(r)))},Dt=qt,Jt=Bt;var Kt=p,Qt=function(r){return Dt(r)||Jt(r)},Rt=Bt;Kt(Qt,"isPrimitive",qt),Kt(Qt,"isObject",Rt);var Xt=Qt,Zt=Xt.isPrimitive;var $t=function(r){return Zt(r)&&r>0},re=Xt.isObject;var ne=function(r){return re(r)&&r.valueOf()>0},te=$t,ee=ne;var ue=p,ie=function(r){return te(r)||ee(r)},ae=ne;ue(ie,"isPrimitive",$t),ue(ie,"isObject",ae);var oe=ie,fe=Xt.isPrimitive,ce=m;var ve=function(r){return fe(r)&&ce(r)},se=Xt.isObject,le=m;var ye=function(r){return se(r)&&le(r.valueOf())},Ne=ve,pe=ye;var me=p,be=function(r){return Ne(r)||pe(r)},he=ye;me(be,"isPrimitive",ve),me(be,"isObject",he);var we=be,de=Kr;var ge=function(r){return de(r)===r},Ae=ge;var _e=function(r){return Ae(r/2)};var je=function(r){return _e(r>0?r-1:r+1)},Ue=Math.sqrt,Oe=B,Ee=!0===dr?0:1,Se=new rr(1),Ie=new Oe(Se.buffer);var Pe=function(r,n){return Se[0]=r,Ie[Ee]=n>>>0,Se[0]},Te=Pe;var Fe=function(r){return 0|r},ke=je,He=fn,Ve=w,Ge=b;var Me=function(r,n){return n===Ve?Ge:n===Ge?0:n>0?ke(n)?r:0:ke(n)?He(Ge,r):Ge},Le=Ur;var qe=function(r,n){return(2147483647&Le(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},We=cn,xe=b;var Ce=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:We(r)<1==(n===xe)?0:xe},Ye=B,ze=!0===dr?1:0,Be=new rr(1),De=new Ye(Be.buffer);var Je=function(r,n){return Be[0]=r,De[ze]=n>>>0,Be[0]};var Ke=Ur,Qe=Te,Re=Je,Xe=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Ze=[1,1.5],$e=[0,.5849624872207642],ru=[0,1.350039202129749e-8];var nu=Te,tu=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var eu=Ur,uu=Je,iu=Te,au=Fe,ou=Sn,fu=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var cu=m,vu=je,su=A,lu=ge,yu=Ue,Nu=cn,pu=tn,mu=Te,bu=Fe,hu=w,wu=b,du=Me,gu=qe,Au=Ce,_u=function(r,n,t){var e,u,i,a,o,f,c,v,s,l,y,N,p,m,b,h,w,d,g,A;return d=0,t<1048576&&(d-=53,t=Ke(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(g=1048575&t|0),g<=235662?A=0:g<767610?A=1:(A=0,d+=1,t-=1048576),e=524288+(t>>1|536870912),o=(w=1/((n=Re(n,t))+(c=Ze[A])))*((h=n-c)-(a=Qe(u=h*w,0))*(f=Re(0,e+=A<<18))-a*(n-(f-c))),b=(i=u*u)*i*Xe(i),f=Qe(f=3+(i=a*a)+(b+=o*(a+u)),0),p=(y=-7.028461650952758e-9*(s=Qe(s=(h=a*f)+(w=o*f+(b-(f-3-i))*u),0))+.9617966939259756*(w-(s-h))+ru[A])-((N=Qe(N=(l=.9617967009544373*s)+y+(v=$e[A])+(m=d),0))-m-v-l),r[0]=N,r[1]=p,r},ju=function(r,n){var t,e,u,i,a;return t=(a=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*tu(u)))-((e=nu(e=(i=1.4426950216293335*u)+a,0))-i),r[0]=e,r[1]=t,r},Uu=function(r,n,t){var e,u,i,a,o,f,c,v,s,l;return l=((s=2147483647&r|0)>>20)-1023|0,v=0,s>1071644672&&(e=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),n-=i=uu(0,e)),f=(o=.6931471805599453*(t-((i=iu(i=t+n,0))-n))+-1.904654299957768e-9*i)-((c=(a=.6931471824645996*i)+o)-a),u=c-(i=c*c)*fu(i),r=eu(c=1-(c*u/(u-2)-(f+c*f)-c)),r=au(r),c=(r+=v<<20>>>0)>>20<=0?ou(c,v):uu(c,r)},Ou=1e300,Eu=1e-300,Su=[0,0],Iu=[0,0];var Pu=function r(n,t){var e,u,i,a,o,f,c,v,s,l,y,N,p,m;if(cu(n)||cu(t))return NaN;if(pu(Su,t),o=Su[0],0===Su[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return yu(n);if(-.5===t)return 1/yu(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(su(t))return Au(n,t)}if(pu(Su,n),a=Su[0],0===Su[1]){if(0===a)return du(n,t);if(1===n)return 1;if(-1===n&&vu(t))return-1;if(su(n))return n===hu?r(-0,-t):t<0?0:wu}if(n<0&&!1===lu(t))return(n-n)/(n-n);if(i=Nu(n),e=2147483647&a|0,u=2147483647&o|0,c=o>>>31|0,f=(f=a>>>31|0)&&vu(t)?-1:1,u>1105199104){if(u>1139802112)return gu(n,t);if(e<1072693247)return 1===c?f*Ou*Ou:f*Eu*Eu;if(e>1072693248)return 0===c?f*Ou*Ou:f*Eu*Eu;y=ju(Iu,i)}else y=_u(Iu,i,e);if(l=(t-(v=mu(t,0)))*y[0]+t*y[1],s=v*y[0],pu(Su,N=l+s),p=bu(Su[0]),m=bu(Su[1]),p>=1083179008){if(0!=(p-1083179008|m))return f*Ou*Ou;if(l+8008566259537294e-32>N-s)return f*Ou*Ou}else if((2147483647&p)>=1083231232){if(0!=(p-3230714880|m))return f*Eu*Eu;if(l<=N-s)return f*Eu*Eu}return f*(N=Uu(p,s,l))},Tu=m,Fu=Pu;var ku=function(r,n){var t;return Tu(r)||Tu(n)||n<=0?NaN:(t=-44.45454620401458,t/=5*Fu(3.869604401089358,2))},Hu=m;var Vu=function(r,n){return Hu(r)||Hu(n)||n<=0?NaN:r},Gu=m;var Mu=function(r,n){return Gu(r)||Gu(n)||n<=0?NaN:r},Lu=m;var qu=function(r,n){return Lu(r)||Lu(n)||n<=0?NaN:r},Wu=m;var xu=function(r,n){return Wu(r)||Wu(n)||n<=0?NaN:0},Cu=m,Yu=Ue;var zu=function(r,n){return Cu(r)||Cu(n)||n<=0?NaN:n*Yu(.13069096604865776)},Bu=m;var Du=function(r,n){return Bu(r)||Bu(n)||n<=0?NaN:n*n*.13069096604865776};var Ju=Ur,Ku=Je,Qu=m,Ru=w,Xu=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Zu=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},$u=.6931471803691238,ri=1.9082149292705877e-10;var ni=function(r){var n,t,e,u,i,a,o,f,c,v,s;return 0===r?Ru:Qu(r)||r<0?NaN:(u=0,(t=Ju(r))<1048576&&(u-=54,t=Ju(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(o=(t&=1048575)+614244&1048576|0)>>20|0,a=(r=Ku(r,t|1072693248^o))-1,(1048575&2+t)<3?0===a?0===u?0:u*$u+u*ri:(i=a*a*(.5-.3333333333333333*a),0===u?a-i:u*$u-(i-u*ri-a)):(o=t-398458|0,f=440401-t|0,e=(v=(s=(c=a/(2+a))*c)*s)*Xu(v),i=s*Zu(v)+e,(o|=f)>0?(n=.5*a*a,0===u?a-(n-c*(n+i)):u*$u-(n-(c*(n+i)+u*ri)-a)):0===u?a-c*(a-i):u*$u-(c*(a-i)-u*ri-a))))},ti=m,ei=At,ui=ni,ii=w;var ai=function(r,n,t){var e;return ti(r)||ti(n)||ti(t)||t<0?NaN:0===t?r<n?ii:0:r<n-t?ii:r>n+t?0:ui((1+(e=(r-n)/t)+ei(e)/3.141592653589793)/2)},oi=m,fi=w;var ci=Ot,vi=m,si=w;var li=function(r,n){return oi(r)||oi(n)?NaN:r<n?fi:0};p(li,"factory",(function(r){return vi(r)?ci(NaN):function(n){if(vi(n))return NaN;return n<r?si:0}}));var yi=Ot,Ni=li.factory,pi=m,mi=At,bi=ni,hi=w;var wi=ai;p(wi,"factory",(function(r,n){return pi(r)||pi(n)||n<0?yi(NaN):0===n?Ni(r):function(t){var e;if(pi(t))return NaN;if(t<r-n)return hi;if(t>r+n)return 0;return bi((1+(e=(t-r)/n)+mi(e)/3.141592653589793)/2)}}));var di=wi,gi=m,Ai=A,_i=cn,ji=ot,Ui=yt,Oi=Kr,Ei=Nt;var Si=function(r){var n,t,e,u;return gi(r)||Ai(r)?NaN:(n=_i(r))>9007199254740992?1:.5===(e=n-(t=Oi(n)))?0:(u=e<.25?ji(Ei*e):e<.75?Ui(Ei*(e=.5-e)):-ji(Ei*(e=1-e)),t%2==1?-u:u)},Ii=m,Pi=Si,Ti=ni,Fi=w,ki=b;var Hi=function(r,n,t){return Ii(r)||Ii(n)||Ii(t)||t<0?NaN:0===t?r===n?ki:Fi:r<n-t||r>n+t?Fi:Ti(1+Pi((r-n)/t))-Ti(2*t)},Vi=b,Gi=w,Mi=m;var Li=Ot,qi=b,Wi=w,xi=m;var Ci=function(r,n){return Mi(r)||Mi(n)?NaN:r===n?Vi:Gi};p(Ci,"factory",(function(r){return xi(r)?Li(NaN):function(n){if(xi(n))return NaN;return n===r?qi:Wi}}));var Yi=Ot,zi=Ci.factory,Bi=m,Di=Si,Ji=ni,Ki=w;var Qi=Hi;p(Qi,"factory",(function(r,n){return Bi(r)||Bi(n)||n<0?Yi(NaN):0===n?zi(r):function(t){if(Bi(t))return NaN;if(t<r-n||t>r+n)return Ki;return Ji(1+Di((t-r)/n))-Ji(2*n)}}));var Ri=Qi,Xi=Math.ceil,Zi=Kr,$i=Xi;var ra=Sn,na=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var ta=m,ea=function(r){return r<0?$i(r):Zi(r)},ua=w,ia=b,aa=function(r,n,t){var e,u,i;return i=(e=r-n)-(u=e*e)*na(u),ra(1-(n-e*i/(2-i)-r),t)};var oa=function(r){var n;return ta(r)||r===ia?r:r===ua?0:r>709.782712893384?ia:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=ea(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),aa(r-.6931471803691238*n,1.9082149292705877e-10*n,n))};var fa=b,ca=w,va=cn,sa=oa,la=function(r){var n,t;return 0===r?.16666666666666666:((r<0?-r:r)<=1?(n=r*(r*(-.789474443963537*r-163.72585752598383)-11561.443576500522)-351754.9648081514,t=r*(36157.827983443196+r*(1*r-277.7110814206028))-2110529.7888489086):(n=(r=1/r)*(r*(-351754.9648081514*r-11561.443576500522)-163.72585752598383)-.789474443963537,t=1+r*(r*(36157.827983443196+-2110529.7888489086*r)-277.7110814206028)),n/t)};var ya=function(r){var n;return 0===r?r:(n=va(r),r>710.4758600739439||r<-709.089565712824?r>0?fa:ca:n>1?n>=709.0895657128241?(n=sa(.5*n),n*=.5*n,r<0&&(n=-n),n):(n=.5*(n=sa(n))-.5/n,r<0&&(n=-n),n):r+r*(n*=n)*la(n))},Na=m,pa=ya,ma=oa;var ba=Ot,ha=m,wa=ya,da=oa;var ga=function(r,n,t){var e,u;return Na(r)||Na(n)||Na(t)||t<=0?NaN:(e=9.869604401089358*pa(u=t*r),e/=u*(9.869604401089358+u*u),e*=ma(n*r))};p(ga,"factory",(function(r,n){return ha(r)||ha(n)||n<=0?ba(NaN):function(t){var e,u;if(ha(t))return NaN;return e=9.869604401089358*wa(u=n*t),e/=u*(9.869604401089358+u*u),e*=da(r*t)}}));var Aa=ga,_a=m,ja=Si,Ua=b;var Oa=function(r,n,t){return _a(r)||_a(n)||_a(t)||t<0?NaN:0===t?r===n?Ua:0:r<n-t||r>n+t?0:(1+ja((r-n)/t))/(2*t)},Ea=b,Sa=m;var Ia=Ot,Pa=b,Ta=m;var Fa=function(r,n){return Sa(r)||Sa(n)?NaN:r===n?Ea:0};p(Fa,"factory",(function(r){return Ta(r)?Ia(NaN):function(n){if(Ta(n))return NaN;return n===r?Pa:0}}));var ka=Ot,Ha=Fa.factory,Va=m,Ga=Si;var Ma=Oa;p(Ma,"factory",(function(r,n){return Va(r)||Va(n)||n<0?ka(NaN):0===n?Ha(r):function(t){if(Va(t))return NaN;if(t<r-n||t>r+n)return 0;return(1+Ga((t-r)/n))/(2*n)}}));var La=Ma,qa=Gt;var Wa=function(r,n,t){var e,u,i,a;for(a=1,e=n-t,u=n+t;a<1e4;){if(i=(e+u)/2,u-e<1e-12)return i;r>qa(i,n,t)?e=i:u=i,a+=1}return i},xa=m,Ca=Wa;var Ya=function(r,n,t){return xa(n)||xa(t)||xa(r)||t<0||r<0||r>1?NaN:0===t?n:Ca(r,n,t)},za=m;var Ba=Ot,Da=m;var Ja=function(r,n){return za(r)||r<0||r>1?NaN:n};p(Ja,"factory",(function(r){return Da(r)?Ba(NaN):function(n){if(Da(n)||n<0||n>1)return NaN;return r}}));var Ka=Ot,Qa=Ja.factory,Ra=m,Xa=Wa;var Za=Ya;p(Za,"factory",(function(r,n){return Ra(r)||Ra(n)||n<0?Ka(NaN):0===n?Qa(r):function(t){if(Ra(t)||t<0||t>1)return NaN;return Xa(t,r,n)}}));var $a=Za,ro=s,no=p,to=Lt,eo=oe.isPrimitive,uo=Xt.isPrimitive,io=we,ao=ku,oo=Vu,fo=Mu,co=qu,vo=xu,so=zu,lo=Du,yo=Gt,No=di,po=Ri,mo=Aa,bo=La,ho=$a;function wo(){var r,n;if(!(this instanceof wo))return 0===arguments.length?new wo:new wo(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!uo(r=arguments[0])||io(r))throw new TypeError("invalid argument. Location parameter `mu` must be a number primitive. Value: `"+r+"`");if(!eo(n))throw new TypeError("invalid argument. Scale parameter `s` must be a positive number. Value: `"+n+"`")}else r=0,n=1;return ro(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!uo(n)||io(n))throw new TypeError("invalid value. Must be a number primitive. Value: `"+n+"`");r=n}}),ro(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!eo(r))throw new TypeError("invalid value. Must be a positive number. Value: `"+r+"`");n=r}}),this}to(wo.prototype,"kurtosis",(function(){return ao(this.mu,this.s)})),to(wo.prototype,"mean",(function(){return oo(this.mu,this.s)})),to(wo.prototype,"median",(function(){return fo(this.mu,this.s)})),to(wo.prototype,"mode",(function(){return co(this.mu,this.s)})),to(wo.prototype,"skewness",(function(){return vo(this.mu,this.s)})),to(wo.prototype,"stdev",(function(){return so(this.mu,this.s)})),to(wo.prototype,"variance",(function(){return lo(this.mu,this.s)})),no(wo.prototype,"cdf",(function(r){return yo(r,this.mu,this.s)})),no(wo.prototype,"logcdf",(function(r){return No(r,this.mu,this.s)})),no(wo.prototype,"logpdf",(function(r){return po(r,this.mu,this.s)})),no(wo.prototype,"mgf",(function(r){return mo(r,this.mu,this.s)})),no(wo.prototype,"pdf",(function(r){return bo(r,this.mu,this.s)})),no(wo.prototype,"quantile",(function(r){return ho(r,this.mu,this.s)}));var go=wo,Ao=y,_o={};Ao(_o,"cdf",Gt),Ao(_o,"Cosine",go),Ao(_o,"kurtosis",ku),Ao(_o,"logcdf",di),Ao(_o,"logpdf",Ri),Ao(_o,"mean",Vu),Ao(_o,"median",Mu),Ao(_o,"mgf",Aa),Ao(_o,"mode",qu),Ao(_o,"pdf",La),Ao(_o,"quantile",$a),Ao(_o,"skewness",xu),Ao(_o,"stdev",zu),Ao(_o,"variance",Du);var jo=_o;export{go as Cosine,Gt as cdf,jo as default,ku as kurtosis,di as logcdf,Ri as logpdf,Vu as mean,Mu as median,Aa as mgf,qu as mode,La as pdf,$a as quantile,xu as skewness,zu as stdev,Du as variance};
//# sourceMappingURL=mod.js.map
