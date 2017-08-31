webpackJsonp([14],{"./node_modules/json-loader/index.js!./.cache/json/immediately-invoked-function-expression-html.json":function(n,a){n.exports={data:{markdownRemark:{html:'<p>O IIFE ou Immediately-invoked function expression, é umas das formas de se declarar uma função no javascript, para entender melhor <strong>como uma variável pode receber um valor de uma IIFE</strong> temos que entender antes alguns conceitos.</p>\n<p>O primeiro deles é como funciona a <strong>IIFE</strong>, que será a nossa função que retorna um valor, após isso temos que entender como funciona o <strong>Variable assignment</strong> que é a forma de atribuir uma função a nossa variável, e por fim, podemos juntar esses dois conceitos e criar nossa função auto executável que vai retornar um valor para nossa variável.</p>\n<h3>IFFE (função auto executável)</h3>\n<p>A função no javascript na sua sintax mais básica como: <strong>function functionName(){ /* code */ }</strong>, precisa obrigatoriamente ser chamada para que o bloco de código contida dentro dela seja executado. Uma alternativa para isso é o IIFE que ao mesmo tempo cria a função e já a executa na sequência.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">/* code */</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Algumas formas de criar uma IIFE:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">new</span> <span class="token class-name">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Variable Assignment</h3>\n<p>É a forma de criar uma função retornando um valor a uma variável, dessa forma a menos que essa função seja um IIFE ainda precisamos executar a função para que a variável receba o valor retornado dela.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">// Função anônima atribuída a uma variável</span>\n<span class="token keyword">var</span> soma <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> num1<span class="token punctuation">,</span> num2 <span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> operacao <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">adicao</span><span class="token punctuation">(</span> num1<span class="token punctuation">,</span> num2 <span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">soma</span><span class="token punctuation">(</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 10</span>\n<span class="token function">adicao</span><span class="token punctuation">(</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// adicao is not defined</span>\n</code></pre>\n      </div>\n<p>Legal, mas porque eu deveria aprender isso?</p>\n<h3>Escopo</h3>\n<p>As variáveis têm como escopo a função onde elas foram criadas, e como não queremos poluir o escopo global as variáveis criadas dentro da nossa IIFE só existem dentro dela.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'element\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> element <span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// &lt; div id="element">...&lt;/ div></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> element <span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// element is not defined</span>\n</code></pre>\n      </div>\n<h3>Conflitos de libs</h3>\n<p>Como muitas libs usam o <strong>$</strong> e é comum haver conflitos, apesar de ter outras alternativas como o <strong>noConflict()</strong> na IIFE você pode passar a referencia ao jQuery, ou qualquer outra lib como parâmetro:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span> $j <span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">function</span> <span class="token function">facaAlgo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* code */</span> <span class="token punctuation">}</span>\n  <span class="token function">$j</span><span class="token punctuation">(</span><span class="token string">\'.element\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span> facaAlgo <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span> jQuery <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Performance</h3>\n<p>Se você usa muitas vezes variáveis globais em seu código uma boa dica para performace é passar essas variáveis como parâmetro para que o interpretador não precise sair do escopo da sua função toda vez para ir buscar o valor daquela variável global.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span> doc <span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> btn <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'btn\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">,</span> element <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'element\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">\'none\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span> document <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Com a junção desses dois conceitos, o <strong>Variable Assignment</strong> e o <strong>IIFE</strong> podemos criar algo como:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> operacao <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    soma<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> num1<span class="token punctuation">,</span> num2 <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    subtracao<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> num1<span class="token punctuation">,</span> num2 <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> num1 <span class="token operator">-</span> num2<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Nesse exemplo acima temos uma função auto executável anônima atribuída a variável <strong>operacao</strong>, nessa IIFE retornamos um objeto com duas funções atribuídas as chaves do objeto. Como nós estamos retornando um objeto podemos acessar essas funções com <strong>operacao.soma( 5, 5 )</strong> por exemplo.\nÉ como se estivéssemos exportando essas funções que primeiramente estavam privadas dentro da IIFE para ser acessada através da variável <strong>operacao</strong>. Sendo assim podemos escolher o que queremos que permaneça privado e o que queremos tornar acessível.\nPara deixar mais organizado podemos criar as funções separadas e retornar o objeto apenas com o nome da função desejada.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> operacao <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n  <span class="token comment" spellcheck="true">// função privada da IIFE</span>\n  <span class="token keyword">function</span> <span class="token function">soma</span><span class="token punctuation">(</span> num1<span class="token punctuation">,</span> num2 <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment" spellcheck="true">// função privada da IIFE</span>\n  <span class="token keyword">function</span> <span class="token function">subtracao</span><span class="token punctuation">(</span> num1<span class="token punctuation">,</span> num2 <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> num1 <span class="token operator">-</span> num2<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    soma<span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// retornando função soma a variável operacao</span>\n  <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\noperacao<span class="token punctuation">.</span><span class="token function">soma</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// 10</span>\noperacao<span class="token punctuation">.</span><span class="token function">subtracao</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// operacao.subtracao is not a function</span>\n</code></pre>\n      </div>\n<h3>Quer saber mais sobre IIFE ?</h3>\n<ul>\n<li><a href="http://benalman.com/news/2010/11/immediately-invoked-function-expression/">IIFE - benalman </a></li>\n<li><a href="http://imasters.com.br/front-end/javascript/sobre-funcoes-imediatas-javascript-iife/">Sobre funções imediatas JavaScript</a></li>\n<li><a href="http://www.bryanbraun.com/2014/11/27/every-possible-way-to-define-a-javascript-function">Every Possible Way to Define a Javascript Function</a></li>\n</ul>',frontmatter:{date:"20/12/2015",path:"/immediately-invoked-function-expression.html",tags:["javascript","front-end"],title:"Immediately invoked function expression"}}},pathContext:{prev:{excerpt:'Oláá, aqui nasce o primeiro post :), Já vou começar com um cliche: "É ensinado que se aprende." A algum tempo atraz começei a fazer o Be-mean, um curso sobre full-stack em javascript. E no meio do percurso tinha como tarefa fazer um artigo sobre...',html:'<p>Oláá, aqui nasce o primeiro post :), Já vou começar com um cliche:</p>\n<h4>"É ensinado que se aprende."</h4>\n<p>A algum tempo atraz começei a fazer o Be-mean, um curso sobre full-stack em javascript. E no meio do percurso tinha como tarefa fazer um artigo sobre variáveis, dai veio a vontade de escrever um pouco mais para compartilhar o que venho aprendendo ai nesses dois anos como desenvolvedor front-end, não é muito tempo mas já é um começo.</p>\n<p>Pretendo postar aqui na maioria das vezes coisas sobre javascript que é o que mais venho estudando comprando livros e tal, mas provavelmente ira ter posts sobre outros assuntos.\nSem mais delongas..</p>\n<p><strong>Let\'s go!</strong></p>',id:"/home/jefferson/workspace/blog/src/pages/07-13-2017-hello-world/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-12-19T03:49:16.408Z",path:"/hello-world.html",tags:null,title:"Hello World"}},next:{excerpt:"Que os pré-processadores facilitam nossa vida na hora de criar as nossas interfaces já não é novidade, o uso deles já é bem comum mesmo em aplicações pequenas. Mas mesmo sabendo de suas amplas funcionalidades as vezes acabamos usando apenas as mais...",html:'<p>Que os pré-processadores facilitam nossa vida na hora de criar as nossas interfaces já não é novidade, o uso deles já é bem comum mesmo em aplicações pequenas. Mas mesmo sabendo de suas amplas funcionalidades as vezes acabamos usando apenas as mais simples, aninhamento de seletores, <strong>$variáveis</strong>, <strong>@mixins</strong>, <strong>%placeholders</strong>.</p>\n<p>Nesse posts vou abordar outras funcionalidades muito úteis que podemos tirar mais proveito quando utilizamos SASS, como <strong>@function</strong>, <strong>@each</strong>, <strong>@if</strong>, <strong>map</strong>, <strong>map-get</strong>, <strong>darken</strong>, <strong>lighten</strong>.</p>\n<h2>Darken e Lighten</h2>\n<p>Podemos começar com os mais simples, o darken e o lighten tem muito em comum, são funções que recebem dois parâmetros, o primeiro é uma cor, e o segundo um valor  que irá alterar essa cor do primeiro parâmetro.</p>\n<p>A diferença é que o lighten irá deixar essa cor mais clara enquanto o darken mais escura.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> #FF0000<span class="token punctuation">;</span>\n\n<span class="token selector">.box </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">darken</span><span class="token punctuation">(</span><span class="token variable">$red</span>, 20%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">$red</span>, 20%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Essas funções são muito úteis na hora de criar sombras, como no caso de criar botões:</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> #FF0000<span class="token punctuation">;</span>\n\n<span class="token selector">.btn--red </span><span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$red</span><span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 1px 1px 1px <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">$red</span>, 40%<span class="token punctuation">)</span><span class="token punctuation">;</span> \n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 3px solid <span class="token function">darken</span><span class="token punctuation">(</span><span class="token variable">$red</span>, 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Map</h2>\n<p>Antes de ir para o tópico <strong>@each</strong>, vamos a uma breve introdução aos mapas com SASS, eles são bons na criação de regras iniciais do projeto, como configurar cores, fontes e breakpoints, podemos pegar como exemplo a definição das cores do projeto.</p>\n<p>Ao invés de criar uma variável para cada cor, podemos criar uma coleção se cores, um mapa com  chave e valor correspondente a cada cor que precise ser criada armazenado em uma variável.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n  <span class="token property">red</span><span class="token punctuation">:</span> #FF0000,\n  <span class="token property">green</span><span class="token punctuation">:</span> #00FF00,\n  <span class="token property">blue</span><span class="token punctuation">:</span> #0000FF\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Agora para buscar as cores basta usar a função nativa do SASS <strong>map-get()</strong> que recebe dois parâmetros, o primeiro é o mapa, que no caso é <strong>$color</strong> e o segundo parâmetro é a chave correspondente a cor que você deseja.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token selector">.elemento </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$color</span>, red<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Resultado:</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token selector">.elemento </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> #FF0000<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Each</h2>\n<p>O <strong>@each</strong> é excelente em economizar tempo automatizando tarefas repetidas, é muito útil para criar muitas classes com as mesmas propriedades mas com valores diferentes.</p>\n<p>Na criação dos principais componentes da sua aplicação como os botões e suas variações é um ótimo caso para se usar um each, aqui também vemos um dos benefícios de usar os mapas, usando o mesmo mapa do exemplo anterior vamos a criação dessas variações de botões.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n  <span class="token property">red</span><span class="token punctuation">:</span> #FF0000,\n  <span class="token property">green</span><span class="token punctuation">:</span> #00FF00,\n  <span class="token property">blue</span><span class="token punctuation">:</span> #0000FF\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$btnType</span>, <span class="token variable">$btnColor</span> in <span class="token variable">$color</span> </span><span class="token punctuation">{</span>\n  <span class="token selector">.btn--<span class="token variable">#{$btnType}</span> </span><span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$btnColor</span><span class="token punctuation">;</span>\n    <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 -1px 1px 0px <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">$btnColor</span>, 20%<span class="token punctuation">)</span><span class="token punctuation">;</span> \n    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 3px solid <span class="token function">darken</span><span class="token punctuation">(</span><span class="token variable">$btnColor</span>, 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Para o uso de variáveis em seletores e propriedades é preciso fazer a interpolação das mesmas, para isso é usada a sintax <strong>#{$variavel}</strong> como se pode perceber na linha <strong>8</strong> do exemplo acima.</p>\n<p>Esse <strong>@each</strong> vai percorrer o mapa <strong>$color</strong> resgatar chave e valor e criar um botão para cara item. Isso vai resultar em três classes.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.btn--red</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> #FF0000<span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 -1px 1px 0px #ff6666<span class="token punctuation">;</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 3px solid #cc0000<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.btn--green</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> #00FF00<span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 -1px 1px 0px #66ff66<span class="token punctuation">;</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 3px solid #00cc00<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.btn--blue</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> #0000FF<span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 -1px 1px 0px #6666ff<span class="token punctuation">;</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 3px solid #0000cc<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>If</h2>\n<p>O <strong>@if</strong> é muito útil na hora de criar functions, eachs, e mixins que em alguns casos precisa demonstrar um comportamento diferente, ao invés que criar um outro mixin você pode apenas inserir uma condição dentro desse bloco para que esse comportamento seja adicionado ou não.</p>\n<p>Usando o exemplo do <strong>@each</strong> acima, digamos que apenas um dos botões precise receber um comportamento diferente, ainda assim podemos seguir com o mesmo código, basta adicionar um <strong>@if</strong> para identificar esse botão.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n  <span class="token property">red</span><span class="token punctuation">:</span> #FF0000,\n  <span class="token property">green</span><span class="token punctuation">:</span> #00FF00,\n  <span class="token property">blue</span><span class="token punctuation">:</span> #0000FF\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$name</span>, <span class="token variable">$btnColor</span> in <span class="token variable">$color</span> </span><span class="token punctuation">{</span>\n  <span class="token selector">.btn--<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$btnColor</span><span class="token punctuation">;</span>\n    <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 -1px 1px 0px <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">$btnColor</span>, 20%<span class="token punctuation">)</span><span class="token punctuation">;</span> \n    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 3px solid <span class="token function">darken</span><span class="token punctuation">(</span><span class="token variable">$btnColor</span>, 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$name</span> == red </span><span class="token punctuation">{</span>\n      <span class="token property">color</span><span class="token punctuation">:</span> #FFFFFF<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Na linha <strong>11</strong> é adicionado essa condição que compara a chave do mapa, se <strong>$name</strong> que são as chaves do mapa <strong>$color</strong> for igual a <strong>red</strong> então a linha <strong>14</strong> é adicionada. Resultado:</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.btn--red</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> #FF0000<span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 -1px 1px 0px #ff6666<span class="token punctuation">;</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 3px solid #cc0000<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> #FFFFFF<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.btn--green</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> #00FF00<span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 -1px 1px 0px #66ff66<span class="token punctuation">;</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 3px solid #00cc00<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.btn--blue</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> #0000FF<span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 -1px 1px 0px #6666ff<span class="token punctuation">;</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 3px solid #0000cc<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Function</h2>\n<p>A diretiva <strong>@function</strong> no SASS é útil pra que cada vez menos a gente precisa repetir códigos, no CSS há muitas operações que precisamos que podem ser transformadas em funções, como transformar medidas de fontes fixas em relativas.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token keyword">@function</span> <span class="token function">rem</span><span class="token punctuation">(</span><span class="token variable">$px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">@return</span> <span class="token punctuation">(</span><span class="token variable">$px</span>/16<span class="token punctuation">)</span> <span class="token operator">+</span> rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.btn </span><span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">rem</span><span class="token punctuation">(</span>32<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Há muito para se aproveitar dessa e de muitas outras funções que o SASS tem, podemos usar essas funções em coisas extremamente simples mas que podem economizar muito tempo, e tempo é dinheiro não é verdade?!</p>\n<p>Tudo depende de como e quando você vai usar cada feature que o SASS pode te oferecer, quando a expectativa do projeto é crescer constantemente é ótimo ter algo desse tipo, vai facilitar muito na hora de implementar mudanças ou novas variações nos componentes que já existem.</p>\n<p>No site do SASS tem muitas outras coisas interessantes que valem a pena ser consideradas, caso tenha interesse você pode acessar o <a href="http://sass-lang.com/guide">Guide</a> ou a <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html">Documentação</a>.</p>',
id:"/home/jefferson/workspace/blog/src/pages/21-08-2016-tirando-maior-proveito-do-sass/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2016-08-21",path:"/tirando-maior-proveito-do-sass.html",tags:["SASS","CSS","front-end"],title:"Tirando maior proveito do SASS"}},url:"http://jeffersondaniel.com/blog"}}}});
//# sourceMappingURL=path---immediately-invoked-function-expression-html-022a4d0b1acf33989197.js.map