// OUTPUT THE HEADER ROW
// document.write('<span class="cell header">&times;</span>');
let i = 1;
while (i <= 10) {
    document.write('<span class="cell header">' + i + "</span>");
    i++;
}
// OUTPUT EACH BODY ROWS
document.write('<span class="cell header"><br></span>');
// 1: INITIALIZE A LOOP VARIABLE
// 2: CONDITIONAL (EXIT PLAN)
// 3: INCREMENT THE LOOP VARIABLE
let rowNum = 0
document.write('<br>')
while (rowNum <= 10) {

    let sum

    let columnNum = 1
    while (columnNum <= 10) {
        sum = rowNum * columnNum
        document.write('<span class="cell">' + sum + '</span>')
        columnNum++
    }


    document.write('<br>')


    rowNum++
}