!function($,e,t,n){"use strict";function s(e){var t=/fade/i.test(e),n=/pop/i.test(e);return{animate:t||n,pop:n,fade:t}}Foundation.libs.reveal={name:"reveal",version:"5.3.3",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",bg_class:"reveal-modal-bg",root_element:"body",open:function(){},opened:function(){},close:function(){},closed:function(){},bg:$(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(e,t,n){$.extend(!0,this.settings,t,n),this.bindings(t,n)},events:function(e){var n=this,s=n.S;return s(this.scope).off(".reveal").on("click.fndtn.reveal","["+this.add_namespace("data-reveal-id")+"]:not([disabled])",function(e){if(e.preventDefault(),!n.locked){var t=s(this),i=t.data(n.data_attr("reveal-ajax"));if(n.locked=!0,"undefined"==typeof i)n.open.call(n,t);else{var a=i===!0?t.attr("href"):i;n.open.call(n,t,{url:a})}}}),s(t).on("click.fndtn.reveal",this.close_targets(),function(e){if(e.preventDefault(),!n.locked){var t=s("["+n.attr_name()+"].open").data(n.attr_name(!0)+"-init"),i=s(e.target)[0]===s("."+t.bg_class)[0];if(i){if(!t.close_on_background_click)return;e.stopPropagation()}n.locked=!0,n.close.call(n,i?s("["+n.attr_name()+"].open"):s(this).closest("["+n.attr_name()+"]"))}}),s("["+n.attr_name()+"]",this.scope).length>0?s(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):s(this.scope).on("open.fndtn.reveal","["+n.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+n.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+n.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+n.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+n.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+n.attr_name()+"]",this.close_video),!0},key_up_on:function(e){var t=this;return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(e){var n=t.S("["+t.attr_name()+"].open"),s=n.data(t.attr_name(!0)+"-init")||t.settings;s&&27===e.which&&s.close_on_esc&&!t.locked&&t.close.call(t,n)}),!0},key_up_off:function(e){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(e,t){var n=this,s;e?"undefined"!=typeof e.selector?s=n.S("#"+e.data(n.data_attr("reveal-id"))).first():(s=n.S(this.scope),t=e):s=n.S(this.scope);var i=s.data(n.attr_name(!0)+"-init");if(i=i||this.settings,s.hasClass("open")&&e.attr("data-reveal-id")==s.attr("id"))return n.close(s);if(!s.hasClass("open")){var a=n.S("["+n.attr_name()+"].open");if("undefined"==typeof s.data("css-top")&&s.data("css-top",parseInt(s.css("top"),10)).data("offset",this.cache_offset(s)),this.key_up_on(s),s.trigger("open").trigger("open.fndtn.reveal"),a.length<1&&this.toggle_bg(s,!0),"string"==typeof t&&(t={url:t}),"undefined"!=typeof t&&t.url){var o="undefined"!=typeof t.success?t.success:null;$.extend(t,{success:function(e,t,r){$.isFunction(o)&&o(e,t,r),s.html(e),n.S(s).foundation("section","reflow"),n.S(s).children().foundation(),a.length>0&&n.hide(a,i.css.close),n.show(s,i.css.open)}}),$.ajax(t)}else a.length>0&&this.hide(a,i.css.close),this.show(s,i.css.open)}},close:function(e){var e=e&&e.length?e:this.S(this.scope),t=this.S("["+this.attr_name()+"].open"),n=e.data(this.attr_name(!0)+"-init")||this.settings;t.length>0&&(this.locked=!0,this.key_up_off(e),e.trigger("close").trigger("close.fndtn.reveal"),this.toggle_bg(e,!1),this.hide(t,n.css.close,n))},close_targets:function(){var e="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?e+", ."+this.settings.bg_class:e},toggle_bg:function(e,t){0===this.S("."+this.settings.bg_class).length&&(this.settings.bg=$("<div />",{"class":this.settings.bg_class}).appendTo("body").hide());var s=this.settings.bg.filter(":visible").length>0;t!=s&&((t==n?s:!t)?this.hide(this.settings.bg):this.show(this.settings.bg))},show:function(t,n){if(n){var i=t.data(this.attr_name(!0)+"-init")||this.settings,a=i.root_element;if(0===t.parent(a).length){var o=t.wrap('<div style="display: none;" />').parent();t.on("closed.fndtn.reveal.wrapped",function(){t.detach().appendTo(o),t.unwrap().unbind("closed.fndtn.reveal.wrapped")}),t.detach().appendTo(a)}var r=s(i.animation);if(r.animate||(this.locked=!1),r.pop){n.top=$(e).scrollTop()-t.data("offset")+"px";var d={top:$(e).scrollTop()+t.data("css-top")+"px",opacity:1};return setTimeout(function(){return t.css(n).animate(d,i.animation_speed,"linear",function(){this.locked=!1,t.trigger("opened").trigger("opened.fndtn.reveal")}.bind(this)).addClass("open")}.bind(this),i.animation_speed/2)}if(r.fade){n.top=$(e).scrollTop()+t.data("css-top")+"px";var d={opacity:1};return setTimeout(function(){return t.css(n).animate(d,i.animation_speed,"linear",function(){this.locked=!1,t.trigger("opened").trigger("opened.fndtn.reveal")}.bind(this)).addClass("open")}.bind(this),i.animation_speed/2)}return t.css(n).show().css({opacity:1}).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")}var i=this.settings;return s(i.animation).fade?t.fadeIn(i.animation_speed/2):(this.locked=!1,t.show())},hide:function(t,n){if(n){var i=t.data(this.attr_name(!0)+"-init");i=i||this.settings;var a=s(i.animation);if(a.animate||(this.locked=!1),a.pop){var o={top:-$(e).scrollTop()-t.data("offset")+"px",opacity:0};return setTimeout(function(){return t.animate(o,i.animation_speed,"linear",function(){this.locked=!1,t.css(n).trigger("closed").trigger("closed.fndtn.reveal")}.bind(this)).removeClass("open")}.bind(this),i.animation_speed/2)}if(a.fade){var o={opacity:0};return setTimeout(function(){return t.animate(o,i.animation_speed,"linear",function(){this.locked=!1,t.css(n).trigger("closed").trigger("closed.fndtn.reveal")}.bind(this)).removeClass("open")}.bind(this),i.animation_speed/2)}return t.hide().css(n).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")}var i=this.settings;return s(i.animation).fade?t.fadeOut(i.animation_speed/2):t.hide()},close_video:function(e){var t=$(".flex-video",e.target),n=$("iframe",t);n.length>0&&(n.attr("data-src",n[0].src),n.attr("src",n.attr("src")),t.hide())},open_video:function(e){var t=$(".flex-video",e.target),s=t.find("iframe");if(s.length>0){var i=s.attr("data-src");if("string"==typeof i)s[0].src=s.attr("data-src");else{var a=s[0].src;s[0].src=n,s[0].src=a}t.show()}},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},cache_offset:function(e){var t=e.show().height()+parseInt(e.css("top"),10);return e.hide(),t},off:function(){$(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,window,window.document);