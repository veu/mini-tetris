A=e=>e.map((x,i)=>i%2?0:b[H|=x<0|x>9|b[y=e[i+1]]>>x&1|y>17,y]|=1<<x,p=e,H=0,b=[...B])&&H,
R=e=>A(P=[...'716160504030312120'.substr(new Date%6*2,k=8)].map(eval)),
R(B=Array(18).fill(S=0)),
D=e=>(
    $=S,
    e.map(v=>e.map((n,x)=>x>9?0:$+='□■'[v>>x&1],$+='<br>')),
    Z.innerHTML=$
),
(_=e=>
    (A(P.map((v,i)=>v+i%2))
        ?R(A(P),D(B=[s=0,0,0,0].concat(b).filter(v=>v-1023||!(S+=++s)).slice(-18)))
        :!D(b,P=p)
    )||setTimeout(_,k-2?200:20)
)(
onkeydown=e=>
    ((k=e.keyCode-38)-1&&~k
        ?k||A(P.map((v,i)=>P[2]+(i%2?P[3]-P[i-1]:P[i+1]-P[3])))
        :A(P.map((v,i)=>v-~i%2*k))
    )
        ?0
        :P=p
)
