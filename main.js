// output the header row
document.write('<span class="cell header">&times;</span>')
let i = 0

while (i <= 10) {
    document.write('<span class="cell header">' + i + "</span>")
    i++
}
document.write("<br>")
// TODO: Write two nested while loops to output the rest of the multiplication table

let j
let total

for (i = 0; i <= 10; i++) {
    for (j = 0; j <= 10; j++) {
        total = i * j
        total = " " + total
        if (total <= 10) total = " " + total
        document.write('<span class="cell">' + total + "</span>")
        }
        document.write("<br>")
    }