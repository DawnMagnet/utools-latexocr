const path=require("path"),UToolsUtils=require("./UToolsUtils"),mineMap={"image/bmp":"bmp","image/gif":"gif","image/heic":"heic","image/jpeg":"jpg","image/png":"png","image/svg+xml":"svg","image/webp":"webp","image/x-icon":"ico"},getFormatSavePath=(e,t,{timestamp:a=!1}={})=>{if(!/{.*?}/.test(e))return a?path.join(e,Date.now().toString()+t):path.join(e,t);const i=["Y","M","D","H","m","s","rand","ms","since_millisecond","since_second"],n=new Date,o={Y:n.getFullYear().toString(),M:(n.getMonth()+1).toString(),D:n.getDate().toString(),H:n.getHours().toString().padStart(2,"0"),m:n.getMinutes().toString().padStart(2,"0"),s:n.getSeconds().toString().padStart(2,"0"),ms:n.getMilliseconds().toString(),rand:Math.random().toString(36).slice(-10),since_millisecond:Date.now(),since_second:Math.round(Date.now()/1e3)},g=e.includes("{no_filename}");e.includes("filename");g&&(e=e.replace("{no_filename}",""));for(const t of i)o[t]&&(e=e.replace(new RegExp("\\{"+t+"\\}","g"),o[t]));return e},getSavePath=e=>{let[t,a,i]=e.match(/^data:(image\/.+);base64,(.*)/),n=mineMap[a],o=utools.getPath("downloads");const g=UToolsUtils.read("SaveFileName/setting");return console.log("getSavePath:66:SaveFileName/setting",g),o=g&&g.filenameFormat?path.join(o,getFormatSavePath(g.filenameFormat,"")):path.join(o,Date.now().toString()),o+="."+n,o};module.exports={getSavePath};