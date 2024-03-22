const marvel_heros = ["thor", "Ironman" , "LOKI" , "SPIDERMAN"]
const dc_heros = ["Batman", "superman" , "flash", "wonder-woman"]

console.log(marvel_heros );
console.log(dc_heros );

marvel_heros.push(dc_heros);
console.log(marvel_heros );

const all_Heros = marvel_heros.concat(dc_heros)
console.log(all_Heros);

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);



