// output the header row
document.write('<span class="cell header">&times;</span>')
let i = 1

while (i <= 10) {
    document.write('<span class="cell header">' + i + "</span>")
    i++
}
document.write("<br>")
// TODO: Write two nested while loops to output the rest of the multiplication table

let j = 0

for (i = 0; i <= 10; i++) {
    for (j = 0; j <= 10; j++) {
        document.write('<span class="cell">' + j * i + "</span>")
        }
        document.write("<br>")
    }