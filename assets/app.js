console.log(`Aprendiendo a invocar código javascript`);

function card() {
  mensaje = `<article>
        <article>
          <img src="" alt="">
          <p>pruebaLorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur explicabo at ea porro quis nemo distinctio ducimus blanditiis qui aut! Voluptatem vero modi optio laudantium ea dolorum consequatur, expedita rem.</p>
        </article>
    </article>`;

  return mensaje;
}
const frase = card();
console.log(frase);

function Suma(a, b) {
  return a + b;
}

const resultado = Suma(4, 5);
console.log(resultado);
