var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase
  
var lowercase = "hello!"
lowercase.toLowerCase() === lowercase
  
var mixedCase = "Hi There!"
mixedCase.toLowerCase() === lowercase
mixedCase.toUpperCase() === uppercase

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma (string) {
  if lowercase return ""
}