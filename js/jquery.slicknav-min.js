!function($,e,n){function t(e,n){this.element=e,this.settings=$.extend({},a,n),this.settings.duplicate||n.hasOwnProperty("removeIds")||(this.settings.removeIds=!1),this._defaults=a,this._name=i,this.init()}var a={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",appendTo:"",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!0,removeClasses:!1,removeStyles:!1,brand:"",init:function(){},beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}},i="slicknav",s="slicknav";t.prototype.init=function(){var n=this,t=$(this.element),a=this.settings,i,l;if(a.duplicate?n.mobileNav=t.clone():n.mobileNav=t,a.removeIds&&(n.mobileNav.removeAttr("id"),n.mobileNav.find("*").each(function(e,n){$(n).removeAttr("id")})),a.removeClasses&&(n.mobileNav.removeAttr("class"),n.mobileNav.find("*").each(function(e,n){$(n).removeAttr("class")})),a.removeStyles&&(n.mobileNav.removeAttr("style"),n.mobileNav.find("*").each(function(e,n){$(n).removeAttr("style")})),i=s+"_icon",""===a.label&&(i+=" slicknav_no-text"),"a"==a.parentTag&&(a.parentTag='a href="#"'),n.mobileNav.attr("class",s+"_nav"),l=$('<div class="slicknav_menu"></div>'),""!==a.brand){var o=$('<div class="slicknav_brand">'+a.brand+"</div>");$(l).append(o)}n.btn=$(["<"+a.parentTag+' aria-haspopup="true" tabindex="0" class="'+s+"_btn "+s+'_collapsed">','<span class="slicknav_menutxt">'+a.label+"</span>","</"+a.parentTag+">"].join("")),$(l).append(n.btn),""!==a.appendTo?$(a.appendTo).append(l):$(a.prependTo).prepend(l),l.append(n.mobileNav);var r=n.mobileNav.find("li");$(r).each(function(){var e=$(this),t={};if(t.children=e.children("ul").attr("role","menu"),e.data("menu",t),t.children.length>0){var i=e.contents(),l=!1,o=[];$(i).each(function(){if($(this).is("ul"))return!1;o.push(this),$(this).is("a")&&(l=!0)});var r=$("<"+a.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+s+'_item"/>');if(a.allowParentLinks&&!a.nestedParentLinks&&l)$(o).wrapAll('<span class="slicknav_parent-link slicknav_row"/>').parent();else{$(o).wrapAll(r).parent().addClass(s+"_row")}a.showChildren?e.addClass(s+"_open"):e.addClass(s+"_collapsed"),e.addClass(s+"_parent");var c=$('<span class="slicknav_arrow">'+(a.showChildren?a.openedSymbol:a.closedSymbol)+"</span>");a.allowParentLinks&&!a.nestedParentLinks&&l&&(c=c.wrap(r).parent()),$(o).last().after(c)}else 0===e.children().length&&e.addClass(s+"_txtnode");e.children("a").attr("role","menuitem").click(function(e){a.closeOnClick&&!$(e.target).parent().closest("li").hasClass(s+"_parent")&&$(n.btn).click()}),a.closeOnClick&&a.allowParentLinks&&(e.children("a").children("a").click(function(e){$(n.btn).click()}),e.find(".slicknav_parent-link a:not(.slicknav_item)").click(function(e){$(n.btn).click()}))}),$(r).each(function(){var e=$(this).data("menu");a.showChildren||n._visibilityToggle(e.children,null,!1,null,!0)}),n._visibilityToggle(n.mobileNav,null,!1,"init",!0),n.mobileNav.attr("role","menu"),$(e).mousedown(function(){n._querythemes(!1)}),$(e).keyup(function(){n._querythemes(!0)}),$(n.btn).click(function(e){e.preventDefault(),n._menuToggle()}),n.mobileNav.on("click",".slicknav_item",function(e){e.preventDefault(),n._itemClick($(this))}),$(n.btn).keydown(function(e){13==(e||event).keyCode&&(e.preventDefault(),n._menuToggle())}),n.mobileNav.on("keydown",".slicknav_item",function(e){13==(e||event).keyCode&&(e.preventDefault(),n._itemClick($(e.target)))}),a.allowParentLinks&&a.nestedParentLinks&&$(".slicknav_item a").click(function(e){e.stopImmediatePropagation()})},t.prototype._menuToggle=function(e){var n=this,t=n.btn,a=n.mobileNav;t.hasClass(s+"_collapsed")?(t.removeClass(s+"_collapsed"),t.addClass(s+"_open")):(t.removeClass(s+"_open"),t.addClass(s+"_collapsed")),t.addClass(s+"_animating"),n._visibilityToggle(a,t.parent(),!0,t)},t.prototype._itemClick=function(e){var n=this,t=n.settings,a=e.data("menu");a||(a={},a.arrow=e.children(".slicknav_arrow"),a.ul=e.next("ul"),a.parent=e.parent(),a.parent.hasClass(s+"_parent-link")&&(a.parent=e.parent().parent(),a.ul=e.parent().next("ul")),e.data("menu",a)),a.parent.hasClass(s+"_collapsed")?(a.arrow.html(t.openedSymbol),a.parent.removeClass(s+"_collapsed"),a.parent.addClass(s+"_open"),a.parent.addClass(s+"_animating"),n._visibilityToggle(a.ul,a.parent,!0,e)):(a.arrow.html(t.closedSymbol),a.parent.addClass(s+"_collapsed"),a.parent.removeClass(s+"_open"),a.parent.addClass(s+"_animating"),n._visibilityToggle(a.ul,a.parent,!0,e))},t.prototype._visibilityToggle=function(e,n,t,a,i){var l=this,o=l.settings,r=l._getActionItems(e),c=0;t&&(c=o.duration),e.hasClass(s+"_hidden")?(e.removeClass(s+"_hidden"),i||o.beforeOpen(a),e.slideDown(c,o.easingOpen,function(){$(a).removeClass(s+"_animating"),$(n).removeClass(s+"_animating"),i||o.afterOpen(a)}),e.attr("aria-hidden","false"),r.attr("tabindex","0"),l._setVisAttr(e,!1)):(e.addClass(s+"_hidden"),i||o.beforeClose(a),e.slideUp(c,this.settings.easingClose,function(){e.attr("aria-hidden","true"),r.attr("tabindex","-1"),l._setVisAttr(e,!0),e.hide(),$(a).removeClass(s+"_animating"),$(n).removeClass(s+"_animating"),i?"init"==a&&o.init():o.afterClose(a)}))},t.prototype._setVisAttr=function(e,n){var t=this,a=e.children("li").children("ul").not(".slicknav_hidden");n?a.each(function(){var e=$(this);e.attr("aria-hidden","true"),t._getActionItems(e).attr("tabindex","-1"),t._setVisAttr(e,n)}):a.each(function(){var e=$(this);e.attr("aria-hidden","false"),t._getActionItems(e).attr("tabindex","0"),t._setVisAttr(e,n)})},t.prototype._getActionItems=function(e){var n=e.data("menu");if(!n){n={};var t=e.children("li"),a=t.find("a");n.links=a.add(t.find(".slicknav_item")),e.data("menu",n)}return n.links},t.prototype._querythemes=function(e){e?$(".slicknav_item, .slicknav_btn").css("querytheme",""):$(".slicknav_item, .slicknav_btn").css("querytheme","none")},t.prototype.toggle=function(){this._menuToggle()},t.prototype.open=function(){var e=this;e.btn.hasClass(s+"_collapsed")&&e._menuToggle()},t.prototype.close=function(){var e=this;e.btn.hasClass(s+"_open")&&e._menuToggle()},$.fn[i]=function(e){var n=arguments;if(void 0===e||"object"==typeof e)return this.each(function(){$.data(this,"plugin_"+i)||$.data(this,"plugin_"+i,new t(this,e))});if("string"==typeof e&&"_"!==e[0]&&"init"!==e){var a;return this.each(function(){var s=$.data(this,"plugin_"+i);s instanceof t&&"function"==typeof s[e]&&(a=s[e].apply(s,Array.prototype.slice.call(n,1)))}),void 0!==a?a:this}}}(jQuery,document,window);