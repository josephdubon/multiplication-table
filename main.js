// OUTPUT THE HEADER ROW
document.write('<span class="cell header">&times;</span>');
let i = 0;
while (i <= 10) {
    document.write('<span class="cell header">' + i + "</span>");
    i++;
}
// OUTPUT EACH BODY ROWS

// 1: INITIALIZE A LOOP VARIABLE
// 2: CONDITIONAL (EXIT PLAN)
// 3: INCREMENT THE LOOP VARIABLE

let rowNum = 1
while (rowNum <= 10) {
    document.write('<span class="cell header">' + rowNum + '</span>')
    document.write('<br>')
    rowNum++
}


// let j = 1

// for (i = 0; i <= 10; i++) {
//     for (j = 0; j <= 10; j++) {
//         document.write('<span class="cell">' + j * i + "</span>")
//         }
//         document.write("<br>")
//     }