webpackJsonp([2],{"./node_modules/json-loader/index.js!./.cache/json/index.json":function(n,a){n.exports={data:{cssTransition:{displayName:"CSSTransition",composes:["./Transition"],description:{childMarkdownRemark:{html:'<p>A <code>Transition</code> component using CSS transitions and animations.\nIt\'s inspired by the excellent <a href="http://www.nganimate.org/">ng-animate</a> libary.</p>\n<p><code>CSSTransition</code> applies a pair of class names during the <code>appear</code>, <code>enter</code>,\nand <code>exit</code> stages of the transition. The first class is applied and then a\nsecond "active" class in order to activate the css animation.</p>\n<p>When the <code>in</code> prop is toggled to <code>true</code> the Component will get\nthe <code>example-enter</code> CSS class and the <code>example-enter-active</code> CSS class\nadded in the next tick. This is a convention based on the <code>classNames</code> prop.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> CSSTransition <span class="token keyword">from</span> <span class="token string">\'react-transition-group/CSSTransition\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Fade <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> children<span class="token punctuation">,</span> <span class="token operator">...</span>props <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n <span class="token operator">&lt;</span>CSSTransition\n   <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span>\n   timeout<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span>\n   classNames<span class="token operator">=</span><span class="token string">"fade"</span>\n <span class="token operator">></span>\n  <span class="token punctuation">{</span>children<span class="token punctuation">}</span>\n <span class="token operator">&lt;</span><span class="token operator">/</span>CSSTransition<span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">FadeInAndOut</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token operator">=</span> <span class="token punctuation">{</span> show<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n\n    <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> show<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>show <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>Fade <span class="token keyword">in</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>show<span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>div<span class="token operator">></span>Hello world<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Fade<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>And the coorresponding CSS for the <code>&#x3C;Fade></code> component:</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.fade-enter</span> <span class="token punctuation">{</span>\n  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.01<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.fade-enter.fade-enter-active</span> <span class="token punctuation">{</span>\n  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n  <span class="token property">transition</span><span class="token punctuation">:</span> opacity 500ms ease-in<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.fade-leave</span> <span class="token punctuation">{</span>\n  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.fade-leave.fade-leave-active</span> <span class="token punctuation">{</span>\n  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.01<span class="token punctuation">;</span>\n  <span class="token property">transition</span><span class="token punctuation">:</span> opacity 300ms ease-in<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>'}},props:[{name:"classNames",required:!1,type:{name:"{\n appear?: string,\n appearActive?: string,\n enter?: string,\n enterActive?: string,\n exit?: string,\n exitActive?: string,\n}",value:null,raw:"classNamesShape"},defaultValue:null,description:{childMarkdownRemark:{html:'<p>The animation classNames applied to the component as it enters or exits.\nA single name can be provided and it will be suffixed for each stage: e.g.</p>\n<p><code>classNames="fade"</code> applies <code>fade-enter</code>, <code>fade-enter-active</code>,\n<code>fade-exit</code>, <code>fade-exit-active</code>, <code>fade-appear</code>, and <code>fade-appear-active</code>.\nEach individual classNames can also be specified independently like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>classNames<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n appear<span class="token punctuation">:</span> <span class="token string">\'my-appear\'</span><span class="token punctuation">,</span>\n appearActive<span class="token punctuation">:</span> <span class="token string">\'my-active-appear\'</span><span class="token punctuation">,</span>\n enter<span class="token punctuation">:</span> <span class="token string">\'my-enter\'</span><span class="token punctuation">,</span>\n enterActive<span class="token punctuation">:</span> <span class="token string">\'my-active-enter\'</span><span class="token punctuation">,</span>\n exit<span class="token punctuation">:</span> <span class="token string">\'my-exit\'</span><span class="token punctuation">,</span>\n exitActive<span class="token punctuation">:</span> <span class="token string">\'my-active-exit\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>'}},doclets:{type:"{{\n appear?: string,\n appearActive?: string,\n enter?: string,\n enterActive?: string,\n exit?: string,\n exitActive?: string,\n}}"}},{name:"onEnter",required:!1,type:{name:"Function(node: HtmlElement, isAppearing: bool)",value:null,raw:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>A <code>&#x3C;Transition></code> callback fired immediately after the 'enter' or 'appear' class is\napplied.</p>"}},doclets:{type:"Function(node: HtmlElement, isAppearing: bool)"}},{name:"onEntering",required:!1,type:{name:"Function(node: HtmlElement, isAppearing: bool)",value:null,raw:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>A <code>&#x3C;Transition></code> callback fired immediately after the 'enter-active' or\n'appear-active' class is applied.</p>"}},doclets:{type:"Function(node: HtmlElement, isAppearing: bool)"}},{name:"onEntered",required:!1,type:{name:"Function(node: HtmlElement, isAppearing: bool)",value:null,raw:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>A <code>&#x3C;Transition></code> callback fired immediately after the 'enter' or\n'appear' classes are <strong>removed</strong> from the DOM node.</p>"}},doclets:{type:"Function(node: HtmlElement, isAppearing: bool)"}},{name:"onExit",required:!1,type:{name:"Function(node: HtmlElement)",value:null,raw:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>A <code>&#x3C;Transition></code> callback fired immediately after the 'exit'  class is\napplied.</p>"}},doclets:{type:"Function(node: HtmlElement)"}},{name:"onExiting",required:!1,type:{name:"Function(node: HtmlElement",value:null,raw:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>A <code>&#x3C;Transition></code> callback fired immediately after the 'exit-active' is\nclass is applied.</p>"}},doclets:{type:"Function(node: HtmlElement"}},{name:"onExited",required:!1,type:{name:"Function(node: HtmlElement)",value:null,raw:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>A <code>&#x3C;Transition></code> callback fired immediately after the 'exit' classes\nare <strong>removed</strong> from the DOM node.</p>"}},doclets:{type:"Function(node: HtmlElement)"}}]},transition:{displayName:"Transition",composes:null,description:{childMarkdownRemark:{html:'<p>The Transition component lets you describe a transition from one component\nstate to another <em>over time</em> with a simple declarative API. Most commonly\nIt\'s used to animate the mounting and unmounting of Component, but can also\nbe used to describe in-place transition states as well.</p>\n<p>By default the <code>Transition</code> component does not alter the behavior of the\ncomponent it renders, it only tracks "enter" and "exit" states for the components.\nIt\'s up to you to give meaning and effect to those states. For example we can\nadd styles to a component when it enters or exits:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> Transition <span class="token keyword">from</span> <span class="token string">\'react-transition-group/Transition\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> duration <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> defaultStyle <span class="token operator">=</span> <span class="token punctuation">{</span>\n  transition<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`opacity </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>duration<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms ease-in-out`</span></span><span class="token punctuation">,</span>\n  opactity<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> transitionStyles <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entering<span class="token punctuation">:</span> <span class="token punctuation">{</span> opacity<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  entered<span class="token punctuation">:</span>  <span class="token punctuation">{</span> opacity<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Fade <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token keyword">in</span><span class="token punctuation">:</span> inProp <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transition</span> <span class="token attr-name">in</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>inProp<span class="token punctuation">}</span></span> <span class="token attr-name">timeout</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>duration<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>defaultStyle<span class="token punctuation">,</span>\n        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>transitionStyles<span class="token punctuation">[</span>state<span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        I\'m A fade Transition<span class="token operator">!</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Transition</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>'}},props:[{name:"children",required:!0,type:{name:"union",value:[{name:"func"},{name:"element"}],raw:null},defaultValue:null,description:{childMarkdownRemark:{html:'<p>Generally a React element to animate, all unknown props on Transition are\ntransfered to the <strong>single</strong> child element.</p>\n<p>For advanced uses a <code>function</code> child can be used instead of a React element.\nThis function is called with the current transition status\n(\'entering\', \'entered\', \'exiting\', \'exited\', \'unmounted\'), which can used\nto apply context specific props to a component.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transition</span> <span class="token attr-name">timeout</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">150</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">{</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`fade fade-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Transition</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>'}},doclets:{type:null}},{name:"in",required:!1,type:{name:"bool",value:null,raw:null},defaultValue:{value:"false",computed:!1},description:{childMarkdownRemark:{html:"<p>Show the component; triggers the enter or exit states</p>"}},doclets:{type:null}},{name:"mountOnEnter",required:!1,type:{name:"bool",value:null,raw:null},defaultValue:{value:"false",computed:!1},description:{childMarkdownRemark:{html:'<p>Wait until the first "enter" transition to mount the component (add it to the DOM)</p>'}},doclets:{type:null}},{name:"unmountOnExit",required:!1,type:{name:"bool",value:null,raw:null},defaultValue:{value:"false",computed:!1},description:{childMarkdownRemark:{html:"<p>Unmount the component (remove it from the DOM) when it is not shown</p>"}},doclets:{type:null}},{name:"appear",required:!1,type:{name:"bool",value:null,raw:null},defaultValue:{value:"false",computed:!1},description:{childMarkdownRemark:{html:"<p>Enable or disable appear (entering on mount) transitions.</p>"}},doclets:{type:null}},{name:"enter",required:!1,type:{name:"bool",value:null,raw:null},defaultValue:{value:"true",computed:!1},description:{childMarkdownRemark:{html:"<p>Enable or disable enter transitions.</p>"}},doclets:{type:null}},{name:"exit",required:!1,type:{name:"bool",value:null,raw:null},defaultValue:{value:"true",computed:!1},description:{childMarkdownRemark:{html:"<p>Enable or disable exit transitions.</p>"}},doclets:{type:null}},{name:"timeout",required:!1,type:{name:"number | { enter?: number, exit?: number }",value:null,raw:"timeoutsShape"},defaultValue:null,description:{childMarkdownRemark:{html:'<p>The duration for the transition, in milliseconds.</p>\n<p>You may specify a single timeout for all transitions like: <code>timeout={500}</code>,\nor individually like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code>timeout<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n enter<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span>\n leave<span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>'}},doclets:{type:"{number | { enter?: number, exit?: number }}"}},{name:"addEndListener",required:!1,type:{name:"func",value:null,raw:null},defaultValue:null,description:{childMarkdownRemark:{html:'<p>Add a custom transition end trigger. Called with the transitioning\nDOM node and a <code>done</code> callback. Allows for more fine grained transition end\nlogic. <strong>Note:</strong> Timeouts are still used as a fallback.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code>addEndListener<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> done<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// use the css transitionend event to mark the finish of a transition</span>\n  node<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'transitionend\'</span><span class="token punctuation">,</span> done<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>'}},doclets:{type:null}},{name:"onEnter",required:!1,type:{name:"Function(node: HtmlElement, isAppearing: bool)",value:null,raw:null},defaultValue:{value:"function noop() {}",computed:!1},description:{childMarkdownRemark:{html:'<p>Callback fired before the "entering" status is applied.</p>'}},doclets:{type:"Function(node: HtmlElement, isAppearing: bool)"}},{name:"onEntering",required:!1,type:{name:"Function(node: HtmlElement, isAppearing: bool)",value:null,raw:null},defaultValue:{value:"function noop() {}",computed:!1},description:{childMarkdownRemark:{html:'<p>Callback fired after the "entering" status is applied.</p>'}},doclets:{type:"Function(node: HtmlElement, isAppearing: bool)"}},{name:"onEntered",required:!1,type:{name:"Function(node: HtmlElement, isAppearing: bool)",value:null,raw:null},defaultValue:{value:"function noop() {}",computed:!1},description:{childMarkdownRemark:{html:'<p>Callback fired after the "enter" status is applied.</p>'}},doclets:{type:"Function(node: HtmlElement, isAppearing: bool)"}},{name:"onExit",required:!1,type:{name:"Function(node: HtmlElement)",value:null,raw:null},defaultValue:{value:"function noop() {}",computed:!1},description:{childMarkdownRemark:{html:'<p>Callback fired before the "exiting" status is applied.</p>'}},doclets:{type:"Function(node: HtmlElement)"}},{name:"onExiting",required:!1,type:{name:"Function(node: HtmlElement)",value:null,raw:null},defaultValue:{value:"function noop() {}",computed:!1},description:{childMarkdownRemark:{html:'<p>Callback fired after the "exiting" status is applied.</p>'}},doclets:{type:"Function(node: HtmlElement)"}},{name:"onExited",required:!1,type:{name:"Function(node: HtmlElement)",value:null,raw:null},defaultValue:{value:"function noop() {}",computed:!1},description:{childMarkdownRemark:{html:'<p>Callback fired after the "exited" status is applied.</p>'}},doclets:{type:"Function(node: HtmlElement)"}}]},transitionGroup:{displayName:"TransitionGroup",composes:null,description:{childMarkdownRemark:{html:'<p>The <code>&#x3C;TransitionGroup></code> component manages a set of <code>&#x3C;Transition></code> components\nin a list. Like with the <code>&#x3C;Transition></code> component, <code>&#x3C;TransitionGroup></code>, is a\nstate machine for managing the mounting and unmounting of components over\ntime.</p>\n<p>Consider the example below using the <code>Fade</code> CSS transition from before.\nAs items are removed or added to the TodoList the <code>in</code> prop is toggled\nautomatically by the <code>&#x3C;TransitionGroup></code>. You can use <em>any</em> <code>&#x3C;Transition></code>\ncomponent in a <code>&#x3C;TransitionGroup></code>, not just css.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> TransitionGroup <span class="token keyword">from</span> <span class="token string">\'react-transition-group/TransitionGroup\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">TodoList</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>items<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'hello\'</span><span class="token punctuation">,</span> <span class="token string">\'world\'</span><span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token string">\'me\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">handleAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> newItems <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n      <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">\'Enter some text\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> items<span class="token punctuation">:</span> newItems <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">handleRemove</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> newItems <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    newItems<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>items<span class="token punctuation">:</span> newItems<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Add Item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TransitionGroup</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FadeTransition</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n                <span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token string">\' \'</span><span class="token punctuation">}</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleRemove</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                  remove\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FadeTransition</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TransitionGroup</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Note that <code>&#x3C;TransitionGroup></code>  does not define any animation behavior!\nExactly <em>how</em> a list item animates is up to the individual <code>&#x3C;Transition></code>\ncomponents. This means you can mix and match animations across different\nlist items.</p>'
}},props:[{name:"component",required:!1,type:{name:"any",value:null,raw:null},defaultValue:{value:"'div'",computed:!1},description:{childMarkdownRemark:{html:"<p><code>&#x3C;TransitionGroup></code> renders a <code>&#x3C;div></code> by default. You can change this\nbehavior by providing a <code>component</code> prop.</p>"}},doclets:{type:null}},{name:"children",required:!1,type:{name:"node",value:null,raw:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>A set of <code>&#x3C;Transition></code> components, that are toggled <code>in</code> and out as they\nleave. the <code>&#x3C;TransitionGroup></code> will inject specific transition props, so\nremember to spread them throguh if you are wrapping the <code>&#x3C;Transition></code> as\nwith our <code>&#x3C;Fade></code> example.</p>"}},doclets:{type:null}},{name:"appear",required:!1,type:{name:"bool",value:null,raw:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>A convenience prop that enables or disabled appear animations\nfor all children. Note that specifiying this will override any defaults set\non individual children Transitions.</p>"}},doclets:{type:null}},{name:"enter",required:!1,type:{name:"bool",value:null,raw:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>A convenience prop that enables or disabled enter animations\nfor all children. Note that specifiying this will override any defaults set\non individual children Transitions.</p>"}},doclets:{type:null}},{name:"exit",required:!1,type:{name:"bool",value:null,raw:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>A convenience prop that enables or disabled exit animations\nfor all children. Note that specifiying this will override any defaults set\non individual children Transitions.</p>"}},doclets:{type:null}}]}},pathContext:{}}}});
//# sourceMappingURL=path---index-bf0e56b9d2ae82620021.js.map