var upper = "UPPERCASE! Why are you yelling?"; 
var lower = "lowercase! Why are you whispering?";
var neither = "Neither. That's a nice tone of voice.";

var input = prompt('Type a word using all caps, lowercase, or normally.')

if (input === input.toUpperCase()){
    alert(upper);
    console.log("SHOUTING"); 
} else if (input === input.toLowerCase()){
    alert(lower);
    console.log("whispering")

} else {
    alert(normal);
    console.log("Talking Normally")
}