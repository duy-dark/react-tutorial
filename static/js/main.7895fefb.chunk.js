(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(6),i=a.n(s),c=(a(13),a(7)),l=a(1),o=a(2),u=a(4),h=a(3),d=(a(14),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("button",{className:"square",onClick:function(){return e.props.onClick()}},this.props.value)}}]),a}(n.a.Component)),m=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},r}return Object(o.a)(a,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();v(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(d,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=v(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),n.a.createElement("div",null,n.a.createElement("div",{className:"status"},e),n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(n.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(c.a)(t[a],3),n=r[0],s=r[1],i=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[i])return e[n]}return null}var f=function(){return n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(m,null)),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null),n.a.createElement("ol",null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.7895fefb.chunk.js.map