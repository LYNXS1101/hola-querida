// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "It's you, it's always you", time: 8 },
  { text: "If I'm ever gonna fall in love", time: 11 },
  { text: "I know it's gon' be you", time: 13 },
  { text: "It's you, it's always you", time: 17 },
  { text: "Met a lot of people, but nobody feels like you", time: 23 },
  { text: "So, please, don't break my heart", time: 26 },
  { text: "Don't tear me apart", time: 29 },
  { text: "I know how it starts", time: 31 },
  { text: "Trust me, I've been broken before", time: 34 },
  { text: "Don't break me again", time: 36 },
  { text: "I am delicate", time: 39  },
  { text: "Please, don't break my heart", time: 41 },
  { text: "Trust me, I've been broken before", time: 43 },
  { text: "I've been broken, yeah", time: 45 },
  { text: "I know how it feels", time: 48 },
  { text: "To be open", time: 52 },
  { text: "And then find out your love isn't real", time: 51 },
  { text: "I'm still hurtin', yeah", time: 53 },
  { text: "I'm hurtin' inside", time: 55 },
  { text: "I'm so scared to fall in love", time: 57 },
  { text: "But if it's you then I'll try", time: 59 },
  { text: "It's you, it's always you", time: 97 },
  { text: "If I'm ever gonna fall in love", time: 101 },
  { text: "I know it's gon' be you", time: 105 },
  { text: "It's you, it's always you", time: 109 },
  { text: "Met a lot of people, but nobody feels like you", time: 113 },
  { text: "So, please, don't break my heart", time: 119 },
  { text: "Don't tear me apart", time: 123 },
  { text: "I know how it starts", time: 127 },
  { text: "Trust me, I've been broken before", time: 131 },
  { text: "Don't break me again", time: 136 },
  { text: "I am delicate", time: 140 },
  { text: "Please, don't break my heart", time: 144 },
  { text: "Trust me, I've been broken before", time: 148 },
  { text: "I know I'm not the best at choosin' lovers", time: 154 },
  { text: "We both know my past speaks for itself", time: 158 },
  { text: "If you don't think that we're right for each other", time: 163 },
  { text: "Then, please, don't let history repeat itself", time: 168 },
  { text: "'Cause I want you", time: 172 },
  { text: "I want you", time: 175 },
  { text: "There's nothing else I want", time: 179 },
  { text: "'Cause I want you", time: 182 },
  { text: "I want you", time: 186 },
  { text: "And you're the only thing I want", time: 190 },
  { text: "It's you, it's always you", time: 194 },
  { text: "If I'm ever gonna fall in love", time: 198 },
  { text: "I know it's gon' be you", time: 202 },
  { text: "It's you, it's always you", time: 206 },
  { text: "Met a lot of people, but nobody feels like you", time: 210 },
  { text: "So, please, don't break my heart", time: 216 },
  { text: "Don't tear me apart", time: 220 },
  { text: "I know how it starts", time: 224 },
  { text: "Trust me, I've been broken before", time: 228 },
  { text: "Don't break me again", time: 233 },
  { text: "I am delicate", time: 238 },
  { text: "Please, don't break my heart", time: 242 },
  { text: "Trust me, I've been broken before", time: 246 },
  { text: "'Cause I want you, baby I want you", time: 251 },
  { text: "Baby, I want you", time: 254 },
  { text: "Baby, I want you", time: 258 },
  { text: "Baby, I want you", time: 262 },
  { text: "You, you", time: 265 },
  { text: "'Cause I want you, baby I want you", time: 269 },
  { text: "Baby, I want you", time: 272 },
  { text: "Baby, I want you", time: 276 },
  { text: "Baby, I want you", time: 280 },
  { text: "You, you", time: 283 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);