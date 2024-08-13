// Typescript for DEL Button


// is example mein check kar rhy thy ke slice kya karta hai ? ye hamen array mein se values nikal kar deta hai
// jitni ham isko btaty hain.
// slice karta ye hai ke 2 index leta hai aik starting or aik ending, string index mein ham btatay hain ke is index
// se ley kar ending waly index tak jitni bhi values beech mein ayen wo nikal kar do or ye new array return karta hai.


// let a;

// let arr: string[] = ["shoaib", "arshad", "ali", "asif", "masoom"];

// a = arr.slice(2, 5);

// console.log(a); // Output: "ali", "asif", "masoom"


// <-------------------------------------------END------------------------------------------------>
// DEL Button mein hamne ye slice(0, -1) kiyun likha ?


// let arr: string[] = ["shoaib", "arshad", "ali", "asif", "masoom"];

// let a = arr.slice(0, -1); 

// isne 0 index se ley kar last waly index ki values ko chor kar baiq sari values nikal kar dey di..

// console.log(a); // Output: [ 'shoaib', 'arshad', 'ali', 'asif' ]



// <-------------------------------------------END------------------------------------------------>
// DEL Button ke liye last number kese htaty hain...

// slice(0, -1) ka method jitni bar bhi chalaga last wali value ko htata jaega har dafa
// Ye method array mein se last values ko delete nahi kar rha balke last values ko chor kar 
// baqi sari values nikal kar dey rha hai or ham un values ko dubara usi array mein update krwa rhy hain
// jabhi har dafa hmare array ki last value ko hata diyya jata hai or last value isliye hatt rhi hai
// kiyun ke -1 likha hai hamne


let arr: string[] = ["shoaib", "arshad", "ali", "asif", "masoom"];

arr = arr.slice(0, -1); 
console.log(arr);      // Output: [ 'shoaib', 'arshad', 'ali', 'asif' ]

arr = arr.slice(0, -1); 
console.log(arr);      // Output: [ 'shoaib', 'arshad', 'ali' ]

arr = arr.slice(0, -1); 
console.log(arr);     // Output: [ 'shoaib', 'arshad' ]

arr = arr.slice(0, -1); 
console.log(arr);     // Output: [ 'shoaib' ]

arr = arr.slice(0, -1); 
console.log(arr);     // Output: []

