/*! bh-lay.com 2014-06-07 */
define&&define(function(a){function b(a,b){var c=a.replace(/\{(\w*)}/g,function(){return b[arguments[1]]||""});return c}function c(a,b){a||b&&b("missing arguments"),$.ajax({url:"/ajax/friends",type:"GET",data:{act:"get_detail",id:a},success:function(a){1!=a.code?b&&b("data error"):b&&b(null,a.detail)}})}function d(a,d){if(!d){var f=b(e,{});return a.html(f),void admin.formToAjax(a,{onSubmit:function(){UI.prompt("正在发布！")},onResponse:function(){UI.prompt("链接发布完毕"),admin.push("/admin/"),admin.refresh()}})}c(d,function(c,d){if(c)return void a.html("数据异常！");var f=b(e,d);a.html(f),admin.formToAjax(a,{onSubmit:function(){UI.prompt("正在提交链接修改！")},onResponse:function(){UI.prompt("链接修改完毕"),admin.push("/admin/"),admin.refresh()}})})}a("/frontEnd/publish/publish.css"),a("/frontEnd/mditor/mditor.js"),a("/frontEnd/gallery/index.js");var e=['<div class="pub_friend">','<form action="/ajax/add_edit" method="post" target="_self">','<div class="pub_row_input"><input type="text" name="title" value="{title}" placeholder="标题" /></div>','<div class="pub_row_input"><input type="text" name="url" value="{url}" placeholder="地址" /></div>','<div class="pub_row_input"><input type="text" name="discription" value="{discription}" placeholder="描述" /></div>','<div class="pub_row_input"><input type="text" name="isShow" value="{isShow}" placeholder="是否显示" /></div>','<div class="pub_row_input">','<input type="hidden" name="id" value="{id}" />','<input type="hidden" name="category" value="blog_friend" />','<button type="submit" class="btn btn-primary">提交</button>',"</div>","</form>","</div>"].join("");return d});