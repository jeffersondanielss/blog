---
path: "/usando-currying-no-javascript.html"
date: "2017-12-19"
title: "Usando currying no javascript"
tags: ["javascript", "front-end", "javascript funcional"]
---

## Introdução
Esse post é um estudo sobre currying, e também sobre Partial Application que pra mim no começo dos estudos eram a mesma coisa, esse conceito é uma feature nativa de muitas linguagens de programação funcional que no javascript apesar de não ser fornecido de forma nativa é possível implementar e usar essa técnica de forma parecida.

## História
A técnica currying leva esse nome devido ao matemático norte americano Haskell Curry, sim o mesmo homenageado pela linguagem de programação funcional [Haskell](https://www.haskell.org/), Curry Haskell desenvolveu o conceito de currying da lógica combinatória, criada por Moses Schönfinkel. Currying por definição é:

> "Uma técnica de transformação de uma função que recebe múltiplos parâmetros (mais especificamente, uma n-tupla como parâmetro) de forma que ela pode ser chamada como uma cadeia de funções que recebem somente um parâmetro cada" - [Wikipédia](https://pt.wikipedia.org/wiki/Currying).

## Currying vs Partial Application
O Currying é o processo de transformar uma função que leva vários argumentos para uma cadeia de funções, currying trabalha sempre com funções unárias, ou seja, cada uma das funções não leva mais de um argumento. Já o Partial Application é quando se tem funções com mais argumentos, e ao executa-lá ela vai retornar uma outra função com menos argumentos.

## Partial Application
Podemos pegar como exemplo uma função de soma que na sua definição recebe dois parâmetros, usando esse conceito  essa função quando chamada pode receber os dois parâmetros e tudo ocorrerá normalmente como de costume, mas se receber apenas um parâmetros ela retornará outra função que vai receber essa segundo parâmetros que faltou na primeira vez que ela foi chamada, veja a implementação dessa função no exemplo abaixo:

```js
var soma = function( x, y ) {
  if( typeof y === 'undefined' ) {
    return function ( y ) {
        return x + y
    }
  }

  return x + y
}
```

Entendido o como essa técnica funciona podemos usar a não tão nova especificação do javascript ES6 e um if ternátio para tornar isso menos verboso. Podemos retornar a função soma para uma constante, usar arrow functions sem chaves já que elas vão sempre retornar algo, e usar um if ternário para verificar se o segundo parâmetro foi passado ou não.

```js
const soma = ( x, y ) =>
  typeof y === 'undefined'
    ? y => x + y
    : x + y
```

A partir disso você pode chamar essa função de soma com nais flexibilidade, passando os dois parâmetros de uma só vez ou aplicando ela parcialmente.

```js
soma(5,5) // 10
soma(5)(5) // 10

var resultado = soma(5) // y =>  x + y
resultado(5) // 10
```

## Currying
No exemplo abaixo temos a função de nome **curry**, ela recebe três parâmetros **fn,x,y**, no caso **fn** é uma função que recebe **x,y** como parâmetro, mas como de costume, **fn** não recebe todos os parâmetros de uma vez só, ele recebe um parametro executa e retorna uma nova função para receber o próximo parâmetro, e por fim é executada a função com tudo que ela precisa **f(x, y)**.

```js
function curry(fn) {
  return function(x) {
    return function(y) {
      return fn(x, y);
    }
  }
}

function soma(x,y) {
  return x + y
}

const resultado = curry(soma)(5)(5) // 10
```

Da mesma forma que fizemos na Partial Application podemos escrever isso de forma menos verbosa.

```js
const curry = f => x => y => f(x, y)
const soma = (x,y) => x + y

const resultado = curry(soma)(5)(5) //10
```

Nesse caso a função **curry** que foi criada pode ser reusada em outros casos da mesma forma que foi usada no exemplo da **soma**, dessa forma podemos passar nossos argumentos separadamente.

```js
const curry = f => x => y => f(x, y)
const soma = (x,y) => x + y
const subtrai = (x,y) => x - y
const multiplica = (x,y) => x * y

const resultado1 = curry(soma)(5)(5) //10
const resultado2 = curry(subtrai)(5)(5) //0
const resultado3 = curry(multiplica)(5)(5) //25

const curried = curry(soma)
curried(5)(5) //10
```

# Quem usa? 

O [rambda](http://ramdajs.com/docs/#curry) por exemplo que é uma lib funcional para javascript, usa a Partial Apprication em muitas de suas funções, onde as funções esperam seus argumentos mas se você não passar todos os que são precisos, vai ser retornada uma nova função e tudo vai funcionar como deveria, veja alguns exemplos:

```js
R.add(2, 3); //=>  5
R.add(2)(3); //=>  5

R.replace(/foo/g, 'bar', 'foo foo foo'); // => "bar bar bar"
R.replace(/foo/g, 'bar')('foo foo foo'); // => "bar bar bar"
R.replace(/foo/g)('bar')('foo foo foo'); // => "bar bar bar"

R.concat('bar', 'foo') //=> "barfoo"
R.concat('bar')('foo') //=> "barfoo"

R.equals("bar", "bar"); //=> true
R.equals("bar")("bar"); //=> true
```

## Pra não dizer que eu não falei das flores
Talvez apenas com os exemplos matemáticos que usei acima fique um pouco difícil de fazer um paralelo com o mundo real, e você esteja pensando: legal, cara. Mas será que vou usar isso realmente? talvez. Um contexto onde pode ser aplicado que é usado muito no dia a dia é uma requisição ajax, provavelmente você já viu um trecho de código parecido com esse algumas vezes:

```js
import axios from 'axios'

const deletarDados = id =>
  axios.delete(`https://api.exemplo.com.br/v1/${id}`)
    .then( response => { ...response.data } )
    .catch( error => console.error(error) )

const buscarDados = id =>
  axios.get(`https://api.exemplo.com.br/v1/${id}`)
    .then( response => { ...response.data } )
    .catch( error => console.error(error) )

// ...
```

Acima temos um trecho de um CRUD, duas requisições, um get e um delete de dados feitos em um API Rest, podemos receber como parametro além do **id** o método usado pelo axios, para que na primeira execução da função a gente possa guardar um tipo de requisição para usar posteriormente com id's diferentes.


```js
import axios from 'axios'

const API = method => id =>
  axios[method](`https://api.exemplo.com.br/v1/users/${id}`)
    .then( response => response.data )
    .catch( error => console.error(error) )


const buscarDados = API('get')
const deletarDados = API('delete')
// ...


buscarDados('954') // => {...data}
buscarDados('684') // => {...data}
```

## Conclusão

A vantagem que você pode tirar desses conceitos é o poder de escrever funções que esperam muitos argumentos, mas ter o controle para aplicar eles conforme a sua necessidade, ou conforme você vai recebendo eles, ou seja, você pode chamar suas funções mesmo se no momento ainda não tiver todos os parâmetros que são requeridos por ela. E é mais uma forma de escrever funções genéricas para serem reusadas em diferentes contextos.

### Ler mais
* [Curry or Partial Application?](https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8)
* [Currying versus partial application](http://2ality.com/2011/09/currying-vs-part-eval.html)
* [Programming JavaScript Applications] (https://www.safaribooksonline.com/library/view/programming-javascript-applications/9781491950289/ch02.html#partial-application)
* [Currying is not idiomatic in JavaScript](http://2ality.com/2017/11/currying-in-js.html)