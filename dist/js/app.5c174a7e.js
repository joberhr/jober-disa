(function(t){function e(e){for(var n,c,i=e[0],o=e[1],l=e[2],v=0,p=[];v<i.length;v++)c=i[v],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,i=1;i<s.length;i++){var o=s[i];0!==r[o]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=s[0]))}return t}var n={},r={app:0},a=[];function c(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=n,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(s,n,function(e){return t[e]}.bind(null,n));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/jober-disa/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=o;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"09c6":function(t,e,s){},"0ec3":function(t,e,s){},"1af0":function(t,e,s){},"2fb3":function(t,e,s){"use strict";var n=s("0ec3"),r=s.n(n);r.a},"56d7":function(t,e,s){"use strict";s.r(e);s("14c6"),s("08c1"),s("4842"),s("d9fc");var n=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t._m(0),s("div",{staticClass:"contents"},[s("router-view")],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("a",{staticClass:"home",attrs:{href:"/dist/"}},[t._v("홈으로")]),n("div",{staticClass:"logo-null"}),n("img",{staticClass:"logo",attrs:{src:s("cf05")}})])}],c=(s("e267"),s("2877")),i={},o=Object(c["a"])(i,r,a,!1,null,"531c8ac9",null),l=o.exports,u=s("8c4f"),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticStyle:{flex:"1"}}),s("h2",{staticClass:"title"},[t._v("Jober DISA 테스트")]),s("div",{staticStyle:{flex:"1"}}),s("div",{staticStyle:{width:"320px",margin:"auto"}},[s("p",{staticClass:"text-warn"},[t._v("주의")]),s("p",{staticClass:"text"},[t._v("이 검사는 성향을 알아가는 과정일 뿐입니다. 너무 진지하게 생각하지 마세요.")]),s("div",{staticClass:"start-button-wrapper"},[s("router-link",{attrs:{to:"/test_before"}},[s("button",{staticClass:"start-button"},[t._v("검사 시작")])]),s("a",{staticClass:"another",attrs:{href:"/another"}},[t._v("성격 유형 보기")])],1)]),s("div",{staticStyle:{flex:"1"}})])},p=[],b={name:"home",components:{}},f=b,d=(s("cccb"),Object(c["a"])(f,v,p,!1,null,null,null)),_=d.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"test"},[s("div",[s("div",{staticClass:"answer-button-root"},[s("div",[s("p",{staticStyle:{"font-weight":"bold","font-size":"26px","margin-left":"4px","margin-bottom":"4px"}},[t._v(t._s(t.currentProb)+"번")]),s("br"),s("div",{staticClass:"box"},[s("div",{staticClass:"answer-button-wrapper"},[s("button",{staticClass:"answer-button",class:{selected:1===t.currentButtonIdx},on:{click:function(e){t.currentButtonIdx=1}}},[t._v("\n              "+t._s(t.answerLists[4*(t.currentProb-1)])+"\n            ")]),s("button",{staticClass:"answer-button",class:{selected:2===t.currentButtonIdx},on:{click:function(e){t.currentButtonIdx=2}}},[t._v("\n              "+t._s(t.answerLists[4*(t.currentProb-1)+1])+"\n            ")])]),s("div",{staticStyle:{display:"flex","flex-direction":"row"}},[s("button",{staticClass:"answer-button",class:{selected:3===t.currentButtonIdx},on:{click:function(e){t.currentButtonIdx=3}}},[t._v("\n              "+t._s(t.answerLists[4*(t.currentProb-1)+2])+"\n            ")]),s("button",{staticClass:"answer-button",class:{selected:4===t.currentButtonIdx},on:{click:function(e){t.currentButtonIdx=4}}},[t._v("\n              "+t._s(t.answerLists[4*(t.currentProb-1)+3])+"\n            ")])])])])]),s("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center","padding-top":"40px"}},[s("button",{staticClass:"selected-button",on:{click:t.selectAnswer}},[t._v("\n        선택 완료\n      ")])])])])},m=[],C=["차분하다","단호하다","조심스럽다","표현한다","앞장선다","바로잡다","흥을 추구한다","만족한다","기꺼이 한다","활기차다","대담하다","정확하다","따지고 든다","의심한다","우유부단하다","예측할 수 없다","공손하다","사교적이다","끈기 있다","대담하다","설득력 있다","자립심이 크다","논리적이다","젠틀하다","신중하다","침착하다","결단력 있다","사람의 마음을 끈다","인기 있다","적극적이다","완벽을 추구한다","너그럽다","화려하다","평범하다","태평하다","단도직입적이다","체계적이다","낙관적이다","끈질기다","협조적이다","가차없다","겸손하다","친근하다","수다스럽다","상냥하다","관찰력 있다","장난기 많다","의지가 강하다","매력적이다","모험심이 강하다","체계적이다","신중하다","자제심이 있다","꾸준하다","전투적이다","매력적이다","열렬하다","분석적이다","동정심이 크다","결심이 굳다","명령한다","충동적이다","느리다","비난한다","한결같다","강인하다","활기 넘친다","느긋하다","영향력 있다","친절하다","독립적이다","정돈됐다","이상주의적이다","인기 있다","예의 바르다","거침없다","안달복달한다","진지하다","꾸물거린다","감정적이다","경쟁적이다","즉흥적이다","충실하다","생각한다","꼼꼼하다","배려한다","설득력 있다","용감하다","의존적이다","변덕스럽다","냉정하다","강요한다","관대하다","규정을 따른다","흥미를 쫓다","정확하다"],x=["B","D","A","C","A","C","D","B","C","B","A","D","A","D","C","B","D","B","C","A","B","A","D","C","C","D","B","A","B","A","D","C","D","A","C","B","C","B","D","A","A","D","C","B","D","C","A","B","B","A","D","C","C","D","B","B","D","A","C","B","A","B","C","D","B","C","D","A","C","A","B","D","D","B","C","A","A","D","C","B","A","B","C","D","D","C","B","A","D","B","A","C","D","C","A","B"],E={name:"test",data:function(){return{currentProb:1,currentButtonIdx:-1,scores:{A:0,B:0,C:0,D:0},histories:[],isSelectAnswerIn:!1,answerLists:C,answerScore:x}},methods:{selectAnswer:function(){if(!this.isSelectAnswerIn)if(this.currentButtonIdx<=0)alert("선택된 항목이 없습니다");else{this.isSelectAnswerIn=!0;var t=this.currentButtonIdx,e=String.fromCharCode("A".charCodeAt(0)+t-1);this.histories.push(e);for(var s=0;s<4;s++)if(x[4*(this.currentProb-1)+s]===e){this.scores[String.fromCharCode("A".charCodeAt(0)+s)]++;break}if(24===this.currentProb){var n="RED",r="A";switch(this.scores[r]<this.scores["B"]&&(r="B"),this.scores[r]<this.scores["C"]&&(r="C"),this.scores[r]<this.scores["D"]&&(r="D"),r){case"A":n="RED";break;case"B":n="YELLOW";break;case"C":n="GREEN";break;case"D":n="BLUE";break}this.$router.push({path:"/result?result=".concat(n)})}else this.currentProb++;this.currentButtonIdx=-1,this.isSelectAnswerIn=!1}}}},y=E,w=(s("2fb3"),Object(c["a"])(y,h,m,!1,null,"184296cf",null)),g=w.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"result"},[s("div",[s("p",{staticStyle:{"font-size":"34px","padding-bottom":"10px","font-weight":"bold"}},[t._v("[결과]")]),s("p",{staticStyle:{"font-size":"24px","margin-bottom":"3px"}},[t._v("당신은")]),s("p",{class:{red:"RED"===t.result,yellow:"YELLOW"===t.result,green:"GREEN"===t.result,blue:"BLUE"===t.result},staticStyle:{"font-size":"40px","font-weight":"bold","margin-bottom":"3px"}},[t._v("\n      "+t._s(t.result)+"\n    ")]),s("p",{staticStyle:{"font-size":"24px","margin-bottom":"3px"}},[t._v("에 가까워요!")]),s("br"),s("br"),"RED"===t.result?s("div",{staticClass:"parag"},[s("p",[s("span",{class:{red:"RED"===t.result,yellow:"YELLOW"===t.result,green:"GREEN"===t.result,blue:"BLUE"===t.result}},[t._v(t._s(t.result)+" ")]),t._v("는\n        불처럼 열정적인\n      ")]),s("p",[t._v("성향을 지니고 있으며,")]),t._m(0),s("p",[t._v("잘 어울리는 경향이 있어요.")])]):t._e(),"YELLOW"===t.result?s("div",{staticClass:"parag"},[s("p",[s("span",{class:{red:"RED"===t.result,yellow:"YELLOW"===t.result,green:"GREEN"===t.result,blue:"BLUE"===t.result}},[t._v(t._s(t.result)+" ")]),t._v("는\n        어려운 상황에서도 답을 찾는\n      ")]),s("p",[t._v("창의적인 성향을 지니고 있으며,")]),t._m(1),s("p",[t._v("잘 어울리는 경향이 있어요.")])]):t._e(),"GREEN"===t.result?s("div",{staticClass:"parag"},[s("p",[s("span",{class:{red:"RED"===t.result,yellow:"YELLOW"===t.result,green:"GREEN"===t.result,blue:"BLUE"===t.result}},[t._v(t._s(t.result)+" ")]),t._v("는\n        맡은 일을 책임감있게 끝내는\n      ")]),s("p",[t._v("안정적인 성향을 지니고 있으며,")]),t._m(2),s("p",[t._v("잘 어울리는 경향이 있어요.")])]):t._e(),"BLUE"===t.result?s("div",{staticClass:"parag"},[s("p",[s("span",{class:{red:"RED"===t.result,yellow:"YELLOW"===t.result,green:"GREEN"===t.result,blue:"BLUE"===t.result}},[t._v(t._s(t.result)+" ")]),t._v("는\n        성실하고 체계적인 성향을\n      ")]),s("p",[t._v("지니고 있으며,")]),t._m(3),s("p",[t._v("잘 어울리는 경향이 있어요.")])]):t._e(),s("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center","padding-top":"40px"}},[s("router-link",{attrs:{to:"/another?color="+t.result}},[s("button",{staticClass:"answer-button"},[t._v("\n          자세히 보기\n        ")])])],1)])])},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"yellow"},[t._v("YELLOW ")]),t._v("색의 사람들과 자연적으로")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"red"},[t._v("RED ")]),t._v("색의 사람들과 자연적으로")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"blue"},[t._v("BLUE ")]),t._v("색의 사람들과 자연적으로")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"green"},[t._v("GREEN ")]),t._v("색의 사람들과 자연적으로")])}],D={name:"test",data:function(){return{result:this.$route.query.result}},methods:{}},k=D,A=(s("7846"),Object(c["a"])(k,B,S,!1,null,"69e24e90",null)),L=A.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"result"},[s("p",{staticStyle:{"font-size":"21px","padding-bottom":"10px","font-weight":"bold","margin-bottom":"20px"}},[t._v("[색깔별 유형보기]")]),s("div",{staticClass:"tabs"},[s("a",{class:[0===t.activetab?"active":""],on:{click:function(e){t.activetab=0}}},[s("span",{staticStyle:{color:"red"}},[t._v("Red")])]),s("a",{class:[1===t.activetab?"active":""],on:{click:function(e){t.activetab=1}}},[s("span",{staticStyle:{color:"yellow"}},[t._v("Yellow")])]),s("a",{class:[2===t.activetab?"active":""],on:{click:function(e){t.activetab=2}}},[s("span",{staticStyle:{color:"green"}},[t._v("Green")])]),s("a",{class:[3===t.activetab?"active":""],on:{click:function(e){t.activetab=3}}},[s("span",{staticStyle:{color:"blue"}},[t._v("Blue")])])]),s("div",{staticClass:"content"},[0===t.activetab?s("div",{staticClass:"tabcontent"},[s("span",{staticStyle:{"font-size":"17px"}},[t._v("독립적, 주도적, 문제 해결사")]),s("br"),s("br"),t._m(0)]):t._e(),1===t.activetab?s("div",{staticClass:"tabcontent"},[s("span",{staticStyle:{"font-size":"17px","word-break":"keep-all"}},[t._v("극적, 외향적, 인생을 즐길 줄 아는 자")]),s("br"),s("br"),t._m(1)]):t._e(),2===t.activetab?s("div",{staticClass:"tabcontent"},[s("span",{staticStyle:{"font-size":"17px","word-break":"keep-all"}},[t._v("안정적, 협조적, 다정함")]),s("br"),s("br"),t._m(2)]):t._e(),3===t.activetab?s("div",{staticClass:"tabcontent"},[s("span",{staticStyle:{"font-size":"17px","word-break":"keep-all"}},[t._v("분석적, 논리적, 완벽주의자")]),s("br"),s("br"),t._m(3)]):t._e()])])},R=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticStyle:{"word-break":"keep-all","font-size":"14px"}},[t._v("레드의 성향을 가진 사람들은 대체로 추진력이 과감하고 유능한 사람들이 많아요."),s("br"),s("br"),t._v("\n        그리고 변화에 유연하고 위기상황에 대처를 잘해요."),s("br"),s("br"),t._v("\n        레드의 성향을 가진 사람들은 기운찬 목소리를 갖고 있고, 말과 행동이 빠른 편이에요."),s("br"),s("br"),t._v("\n        레드의 유명인사로는 버락 오바마, 힐러리 클린턴, 테레사 수녀 같은 사람들이 있어요."),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticStyle:{"word-break":"keep-all","font-size":"14px"}},[t._v("옐로우의 성향을 가진 사람들은 대체로 주인공 본능을 가지고 주목받고 싶어하는 사람들이 많아요."),s("br"),s("br"),t._v("\n        그리고 창의적이며 신제품과 트렌드에 많은 관심을 가지고 있어요."),s("br"),s("br"),t._v("\n        옐로우의 성향을 가진 사람들은 여유있는 자세를 가지고 있고, 대체로 유머러스해요."),s("br"),s("br"),t._v("\n        옐로우의 유명인사로는 조지 W.부시, 짐 캐리 같은 사람들이 있어요.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticStyle:{"word-break":"keep-all","font-size":"14px"}},[t._v("그린 성향을 가진 사람들은 대체로 모나지 않고 주위에서 평이 좋아요. 언제나 묵묵하게 맡은 일을 잘 끝내고, 경청을 잘하는 편이에요."),s("br"),s("br"),t._v("\n        그린 성향을 가진 사람들은 느긋한 자세를 갖고 있고, 남들이 보기에 약간 수줍어 보일 수 있어요."),s("br"),s("br"),t._v("\n        그린인 유명인사로는 미셸 오바마, 휴잭맨, 니콜 키드먼 같은 사람들이 있어요.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticStyle:{"word-break":"keep-all","font-size":"14px"}},[t._v("블루의 성향을 가진 사람들은 대체로 논리적이고 객관적인 사람들이 많아요. 품질을 우선시 생각하고 메뉴얼을 중요시 생각합니다."),s("br"),s("br"),t._v("\n        블루 성향의 사람들은 말이 느리고 몸짓이 적은 편이에요."),s("br"),s("br"),t._v("\n        블루의 유명인사로는 알베르트 아인슈타인, 빌 게이츠 같은 사람들이 있어요.")])}],$={name:"test",components:{},data:function(){var t=0;switch(this.$route.query.color){case"RED":t=0;break;case"YELLOW":t=1;break;case"GREEN":t=2;break;case"BLUE":t=3;break}return console.log(t),{activetab:t}},methods:{}},j=$,I=(s("fc09"),s("7931"),Object(c["a"])(j,O,R,!1,null,"bdb97196",null)),P=I.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"test_before"},[s("div",{staticStyle:{flex:"1"}}),s("div",{staticClass:"description_text",staticStyle:{"max-height":"60px"}},[t._v("\n    ※본 검사는 총 24문항입니다※\n  ")]),t._m(0),s("div",{staticClass:"description_text"},[t._v("(중복되는 단어가 나올 수 있습니다.)")]),s("div",{staticStyle:{width:"270px",margin:"auto"}},[s("div",{staticClass:"start-button-wrapper"},[s("router-link",{attrs:{to:"/test"}},[s("button",{staticClass:"start-button"},[t._v("다음으로")])])],1)]),s("div",{staticStyle:{flex:"1"}})])},G=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"description_text"},[t._v("다음의 단어 4개 중 자신을"),s("br"),t._v("가장 잘 묘사한 단어를"),s("br"),t._v("선택하세요!")])}],W={name:"test_before",components:{}},Y=W,N=(s("922a"),Object(c["a"])(Y,z,G,!1,null,null,null)),U=N.exports;n["a"].use(u["a"]);var M=new u["a"]({mode:"history",base:"/jober-disa/dist/",routes:[{path:"/home",name:"home",component:_},{path:"/test_before",component:U},{path:"/test",component:g},{path:"/result",component:L},{path:"/another",component:P},{path:"*",component:_}]}),J=s("4e4a");n["a"].config.productionTip=!1,n["a"].use(J),new n["a"]({router:M,render:function(t){return t(l)}}).$mount("#app")},7846:function(t,e,s){"use strict";var n=s("e4cb"),r=s.n(n);r.a},7931:function(t,e,s){"use strict";var n=s("1af0"),r=s.n(n);r.a},"8ee4":function(t,e,s){},"922a":function(t,e,s){"use strict";var n=s("09c6"),r=s.n(n);r.a},cccb:function(t,e,s){"use strict";var n=s("d563"),r=s.n(n);r.a},cf05:function(t,e,s){t.exports=s.p+"img/logo.107de48d.png"},d563:function(t,e,s){},dea5:function(t,e,s){},e267:function(t,e,s){"use strict";var n=s("dea5"),r=s.n(n);r.a},e4cb:function(t,e,s){},fc09:function(t,e,s){"use strict";var n=s("8ee4"),r=s.n(n);r.a}});
//# sourceMappingURL=app.5c174a7e.js.map