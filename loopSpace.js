function loop() {
   let whiteSpace = ''

   for (i = 4; i <= 84; i = i + 20) {
      whiteSpace += `${i},`

   }
   console.log(`the number are ${whiteSpace.trim()}`)

}
loop()
