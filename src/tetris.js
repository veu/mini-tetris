// _() – Main loop
// D() – Draw updated field b and set P=p.
// M(code) – Map P to p using code and merge it with field B into field b.
//           Return true if piece overlaps with B.

// B – Current state of playing field, format: [c00<<0|c01<<1|…, c10<<0|c11<<1|…, …]
// b - Updated state of playing field
// P – Current piece, format: [x0, y0, x1, y1, …]
// p – Updated piece
// Q – Spawn coordinates of all pieces
// k – Last key code pressed (- 38)
// S - Total score
// s – Tally of current move used to reward clearing multiple lines
// I - Offset of next piece

M=e=>(h=0,p=P.map((v,i)=>(x=eval(e[0]),i%2?b[h|=x<0|x>9|b[y]>>x&1|y>17,y]|=1<<x:0,y=x),b=[...B]),h),
b=[...Q='021213030405061617'].fill(S=P=I=k=0),
D=e=>b.map(v=>{$+=`
`;for(x=10;x--;)Z.innerText=$+='□■'[v-1023+P&&v>>x&1]},$=S,P=p),
(_=e=>D(
    P=P||[...Q.substr(I%6*2,8,B=[s=0,0,0,0,...b].filter(v=>v-1023||!(S+=++s)).slice(-18))],
    M`v-~i%2`&&M`v`&(p=k=0),
    I=setTimeout(_,k-2&&200)
))(
onkeyup=e=>
    P?(k=e.which-38)%2-k||(
        k
            ?M`v-i%2*k`
            :M`P[2]-(q=i%2*2-1)*(P[i-q]-P[3])`
    )
    ||D():0
)
