// _() – Main loop
// D() – Draw updated field b and set P=p.
// M(code) – Map P to p using code and merge it with field B into field b.
//           Return true if piece overlaps with B.

// B – Current state of playing field, format: [c00<<0|c01<<1|…, c10<<0|c11<<1|…, …]
// b - Updated state of playing field
// C - Copy of empty playing field
// P – Current piece, format: [x0, y0, x1, y1, …]
// p – Updated piece
// k – Last key code pressed (- 38)
// S - Total score
// s – Tally of current move used to reward clearing multiple lines

M=e=>(
    h=0,
    p=P.map((v,i)=>(
        x=eval(e[0]),
        i%2
            ?b[h|=x<0|x>9|b[y]>>x&1|y>17,y]|=1<<x
            :0,
        y=x
    ),b=[...B]),
    h
),
b=C=Array(18),
S=P=k=0,
D=e=>b.map(v=>{$+=`
`;for(x=10;x--;)Z.innerText=$+='□■'[v^1023+P&&v>>x&1]},$=S,P=p),
(_=e=>D(
    P=P||[...'021213030405061617'.substr(
        new Date%6*2,
        8,
        s=0,
        B=[...C,...b].filter(v=>v^1023||!(S+=++s)).slice(-18)
    )],
    M`v-~i%2`&&M`v`&(p=k=0),
    setTimeout(_,k-2&&200)
))(
onkeydown=e=>
    P
        ?(k=e.which-38)%2-k
            ||M`k?v-i%2*k:P[2]-(P[q=i^1]-P[3])*(i-q)`
            ||D()
        :0
)
