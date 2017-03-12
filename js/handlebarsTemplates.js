(function() {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clock'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<div class=\"time "
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\">\n  <span class=\"count curr top\">"
    + alias3(((helper = (helper = helpers.curr || (depth0 != null ? depth0.curr : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"curr","hash":{},"data":data}) : helper)))
    + "</span>\n  <span class=\"count next top\">"
    + alias3(((helper = (helper = helpers.next || (depth0 != null ? depth0.next : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"next","hash":{},"data":data}) : helper)))
    + "</span>\n  <span class=\"count next bottom\">"
    + alias3(((helper = (helper = helpers.next || (depth0 != null ? depth0.next : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"next","hash":{},"data":data}) : helper)))
    + "</span>\n  <span class=\"count curr bottom\">"
    + alias3(((helper = (helper = helpers.curr || (depth0 != null ? depth0.curr : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"curr","hash":{},"data":data}) : helper)))
    + "</span>\n</div>\n";
},"useData":true});

templates['loginForm'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <span class=\"input-group-label\">"
    + container.escapeExpression(((helper = (helper = helpers.loginForm_groupName || (depth0 != null ? depth0.loginForm_groupName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"loginForm_groupName","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<div id='auth-error' class=\"error-message hide\">\n  "
    + alias3(((helper = (helper = helpers.loginForm_authError || (depth0 != null ? depth0.loginForm_authError : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"loginForm_authError","hash":{},"data":data}) : helper)))
    + "\n</div>\n<div id='auth-server-error' class=\"error-message hide\">\n  "
    + alias3(((helper = (helper = helpers.loginForm_authServerError || (depth0 != null ? depth0.loginForm_authServerError : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"loginForm_authServerError","hash":{},"data":data}) : helper)))
    + "\n</div>\n<form id='login-form' data-abide novalidate>\n  <div class=\"input-group\">\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.loginForm_groupName : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <input name=\"group-name\" class=\"input-group-field\" type=\"text\" placeholder=\""
    + alias3(((helper = (helper = helpers.loginForm_groupNamePlaceholder || (depth0 != null ? depth0.loginForm_groupNamePlaceholder : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"loginForm_groupNamePlaceholder","hash":{},"data":data}) : helper)))
    + "\" required>\n  <div class=\"input-group-button\">\n    <input type=\"submit\" class=\"button\" value=\""
    + alias3(((helper = (helper = helpers.loginForm_submitButton || (depth0 != null ? depth0.loginForm_submitButton : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"loginForm_submitButton","hash":{},"data":data}) : helper)))
    + "\">\n  </div>\n</div>\n</form>\n";
},"useData":true});

templates['mapInfoWindow'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression, alias4=container.lambda;

  return "<div id=\"info-window-content\">\n  <div id=\"info-window-site-notice\">\n  </div>\n  <h1>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n  <div id=\"info-window-body-content\">\n    "
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "\n    <div id=\"info-window-visited-by\">\n      "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.labels : depth0)) != null ? stack1.infoWindow_visitedBy : stack1), depth0))
    + " <span id=\"info-window-visited-by-value\">"
    + alias3(((helper = (helper = helpers.visitedBy || (depth0 != null ? depth0.visitedBy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"visitedBy","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n    <div id=\"info-window-loading\" class=\"hide loading-spinner\">\n      <img src=\"/img/ring.svg\" />\n    </div>\n    <div id=\"info-window-success\" class=\"hide success-message\">\n      "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.labels : depth0)) != null ? stack1.infoWindow_successMessage : stack1), depth0))
    + "\n    </div>\n    <div id=\"info-window-error\" class=\"hide error-message\">\n      "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.labels : depth0)) != null ? stack1.infoWindow_errorMessage : stack1), depth0))
    + "\n    </div>\n    <form id='info-window-form' data-abide novalidate>\n      <div class=\"input-group\">\n      <input name=\"answer\" class=\"input-group-field\" type=\"text\" placeholder=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.labels : depth0)) != null ? stack1.infoWindowForm_answerPlaceholder : stack1), depth0))
    + "\" required>\n      <div class=\"input-group-button\">\n        <input type=\"submit\" class=\"button\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.labels : depth0)) != null ? stack1.infoWindowForm_submitButton : stack1), depth0))
    + "\">\n      </div>\n    </div>\n    </form>\n  </div>\n</div>\n";
},"useData":true});

templates['rank'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=container.escapeExpression, alias3="function";

  return "      <tr>\n        <td>"
    + alias2((helpers.inc || (depth0 && depth0.inc) || alias1).call(depth0,(data && data.index),{"name":"inc","hash":{},"data":data}))
    + "</td>\n        <td>"
    + alias2(((helper = (helper = helpers.mappedGroupName || (depth0 != null ? depth0.mappedGroupName : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"mappedGroupName","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias2(((helper = (helper = helpers["sum points"] || (depth0 != null ? depth0["sum points"] : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"sum points","hash":{},"data":data}) : helper)))
    + "</td>\n      </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<table>\n  <thead>\n    <tr>\n      <th>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.labels : depth0)) != null ? stack1.ranking_place : stack1), depth0))
    + "</th>\n      <th>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.labels : depth0)) != null ? stack1.ranking_groupName : stack1), depth0))
    + "</th>\n      <th>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.labels : depth0)) != null ? stack1.ranking_points : stack1), depth0))
    + "</th>\n    </tr>\n  </thead>\n  <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </tbody>\n</table>\n";
},"useData":true});
}());