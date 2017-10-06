// A(piece) – Copy piece to p and merge field B and piece into field b.
//            Return true if piece overlapped with B
// D() – Draw updated field b

// B – Current state of playing field, format: [c00<<0|c01<<1|…, c10<<0|c11<<1|…, …]
// b - Updated state of playing field
// P – Current piece, format: [x0, y0, x1, y1, …]
// p – Updated piece
// k – Last key code pressed (- 38)

A=e=>e.map((x,i)=>i%2?0:b[h|=x<0|x>9|b[y=e[i+1]]>>x&1|y>17,y]|=1<<x,p=e,h=0,b=[...B])&&h,
B=Array(18).fill(S=P=0),
D=e=>(
    $=S,
    b.map(v=>b.map((n,x)=>x>9?0:$+='□■'[v>>x&1],$+='<br>')),
    Z.innerHTML=$
),
(_=e=>
    A(P=P||[...'716160504030312120'.substr(new Date%6*2,k=8)].map(eval))
    ||setTimeout(_,k-2?200:20,
        A(P.map((v,i)=>v+i%2))
            ?A(P)&D(B=[s=P=0,0,0,0,...b].filter(v=>v-1023||!(S+=++s)).slice(-18))
            :D(P=p)
    )
)(
onkeydown=e=>
    P?((k=e.keyCode-38)-1&&~k
        ?k||A(P.map((v,i)=>P[2]+(q=i%2*2-1)*(P[3]-P[i-q])))
        :A(P.map((v,i)=>v-~i%2*k))
    )
    ||D(P=p):0
)
