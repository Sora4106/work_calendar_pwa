((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={eR:function eR(d){this.a=d},
us(d){var w,v,u,t,s,r=d<0
if(r)d=-d
w=C.b.b0(d,17592186044416)
d-=w*17592186044416
v=C.b.b0(d,4194304)
u=d-v*4194304&4194303
t=v&4194303
s=w&1048575
return r?A.byL(0,0,0,u,t,s):new A.lt(u,t,s)},
aB4(d){if(d instanceof A.lt)return d
else if(B.hy(d))return A.us(d)
else if(d instanceof A.eR)return A.us(d.a)
throw B.c(B.eF(d,"other","not an int, Int32 or Int64"))},
bOi(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(e===0&&f===0&&g===0)return"0"
w=(g<<4|f>>>18)>>>0
v=f>>>8&1023
g=(f<<2|e>>>20)&1023
f=e>>>10&1023
e&=1023
u=D.apH[d]
t=""
s=""
r=""
for(;;){if(!!(w===0&&v===0))break
q=C.b.eE(w,u)
v+=w-q*u<<10>>>0
p=C.b.eE(v,u)
g+=v-p*u<<10>>>0
o=C.b.eE(g,u)
f+=g-o*u<<10>>>0
n=C.b.eE(f,u)
e+=f-n*u<<10>>>0
m=C.b.eE(e,u)
l=C.c.dD(C.b.l3(u+(e-m*u),d),1)
r=s
s=t
t=l
v=p
w=q
g=o
f=n
e=m}k=(g<<20>>>0)+(f<<10>>>0)+e
return h+(k===0?"":C.b.l3(k,d))+t+s+r},
byL(d,e,f,g,h,i){var w=d-g,v=e-h-(C.b.R(w,22)&1)
return new A.lt(w&4194303,v&4194303,f-i-(C.b.R(v,22)&1)&1048575)},
lt:function lt(d,e,f){this.a=d
this.b=e
this.c=f},
as0:function as0(){},
bwF(d){return new A.as1(d)},
as1:function as1(d){this.a=d
this.b=null},
Cb:function Cb(d){this.b=d},
Z0(d,e){var w
if(e==null)e=d
if(d<1||e<1)throw B.c(B.bi("Both dimensions must be greater than 0",null))
w=C.b.b0(d+31,32)
return new A.Z_(d,e,w,new Int32Array(w*e))},
Z_:function Z_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
as6:function as6(d){this.a=d
this.c=this.b=0},
fh(d,e,f){return new A.Jd(d,e,f)},
bKS(d){var w,v,u,t,s,r
d=d.toLowerCase()
for(w=$.buR(),v=0;v<27;++v){u=w[v]
for(t=u.b,s=t.length,r=0;r<s;++r)if(t[r].toLowerCase()===d)return u}return $.buP()},
Jd:function Jd(d,e,f){this.a=d
this.b=e
this.c=f},
auG:function auG(d,e,f,g,h,i,j){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.w=null
_.x=h
_.y=i
_.z=j},
auI:function auI(){},
auW:function auW(d,e){this.a=d
this.b=e},
bNJ(d){var w=$.bv0(),v=$.bpA()
return new A.Ll(w,new Int32Array(v),d)},
bNK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
for(w=0,v=0,u=0,t=0;t<j;++t){s=d[t]
if(s>u){u=s
v=t}if(s>w)w=s}for(r=0,q=0,t=0;t<j;++t){p=t-v
o=d[t]*p*p
if(o>q){q=o
r=t}}if(v>r){n=r
r=v
v=n}if(r-v<=j/16)throw B.c(A.i0())
m=r-1
for(t=m,l=-1;t>v;--t){k=t-v
o=k*k*(r-t)*(w-d[t])
if(o>l){l=o
m=t}}return C.b.dM(m,$.bv1())},
Ll:function Ll(d,e,f){this.b=d
this.c=e
this.a=f},
bNM(d,e){var w,v,u,t,s=d.a,r=d.b,q=e.length,p=q-1,o=s-1,n=r-1,m=!0,l=0
for(;;){if(!(l<p&&m))break
w=C.e.K(e[l])
v=l+1
u=C.e.K(e[v])
if(w<-1||w>s||u<-1||u>r)throw B.c(A.i0())
if(w===-1){e[l]=0
m=!0}else{m=w===s
if(m)e[l]=o}t=!0
if(u===-1){e[v]=0
m=t}else if(u===r){e[v]=n
m=t}l+=2}l=q-2
m=!0
for(;;){if(!(l>=0&&m))break
w=C.e.K(e[l])
q=l+1
u=C.e.K(e[q])
if(w<-1||w>s||u<-1||u>r)throw B.c(A.i0())
if(w===-1){e[l]=0
m=!0}else{m=w===s
if(m)e[l]=o}t=!0
if(u===-1){e[q]=0
m=t}else if(u===r){e[q]=n
m=t}l-=2}},
azp:function azp(){},
bO0(d){var w=$.bv0(),v=$.bpA()
return new A.aAi(w,new Int32Array(v),d)},
bO2(d,e,f,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.I9(),h=a1-i,g=a0-i
for(i=e-3,w=f-3,v=0;v<f;++v){u=v<<3>>>0
if(u>h)u=h
t=v<2?2:Math.min(v,w)
for(s=0;s<e;++s){r=s<<3>>>0
if(r>g)r=g
q=s<2?2:Math.min(s,i)
for(p=q-2,o=q-1,n=q+1,m=q+2,l=0,k=-2;k<=2;++k){j=a2[t+k]
l+=j[p]+j[o]+j[q]+j[n]+j[m]}A.bO3(d,r,u,C.b.b0(l,25),a0,a3)}}},
bO3(d,e,f,g,h,i){var w,v,u,t,s
for(w=f*h+e,v=0;u=$.I9(),v<u;++v,w+=h)for(t=f+v,s=0;s<u;++s)if((d[w+s]&255)<=g)i.I6(0,e+s,t)},
bO1(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=$.I9(),d=a6-e,a0=a5-e,a1=J.f1(a4,x.k)
for(w=0;w<a4;++w)a1[w]=new Int32Array(a3)
for(v=0;v<a4;++v){u=v<<3>>>0
for(e=(u>d?d:u)*a5,t=v>0,s=v-1,r=0;r<a3;++r){q=r<<3>>>0
for(p=e+(q>a0?a0:q),o=0,n=255,m=0,l=0;k=$.I9(),l<k;++l,p+=a5){for(j=0;j<k;++j){i=a2[p+j]&255
o+=i
if(i<n)n=i
if(i>m)m=i}if(m-n>24){++l
for(p+=a5;l<k;++l,p+=a5)for(j=0;j<k;++j)o+=a2[p+j]&255}}h=o>>>6
if(m-n<=24){h=n/2|0
if(t&&r>0){k=a1[s]
g=r-1
f=C.b.b0(k[r]+2*a1[v][g]+k[g],4)
if(n<f)h=f}}k=a1[v]
k.$flags&2&&B.u(k)
k[r]=h}}return a1},
aAi:function aAi(d,e,f){var _=this
_.e=null
_.b=d
_.c=e
_.a=f},
bA0(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=d-f+h-j,o=e-g+i-k,n=p===0&&o===0,m=f-d,l=g-e
if(n)return new A.Ni(m,l,0,h-f,i-g,0,d,e,1)
else{w=f-h
v=j-h
u=g-i
t=k-i
s=w*t-v*u
r=(p*t-v*o)/s
q=(w*o-p*u)/s
return new A.Ni(m+r*f,l+r*g,r,j-d+q*j,k-e+q*k,q,d,e,1)}},
Ni:function Ni(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
ayG:function ayG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=h},
ua(d,e){var w=new A.a2m(d)
w.auR(d,e)
return w},
a2m:function a2m(d){this.a=d
this.b=$},
aMv:function aMv(d){this.a=d},
aMw(d){return new A.NX(d)},
NX:function NX(d){this.a=d},
u0:function u0(){},
auA:function auA(d){this.a=d},
eZ(){return new A.D4()},
D4:function D4(){},
aD9:function aD9(){},
i0(){return new A.E2()},
E2:function E2(){},
as5:function as5(d){var _=this
_.a=d
_.c=_.b=null
_.d=!1},
bLC(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a2.d
a0===$&&B.a()
if(a1.length!==a0)throw B.c(B.bi(null,null))
w=a2.c[a3.a]
v=w.b
u=B.b([],x.q)
for(a0=v.length,t=w.a,s=0,r=0;r<v.length;v.length===a0||(0,B.O)(v),++r){q=v[r]
for(p=q.a,o=q.b,n=t+o,m=0;m<p;++m){++s
u.push(new A.a0X(o,new Int8Array(n)))}}l=u[0].b.length
k=u.length-1
while(k>=0){if(u[k].b.length===l)break;--k}++k
j=l-t
for(i=0,m=0;m<j;++m)for(h=0;h<s;++h,i=g){a0=u[h].b
g=i+1
t=a1[i]
a0.$flags&2&&B.u(a0)
a0[m]=t}for(h=k;h<s;++h,i=g){a0=u[h].b
g=i+1
t=a1[i]
a0.$flags&2&&B.u(a0)
a0[j]=t}f=u[0].b.length
for(m=j;m<f;m=e)for(e=m+1,h=0;h<s;++h,i=g){d=h<k?m:e
a0=u[h].b
g=i+1
t=a1[i]
a0.$flags&2&&B.u(a0)
a0[d]=t}return u},
a0X:function a0X(d,e){this.a=d
this.b=e},
xm(d){return new A.a0Y(d)},
a0Y:function a0Y(d){this.a=d},
auc:function auc(){},
aud:function aud(){},
aue:function aue(){},
auf:function auf(){},
aug:function aug(){},
auh:function auh(){},
aui:function aui(){},
auj:function auj(){},
auE:function auE(d){this.a=d},
axb(d,e,f){return new A.a1L(d,f)},
a1L:function a1L(d,e){this.a=d
this.c=e},
bNz(d){var w=C.b.R(d,3)
$.apY()
return new A.Lf($.apY()[w&3],d&7)},
bNB(d,e){var w=A.byd(d,e)
if(w!=null)return w
return A.byd((d^21522)>>>0,(e^21522)>>>0)},
byd(d,e){var w,v,u,t,s,r,q,p
for(w=d!==e,v=2147483647,u=0,t=0;t<32;++t){s=$.bNA[t]
r=s[0]
if(r===d||r===e){w=s[1]
q=C.b.R(w,3)
$.apY()
return new A.Lf($.apY()[q&3],w&7)}p=A.btO((d^r)>>>0)
if(p<v){u=s[1]
v=p}if(w){p=A.btO((e^r)>>>0)
if(p<v){u=s[1]
v=p}}}if(v<=3)return A.bNz(u)
return null},
Lf:function Lf(d,e){this.a=d
this.b=e},
bPh(d){switch(d){case 0:return D.lw
case 1:return D.vb
case 2:return D.v8
case 3:return D.v6
case 4:return D.v4
case 5:return D.va
case 7:return D.v5
case 8:return D.v9
case 9:return D.v7
case 13:return D.vc
default:throw B.c(B.bi(null,null))}},
mx:function mx(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},
a7D:function a7D(d){this.a=d},
dG(d,e,f){var w=new A.ab4(d,e,f)
w.avr(d,e,f)
return w},
bTB(d){var w,v
if(C.b.Y(d,4)!==1)throw B.c(A.eZ())
try{w=A.bsI(C.b.b0(d-17,4))
return w}catch(v){if(B.a4(v) instanceof B.j9)throw v
else throw v}},
bsI(d){if(d<1||d>40)throw B.c(B.bi("Version is "+d,null))
return $.bvh()[d-1]},
bBE(d){var w,v,u,t,s
for(w=2147483647,v=0,u=0;u<34;++u){t=$.bTA[u]
if(t===d)return $.bvh()[u+7-1]
s=A.btO((d^t)>>>0)
if(s<w){v=u+7
w=s}}if(w<=3)return A.bsI(v)
return null},
at(d,e){return new A.a1E(d,e)},
U(d,e){return new A.a1D(d,e)},
ab4:function ab4(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
a1E:function a1E(d,e){this.a=d
this.b=e},
a1D:function a1D(d,e){this.a=d
this.b=e},
BJ:function BJ(d,e,f){this.c=d
this.a=e
this.b=f},
bwp(d,e){return e-d[2]-d[1]/2},
aqF:function aqF(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bM4(d,e,f,g){var w=d.a,v=d.b,u=C.b.b0(A.bzn(A.Mx(w,v,e.a,e.b)/g)+A.bzn(A.Mx(w,v,f.a,f.b)/g),2)+7
switch(u&3){case 0:++u
break
case 2:--u
break
case 3:throw B.c(A.i0())}return u},
auV:function auV(d){this.a=d
this.b=null},
ml:function ml(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},
bqZ(d,e){return e-d[4]-d[3]-d[2]/2},
axB(d){var w,v,u,t,s
for(w=0,v=0;v<5;++v){u=d[v]
if(u===0)return!1
w+=u}if(w<7)return!1
t=w/7
s=t/2
return Math.abs(t-d[0])<s&&Math.abs(t-d[1])<s&&Math.abs(3*t-d[2])<3*s&&Math.abs(t-d[3])<s&&Math.abs(t-d[4])<s},
bNe(d){var w,v,u,t,s
for(w=0,v=0;v<5;++v){u=d[v]
if(u===0)return!1
w+=u}if(w<7)return!1
t=w/7
s=t/1.333
return Math.abs(t-d[0])<s&&Math.abs(t-d[1])<s&&Math.abs(3*t-d[2])<3*s&&Math.abs(t-d[3])<s&&Math.abs(t-d[4])<s},
a20(d){var w,v
for(w=d.$flags|0,v=0;v<5;++v){w&2&&B.u(d)
d[v]=0}},
by3(d){var w=d[2]
d.$flags&2&&B.u(d)
d[0]=w
d[1]=d[3]
d[2]=d[4]
d[3]=1
d[4]=0},
a2_:function a2_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=!1
_.d=f
_.e=g},
axC:function axC(d,e,f){this.a=d
this.b=e
this.c=f},
bQu(){return new A.aLG(new A.auE(new A.aMv($.bGx())))},
bQv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.an2(),g=d.amv()
if(h==null||g==null)throw B.c(A.i0())
w=A.bQw(h,d)
v=h[1]
u=g[1]
t=h[0]
s=g[0]
if(t>=s||v>=u)throw B.c(A.i0())
r=u-v
if(r!==s-t){s=t+r
if(s>=d.a)throw B.c(A.i0())}q=C.e.aI((s-t+1)/w)
p=C.e.aI((r+1)/w)
if(q<=0||p<=0)throw B.c(A.i0())
if(p!==q)throw B.c(A.i0())
o=C.e.b0(w,2)
v+=o
t+=o
n=t+C.e.K((q-1)*w)-s
if(n>0){if(n>o)throw B.c(A.i0())
t-=n}m=v+C.e.K((p-1)*w)-u
if(m>0){if(m>o)throw B.c(A.i0())
v-=m}l=A.Z0(q,p)
for(k=0;k<p;++k){j=v+C.e.K(k*w)
for(i=0;i<q;++i)if(d.d_(0,t+C.e.K(i*w),j))l.I6(0,i,k)}return l},
bQw(d,e){var w=e.b,v=e.a,u=d[0],t=d[1],s=!0,r=0
for(;;){if(!(u<v&&t<w))break
if(s!==e.d_(0,u,t)){++r
if(r===5)break
s=!s}++u;++t}if(u===v||t===w)throw B.c(A.i0())
return(u-d[0])/7},
aLG:function aLG(d){this.a=d},
a7T:function a7T(){},
aNX:function aNX(d,e,f){this.a=d
this.d=e
this.f=f},
zw:function zw(d,e){this.a=d
this.b=e},
zx:function zx(){},
bQA(d,e,f){var w=new A.aLO(d,e,d,e)
w.avd(d,e,f)
return w},
aLO:function aLO(d,e,f,g){var _=this
_.c=$
_.d=d
_.e=e
_.a=f
_.b=g},
btO(d){d-=d>>>1&1431655765
d=(d&858993459)+(C.b.R(d,2)&858993459)
d=d+(d>>>4)&252645135
d+=d>>>8
return d+(d>>>16)&63},
bzn(d){return C.e.K(d+(d<0?-0.5:0.5))},
Mx(d,e,f,g){var w=d-f,v=e-g
return Math.sqrt(w*w+v*v)},
bS3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=$.bGe(),a0=a2.a
if(a0.aA(0,d))return A.bKS(C.l5.j(a0.h(0,d)))
w=a1.length
v=w>3&&a1[0]===239&&a1[1]===187&&a1[2]===191
u=!0
t=!0
s=!0
r=0
q=0
p=0
o=0
n=0
m=0
l=0
k=0
j=0
i=0
h=0
g=0
for(;;){if(g<w)d=u||t||s
else d=!1
if(!d)break
f=a1[g]&255
if(s)if(r>0){d=(f&128)===0
r=d?r:r-1
s=!d}else{s=!0
if((f&128)!==0)if((f&64)===0)s=!1
else{++r
if((f&32)===0)++q
else{++r
if((f&16)===0)++p
else{++r
s=(f&8)===0
if(s)++o}}}}if(u){d=f>127&&f<160
if(!d){if(f>159)a0=f<192||f===215||f===247
else a0=!1
if(a0)++h}u=!d}if(t)if(n>0){d=f<64||f===127||f>252
n=d?n:n-1
t=!d}else{e=0
d=f===128||f===160||f>239
if(!d)if(f>160&&f<224){++m;++l
if(l>j)j=l
k=e}else{if(f>127){++n;++k
if(k>i)i=k}else k=e
l=0}t=!d}++g}if(s&&r>0)s=!1
if(t&&n>0)t=!1
if(s)d=v||q+p+o>0
else d=!1
if(d)return $.apW()
if(t)d=j>=3||i>=3
else d=!1
if(d)return $.XM()
if(u&&t)return j===2&&m===2||h*10>=w?$.XM():$.bpv()
if(u)return $.bpv()
if(t)return $.XM()
if(s)return $.apW()
return $.apW()},
bLX(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.as6(d),j=new B.dD(""),i=B.b([],x.h),h=-1,g=-1
try{w=null
v=!1
u=null
do{if(J.bwb(k)<4)u=D.lw
else u=A.bPh(k.e0(4))
switch(u){case D.lw:break
case D.va:case D.v7:v=!0
break
case D.v6:if(J.bwb(k)<16){p=A.eZ()
throw B.c(p)}h=k.e0(8)
g=k.e0(8)
break
case D.v5:t=A.bLW(k)
p=t
if(p<0||p>=900)B.a8(A.eZ())
w=$.bFZ().h(0,p)
if(w==null){p=A.eZ()
throw B.c(p)}break
case D.vc:s=k.e0(4)
r=k.e0(u.a1s(e))
if(J.d(s,1))A.bLT(k,j,r)
break
case D.vb:case D.v8:case D.v4:case D.v9:q=k.e0(u.a1s(e))
switch(u){case D.vb:A.bLV(k,j,q)
break
case D.v8:A.bLR(k,j,q,v)
break
case D.v4:A.bLS(k,j,q,w,i,a0)
break
case D.v9:A.bLU(k,j,q)
break
case D.lw:case D.va:case D.v7:case D.v6:case D.v5:case D.vc:p=A.eZ()
throw B.c(p)}break}}while(u!==D.lw)}catch(o){if(B.a4(o) instanceof B.j9)throw B.c(A.eZ())
else throw o}p=j.a
n=J.bQ(i)===0?null:i
m=h
l=g
return new A.auG(d,p.charCodeAt(0)==0?p:p,n,f.c,m,l,e.a)},
bLT(d,e,f){var w,v,u,t,s
if(f*13>d.tZ(0))throw B.c(A.eZ())
w=new Int8Array(2*f)
for(v=0;f>0;){u=d.e0(13)
t=((u/96|0)<<8|C.b.Y(u,96))>>>0
t=t<2560?t+41377:t+42657
w[v]=t>>>8&255
w[v+1]=t&255
v+=2;--f}s=$.buQ().c.d2(0,w)
e.a+=s},
bLU(d,e,f){var w,v,u,t,s
if(f*13>d.tZ(0))throw B.c(A.eZ())
w=new Int8Array(2*f)
for(v=0;f>0;){u=d.e0(13)
t=((u/192|0)<<8|C.b.Y(u,192))>>>0
t=t<7936?t+33088:t+49472
w[v]=t>>>8
w[v+1]=t
v+=2;--f}s=$.XM().c.d2(0,w)
e.a+=s},
bLS(d,e,f,g,h,i){var w,v,u
if(8*f>d.tZ(0))throw B.c(A.eZ())
w=new Int8Array(f)
for(v=0;v<f;++v)w[v]=d.e0(8)
u=(g==null?A.bS3(w,i).c:g.c).d2(0,w)
e.a+=u
h.push(w)},
auC(d){var w=$.bpy()
if(d>=w.length)throw B.c(A.eZ())
return w[d]},
bLR(d,e,f,g){var w,v,u,t,s,r
for(w=d.a.length;f>1;){if(8*(w-d.b)-d.c<11)throw B.c(A.eZ())
v=d.e0(11)
u=v/45|0
t=$.bpy()
s=t.length
if(u>=s)B.a8(A.eZ())
u=e.a+=t[u]
r=C.b.Y(v,45)
if(r>=s)B.a8(A.eZ())
e.a=u+t[r]
f-=2}if(f===1){if(d.tZ(0)<6)throw B.c(A.eZ())
w=A.auC(d.e0(6))
e.a+=w}},
bLV(d,e,f){var w,v,u,t,s,r,q,p
for(w=d.a.length;f>=3;){if(8*(w-d.b)-d.c<10)throw B.c(A.eZ())
v=d.e0(10)
if(v>=1000)throw B.c(A.eZ())
u=v/100|0
t=$.bpy()
s=t.length
if(u>=s)B.a8(A.eZ())
u=e.a+=t[u]
r=C.b.Y(v/10|0,10)
if(r>=s)B.a8(A.eZ())
u+=t[r]
e.a=u
r=C.b.Y(v,10)
if(r>=s)B.a8(A.eZ())
e.a=u+t[r]
f-=3}if(f===2){if(d.tZ(0)<7)throw B.c(A.eZ())
q=d.e0(7)
if(q>=100)throw B.c(A.eZ())
w=A.auC(q/10|0)
e.a+=w
w=A.auC(C.b.Y(q,10))
e.a+=w}else if(f===1){if(d.tZ(0)<4)throw B.c(A.eZ())
p=d.e0(4)
if(p>=10)throw B.c(A.eZ())
w=A.auC(p)
e.a+=w}},
bLW(d){var w=d.e0(8)
if((w&128)===0)return w&127
if((w&192)===128)return((w&63)<<8|d.e0(8))>>>0
if((w&224)===192)return((w&31)<<16|d.e0(16))>>>0
throw B.c(A.eZ())}},D
J=c[1]
B=c[0]
C=c[2]
E=c[6]
A=a.updateHolder(c[5],A)
D=c[7]
A.eR.prototype={
En(d){if(d instanceof A.eR)return d.a
else if(B.hy(d))return d
throw B.c(B.eF(d,"other","Not an int, Int32 or Int64"))},
a8(d,e){var w
if(e instanceof A.lt)return A.us(this.a).a8(0,e)
w=this.a+this.En(e)
return new A.eR((w&2147483647)-((w&2147483648)>>>0))},
ao(d,e){var w
if(e instanceof A.lt)return A.us(this.a).ao(0,e)
w=this.a-this.En(e)
return new A.eR((w&2147483647)-((w&2147483648)>>>0))},
aC(d,e){return A.us(this.a).aC(0,e).b7H()},
am6(d,e){var w=this.a&this.En(e)
return new A.eR((w&2147483647)-((w&2147483648)>>>0))},
vF(d,e){var w=this.a^this.En(e)
return new A.eR((w&2147483647)-((w&2147483648)>>>0))},
dM(d,e){var w
if(e<0)throw B.c(B.bi(e,null))
if(e>=32)return D.BG
w=C.b.dM(this.a,e)
return new A.eR((w&2147483647)-((w&2147483648)>>>0))},
a2s(d){var w,v
if(d<0)throw B.c(B.bi(d,null))
if(d>=32)return D.BG
w=this.a
v=w>=0?C.b.ml(w,d):C.b.ml(w,d)&C.b.dM(1,32-d)-1
return new A.eR((v&2147483647)-((v&2147483648)>>>0))},
k(d,e){if(e==null)return!1
if(e instanceof A.eR)return this.a===e.a
else if(e instanceof A.lt)return A.us(this.a).k(0,e)
else if(B.hy(e))return this.a===e
return!1},
br(d,e){if(e instanceof A.lt)return A.us(this.a).a5C(e)
return C.b.br(this.a,this.En(e))},
gC(d){return this.a},
j(d){return C.b.j(this.a)},
$icZ:1}
A.lt.prototype={
a8(d,e){var w=A.aB4(e),v=this.a+w.a,u=this.b+w.b+(v>>>22)
return new A.lt(v&4194303,u&4194303,this.c+w.c+(u>>>22)&1048575)},
ao(d,e){var w=A.aB4(e)
return A.byL(this.a,this.b,this.c,w.a,w.b,w.c)},
aC(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=A.aB4(a1),h=this.a,g=h&8191,f=this.b,e=h>>>13|(f&15)<<9,d=f>>>4&8191
h=this.c
w=f>>>17|(h&255)<<5
f=i.a
v=f&8191
u=i.b
t=f>>>13|(u&15)<<9
s=u>>>4&8191
f=i.c
r=u>>>17|(f&255)<<5
q=f>>>8&4095
p=g*v
o=e*v
n=d*v
m=w*v
l=(h>>>8&4095)*v
if(t!==0){o+=g*t
n+=e*t
m+=d*t
l+=w*t}if(s!==0){n+=g*s
m+=e*s
l+=d*s}if(r!==0){m+=g*r
l+=e*r}if(q!==0)l+=g*q
k=(p&4194303)+((o&511)<<13)
j=(p>>>22)+(o>>>9)+((n&262143)<<4)+((m&31)<<17)+(k>>>22)
return new A.lt(k&4194303,j&4194303,(n>>>18)+(m>>>5)+((l&4095)<<8)+(j>>>22)&1048575)},
k(d,e){var w,v=this
if(e==null)return!1
if(e instanceof A.lt)w=e
else if(B.hy(e)){if(v.c===0&&v.b===0)return v.a===e
if((e&4194303)===e)return!1
w=A.us(e)}else w=e instanceof A.eR?A.us(e.a):null
if(w!=null)return v.a===w.a&&v.b===w.b&&v.c===w.c
return!1},
br(d,e){return this.a5C(e)},
a5C(d){var w=A.aB4(d),v=this.c,u=v>>>19,t=w.c
if(u!==t>>>19)return u===0?1:-1
if(v>t)return 1
else if(v<t)return-1
v=this.b
t=w.b
if(v>t)return 1
else if(v<t)return-1
v=this.a
t=w.a
if(v>t)return 1
else if(v<t)return-1
return 0},
gC(d){var w=this.b
return(((w&1023)<<22|this.a)^(this.c<<12|w>>>10&4095))>>>0},
b7H(){var w=(this.b&1023)<<22|this.a
return new A.eR((w&2147483647)-((w&2147483648)>>>0))},
j(d){var w,v,u,t=this.a,s=this.b,r=this.c
if((r&524288)!==0){t=0-t
w=t&4194303
s=0-s-(C.b.R(t,22)&1)
v=s&4194303
r=0-r-(C.b.R(s,22)&1)&1048575
s=v
t=w
u="-"}else u=""
return A.bOi(10,t,s,r,u)},
$icZ:1}
A.as0.prototype={}
A.as1.prototype={
v5(){var w=this.b
return w==null?this.b=this.a.v5():w},
j(d){var w,v
try{w=this.v5().a4N("X ","  ","\n")
return w}catch(v){if(B.a4(v) instanceof A.E2)return""
else throw v}}}
A.Cb.prototype={
j(d){return"ChecksumException(inner: "+this.b.j(0)+")"}}
A.Z_.prototype={
d_(d,e,f){var w=f*this.c+C.b.b0(e,32),v=this.d
if(w<v.length){v=v[w]
v=!new A.eR((v&2147483647)-((v&2147483648)>>>0)).a2s(e&31).am6(0,1).k(0,0)}else v=!1
return v},
I6(d,e,f){var w,v=f*this.c+C.b.b0(e,32),u=this.d
if(v<u.length){w=u[v]
u.$flags&2&&B.u(u)
u[v]=(w|1<<(e&31))>>>0}},
Zm(d,e){var w,v=e*this.c+C.b.b0(d,32),u=this.d
if(v<u.length){w=u[v]
u.$flags&2&&B.u(u)
u[v]=(w^1<<(d&31))>>>0}},
t9(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<0||d<0)throw B.c(B.bi("Left and top must be nonnegative",null))
if(g<1||f<1)throw B.c(B.bi("Height and width must be at least 1",null))
w=d+f
v=e+g
if(v>m.b||w>m.a)throw B.c(B.bi("The region must fit inside the matrix",null))
for(u=m.d,t=u.$flags|0,s=m.c,r=e;r<v;++r){q=r*s
for(p=d;p<w;++p){o=q+C.b.b0(p,32)
n=u[o]
t&2&&B.u(u)
u[o]=(n|1<<(p&31))>>>0}}},
an2(){var w,v,u,t=this.d,s=t.length,r=0
for(;;){if(!(r<s&&t[r]===0))break;++r}if(r===s)return null
s=this.c
w=C.b.eE(r,s)
s=C.b.Y(r,s)
t=t[r]
v=new A.eR((t&2147483647)-((t&2147483648)>>>0))
for(u=0;v.dM(0,31-u).k(0,0);)++u
return B.b([s*32+u,w],x.t)},
amv(){var w,v,u,t,s=this.d,r=s.length-1
for(;;){if(!(r>=0&&s[r]===0))break;--r}if(r<0)return null
w=this.c
v=C.b.eE(r,w)
w=C.b.Y(r,w)
s=s[r]
u=new A.eR((s&2147483647)-((s&2147483648)>>>0))
for(t=31;u.a2s(t).k(0,0);)--t
return B.b([w*32+t,v],x.t)},
k(d,e){var w=this
if(e==null)return!1
if(!(e instanceof A.Z_))return!1
return w.a===e.a&&w.b===e.b&&w.c===e.c&&C.BT.kU(w.d,e.d)},
gC(d){var w=this,v=w.a
return 31*(31*(31*(31*v+v)+w.b)+w.c)+C.BT.jd(0,w.d)},
j(d){return this.a4N("X ","  ","\n")},
a4N(d,e,f){var w,v,u,t,s
for(w=this.b,v=this.a,u=0,t="";u<w;++u){for(s=0;s<v;++s)t+=this.d_(0,s,u)?d:e
t+=f}return t.charCodeAt(0)==0?t:t}}
A.as6.prototype={
e0(d){var w,v,u,t,s,r,q,p=this
if(d<1||d>32||d>p.tZ(0))throw B.c(B.bi("numBits: "+d,null))
w=p.c
if(w>0){v=8-w
u=Math.min(d,v)
t=v-u
s=C.b.dM(C.b.e4(255,8-u),t)
r=p.b
q=C.b.e4((p.a[r]&s)>>>0,t)
d-=u
w+=u
p.c=w
if(w===8){p.c=0
p.b=r+1}}else q=0
if(d>0){for(w=p.a;d>=8;){r=p.b
q=(q<<8|w[r]&255)>>>0
p.b=r+1
d-=8}if(d>0){t=8-d
s=C.b.dM(C.b.e4(255,t),t)
q=(C.b.dM(q,d)|C.b.e4((w[p.b]&s)>>>0,t))>>>0
p.c+=d}}return q},
tZ(d){return 8*(this.a.length-this.b)-this.c}}
A.Jd.prototype={}
A.auG.prototype={}
A.auI.prototype={
an6(d,e,f,g){var w,v,u,t,s,r,q,p
if(e<=0||f<=0)throw B.c(A.i0())
w=A.Z0(e,f)
v=B.bR(2*e,0,!1,x.i)
for(u=0;u<f;++u){t=J.bQ(v)
r=u+0.5
for(q=0;q<t;q+=2){J.bJ(v,q,q/2+0.5)
J.bJ(v,q+1,r)}g.b7U(v)
A.bNM(d,v)
try{for(s=0;s<t;s+=2)if(d.d_(0,C.e.K(J.t(v,s)),C.e.K(J.t(v,s+1))))J.bJT(w,C.e.b0(s,2),u)}catch(p){if(x.G.b(B.a4(p)))throw B.c(A.i0())
else throw p}}return w}}
A.auW.prototype={}
A.Ll.prototype={
v5(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.a,j=k.a,i=k.b,h=A.Z0(j,i)
l.aIK(j)
w=l.c
for(v=w.$flags|0,u=j*4,t=1;t<5;++t){s=k.a1J(C.b.b0(i*t,5),l.b)
r=C.b.b0(u,5)
for(q=C.b.b0(j,5);q<r;++q){p=C.b.e4(s[q]&255,$.bv1())
o=w[p]
v&2&&B.u(w)
w[p]=o+1}}n=A.bNK(w)
s=k.a1C()
for(t=0;t<i;++t){m=t*j
for(q=0;q<j;++q)if((s[m+q]&255)<n)h.I6(0,q,t)}return h},
aIK(d){var w,v,u
if(this.b.length<d)this.b=new Int8Array(d)
for(w=this.c,v=w.$flags|0,u=0;u<$.bpA();++u){v&2&&B.u(w)
w[u]=0}}}
A.azp.prototype={}
A.aAi.prototype={
v5(){var w,v,u,t,s,r,q,p,o=this,n=o.e
if(n!=null)return n
w=o.a
v=w.a
u=w.b
n=$.bGA()
if(v>=n&&u>=n){t=w.a1C()
s=C.b.R(v,3)
n=$.bGz()
if((v&n)>>>0!==0)++s
r=C.b.R(u,3)
if((u&n)>>>0!==0)++r
q=A.bO1(t,s,r,v,u)
p=A.Z0(v,u)
A.bO2(t,s,r,v,u,q,p)
o.e=p
n=p}else n=o.e=o.aqo()
return n}}
A.Ni.prototype={
b7U(d){var w,v,u,t,s,r=this,q=r.a,p=r.b,o=r.c,n=r.d,m=r.e,l=r.f,k=r.r,j=r.w,i=r.x,h=d.length-1
for(w=0;w<h;w+=2){v=d[w]
u=w+1
t=d[u]
s=o*v+l*t+i
d[w]=(q*v+n*t+k)/s
d[u]=(p*v+m*t+j)/s}}}
A.ayG.prototype={
auQ(d,e,f){var w,v,u,t,s,r,q,p=this
for(w=p.e,v=p.a,u=v.$flags|0,t=p.f,s=w-1,r=1,q=0;q<w;++q){u&2&&B.u(v)
v[q]=r
r*=2
if(r>=w)r=((r^t)&s)>>>0}for(w=p.b,u=w.$flags|0,q=0;q<s;++q){t=v[q]
u&2&&B.u(w)
w[t]=q}w=x.t
v=A.ua(p,new Int32Array(B.bA(B.b([0],w))))
p.c!==$&&B.be()
p.c=v
w=A.ua(p,new Int32Array(B.bA(B.b([1],w))))
p.d!==$&&B.be()
p.d=w},
afr(d,e){var w,v
if(d<0)throw B.c(B.bi(null,null))
if(e===0){w=this.c
w===$&&B.a()
return w}v=new Int32Array(d+1)
v[0]=e
return A.ua(this,v)},
b22(d,e){if(e===0)throw B.c(B.bi(null,null))
return this.a[this.e-this.b[e]-1]},
rO(d,e,f){var w
if(e===0||f===0)return 0
w=this.b
return this.a[C.b.Y(w[e]+w[f],this.e-1)]},
j(d){return"GF(0x"+C.b.l3(this.f,16)+","+this.e+")"}}
A.a2m.prototype={
auR(d,e){var w,v,u=this,t=e.length
if(t===0)throw B.c(B.bi(null,null))
if(t>1&&e[0]===0){w=1
for(;;){if(!(w<t&&e[w]===0))break;++w}if(w===t){t=new Int32Array(B.bA(B.b([0],x.t)))
u.b!==$&&B.be()
u.b=t}else{t-=w
v=new Int32Array(t)
u.b!==$&&B.be()
u.b=v
C.bM.d5(v,0,t,e,w)}}else{u.b!==$&&B.be()
u.b=e}},
Qw(d){var w=this.b
w===$&&B.a()
return w[w.length-1-d]},
Z7(d){var w,v,u,t,s,r,q,p,o,n=this
if(d===0)return n.Qw(0)
if(d===1){w=n.b
w===$&&B.a()
v=w.length
u=0
t=0
for(;t<v;++t){s=w[t]
u=new A.eR((u&2147483647)-((u&2147483648)>>>0)).vF(0,new A.eR((s&2147483647)-((s&2147483648)>>>0))).a}return u}w=n.b
w===$&&B.a()
u=w[0]
r=w.length
for(v=n.a,q=1;q<r;++q){p=v.rO(0,d,u)
o=w[q]
u=new A.eR((p&2147483647)-((p&2147483648)>>>0)).vF(0,new A.eR((o&2147483647)-((o&2147483648)>>>0))).a}return u},
Xh(d){var w,v,u,t,s,r,q,p,o=this.a
if(o!==d.a)throw B.c(B.bi(y.c,null))
w=this.b
w===$&&B.a()
if(w[0]===0)return d
v=d.b
v===$&&B.a()
if(v[0]===0)return this
if(w.length>v.length){u=w
t=v}else{u=v
t=w}w=u.length
s=new Int32Array(w)
r=w-t.length
C.bM.d5(s,0,r,u,0)
for(q=r;q<w;++q){v=t[q-r]
p=u[q]
s[q]=new A.eR((v&2147483647)-((v&2147483648)>>>0)).vF(0,new A.eR((p&2147483647)-((p&2147483648)>>>0))).a}return A.ua(o,s)},
fP(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this.a
if(l!==e.a)throw B.c(B.bi(y.c,null))
w=this.b
w===$&&B.a()
if(w[0]!==0){v=e.b
v===$&&B.a()
v=v[0]===0}else v=!0
if(v){l=l.c
l===$&&B.a()
return l}u=w.length
v=e.b
v===$&&B.a()
t=v.length
s=new Int32Array(u+t-1)
for(r=0;r<u;++r){q=w[r]
for(p=0;p<t;++p){o=r+p
n=s[o]
m=l.rO(0,q,v[p])
s[o]=new A.eR((n&2147483647)-((n&2147483648)>>>0)).vF(0,new A.eR((m&2147483647)-((m&2147483648)>>>0))).a}}return A.ua(l,s)},
ajN(d){var w,v,u,t,s,r=this
if(d===0){w=r.a.c
w===$&&B.a()
return w}if(d===1)return r
w=r.b
w===$&&B.a()
v=w.length
u=new Int32Array(v)
for(t=r.a,s=0;s<v;++s)u[s]=t.rO(0,w[s],d)
return A.ua(t,u)},
b3I(d,e){var w,v,u,t,s
if(d<0)throw B.c(B.bi(null,null))
if(e===0){w=this.a.c
w===$&&B.a()
return w}w=this.b
w===$&&B.a()
v=w.length
u=new Int32Array(v+d)
for(t=this.a,s=0;s<v;++s)u[s]=t.rO(0,w[s],e)
return A.ua(t,u)},
j(d){var w,v,u,t,s,r,q,p,o=this.b
o===$&&B.a()
if(o[0]===0)return"0"
w=new B.dD("")
for(v=o.length-1,u=this.a.b,t=v;t>=0;--t){s=o[v-t]
if(s!==0){if(s<0){r=w.a
if(t===v){r+="-"
w.a=r}else{r+=" - "
w.a=r}s=-s}else{r=w.a
if(r.length>0){r+=" + "
w.a=r}}q=t!==0
if(!q||s!==1){if(s===0)B.a8(B.bi(null,null))
p=u[s]
if(p===0){r+="1"
w.a=r}else if(p===1){r+="a"
w.a=r}else{r+="a^"
w.a=r
r+=p
w.a=r}}if(q)if(t===1)w.a=r+"x"
else{r+="x^"
w.a=r
w.a=r+t}}}o=w.a
return o.charCodeAt(0)==0?o:o}}
A.aMv.prototype={
Nd(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a,f=A.ua(g,a0),e=new Int32Array(a1)
for(w=g.r,v=g.a,u=a1-1,t=!0,s=0;s<a1;++s){r=f.Z7(v[s+w])
e[u-s]=r
if(r!==0)t=!1}if(t)return
q=A.ua(g,e)
p=h.b7r(g.afr(a1,1),q,a1)
o=p[0]
n=p[1]
m=h.b_P(o)
l=h.b_Q(n,m)
for(w=m.length,v=a0.$flags|0,u=a0.length-1,s=0;s<w;++s){k=m[s]
if(k===0)B.a8(B.bi(null,null))
j=u-g.b[k]
if(j<0)throw B.c(A.aMw("Bad error location"))
k=a0[j]
i=l[s]
i=new A.eR((k&2147483647)-((k&2147483648)>>>0)).vF(0,new A.eR((i&2147483647)-((i&2147483648)>>>0)))
v&2&&B.u(a0)
a0[j]=i.a}},
b7r(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a0.b
d===$&&B.a()
w=a1.b
w===$&&B.a()
if(d.length-1<w.length-1){v=a1
a1=a0
a0=v}d=this.a
w=d.c
w===$&&B.a()
u=d.d
u===$&&B.a()
t=a2/2
s=u
r=w
q=a1
p=a0
for(;;){u=q.b
u===$&&B.a()
o=u.length-1
if(!(o>=t))break
if(u[0]===0)throw B.c(A.aMw("r_{i-1} was zero"))
n=u[o-o]
if(n===0)B.a8(B.bi(null,null))
m=d.a[d.e-d.b[n]-1]
l=w
k=p
for(;;){o=k.b
o===$&&B.a()
j=o.length-1
i=u.length-1
if(!(j>=i&&o[0]!==0))break
h=j-i
g=d.rO(0,o[j-j],m)
l=l.Xh(d.afr(h,g))
k=k.Xh(q.b3I(h,g))}j=l.fP(0,s).Xh(r)
if(o.length-1>=u.length-1)throw B.c(B.az("Division algorithm failed to reduce polynomial?"))
r=s
s=j
p=q
q=k}f=s.Qw(0)
if(f===0)throw B.c(A.aMw("sigmaTilde(0) was zero"))
e=d.b22(0,f)
return B.b([s.ajN(e),q.ajN(e)],x.F)},
b_P(d){var w,v,u,t,s,r=d.b
r===$&&B.a()
w=r.length-1
if(w===1)return new Int32Array(B.bA(B.b([d.Qw(1)],x.t)))
v=new Int32Array(w)
r=this.a
u=r.e
t=0
s=1
for(;;){if(!(s<u&&t<w))break
if(d.Z7(s)===0){if(s===0)B.a8(B.bi(null,null))
v[t]=r.a[u-r.b[s]-1];++t}++s}if(t!==w)throw B.c(A.aMw("Error locator degree does not match number of roots ("+t+" != "+w+")"))
return v},
b_Q(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.length,j=new Int32Array(k)
for(w=this.a,v=w.r!==0,u=0;u<k;++u){t=e[u]
if(t===0)B.a8(B.bi(l,l))
s=w.a
r=w.e
q=w.b
p=s[r-q[t]-1]
for(o=1,n=0;n<k;++n)if(u!==n){m=w.rO(0,e[n],p)
o=w.rO(0,o,(m&1)===0?(m|1)>>>0:(m&4294967294)>>>0)}t=d.Z7(p)
if(o===0)B.a8(B.bi(l,l))
j[u]=w.rO(0,t,s[r-q[o]-1])
if(v)j[u]=w.rO(0,j[u],p)}return j}}
A.NX.prototype={
j(d){return"ReedSolomonException("+this.a+")"},
$ic2:1}
A.u0.prototype={}
A.auA.prototype={}
A.D4.prototype={}
A.aD9.prototype={
j(d){var w,v,u,t,s,r,q=this.a,p=new Int8Array(q)
for(w=this.b,v=0,u="";v<w;++v){p=this.a1J(v,p)
for(t=0;t<q;++t){s=p[t]&255
if(s<64)r="#"
else if(s<128)r="+"
else r=s<192?".":" "
u+=r}u+="\n"}return u.charCodeAt(0)==0?u:u}}
A.E2.prototype={}
A.as5.prototype={
a0l(){var w,v,u,t,s,r,q,p=this,o=p.c
if(o!=null)return o
for(o=p.a,w=0,v=0;v<6;++v){u=p.d?o.d_(0,8,v):o.d_(0,v,8)
w=w<<1>>>0
if(u)w=(w|1)>>>0}w=p.SK(8,7,p.SK(8,8,p.SK(7,8,w)))
for(t=5;t>=0;--t){u=p.d?o.d_(0,t,8):o.d_(0,8,t)
w=w<<1>>>0
if(u)w=(w|1)>>>0}s=o.b
r=s-7
for(t=s-1,q=0;t>=r;--t){u=p.d?o.d_(0,t,8):o.d_(0,8,t)
q=q<<1>>>0
if(u)q=(q|1)>>>0}for(v=s-8;v<s;++v){u=p.d?o.d_(0,8,v):o.d_(0,v,8)
q=q<<1>>>0
if(u)q=(q|1)>>>0}o=p.c=A.bNB(w,q)
if(o!=null)return o
throw B.c(A.eZ())},
a0p(){var w,v,u,t,s,r,q,p,o,n=this,m=n.b
if(m!=null)return m
m=n.a
w=m.b
v=C.b.b0(w-17,4)
if(v<=6)return A.bsI(v)
u=w-11
for(t=w-9,s=0,r=5;r>=0;--r)for(q=t;q>=u;--q){p=n.d?m.d_(0,r,q):m.d_(0,q,r)
s=s<<1>>>0
if(p)s=(s|1)>>>0}o=A.bBE(s)
if(o!=null&&17+4*o.a===w)return n.b=o
for(s=0,q=5;q>=0;--q)for(r=t;r>=u;--r){p=n.d?m.d_(0,r,q):m.d_(0,q,r)
s=s<<1>>>0
if(p)s=(s|1)>>>0}o=A.bBE(s)
if(o!=null&&17+4*o.a===w)return n.b=o
throw B.c(A.eZ())},
SK(d,e,f){var w=this.a,v=this.d?w.d_(0,e,d):w.d_(0,d,e)
w=f<<1>>>0
return v?(w|1)>>>0:w},
b6k(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a0l(),i=this.a0p(),h=this.a,g=h.b
$.buT()[j.b].alF(h,g)
w=i.aVQ()
v=i.d
v===$&&B.a()
u=new Int8Array(v)
for(t=g-1,s=t,r=!0,q=0,p=0,o=0;s>0;s-=2){if(s===6)--s
for(n=0;n<g;++n){m=r?t-n:n
for(l=0;l<2;++l){v=s-l
if(!w.d_(0,v,m)){++o
p=p<<1>>>0
if(h.d_(0,v,m))p=(p|1)>>>0
if(o===8){k=q+1
u[q]=p
q=k
p=0
o=0}}}}r=C.hD.vF(r,!0)}if(q!==i.d)throw B.c(A.eZ())
return u},
b6J(){var w,v=this.c
if(v==null)return
w=this.a
$.buT()[v.b].alF(w,w.b)},
b3A(){var w,v,u,t,s,r
for(w=this.a,v=w.a,u=w.b,t=0;t<v;t=s)for(s=t+1,r=s;r<u;++r)if(w.d_(0,t,r)!==w.d_(0,r,t)){w.Zm(r,t)
w.Zm(t,r)}}}
A.a0X.prototype={}
A.a0Y.prototype={
alF(d,e){var w,v,u
for(w=this.a,v=0;v<e;++v)for(u=0;u<e;++u)if(w.$2(v,u))d.Zm(u,v)}}
A.auE.prototype={
agB(d,e,f){var w,v,u,t,s,r,q,p,o=e.b
if(o<21||(o&3)!==1)B.a8(A.eZ())
w=new A.as5(e)
v=null
u=null
try{q=this.a64(w,f)
return q}catch(p){q=B.a4(p)
if(q instanceof A.D4){t=q
v=t}else if(q instanceof A.Cb){s=q
u=s}else throw p}try{w.b6J()
q=w
q.c=q.b=null
q.d=!0
w.a0p()
w.a0l()
w.b3A()
r=this.a64(w,f)
r.w=new A.a7D(!0)
return r}catch(p){q=B.a4(p)
if(q instanceof A.D4){if(v!=null)throw B.c(v)
q=u
q.toString
throw B.c(q)}else if(q instanceof A.Cb){if(v!=null)throw B.c(v)
q=u
q.toString
throw B.c(q)}else throw p}},
a64(d,e){var w,v,u,t,s,r,q,p,o,n,m=d.a0p(),l=d.a0l().a,k=A.bLC(d.b6k(),m,l)
for(w=k.length,v=0,u=0;u<w;++u)v+=k[u].a
t=new Int8Array(v)
for(s=0,u=0;u<k.length;k.length===w||(0,B.O)(k),++u){r=k[u]
q=r.b
p=r.a
this.azf(q,p)
for(o=0;o<p;++o,s=n){n=s+1
t[s]=q[o]}}return A.bLX(t,m,l,e)},
azf(d,e){var w,v,u,t,s,r=d.length,q=new Int32Array(r)
for(v=0;v<r;++v)J.bJ(q,v,d[v]&255)
try{this.a.Nd(0,q,r-e)}catch(u){t=B.a4(u)
if(t instanceof A.NX){w=t
throw B.c(new A.Cb(w))}else throw u}for(t=d.$flags|0,v=0;v<e;++v){s=J.t(q,v)
t&2&&B.u(d)
d[v]=s}}}
A.a1L.prototype={
j(d){return this.c}}
A.Lf.prototype={
gC(d){return(this.a.a<<3|this.b)>>>0},
k(d,e){if(e==null)return!1
if(!(e instanceof A.Lf))return!1
return this.a===e.a&&this.b===e.b}}
A.mx.prototype={
L(){return"Mode."+this.b},
j(d){return this.c},
a1s(d){var w,v=d.a
if(v<=9)w=0
else w=v<=26?1:2
return this.d[w]}}
A.a7D.prototype={
aVp(d){var w,v=d.length<3
if(v)return
w=d[0]
v=d[2]
d.$flags&2&&B.u(d)
d[0]=v
d[2]=w}}
A.ab4.prototype={
avr(d,e,f){var w,v,u,t=this.c[0],s=t.a,r=t.b
for(t=r.length,w=0,v=0;v<t;++v){u=r[v]
w+=u.a*(u.b+s)}this.d=w},
aVQ(){var w,v,u,t,s,r,q,p,o,n=this.a,m=17+4*n,l=A.Z0(m,null)
l.t9(0,0,9,9)
w=m-8
l.t9(w,0,8,9)
l.t9(0,w,9,8)
w=this.b
v=w.length
for(u=v-1,t=0;t<v;++t){s=w[t]-2
for(r=t===0,q=t===u,p=0;p<v;++p){if(r)o=p!==0&&p!==u
else o=!0
if(o)o=!q||p!==0
else o=!1
if(o)l.t9(w[p]-2,s,5,5)}}w=m-17
l.t9(6,9,1,w)
l.t9(9,6,w,1)
if(n>6){n=m-11
l.t9(n,0,3,6)
l.t9(0,n,6,3)}return l},
j(d){return""+this.a}}
A.a1E.prototype={
j(d){return"ECBlocks("+B.y(this.b)+", "+this.a+")"}}
A.a1D.prototype={
j(d){return"ECB("+this.a+", "+this.b+")"}}
A.BJ.prototype={
X8(d,e,f){var w,v
if(Math.abs(e-this.b)<=d&&Math.abs(f-this.a)<=d){w=this.c
v=Math.abs(d-w)
return v<=1||v<=w}return!1}}
A.aqF.prototype={
b_M(d){var w,v,u,t,s,r,q,p=this,o=p.c,n=p.f,m=o+p.e,l=p.d+C.b.b0(n,2),k=new Int32Array(3)
for(w=p.a,v=0;v<n;v=u){u=v+1
t=l+((v&1)===0?C.b.b0(u,2):-C.b.b0(u,2))
k[0]=0
k[1]=0
k[2]=0
s=o
for(;;){if(!(s<m&&!w.d_(0,s,t)))break;++s}for(r=0;s<m;){if(w.d_(0,s,t))if(r===1)k[1]=k[1]+1
else if(r===2){if(p.TK(k)){q=p.a8p(k,t,s)
if(q!=null)return q}k[0]=k[2]
k[1]=1
k[2]=0
r=1}else{++r
k[r]=k[r]+1}else{if(r===1)++r
k[r]=k[r]+1}++s}if(p.TK(k)){q=p.a8p(k,t,m)
if(q!=null)return q}}w=p.b
if(w.length!==0)return w[0]
throw B.c(A.i0())},
TK(d){var w,v=this.r,u=v/2
for(w=0;w<3;++w)if(Math.abs(v-d[w])>=u)return!1
return!0},
azD(d,e,f,g){var w,v,u=this.a,t=u.b,s=this.w
s.$flags&2&&B.u(s)
s[0]=0
s[1]=0
s[2]=0
w=d
for(;;){if(!(w>=0&&u.d_(0,e,w)&&s[1]<=f))break
s[1]=s[1]+1;--w}if(w<0||s[1]>f)return 0/0
for(;;){if(!(w>=0&&!u.d_(0,e,w)&&s[0]<=f))break
s[0]=s[0]+1;--w}if(s[0]>f)return 0/0
w=d+1
for(;;){if(!(w<t&&u.d_(0,e,w)&&s[1]<=f))break
s[1]=s[1]+1;++w}if(w===t||s[1]>f)return 0/0
for(;;){if(!(w<t&&!u.d_(0,e,w)&&s[2]<=f))break
s[2]=s[2]+1;++w}v=s[2]
if(v>f)return 0/0
if(5*Math.abs(s[0]+s[1]+v-g)>=2*g)return 0/0
return this.TK(s)?A.bwp(s,w):0/0},
a8p(d,e,f){var w,v,u,t=d[0],s=d[1],r=d[2],q=A.bwp(d,f),p=this.azD(e,C.e.K(q),2*d[1],t+s+r)
if(!isNaN(p)){w=(d[0]+d[1]+d[2])/3
for(t=this.b,s=t.length,v=0;v<s;++v){u=t[v]
if(u.X8(w,p,q))return new A.BJ((u.c+w)/2,(u.a+q)/2,(u.b+p)/2)}t.push(new A.BJ(w,q,p))}return null}}
A.auV.prototype={
b5X(c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=c1.b,b8=c1.c,b9=c1.a,c0=(b6.a4T(b7,b8)+b6.a4T(b7,b9))/2
if(c0<1)throw B.c(A.i0())
s=A.bM4(b7,b8,b9,c0)
r=A.bTB(s)
w=null
if(r.b.length!==0){q=b7.a
p=b7.b
o=1-3/(17+4*r.a-7)
v=C.e.K(q+o*(b8.a-q+b9.a-q))
u=C.e.K(p+o*(b8.b-p+b9.b-p))
for(t=4,q=b6.a,p=x.f,n=q.b-1,m=q.a-1;t<=16;t=t<<1>>>0)try{l=c0
k=v
j=u
i=C.e.K(t*l)
h=Math.max(0,k-i)
k=Math.min(m,k+i)-h
g=l*3
if(k<g)B.a8(A.i0())
f=Math.max(0,j-i)
j=Math.min(n,j+i)-f
if(j<g)B.a8(A.i0())
g=b6.b
e=B.b([],p)
w=new A.aqF(q,e,h,f,k,j,l,new Int32Array(3),g).b_M(0)
break}catch(d){if(!(B.a4(d) instanceof A.E2))throw d}}q=w
a0=s-3.5
if(q!=null){a1=q.a
a2=q.b
a3=a0-3
a4=a3}else{a1=b8.a-b7.a+b9.a
a2=b8.b-b7.b+b9.b
a4=a0
a3=a4}q=A.bA0(3.5,3.5,a0,3.5,a3,a4,3.5,a0)
p=q.e
n=q.x
m=q.f
l=q.w
k=p*n-m*l
j=q.r
g=q.d
e=m*j-g*n
a5=g*l-p*j
a6=q.c
a7=q.b
a8=a6*l-a7*n
q=q.a
n=q*n-a6*j
l=a7*j-q*l
j=a7*m-a6*p
m=a6*g-q*m
g=q*p-a7*g
a9=A.bA0(b7.a,b7.b,b8.a,b8.b,a1,a2,b9.a,b9.b)
a7=a9.a
p=a9.d
q=a9.r
a6=a9.b
b0=a9.e
b1=a9.w
b2=a9.c
b3=a9.f
b4=a9.x
b5=$.bGy().an6(b6.a,s,s,new A.Ni(a7*k+p*a8+q*j,a6*k+b0*a8+b1*j,b2*k+b3*a8+b4*j,a7*e+p*n+q*m,a6*e+b0*n+b1*m,b2*e+b3*n+b4*m,a7*a5+p*l+q*g,a6*a5+b0*l+b1*g,b2*a5+b3*l+b4*g))
q=x.S
return new A.auW(b5,w==null?B.b([b9,b7,b8],q):B.b([b9,b7,b8,w],q))},
a4T(d,e){var w=C.e.K(d.a),v=C.e.K(d.b),u=C.e.K(e.a),t=C.e.K(e.b),s=this.acf(w,v,u,t),r=this.acf(u,t,w,v)
if(isNaN(s))return r/7
if(isNaN(r))return s/7
return(s+r)/14},
acf(d,e,f,g){var w,v,u,t,s,r=this,q=r.ace(d,e,f,g),p=d-(f-d)
if(p<0){w=d/(d-p)
p=0}else{v=r.a.a
if(p>=v){u=v-1
w=(u-d)/(p-d)
p=u}else w=1}t=C.e.K(e-(g-e)*w)
if(t<0){w=e/(e-t)
t=0}else{v=r.a.b
if(t>=v){s=v-1
w=(s-e)/(t-e)
t=s}else w=1}return q+r.ace(d,e,C.e.K(d+(p-d)*w),t)-1},
ace(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=Math.abs(g-e)>Math.abs(f-d)
if(i){w=g
g=f
f=w
w=e
e=d
d=w}v=Math.abs(f-d)
u=Math.abs(g-e)
t=C.b.b0(-v,2)
s=d<f?1:-1
r=e<g?1:-1
q=f+s
for(p=this.a,o=e,n=d,m=0;n!==q;n+=s){l=i?o:n
if(m===1===p.d_(0,l,i?n:o)){if(m===2){k=n-d
j=o-e
return Math.sqrt(k*k+j*j)}++m}t+=u
if(t>0){if(o===g)break
o+=r
t-=v}}if(m===2)return A.Mx(q,g,d,e)
return 0/0}}
A.ml.prototype={
X8(d,e,f){var w,v
if(Math.abs(e-this.b)<=d&&Math.abs(f-this.a)<=d){w=this.c
v=Math.abs(d-w)
return v<=1||v<=w}return!1}}
A.a2_.prototype={
b_N(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.a.aA(0,$.bGh()),a5=a3.a,a6=a5.b,a7=a5.a,a8=C.b.b0(3*a6,388)
if(a8<3||a4)a8=3
w=new Int32Array(5)
v=a8-1
u=a7-1
t=!1
for(;;){if(!(v<a6&&!t))break
A.a20(w)
for(s=0,r=0;r<a7;++r){q=3
if(a5.d_(0,r,v)){if((s&1)===1)++s
w[s]=w[s]+1}else if((s&1)===0)if(s===4)if(A.axB(w)){if(a3.a6Z(w,v,r))if(a3.c)t=a3.a8J()
else{p=a3.aC6()
o=w[2]
if(p>o){v+=p-o-2
r=u}}else{A.by3(w)
s=q
continue}A.a20(w)
a8=2
s=0}else{A.by3(w)
s=q}else{++s
w[s]=w[s]+1}else w[s]=w[s]+1}if(A.axB(w))if(a3.a6Z(w,v,a7)){a8=w[0]
if(a3.c)t=a3.a8J()}v+=a8}n=a3.aQ_()
a5=n.a
o=J.av(a5)
m=n.$ti
l=m.y[1]
k=l.a(o.h(a5,0))
j=l.a(o.h(a5,1))
i=A.Mx(k.a,k.b,j.a,j.b)
j=l.a(o.h(a5,1))
k=l.a(o.h(a5,2))
h=A.Mx(j.a,j.b,k.a,k.b)
k=l.a(o.h(a5,0))
j=l.a(o.h(a5,2))
g=A.Mx(k.a,k.b,j.a,j.b)
if(h>=i&&h>=g){f=l.a(o.h(a5,0))
e=l.a(o.h(a5,1))
d=l.a(o.h(a5,2))}else if(g>=h&&g>=i){f=l.a(o.h(a5,1))
e=l.a(o.h(a5,0))
d=l.a(o.h(a5,2))}else{f=l.a(o.h(a5,2))
e=l.a(o.h(a5,0))
d=l.a(o.h(a5,1))}a0=f.a
a1=f.b
if((d.a-a0)*(e.b-a1)-(d.b-a1)*(e.a-a0)<0){a2=d
d=e
e=a2}m=m.c
o.l(a5,0,m.a(e))
o.l(a5,1,m.a(f))
o.l(a5,2,m.a(d))
return new A.axC(l.a(o.h(a5,0)),l.a(o.h(a5,1)),l.a(o.h(a5,2)))},
azB(d,e){var w,v,u,t,s,r,q,p=this.d
A.a20(p)
w=p.$flags|0
v=this.a
u=0
for(;;){if(!(d>=u&&e>=u&&v.d_(0,e-u,d-u)))break
t=p[2]
w&2&&B.u(p)
p[2]=t+1;++u}if(p[2]===0)return!1
for(;;){if(!(d>=u&&e>=u&&!v.d_(0,e-u,d-u)))break
t=p[1]
w&2&&B.u(p)
p[1]=t+1;++u}if(p[1]===0)return!1
for(;;){if(!(d>=u&&e>=u&&v.d_(0,e-u,d-u)))break
t=p[0]
w&2&&B.u(p)
p[0]=t+1;++u}if(p[0]===0)return!1
s=v.b
r=v.a
u=1
for(;;){t=d+u
if(t<s){q=e+u
t=q<r&&v.d_(0,q,t)}else t=!1
if(!t)break
t=p[2]
w&2&&B.u(p)
p[2]=t+1;++u}for(;;){t=d+u
if(t<s){q=e+u
t=q<r&&!v.d_(0,q,t)}else t=!1
if(!t)break
t=p[3]
w&2&&B.u(p)
p[3]=t+1;++u}if(p[3]===0)return!1
for(;;){t=d+u
if(t<s){q=e+u
t=q<r&&v.d_(0,q,t)}else t=!1
if(!t)break
t=p[4]
w&2&&B.u(p)
p[4]=t+1;++u}if(p[4]===0)return!1
return A.bNe(p)},
aC7(d,e,f,g){var w,v,u,t=this.a,s=t.b,r=this.d
A.a20(r)
w=r.$flags|0
v=d
for(;;){if(!(v>=0&&t.d_(0,e,v)))break
u=r[2]
w&2&&B.u(r)
r[2]=u+1;--v}if(v<0)return 0/0
for(;;){if(!(v>=0&&!t.d_(0,e,v)&&r[1]<=f))break
u=r[1]
w&2&&B.u(r)
r[1]=u+1;--v}if(v<0||r[1]>f)return 0/0
for(;;){if(!(v>=0&&t.d_(0,e,v)&&r[0]<=f))break
u=r[0]
w&2&&B.u(r)
r[0]=u+1;--v}if(r[0]>f)return 0/0
v=d+1
for(;;){if(!(v<s&&t.d_(0,e,v)))break
u=r[2]
w&2&&B.u(r)
r[2]=u+1;++v}if(v===s)return 0/0
for(;;){if(!(v<s&&!t.d_(0,e,v)&&r[3]<f))break
u=r[3]
w&2&&B.u(r)
r[3]=u+1;++v}if(v===s||r[3]>=f)return 0/0
for(;;){if(!(v<s&&t.d_(0,e,v)&&r[4]<f))break
u=r[4]
w&2&&B.u(r)
r[4]=u+1;++v}w=r[4]
if(w>=f)return 0/0
if(5*Math.abs(r[0]+r[1]+r[2]+r[3]+w-g)>=2*g)return 0/0
return A.axB(r)?A.bqZ(r,v):0/0},
azC(d,e,f,g){var w,v,u,t=this.a,s=t.a,r=this.d
A.a20(r)
w=r.$flags|0
v=d
for(;;){if(!(v>=0&&t.d_(0,v,e)))break
u=r[2]
w&2&&B.u(r)
r[2]=u+1;--v}if(v<0)return 0/0
for(;;){if(!(v>=0&&!t.d_(0,v,e)&&r[1]<=f))break
u=r[1]
w&2&&B.u(r)
r[1]=u+1;--v}if(v<0||r[1]>f)return 0/0
for(;;){if(!(v>=0&&t.d_(0,v,e)&&r[0]<=f))break
u=r[0]
w&2&&B.u(r)
r[0]=u+1;--v}if(r[0]>f)return 0/0
v=d+1
for(;;){if(!(v<s&&t.d_(0,v,e)))break
u=r[2]
w&2&&B.u(r)
r[2]=u+1;++v}if(v===s)return 0/0
for(;;){if(!(v<s&&!t.d_(0,v,e)&&r[3]<f))break
u=r[3]
w&2&&B.u(r)
r[3]=u+1;++v}if(v===s||r[3]>=f)return 0/0
for(;;){if(!(v<s&&t.d_(0,v,e)&&r[4]<f))break
u=r[4]
w&2&&B.u(r)
r[4]=u+1;++v}w=r[4]
if(w>=f)return 0/0
if(5*Math.abs(r[0]+r[1]+r[2]+r[3]+w-g)>=g)return 0/0
return A.axB(r)?A.bqZ(r,v):0/0},
a6Z(d,e,f){var w,v,u,t,s,r,q,p=this,o=d[0]+d[1]+d[2]+d[3]+d[4],n=C.e.K(A.bqZ(d,f)),m=p.aC7(e,n,d[2],o)
if(!isNaN(m)){w=C.e.K(m)
v=p.azC(n,w,d[2],o)
if(!isNaN(v)&&p.azB(w,C.e.K(v))){u=o/7
n=p.b
w=n.length
s=0
for(;;){if(!(s<w)){t=!1
break}r=n[s]
if(r.X8(u,m,v)){w=r.d
q=w+1
n[s]=new A.ml((w*r.c+u)/q,q,(w*r.a+v)/q,(w*r.b+m)/q)
t=!0
break}++s}if(!t)n.push(new A.ml(u,1,v,m))
return!0}}return!1},
aC6(){var w,v,u,t=this.b,s=t.length
if(s<=1)return 0
for(w=null,v=0;v<s;++v){u=t[v]
if(u.d>=2){if(w!=null){this.c=!0
return C.e.b0(Math.abs(w.a-u.a)-Math.abs(w.b-u.b),2)}w=u}}return 0},
a8J(){var w,v,u,t,s,r,q=this.b,p=q.length
for(w=0,v=0,u=0;u<p;++u){t=q[u]
if(t.d>=2){++w
v+=t.c}}if(w<3)return!1
s=v/p
for(r=0,u=0;u<p;++u)r+=Math.abs(q[u].c-s)
return r<=0.05*v},
aQ_(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this.b
if(a8.length<3)throw B.c(A.i0())
C.d.dW(a8,this.gayG())
w=B.bR(3,null,!1,x.l)
for(v=a8.length,u=v-2,t=v-1,s=17976931348623157e292,r=0;r<u;r=p){q=a8[r]
for(p=r+1,o=q.a,n=q.b,m=q.c*1.4,l=p;l<t;l=e){k=a8[l]
j=k.a
i=o-j
h=k.b
g=n-h
f=i*i+g*g
for(e=l+1,d=e;d<v;++d){a0=a8[d]
if(a0.c>m)continue
a1=a0.a
i=j-a1
a2=a0.b
g=h-a2
a3=i*i+g*g
i=o-a1
g=n-a2
a4=i*i+g*g
if(f<a3)if(a3>a4){if(f<a4){a5=a4
a6=f}else{a5=f
a6=a4}a4=a3
a3=a5}else a6=f
else if(a3<a4){if(f<a4)a5=f
else{a5=a4
a4=f}a6=a3
a3=a5}else{a6=a4
a4=f}a7=Math.abs(a4-2*a3)+Math.abs(a4-2*a6)
if(a7<s){w[0]=q
w[1]=k
w[2]=a0
s=a7}}}}if(s===17976931348623157e292)throw B.c(A.i0())
return new B.cS(w,B.S(w).i("cS<1,ml>"))},
ayH(d,e){return C.e.br(d.c,e.c)}}
A.axC.prototype={}
A.aLG.prototype={
d2(d,e){var w,v,u,t,s,r,q,p,o,n=B.C(x.z,x.X),m=new A.auA(n)
if(n.aA(0,$.bGg())){w=this.a.agB(0,A.bQv(e.v5()),m)
v=D.arm}else{u=e.v5()
t=new A.auV(u)
n=n.h(0,$.bGf())
t.b=n
s=B.b([],x.e)
r=t.b5X(new A.a2_(u,s,new Int32Array(5),n).b_N(0,m))
w=this.a.agB(0,r.a,m)
v=r.b}q=w.w
if(q instanceof A.a7D)q.aVp(v)
n=B.b([],x.S)
u=B.C(x.H,x.K)
Date.now()
C.d.M(n,v)
p=w.d
if(p!=null)u.l(0,D.aF6,p)
o=w.e
if(o!=null)u.l(0,D.aF7,o)
t=w.x
if(t>=0&&w.y>=0){u.l(0,D.aF8,w.y)
u.l(0,D.aF5,t)}return new A.aNX(w.c,n,u)}}
A.a7T.prototype={
j(d){return"ReaderException"},
$ic2:1}
A.aNX.prototype={
j(d){return this.a}}
A.zw.prototype={
L(){return"ResultMetadataType."+this.b}}
A.zx.prototype={
k(d,e){if(e==null)return!1
if(e instanceof A.zx)return this.a===e.a&&this.b===e.b
return!1},
gC(d){return 31*C.e.K(this.a)+C.e.K(this.b)},
j(d){return"("+B.y(this.a)+","+B.y(this.b)+")"}}
A.aLO.prototype={
avd(d,e,f){var w,v,u=this,t=u.d*u.e,s=new Int8Array(t)
u.c!==$&&B.be()
u.c=s
for(w=0;w<t;++w){v=f[w]
s[w]=C.b.K(C.b.b0((C.b.R(v,16)&255)+(C.b.R(v,7)&510)+(v&255),4))}},
a1J(d,e){var w,v,u=this
if(d<0||d>=u.b)throw B.c(B.bi("Requested row is outside the image: "+d,null))
w=u.a
if(e.length<w)e=new Int8Array(w)
v=u.c
v===$&&B.a()
C.fK.d5(e,0,w,v,d*u.d)
return e},
a1C(){var w,v,u,t,s,r=this,q=r.a,p=r.b,o=r.d,n=q===o
if(n&&p===r.e){o=r.c
o===$&&B.a()
return o}w=q*p
v=new Int8Array(w)
u=0*o
if(n){o=r.c
o===$&&B.a()
C.fK.d5(v,0,w,o,u)
return v}for(t=0;t<p;++t){s=t*q
n=r.c
n===$&&B.a()
C.fK.d5(v,s,s+q,n,u)
u+=o}return v}}
var z=a.updateTypes(["r(ml,ml)"])
A.auc.prototype={
$2(d,e){return(d+e&1)===0},
$S:66}
A.aud.prototype={
$2(d,e){return(d&1)===0},
$S:66}
A.aue.prototype={
$2(d,e){return C.b.Y(e,3)===0},
$S:66}
A.auf.prototype={
$2(d,e){return C.b.Y(d+e,3)===0},
$S:66}
A.aug.prototype={
$2(d,e){return(C.b.b0(d,2)+C.b.b0(e,3)&1)===0},
$S:66}
A.auh.prototype={
$2(d,e){return C.b.Y(d*e,6)===0},
$S:66}
A.aui.prototype={
$2(d,e){return C.b.Y(d*e,6)<3},
$S:66}
A.auj.prototype={
$2(d,e){return(d+e+C.b.Y(d*e,3)&1)===0},
$S:66};(function aliases(){var w=A.Ll.prototype
w.aqo=w.v5})();(function installTearOffs(){var w=a._instance_2u
w(A.a2_.prototype,"gayG","ayH",0)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(B.Y,[A.eR,A.lt,A.as0,A.as1,A.a7T,A.Z_,A.as6,A.Jd,A.auG,A.azp,A.auW,A.Ni,A.ayG,A.a2m,A.aMv,A.NX,A.u0,A.auA,A.aD9,A.as5,A.a0X,A.a0Y,A.auE,A.a1L,A.Lf,A.a7D,A.ab4,A.a1E,A.a1D,A.zx,A.aqF,A.auV,A.a2_,A.axC,A.aLG,A.aNX])
w(A.a7T,[A.Cb,A.D4,A.E2])
v(A.auI,A.azp)
v(A.Ll,A.as0)
v(A.aAi,A.Ll)
w(B.Cq,[A.auc,A.aud,A.aue,A.auf,A.aug,A.auh,A.aui,A.auj])
w(B.Sw,[A.mx,A.zw])
w(A.zx,[A.BJ,A.ml])
v(A.aLO,A.aD9)})()
B.bth(b.typeUniverse,JSON.parse('{"eR":{"cZ":["Y"]},"lt":{"cZ":["Y"]},"Cb":{"c2":[]},"NX":{"c2":[]},"D4":{"c2":[]},"E2":{"c2":[]},"BJ":{"zx":[]},"ml":{"zx":[]},"a7T":{"c2":[]}}'))
B.btg(b.typeUniverse,JSON.parse('{"u0":1}'))
var y={c:"GenericGFPolys do not have same GenericGF field"}
var x=(function rtii(){var w=B.au
return{z:w("u0<@>"),k:w("Ds"),f:w("A<BJ>"),q:w("A<a0X>"),e:w("A<ml>"),F:w("A<a2m>"),h:w("A<a3n>"),S:w("A<zx>"),s:w("A<j>"),t:w("A<r>"),K:w("Y"),G:w("rz"),H:w("zw"),i:w("W"),l:w("ml?"),X:w("Y?")}})();(function constants(){var w=a.makeConstList
D.ee=new B.IG(!0)
D.BG=new A.eR(0)
D.cD=new B.M4(!0)
D.apH=w([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656],x.t)
D.arm=w([],x.S)
D.ag5=w([8,16,16],x.t)
D.v4=new A.mx("BYTE",D.ag5,4,"byte")
D.l7=w([0,0,0],x.t)
D.v5=new A.mx("ECI",D.l7,5,"eci")
D.lw=new A.mx("TERMINATOR",D.l7,0,"terminator")
D.v6=new A.mx("STRUCTURED_APPEND",D.l7,3,"structuredAppend")
D.v7=new A.mx("FNC1_SECOND_POSITION",D.l7,8,"fnc1SecondPosition")
D.ags=w([9,11,13],x.t)
D.v8=new A.mx("ALPHANUMERIC",D.ags,2,"alphanumeric")
D.D6=w([8,10,12],x.t)
D.v9=new A.mx("KANJI",D.D6,6,"kanji")
D.va=new A.mx("FNC1_FIRST_POSITION",D.l7,7,"fnc1FirstPosition")
D.abN=w([10,12,14],x.t)
D.vb=new A.mx("NUMERIC",D.abN,1,"numeric")
D.vc=new A.mx("HANZI",D.D6,9,"hanzi")
D.aF5=new A.zw(10,"structuredAppendParity")
D.aF6=new A.zw(2,"byteSegments")
D.aF7=new A.zw(3,"errorCorrectionLevel")
D.aF8=new A.zw(9,"structuredAppendSequence")
D.Uq=new B.QA(!0)})();(function staticFields(){$.bNA=function(){var w=x.t
return B.b([B.b([21522,0],w),B.b([20773,1],w),B.b([24188,2],w),B.b([23371,3],w),B.b([17913,4],w),B.b([16590,5],w),B.b([20375,6],w),B.b([19104,7],w),B.b([30660,8],w),B.b([29427,9],w),B.b([32170,10],w),B.b([30877,11],w),B.b([26159,12],w),B.b([25368,13],w),B.b([27713,14],w),B.b([26998,15],w),B.b([5769,16],w),B.b([5054,17],w),B.b([7399,18],w),B.b([6608,19],w),B.b([1890,20],w),B.b([597,21],w),B.b([3340,22],w),B.b([2107,23],w),B.b([13663,24],w),B.b([12392,25],w),B.b([16177,26],w),B.b([14854,27],w),B.b([9396,28],w),B.b([8579,29],w),B.b([11994,30],w),B.b([11245,31],w)],B.au("A<R<r>>"))}()
$.bTA=B.b([31892,34236,39577,42195,48118,51042,55367,58893,63784,68472,70749,76311,79154,84390,87683,92361,96236,102084,102881,110507,110734,117786,119615,126325,127568,133589,136944,141498,145311,150283,152622,158308,161089,167017],x.t)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"c2l","bFI",()=>A.fh(B.b([0,2],x.t),B.b(["Cp437"],x.s),D.ee))
w($,"c2o","bpv",()=>A.fh(B.b([1,3],x.t),B.b(["ISO8859_1","ISO-8859-1"],x.s),D.cD))
w($,"c2v","bFQ",()=>A.fh(B.b([4],x.t),B.b(["ISO8859_2","ISO-8859-2"],x.s),D.cD))
w($,"c2w","bFR",()=>A.fh(B.b([5],x.t),B.b(["ISO8859_3","ISO-8859-3"],x.s),D.cD))
w($,"c2x","bFS",()=>A.fh(B.b([6],x.t),B.b(["ISO8859_4","ISO-8859-4"],x.s),D.cD))
w($,"c2y","bFT",()=>A.fh(B.b([7],x.t),B.b(["ISO8859_5","ISO-8859-5"],x.s),D.cD))
w($,"c2z","bFU",()=>A.fh(B.b([8],x.t),B.b(["ISO8859_6","ISO-8859-6"],x.s),D.cD))
w($,"c2A","bFV",()=>A.fh(B.b([9],x.t),B.b(["ISO8859_7","ISO-8859-7"],x.s),D.cD))
w($,"c2B","bFW",()=>A.fh(B.b([10],x.t),B.b(["ISO8859_8 ","ISO-8859-8"],x.s),D.cD))
w($,"c2C","bFX",()=>A.fh(B.b([11],x.t),B.b(["ISO8859_9 ","ISO-8859-9"],x.s),D.cD))
w($,"c2p","bFK",()=>A.fh(B.b([12],x.t),B.b(["ISO8859_10","ISO-8859-10"],x.s),D.cD))
w($,"c2q","bFL",()=>A.fh(B.b([13],x.t),B.b(["ISO8859_11","ISO-8859-11"],x.s),D.cD))
w($,"c2r","bFM",()=>A.fh(B.b([15],x.t),B.b(["ISO8859_13","ISO-8859-13"],x.s),D.cD))
w($,"c2s","bFN",()=>A.fh(B.b([16],x.t),B.b(["ISO8859_14","ISO-8859-14"],x.s),D.cD))
w($,"c2t","bFO",()=>A.fh(B.b([17],x.t),B.b(["ISO8859_15","ISO-8859-15"],x.s),D.cD))
w($,"c2u","bFP",()=>A.fh(B.b([18],x.t),B.b(["ISO8859_16","ISO-8859-16"],x.s),D.cD))
w($,"c2D","XM",()=>A.fh(B.b([20],x.t),B.b(["SJIS","Shift_JIS"],x.s),D.ee))
w($,"c2h","bFE",()=>A.fh(B.b([21],x.t),B.b(["Cp1250","windows-1250"],x.s),D.ee))
w($,"c2i","bFF",()=>A.fh(B.b([22],x.t),B.b(["Cp1251","windows-1251"],x.s),D.ee))
w($,"c2j","bFG",()=>A.fh(B.b([23],x.t),B.b(["Cp1252","windows-1252"],x.s),D.ee))
w($,"c2k","bFH",()=>A.fh(B.b([24],x.t),B.b(["Cp1256","windows-1256"],x.s),D.ee))
w($,"c2F","bFY",()=>A.fh(B.b([25],x.t),B.b(["UnicodeBigUnmarked","UTF-16BE","UnicodeBig"],x.s),D.Uq))
w($,"c2E","apW",()=>A.fh(B.b([26],x.t),B.b(["UTF8","UTF-8"],x.s),D.Uq))
w($,"c2f","buP",()=>A.fh(B.b([27,170],x.t),B.b(["ASCII","US-ASCII"],x.s),D.ee))
w($,"c2g","bFD",()=>A.fh(B.b([28],x.t),B.b(["Big5"],x.s),D.ee))
w($,"c2n","buQ",()=>A.fh(B.b([29],x.t),B.b(["GB18030","GB2312","EUC_CN","GBK"],x.s),D.ee))
w($,"c2m","bFJ",()=>A.fh(B.b([30],x.t),B.b(["EUC_KR","EUC-KR"],x.s),D.ee))
w($,"c2H","buR",()=>B.b([$.bFI(),$.bpv(),$.bFQ(),$.bFR(),$.bFS(),$.bFT(),$.bFU(),$.bFV(),$.bFW(),$.bFX(),$.bFK(),$.bFL(),$.bFM(),$.bFN(),$.bFO(),$.bFP(),$.XM(),$.bFE(),$.bFF(),$.bFG(),$.bFH(),$.bFY(),$.apW(),$.buP(),$.bFD(),$.buQ(),$.bFJ()],B.au("A<Jd>")))
w($,"c2G","bFZ",()=>{var u,t,s,r,q,p,o=B.C(B.au("r"),B.au("Jd"))
for(u=$.buR(),t=0;t<27;++t){s=u[t]
for(r=s.a,q=r.length,p=0;p<r.length;r.length===q||(0,B.O)(r),++p)o.l(0,r[p],s)}return o})
w($,"c3Q","bv1",()=>3)
w($,"c3P","bpA",()=>32)
w($,"c3O","bv0",()=>E.bry(0))
v($,"c3S","bGy",()=>new A.auI())
w($,"c3V","I9",()=>8)
w($,"c3W","bGz",()=>$.I9()-1)
w($,"c3X","bGA",()=>$.I9()*5)
w($,"c3N","bGx",()=>{var u=new A.ayG(B.a6f(256),B.a6f(256),256,285,0)
u.auQ(285,256,0)
return u})
w($,"c3b","bGg",()=>new A.u0())
w($,"c3c","bGh",()=>new A.u0())
w($,"c39","bGe",()=>new A.u0())
w($,"c3a","bGf",()=>new A.u0())
w($,"c2Z","bG4",()=>A.xm(new A.auc()))
w($,"c3_","bG5",()=>A.xm(new A.aud()))
w($,"c30","bG6",()=>A.xm(new A.aue()))
w($,"c31","bG7",()=>A.xm(new A.auf()))
w($,"c32","bG8",()=>A.xm(new A.aug()))
w($,"c33","bG9",()=>A.xm(new A.auh()))
w($,"c34","bGa",()=>A.xm(new A.aui()))
w($,"c35","bGb",()=>A.xm(new A.auj()))
w($,"c36","buT",()=>B.b([$.bG4(),$.bG5(),$.bG6(),$.bG7(),$.bG8(),$.bG9(),$.bGa(),$.bGb()],B.au("A<a0Y>")))
w($,"c3d","bpy",()=>B.b("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".split(""),x.s))
w($,"c3B","bGp",()=>A.axb(0,1,"L"))
w($,"c3C","bGq",()=>A.axb(1,0,"M"))
w($,"c3D","bGr",()=>A.axb(2,3,"Q"))
w($,"c3A","bGo",()=>A.axb(3,2,"H"))
w($,"c3z","apY",()=>B.b([$.bGq(),$.bGp(),$.bGo(),$.bGr()],B.au("A<a1L>")))
w($,"c62","bvh",()=>{var u=x.t,t=B.au("A<a1D>"),s=B.au("A<a1E>")
return B.b([A.dG(1,B.b([],u),B.b([A.at(7,B.b([A.U(1,19)],t)),A.at(10,B.b([A.U(1,16)],t)),A.at(13,B.b([A.U(1,13)],t)),A.at(17,B.b([A.U(1,9)],t))],s)),A.dG(2,B.b([6,18],u),B.b([A.at(10,B.b([A.U(1,34)],t)),A.at(16,B.b([A.U(1,28)],t)),A.at(22,B.b([A.U(1,22)],t)),A.at(28,B.b([A.U(1,16)],t))],s)),A.dG(3,B.b([6,22],u),B.b([A.at(15,B.b([A.U(1,55)],t)),A.at(26,B.b([A.U(1,44)],t)),A.at(18,B.b([A.U(2,17)],t)),A.at(22,B.b([A.U(2,13)],t))],s)),A.dG(4,B.b([6,26],u),B.b([A.at(20,B.b([A.U(1,80)],t)),A.at(18,B.b([A.U(2,32)],t)),A.at(26,B.b([A.U(2,24)],t)),A.at(16,B.b([A.U(4,9)],t))],s)),A.dG(5,B.b([6,30],u),B.b([A.at(26,B.b([A.U(1,108)],t)),A.at(24,B.b([A.U(2,43)],t)),A.at(18,B.b([A.U(2,15),A.U(2,16)],t)),A.at(22,B.b([A.U(2,11),A.U(2,12)],t))],s)),A.dG(6,B.b([6,34],u),B.b([A.at(18,B.b([A.U(2,68)],t)),A.at(16,B.b([A.U(4,27)],t)),A.at(24,B.b([A.U(4,19)],t)),A.at(28,B.b([A.U(4,15)],t))],s)),A.dG(7,B.b([6,22,38],u),B.b([A.at(20,B.b([A.U(2,78)],t)),A.at(18,B.b([A.U(4,31)],t)),A.at(18,B.b([A.U(2,14),A.U(4,15)],t)),A.at(26,B.b([A.U(4,13),A.U(1,14)],t))],s)),A.dG(8,B.b([6,24,42],u),B.b([A.at(24,B.b([A.U(2,97)],t)),A.at(22,B.b([A.U(2,38),A.U(2,39)],t)),A.at(22,B.b([A.U(4,18),A.U(2,19)],t)),A.at(26,B.b([A.U(4,14),A.U(2,15)],t))],s)),A.dG(9,B.b([6,26,46],u),B.b([A.at(30,B.b([A.U(2,116)],t)),A.at(22,B.b([A.U(3,36),A.U(2,37)],t)),A.at(20,B.b([A.U(4,16),A.U(4,17)],t)),A.at(24,B.b([A.U(4,12),A.U(4,13)],t))],s)),A.dG(10,B.b([6,28,50],u),B.b([A.at(18,B.b([A.U(2,68),A.U(2,69)],t)),A.at(26,B.b([A.U(4,43),A.U(1,44)],t)),A.at(24,B.b([A.U(6,19),A.U(2,20)],t)),A.at(28,B.b([A.U(6,15),A.U(2,16)],t))],s)),A.dG(11,B.b([6,30,54],u),B.b([A.at(20,B.b([A.U(4,81)],t)),A.at(30,B.b([A.U(1,50),A.U(4,51)],t)),A.at(28,B.b([A.U(4,22),A.U(4,23)],t)),A.at(24,B.b([A.U(3,12),A.U(8,13)],t))],s)),A.dG(12,B.b([6,32,58],u),B.b([A.at(24,B.b([A.U(2,92),A.U(2,93)],t)),A.at(22,B.b([A.U(6,36),A.U(2,37)],t)),A.at(26,B.b([A.U(4,20),A.U(6,21)],t)),A.at(28,B.b([A.U(7,14),A.U(4,15)],t))],s)),A.dG(13,B.b([6,34,62],u),B.b([A.at(26,B.b([A.U(4,107)],t)),A.at(22,B.b([A.U(8,37),A.U(1,38)],t)),A.at(24,B.b([A.U(8,20),A.U(4,21)],t)),A.at(22,B.b([A.U(12,11),A.U(4,12)],t))],s)),A.dG(14,B.b([6,26,46,66],u),B.b([A.at(30,B.b([A.U(3,115),A.U(1,116)],t)),A.at(24,B.b([A.U(4,40),A.U(5,41)],t)),A.at(20,B.b([A.U(11,16),A.U(5,17)],t)),A.at(24,B.b([A.U(11,12),A.U(5,13)],t))],s)),A.dG(15,B.b([6,26,48,70],u),B.b([A.at(22,B.b([A.U(5,87),A.U(1,88)],t)),A.at(24,B.b([A.U(5,41),A.U(5,42)],t)),A.at(30,B.b([A.U(5,24),A.U(7,25)],t)),A.at(24,B.b([A.U(11,12),A.U(7,13)],t))],s)),A.dG(16,B.b([6,26,50,74],u),B.b([A.at(24,B.b([A.U(5,98),A.U(1,99)],t)),A.at(28,B.b([A.U(7,45),A.U(3,46)],t)),A.at(24,B.b([A.U(15,19),A.U(2,20)],t)),A.at(30,B.b([A.U(3,15),A.U(13,16)],t))],s)),A.dG(17,B.b([6,30,54,78],u),B.b([A.at(28,B.b([A.U(1,107),A.U(5,108)],t)),A.at(28,B.b([A.U(10,46),A.U(1,47)],t)),A.at(28,B.b([A.U(1,22),A.U(15,23)],t)),A.at(28,B.b([A.U(2,14),A.U(17,15)],t))],s)),A.dG(18,B.b([6,30,56,82],u),B.b([A.at(30,B.b([A.U(5,120),A.U(1,121)],t)),A.at(26,B.b([A.U(9,43),A.U(4,44)],t)),A.at(28,B.b([A.U(17,22),A.U(1,23)],t)),A.at(28,B.b([A.U(2,14),A.U(19,15)],t))],s)),A.dG(19,B.b([6,30,58,86],u),B.b([A.at(28,B.b([A.U(3,113),A.U(4,114)],t)),A.at(26,B.b([A.U(3,44),A.U(11,45)],t)),A.at(26,B.b([A.U(17,21),A.U(4,22)],t)),A.at(26,B.b([A.U(9,13),A.U(16,14)],t))],s)),A.dG(20,B.b([6,34,62,90],u),B.b([A.at(28,B.b([A.U(3,107),A.U(5,108)],t)),A.at(26,B.b([A.U(3,41),A.U(13,42)],t)),A.at(30,B.b([A.U(15,24),A.U(5,25)],t)),A.at(28,B.b([A.U(15,15),A.U(10,16)],t))],s)),A.dG(21,B.b([6,28,50,72,94],u),B.b([A.at(28,B.b([A.U(4,116),A.U(4,117)],t)),A.at(26,B.b([A.U(17,42)],t)),A.at(28,B.b([A.U(17,22),A.U(6,23)],t)),A.at(30,B.b([A.U(19,16),A.U(6,17)],t))],s)),A.dG(22,B.b([6,26,50,74,98],u),B.b([A.at(28,B.b([A.U(2,111),A.U(7,112)],t)),A.at(28,B.b([A.U(17,46)],t)),A.at(30,B.b([A.U(7,24),A.U(16,25)],t)),A.at(24,B.b([A.U(34,13)],t))],s)),A.dG(23,B.b([6,30,54,78,102],u),B.b([A.at(30,B.b([A.U(4,121),A.U(5,122)],t)),A.at(28,B.b([A.U(4,47),A.U(14,48)],t)),A.at(30,B.b([A.U(11,24),A.U(14,25)],t)),A.at(30,B.b([A.U(16,15),A.U(14,16)],t))],s)),A.dG(24,B.b([6,28,54,80,106],u),B.b([A.at(30,B.b([A.U(6,117),A.U(4,118)],t)),A.at(28,B.b([A.U(6,45),A.U(14,46)],t)),A.at(30,B.b([A.U(11,24),A.U(16,25)],t)),A.at(30,B.b([A.U(30,16),A.U(2,17)],t))],s)),A.dG(25,B.b([6,32,58,84,110],u),B.b([A.at(26,B.b([A.U(8,106),A.U(4,107)],t)),A.at(28,B.b([A.U(8,47),A.U(13,48)],t)),A.at(30,B.b([A.U(7,24),A.U(22,25)],t)),A.at(30,B.b([A.U(22,15),A.U(13,16)],t))],s)),A.dG(26,B.b([6,30,58,86,114],u),B.b([A.at(28,B.b([A.U(10,114),A.U(2,115)],t)),A.at(28,B.b([A.U(19,46),A.U(4,47)],t)),A.at(28,B.b([A.U(28,22),A.U(6,23)],t)),A.at(30,B.b([A.U(33,16),A.U(4,17)],t))],s)),A.dG(27,B.b([6,34,62,90,118],u),B.b([A.at(30,B.b([A.U(8,122),A.U(4,123)],t)),A.at(28,B.b([A.U(22,45),A.U(3,46)],t)),A.at(30,B.b([A.U(8,23),A.U(26,24)],t)),A.at(30,B.b([A.U(12,15),A.U(28,16)],t))],s)),A.dG(28,B.b([6,26,50,74,98,122],u),B.b([A.at(30,B.b([A.U(3,117),A.U(10,118)],t)),A.at(28,B.b([A.U(3,45),A.U(23,46)],t)),A.at(30,B.b([A.U(4,24),A.U(31,25)],t)),A.at(30,B.b([A.U(11,15),A.U(31,16)],t))],s)),A.dG(29,B.b([6,30,54,78,102,126],u),B.b([A.at(30,B.b([A.U(7,116),A.U(7,117)],t)),A.at(28,B.b([A.U(21,45),A.U(7,46)],t)),A.at(30,B.b([A.U(1,23),A.U(37,24)],t)),A.at(30,B.b([A.U(19,15),A.U(26,16)],t))],s)),A.dG(30,B.b([6,26,52,78,104,130],u),B.b([A.at(30,B.b([A.U(5,115),A.U(10,116)],t)),A.at(28,B.b([A.U(19,47),A.U(10,48)],t)),A.at(30,B.b([A.U(15,24),A.U(25,25)],t)),A.at(30,B.b([A.U(23,15),A.U(25,16)],t))],s)),A.dG(31,B.b([6,30,56,82,108,134],u),B.b([A.at(30,B.b([A.U(13,115),A.U(3,116)],t)),A.at(28,B.b([A.U(2,46),A.U(29,47)],t)),A.at(30,B.b([A.U(42,24),A.U(1,25)],t)),A.at(30,B.b([A.U(23,15),A.U(28,16)],t))],s)),A.dG(32,B.b([6,34,60,86,112,138],u),B.b([A.at(30,B.b([A.U(17,115)],t)),A.at(28,B.b([A.U(10,46),A.U(23,47)],t)),A.at(30,B.b([A.U(10,24),A.U(35,25)],t)),A.at(30,B.b([A.U(19,15),A.U(35,16)],t))],s)),A.dG(33,B.b([6,30,58,86,114,142],u),B.b([A.at(30,B.b([A.U(17,115),A.U(1,116)],t)),A.at(28,B.b([A.U(14,46),A.U(21,47)],t)),A.at(30,B.b([A.U(29,24),A.U(19,25)],t)),A.at(30,B.b([A.U(11,15),A.U(46,16)],t))],s)),A.dG(34,B.b([6,34,62,90,118,146],u),B.b([A.at(30,B.b([A.U(13,115),A.U(6,116)],t)),A.at(28,B.b([A.U(14,46),A.U(23,47)],t)),A.at(30,B.b([A.U(44,24),A.U(7,25)],t)),A.at(30,B.b([A.U(59,16),A.U(1,17)],t))],s)),A.dG(35,B.b([6,30,54,78,102,126,150],u),B.b([A.at(30,B.b([A.U(12,121),A.U(7,122)],t)),A.at(28,B.b([A.U(12,47),A.U(26,48)],t)),A.at(30,B.b([A.U(39,24),A.U(14,25)],t)),A.at(30,B.b([A.U(22,15),A.U(41,16)],t))],s)),A.dG(36,B.b([6,24,50,76,102,128,154],u),B.b([A.at(30,B.b([A.U(6,121),A.U(14,122)],t)),A.at(28,B.b([A.U(6,47),A.U(34,48)],t)),A.at(30,B.b([A.U(46,24),A.U(10,25)],t)),A.at(30,B.b([A.U(2,15),A.U(64,16)],t))],s)),A.dG(37,B.b([6,28,54,80,106,132,158],u),B.b([A.at(30,B.b([A.U(17,122),A.U(4,123)],t)),A.at(28,B.b([A.U(29,46),A.U(14,47)],t)),A.at(30,B.b([A.U(49,24),A.U(10,25)],t)),A.at(30,B.b([A.U(24,15),A.U(46,16)],t))],s)),A.dG(38,B.b([6,32,58,84,110,136,162],u),B.b([A.at(30,B.b([A.U(4,122),A.U(18,123)],t)),A.at(28,B.b([A.U(13,46),A.U(32,47)],t)),A.at(30,B.b([A.U(48,24),A.U(14,25)],t)),A.at(30,B.b([A.U(42,15),A.U(32,16)],t))],s)),A.dG(39,B.b([6,26,54,82,110,138,166],u),B.b([A.at(30,B.b([A.U(20,117),A.U(4,118)],t)),A.at(28,B.b([A.U(40,47),A.U(7,48)],t)),A.at(30,B.b([A.U(43,24),A.U(22,25)],t)),A.at(30,B.b([A.U(10,15),A.U(67,16)],t))],s)),A.dG(40,B.b([6,30,58,86,114,142,170],u),B.b([A.at(30,B.b([A.U(19,118),A.U(6,119)],t)),A.at(28,B.b([A.U(18,47),A.U(31,48)],t)),A.at(30,B.b([A.U(34,24),A.U(34,25)],t)),A.at(30,B.b([A.U(20,15),A.U(61,16)],t))],s))],B.au("A<ab4>"))})})()};
(a=>{a["ZH1wpRtXS+9UVXwLvbwy9f9Vrxw="]=a.current})($__dart_deferred_initializers__);