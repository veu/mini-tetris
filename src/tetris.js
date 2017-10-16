// _() – Main loop
// M(code) – Map P to p using code and merge it with field B into field b.
//           Return true if piece overlaps with B.

// B – Current state of playing field, format: [c00<<0|c01<<1|…, c10<<0|c11<<1|…, …]
// b - Updated state of playing field
// C - Copy of empty playing field
// P – Current piece, format: [x0, y0, x1, y1, …]
// p – Updated piece
// k – Last key code pressed (- 38)
// S - Total score
// s – Tally of current move used to reward clearing multiple lines, keyboard event
// G – Game over state

M=e=>P&&(
    h=0,
    p=P.map((v,i)=>(
        E=~i%2,
        x=eval(e[0]),
        E
            ?0
            :b[h|=x<0|x>9|b[y]>>x&1|y>17,y]|=1<<x,
        y=x
    ),b=[...B]),
    h
),
b=C=Array(9),
(onkeydown=_=s=>(
    s
        ?(k=s.which-38)%2-k||M`k?v-!E*k:P[2]-(P[i^1]-P[3])*(E|1)`
            ?M`v`
            :P=p
        :G||(
            P=P||[...'02121303040506161715'.substr(
                new Date%7*2,
                8,
                B=[...C,...b].filter(v=>v^1023||!(S+=++s)).slice(-18)
            )],
            P=M`v-E`?k=p&=G=M`v`:p,
            setTimeout(_,k-2?200:20,0)
        ),
    S|=b.map(v=>{S+=`
`;for(x=10;x--;)Z.innerText=S+='□■'[G^(v^1023+P&&v>>x&1)]})
))(S=P=k=G=0)
