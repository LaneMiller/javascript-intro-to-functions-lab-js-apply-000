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
  var uppercase = "HELLO!"
  uppercase.toUpperCase() === uppercase
  
  var lowercase = "hello!"
  lowercase.toLowerCase() === lowercase
  
  var mixedCase = "Hi There!"
  mixedCase.toLowerCase() === lowercase
  mixedCase.toUpperCase() === uppercase
  
  if (lowercase) return "I can't hear you!"
  if (uppercase) return "YES INDEED!"
  if ("I love you, Grandma.") return "I love you, too."
}