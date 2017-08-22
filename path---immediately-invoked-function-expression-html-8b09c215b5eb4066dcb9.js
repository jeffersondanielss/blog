webpackJsonp([12],{"./node_modules/json-loader/index.js!./.cache/json/immediately-invoked-function-expression-html.json":function(e,a){e.exports={data:{markdownRemark:{html:'<p>O IIFE ou Immediately-invoked function expression, é umas das formas de se declarar uma função no javascript, para entender melhor <strong>como uma variável pode receber um valor de uma IIFE</strong> temos que entender antes alguns conceitos.</p>\n<p>O primeiro deles é como funciona a <strong>IIFE</strong>, que será a nossa função que retorna um valor, após isso temos que entender como funciona o <strong>Variable assignment</strong> que é a forma de atribuir uma função a nossa variável, e por fim, podemos juntar esses dois conceitos e criar nossa função auto executável que vai retornar um valor para nossa variável.</p>\n<h3>IFFE (função auto executável)</h3>\n<p>A função no javascript na sua sintax mais básica como: <strong>function functionName(){ /* code */ }</strong>, precisa obrigatoriamente ser chamada para que o bloco de código contida dentro dela seja executado. Uma alternativa para isso é o IIFE que ao mesmo tempo cria a função e já a executa na sequência.</p>\n<pre><code class="language-javascript">(function (){\n  /* code */\n})();\n</code></pre>\n<p>Algumas formas de criar uma IIFE:</p>\n<pre><code class="language-javascript">(function(){ /* code */ }());\n(function(){ /* code */ })();\nnew function(){ /* code */ }();\nvar fn = function(){ /* code */ }();\n</code></pre>\n<h3>Variable Assignment</h3>\n<p>É a forma de criar uma função retornando um valor a uma variável, dessa forma a menos que essa função seja um IIFE ainda precisamos executar a função para que a variável receba o valor retornado dela.</p>\n<pre><code class="language-javascript">// Função anônima atribuída a uma variável\nvar soma = function( num1, num2 ){\n  return num1 + num2;\n};\n\nvar operacao = function adicao( num1, num2 ){\n  return num1 + num2;\n};\n\nsoma( 5, 5 ); // 10\nadicao( 10, 10 ); // adicao is not defined\n</code></pre>\n<p>Legal, mas porque eu deveria aprender isso?</p>\n<h3>Escopo</h3>\n<p>As variáveis têm como escopo a função onde elas foram criadas, e como não queremos poluir o escopo global as variáveis criadas dentro da nossa IIFE só existem dentro dela.</p>\n<pre><code class="language-javascript">(function(){\n  var element = document.getElementById(\'element\');\n  console.log( element );  // &#x3C; div id="element">...&#x3C;/ div>\n})();\n\nconsole.log( element );  // element is not defined\n</code></pre>\n<h3>Conflitos de libs</h3>\n<p>Como muitas libs usam o <strong>$</strong> e é comum haver conflitos, apesar de ter outras alternativas como o <strong>noConflict()</strong> na IIFE você pode passar a referencia ao jQuery, ou qualquer outra lib como parâmetro:</p>\n<pre><code class="language-javascript">(function( $j ){\n  function facaAlgo() { /* code */ }\n  $j(\'.element\').click( facaAlgo );\n})( jQuery );\n</code></pre>\n<h3>Performance</h3>\n<p>Se você usa muitas vezes variáveis globais em seu código uma boa dica para performace é passar essas variáveis como parâmetro para que o interpretador não precise sair do escopo da sua função toda vez para ir buscar o valor daquela variável global.</p>\n<pre><code class="language-javascript">(function( doc ){\n    var btn = doc.getElementById(\'btn\')\n      , element = doc.getElementById(\'element\');\n\n    btn.addEventListener(\'click\', function(){\n      element.style.display = \'none\';\n    }, false);\n})( document );\n</code></pre>\n<p>Com a junção desses dois conceitos, o <strong>Variable Assignment</strong> e o <strong>IIFE</strong> podemos criar algo como:</p>\n<pre><code class="language-javascript">var operacao = (function(){\n  return {\n    soma: function( num1, num2 ) {\n      return num1 + num2;\n    },\n\n    subtracao: function( num1, num2 ) {\n      return num1 - num2;\n    }\n  }\n})();\n</code></pre>\n<p>Nesse exemplo acima temos uma função auto executável anônima atribuída a variável <strong>operacao</strong>, nessa IIFE retornamos um objeto com duas funções atribuídas as chaves do objeto. Como nós estamos retornando um objeto podemos acessar essas funções com <strong>operacao.soma( 5, 5 )</strong> por exemplo.\nÉ como se estivéssemos exportando essas funções que primeiramente estavam privadas dentro da IIFE para ser acessada através da variável <strong>operacao</strong>. Sendo assim podemos escolher o que queremos que permaneça privado e o que queremos tornar acessível.\nPara deixar mais organizado podemos criar as funções separadas e retornar o objeto apenas com o nome da função desejada.</p>\n<pre><code class="language-javascript">var operacao = (function(){\n\n  // função privada da IIFE\n  function soma( num1, num2 ) {\n    return num1 + num2;\n  }\n\n  // função privada da IIFE\n  function subtracao( num1, num2 ) {\n    return num1 - num2;\n  }\n\n  return {\n    soma, // retornando função soma a variável operacao\n  }\n\n})();\n\noperacao.soma(5,5) // 10\noperacao.subtracao(5,5) // operacao.subtracao is not a function\n</code></pre>\n<h3>Quer saber mais sobre IIFE ?</h3>\n<ul>\n<li><a href="http://benalman.com/news/2010/11/immediately-invoked-function-expression/">IIFE - benalman </a></li>\n<li><a href="http://imasters.com.br/front-end/javascript/sobre-funcoes-imediatas-javascript-iife/">Sobre funções imediatas JavaScript</a></li>\n<li><a href="http://www.bryanbraun.com/2014/11/27/every-possible-way-to-define-a-javascript-function">Every Possible Way to Define a Javascript Function</a></li>\n</ul>',frontmatter:{date:"December 20, 2015",path:"/immediately-invoked-function-expression.html",tags:["javascript"],title:"Immediately invoked function expression"}}},pathContext:{prev:{excerpt:"I speak Latin because I am a fancy man. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id orci viverra, lacinia mauris vitae, lacinia tortor. Mauris pretium pellentesque consequat. Pellentesque venenatis, mi sit amet fringilla...",html:"<p>I speak Latin because I am a fancy man.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id orci viverra, lacinia mauris vitae, lacinia tortor. Mauris pretium pellentesque consequat. Pellentesque venenatis, mi sit amet fringilla vehicula, lacus ante suscipit urna, vitae ornare tellus ex at nunc. Aenean fringilla eros quis nisi aliquet tempus. Fusce euismod orci lectus, luctus ultricies lacus pulvinar et. Etiam ut nibh eu libero lacinia varius ut ac dui. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec faucibus, augue at varius ultricies, nisi magna semper odio, sit amet fringilla massa mauris a ipsum. Nulla urna felis, pellentesque sed tincidunt et, luctus et ligula. Ut quis sollicitudin tellus. Sed at vehicula enim, a rutrum nunc. In hac habitasse platea dictumst. Pellentesque lacus ligula, vulputate ac tempor a, auctor at odio.</p>\n<p>Fusce ac est porttitor, fringilla turpis a, euismod erat. Aenean egestas nulla nec nisi condimentum, eget feugiat massa varius. Quisque sollicitudin augue sed nulla dapibus aliquam. In quis lectus tincidunt, dapibus est sit amet, laoreet quam. Vivamus eget enim tincidunt turpis gravida suscipit. Duis ac neque nec metus laoreet vehicula dignissim ut lorem. In eget dolor nulla. Donec augue elit, lobortis at elit sit amet, euismod tristique ex. Vivamus eleifend tempus enim eget mollis.</p>\n<p>Phasellus sem nunc, iaculis ut dui in, ultricies egestas enim. Nulla venenatis nisi at nisl commodo, sit amet dictum lacus egestas. Nulla ullamcorper vel arcu eget tempus. Proin vitae metus eget ligula lobortis posuere. Sed non viverra erat, quis dapibus velit. Praesent rhoncus ante vel fringilla rhoncus. Morbi id odio pharetra, condimentum velit sed, laoreet diam. Vivamus placerat tempus commodo. Phasellus vel nisl fringilla augue semper dictum et et ante. Nulla luctus, nulla ut lobortis rhoncus, arcu lectus lacinia nibh, faucibus ultrices elit arcu nec odio. Integer volutpat congue congue. Nam eleifend urna in diam cursus pharetra. Sed fermentum quis sem cursus tempus. Fusce at finibus tortor, eu pulvinar erat.</p>\n<p>Praesent sed eleifend augue. Morbi eu diam egestas, mattis urna eu, pulvinar arcu. Quisque fermentum odio in magna congue aliquam. Quisque rhoncus nunc id tempus elementum. Cras sed convallis eros, ac euismod magna. Ut tristique nulla neque, quis consequat libero volutpat id. Donec libero dolor, ornare eget ornare sit amet, sollicitudin nec ante. Praesent et finibus dui. Nam vehicula neque facilisis urna ornare dapibus.</p>\n<p>Fusce consequat nisi id nibh lobortis dictum. In cursus auctor diam, ac venenatis orci consequat semper. Quisque semper aliquet molestie. Ut bibendum convallis nunc, in dictum dolor consequat nec. Sed sit amet dui in purus placerat suscipit eu nec ipsum. Phasellus rhoncus nulla ut tortor sodales, vitae pellentesque odio venenatis. Sed facilisis nec odio aliquet sollicitudin. Donec ante mi, eleifend vitae ante id, fermentum porta ante. In fermentum massa nunc, nec malesuada lectus accumsan vitae. Integer lobortis magna at tortor mattis, a finibus erat facilisis.</p>",id:"/home/jefferson/workspace/blog/src/pages/07-18-2017-sample-post/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2017-07-18T13:35:13.234Z",path:"/sample-post",tags:["latin","sample"],title:"Sample Post"}},next:{excerpt:'Oláá, aqui nasce o primeiro post :), Já vou começar com um cliche: "É ensinado que se aprende." A algum tempo atraz começei a fazer o Be-mean, um curso sobre full-stack em javascript. E no meio do percurso tinha como tarefa fazer um artigo sobre...',html:'<h2>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; z-index: -1; display: block; "\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.66666666666666%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAEGzdBSy6P/xAAbEAACAgMBAAAAAAAAAAAAAAAAAgEDERMjMv/aAAgBAQABBQKGZCNinQ9W1pJZXlv/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwGH/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8BV//EABoQAQACAwEAAAAAAAAAAAAAAAABMQIhMnH/2gAIAQEABj8C2mcYtT10t//EABoQAAMBAQEBAAAAAAAAAAAAAAABESExgUH/2gAIAQEAAT8hYtNPdGZkn7remyvQplR5DZvh/9oADAMBAAIAAwAAABDkD//EABURAQEAAAAAAAAAAAAAAAAAABEA/9oACAEDAQE/EAEX/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QWP/EAB0QAQEAAgIDAQAAAAAAAAAAAAERACEx8EFRYbH/2gAIAQEAAT8QrIIClAui+DJd7NCkfXGWglHcN/cFiinJZ2YJJFUa5+uNp6i9uf/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="hipster guy"\n        title=""\n        src="/static/127c1a7f9dcbbde29434a6d76a6e2711-55338.jpeg"\n        srcset="/static/127c1a7f9dcbbde29434a6d76a6e2711-a21e6.jpeg 163w,\n/static/127c1a7f9dcbbde29434a6d76a6e2711-4ac53.jpeg 325w,\n/static/127c1a7f9dcbbde29434a6d76a6e2711-55338.jpeg 650w,\n/static/127c1a7f9dcbbde29434a6d76a6e2711-80f1d.jpeg 975w,\n/static/127c1a7f9dcbbde29434a6d76a6e2711-7fc90.jpeg 1300w,\n/static/127c1a7f9dcbbde29434a6d76a6e2711-96c4f.jpeg 1950w,\n/static/127c1a7f9dcbbde29434a6d76a6e2711-a562c.jpeg 5760w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </h2>\n<p>Oláá, aqui nasce o primeiro post :), Já vou começar com um cliche:</p>\n<h4>"É ensinado que se aprende."</h4>\n<p>A algum tempo atraz começei a fazer o Be-mean, um curso sobre full-stack em javascript. E no meio do percurso tinha como tarefa fazer um artigo sobre variáveis, dai veio a vontade de escrever um pouco mais para compartilhar o que venho aprendendo ai nesses dois anos como desenvolvedor front-end, não é muito tempo mas já é um começo.</p>\n<p>Pretendo postar aqui na maioria das vezes coisas sobre javascript que é o que mais venho estudando comprando livros e tal, mas provavelmente ira ter posts sobre outros assuntos.\nSem mais delongas..</p>\n<p><strong>Let\'s go!</strong></p>',id:"/home/jefferson/workspace/blog/src/pages/07-13-2017-hello-world/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-12-19T03:49:16.408Z",path:"/hello-world.html",tags:["first"],title:"Hello World"}}}}}});
//# sourceMappingURL=path---immediately-invoked-function-expression-html-8b09c215b5eb4066dcb9.js.map