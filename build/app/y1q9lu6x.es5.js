/*! Built with http://stenciljs.com */
App.loadBundle("y1q9lu6x",["exports","./chunk-af2d1071.js"],function(e,t){var o=window.App.h,n=function(){function e(){}return e.prototype.updateList=function(){this.el.querySelector("books-list").items=this.items},e.prototype.componentDidLoad=function(){(0,this.store.mapStateToProps)(this,function(e){return{items:e.books.items}})},e.prototype.render=function(){return o("div",null,o("search-box",null),o("books-list",null))},Object.defineProperty(e,"is",{get:function(){return"app-home"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0},items:{state:!0,watchCallbacks:["updateList"]},store:{context:"store"}}},enumerable:!0,configurable:!0}),e}(),r=function(){function e(){var e=this;this.value="",this.handleChange=function(t){e.value=t.target.value},this.search=function(){var t=e.value.trim();t?e.searchBooks(t):alert("Please enter at least 1 character")}}return e.prototype.componentWillLoad=function(){(0,this.store.mapDispatchToProps)(this,{searchBooks:t.searchBooks})},e.prototype.render=function(){var e=this.value;return o("div",null,o("input",{placeholder:"Search Books...",value:e,onInput:this.handleChange}),o("button",{onClick:this.search},"Search"))},Object.defineProperty(e,"is",{get:function(){return"search-box"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{store:{context:"store"},value:{state:!0}}},enumerable:!0,configurable:!0}),e}();e.AppHome=n,e.SearchBox=r,Object.defineProperty(e,"__esModule",{value:!0})});