var e=function(e){Object.assign(this,e)};e.prototype.get=function(e){try{return e?Promise.resolve(this.service.get("/bullion/"+e)):Promise.resolve(this.service.get("/bullion/current"))}catch(e){return Promise.reject(e)}};var t=function(e){Object.assign(this,e)},r=function(e){Object.assign(this,e)},n={Bullion:{symbol:{type:String,required:!0},date:{type:Date,required:!0},price:{type:Number,required:!0}},Nepse:{symbol:{type:String,unique:!0,required:!0},name:{type:String,required:!0},date:{type:Date,required:!0},close:{type:Number,required:!0},volume:Number,transaction_count:Number,transaction_amount:Number,maximum:Number,minimum:Number,previous_close:Number},Vegetable:{name:{type:String,required:!0,unique:!0},group:String,unit:String,min:Number,max:Number,price:{type:Number,required:!0}}},o=require("node-fetch"),i=function(e){var t=Object.assign({},e);Object.assign(this,t),this.debugMode=this.debugMode||!1};i.prototype.request=function(e){try{var t=this;"string"==typeof e&&(e={path:e});var r=e.url||""+t.url+e.path;return e.body&&(e.body=JSON.stringify(e.body)),e.method=e.method||"GET",e.useAccessToken=e.useAccessToken||!0,e.headers=e.headers||{},e.headers["content-type"]="application/json",Promise.resolve(o(r,e)).then(function(e){return e.ok?Promise.resolve(e.json()):t.badResponse(e)})}catch(e){return Promise.reject(e)}},i.prototype.get=function(e){return"string"==typeof e&&(e={path:e}),this.request(e)},i.prototype.post=function(e){return e.method="POST",this.request(e)},i.prototype.put=function(e){return e.method="PUT",this.request(e)},i.prototype.delete=function(e){return"string"==typeof e&&(e={path:e}),e.method="DELETE",this.request(e)},i.prototype.patch=function(e){return e.method="PATCH",this.request(e)},i.prototype.notImplemented=function(e){Notify.warning(e+" is not implemented")},i.prototype.badResponse=function(e){try{return console.log(e),Promise.resolve()}catch(e){return Promise.reject(e)}},exports.Schemas=n,exports.Client=function(n){var o={service:new i({url:n.endpoint})};this.Bullion=new e(o),this.Nepse=new t(o),this.Vegetable=new r(o)};
//# sourceMappingURL=index.js.map
