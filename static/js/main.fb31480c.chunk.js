(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(6),s=a.n(l),i=(a(13),a(7)),o=a(1),c=a(2),u=a(4),m=a(3),p=(a(14),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("button",{className:"square",onClick:function(){return e.props.onClick()}},this.props.value)}}]),a}(n.a.Component)),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(p,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(n.a.Component);function d(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(i.a)(t[a],3),n=r[0],l=r[1],s=r[2];if(e[n]&&e[n]===e[l]&&e[n]===e[s])return e[n]}return null}var v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).handleClick=function(e){var t=r.state.history.slice(0,r.state.stepNumber+1),a=t[t.length-1].squares.slice();d(a)||a[e]||(a[e]=r.state.xIsNext?"X":"O",r.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!r.state.xIsNext}))},r.jumpTo=function(e){r.setState({stepNumber:e,xIsNext:r.state.operatorClick?e%2===0:e%2!==0})},r.startGame=function(){r.state.player&&r.setState({isStart:!0}),console.log(r.state.isStart,r.state.player)},r.setPlayer=function(e){var t=e.target.value;r.setState({player:t,xIsNext:"X"===t,operatorClick:"X"===t})},r.state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,isStart:!1,player:null,operatorClick:!1},r}return Object(c.a)(a,[{key:"render",value:function(){var e,t=this,a=this.state.history,r=a[this.state.stepNumber],l=d(r.squares),s=a.map((function(e,a){var r=a?"Go to move #"+a:"Go to game start";return n.a.createElement("li",{key:a},n.a.createElement("button",{onClick:function(){return t.jumpTo(a)}},r))}));e=l?"Winner: "+l:"Next player: "+this.state.player;return n.a.createElement("div",{className:"game"},this.state.isStart?n.a.createElement("div",{className:"game-play"},n.a.createElement("div",{className:"game-board"},n.a.createElement(h,{squares:r.squares,onClick:function(e){return t.handleClick(e)}})),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null,e),n.a.createElement("ol",null,s))):n.a.createElement("div",{className:"game-player"},n.a.createElement("p",{className:"game-player--title"},"Choose player start"),n.a.createElement("ul",{className:"list-player",onChange:t.setPlayer},n.a.createElement("li",{className:"player-item"},n.a.createElement("input",{type:"radio",id:"playerX",name:"player",value:"X"}),n.a.createElement("label",{htmlFor:"playerX"},"X")),n.a.createElement("li",{className:"player-item"},n.a.createElement("input",{type:"radio",id:"playerO",name:"player",value:"O"}),n.a.createElement("label",{htmlFor:"playerO"},"O"))),n.a.createElement("button",{disabled:!t.state.player,onClick:t.startGame},"Start Game")))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.fb31480c.chunk.js.map