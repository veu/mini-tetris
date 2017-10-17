// B – Current state of playing field, format: [c00<<0|c01<<1|…, c10<<0|c11<<1|…, …]
// b - Updated state of playing field
// C - Copy of empty playing field
// P – Current piece, format: [x0, y0, x1, y1, …]
// p – Updated piece
// k – Last key code pressed (- 38)
// S - Total score
// s – Tally of current move used to reward clearing multiple lines, keyboard event
// G – Game over state

// Move piece, add to field, and check if new position is valid.
M=e=>
    // Skip everything if there’s no piece at the moment.
    P&&(
        // Reset return value.
        h=0,
        // Copy field.
        b=[...B],
        // Move the piece.
        p=P.map((v,i)=>(
            // Set E to -1 if coordinate is y, else -0 [sic]. Used to differentiate x and y.
            E=~i%2,
            // Map current coordinate.
            x=eval(e[0]),
            E
                // Skip current coordinate x which is actually a y
                // and will be checked in next iteration.
                ?0
                // Add block (x,y) to field.
                :b[
                    // Check if (x,y) is already in field or out of range and update return value.
                    h|=x<0|x>9|b[y]>>x&1|y>17,
                y]|=1<<x,
            // Store x in y for next iteration and return x for the mapping function.
            y=x
        )),
        // Return a truthy value if p collides with a block in B or is out of the field.
        h
    ),
// Initialize half of field in b and C. C will be kept empty for filling field later.
b=C=Array(9),
// Add event handler and start main loop
(onkeydown=_=s=>(
    // If we’re in an event handler
    s
        // … and key is left, right, or up, …
        ?(k=s.which-38)%2-k
        // move or turn piece.
        ||M`k?v-!E*k:P[2]-(P[i^1]-P[3])*(E|1)`
        // Return piece to old position if it collided or is out of range.
        &&M`v`
        // End main loop if game over.
        :G||(
            // Create a new piece from one of the 7 shapes if there is no piece at the moment.
            P=P||[...'02121303040506161715'.substr(new Date%7*2,8,
                // Add 9 empty rows to field, remove up to 4 completed lines, update score,
                // and reduce field to its former size.
                B=[...C,...b].filter(v=>v^1023||!(S+=s+=100)).slice(-18)
            )],
            // Drop piece.
            M`v-E`
                // If moved piece collides, add original piece to field,
                // reset piece, and reset k to show removed lines longer.
                // End game if piece already collides without moving
                // which can only be triggered by newly created pieces.
                ?k=p&=G=M`v`
                :0,
            // Queue next cycle with shorter timeout if down key was pressed.
            setTimeout(_,k-2?200:20,0)
        ),
    // Remember new piece position.
    P=p,
    // Draw score and field.
    S|=b.map(v=>{
        // Draw next row.
        S+=`
`;
        // Iterate columns.
        for(x=10;x--;)
            // A block is black if it’s in the field unless its line is completed.
            // Game over inverts the colors.
            Z.innerText=S+='□■'[G^(v^1023+P&&v>>x&1)]
    })
// Initialize game state.
))(S=P=k=G=0)
