global.BOOT=function(params){"use strict";var fs=require("fs"),path=require("path"),MULTI_LANG_SUPPORT=params.MULTI_LANG_SUPPORT,rootPath=__dirname+"/..",browserScript="\nglobal = window;\n",securedBrowserScript="\nglobal = window;\n",css="",logoText,pageContent="",stringifyJSONWithFunction,loadAll,generatePageContent,startServer;stringifyJSONWithFunction=function(data){return JSON.stringify(data,function(t,e){return"function"==typeof e?"__THIS_IS_FUNCTION_START__"+e.toString()+"__THIS_IS_FUNCTION_END__":e},"	").replace(/("__THIS_IS_FUNCTION_START__(.*)__THIS_IS_FUNCTION_END__")/g,function(match,content){return eval("("+eval('"'+content.substring('"__THIS_IS_FUNCTION_START__'.length,content.length-'__THIS_IS_FUNCTION_END__"'.length)+'"')+")").toString()})},loadAll=function(){var t,e,n,o,i,r,s,a,c,S,E,l,C,d,_,f;t=function(t){var e=t.path,n=t.name;return fs.statSync(rootPath+"/"+e).isDirectory()===!0&&"."!==n[0]&&"node_modules"!==n&&"not_load"!==n&&"deprecated"!==n&&"_"!==n[0]},e=function(){fs.readdirSync(rootPath).forEach(function(e){t({path:e,name:e})===!0&&(global[e]=BOX(e),browserScript+="global."+e+" = BOX('"+e+"');\n",securedBrowserScript+="global."+e+" = BOX('"+e+"');\n")})},n=function(t){var e,n,o,i=rootPath+"/"+t,r=path.extname(t);if(i.substring(0,(rootPath+"/UPPERCASE").length)!==rootPath+"/UPPERCASE")for(e in MULTI_LANG_SUPPORT)if(MULTI_LANG_SUPPORT.hasOwnProperty(e,i)===!0&&r==="."+e)return n="//"+fs.statSync(i).mtime.getTime(),(fs.existsSync(i+".__UPPERCASE_COMPILED")===!1||fs.readFileSync(i+".__UPPERCASE_COMPILED").toString().substring(0,n.length)!==n)&&(o=n+"\n"+MULTI_LANG_SUPPORT[e](fs.readFileSync(i).toString(),i),fs.writeFileSync(i+".__UPPERCASE_COMPILED",o)),void require(i+".__UPPERCASE_COMPILED");".js"===r?require(i):".__UPPERCASE_COMPILED"===r&&fs.existsSync(i.substring(0,i.length-".__UPPERCASE_COMPILED".length))===!1&&fs.unlinkSync(i)},o=function(t){var e,n,o,i=rootPath+"/"+t,r=path.extname(t);if(i.substring(0,(rootPath+"/UPPERCASE").length)!==rootPath+"/UPPERCASE")for(e in MULTI_LANG_SUPPORT)if(MULTI_LANG_SUPPORT.hasOwnProperty(e,i)===!0&&r==="."+e)return n="//"+fs.statSync(i).mtime.getTime(),fs.existsSync(i+".__UPPERCASE_COMPILED")===!1||fs.readFileSync(i+".__UPPERCASE_COMPILED").toString().substring(0,n.length)!==n?(o=n+"\n"+MULTI_LANG_SUPPORT[e](fs.readFileSync(i).toString(),i),fs.writeFileSync(i+".__UPPERCASE_COMPILED",o)):o=fs.readFileSync(i+".__UPPERCASE_COMPILED").toString(),browserScript+=o+"\n",void(securedBrowserScript+=o+"\n");".js"===r?(o=fs.readFileSync(i).toString(),browserScript+=o+"\n",securedBrowserScript+=o+"\n"):".__UPPERCASE_COMPILED"===r&&fs.existsSync(i.substring(0,i.length-".__UPPERCASE_COMPILED".length))===!1&&fs.unlinkSync(i)},i=function(t){var e,n,o,i=rootPath+"/"+t,r=path.extname(t);if(i.substring(0,(rootPath+"/UPPERCASE").length)!==rootPath+"/UPPERCASE")for(e in MULTI_LANG_SUPPORT)if(MULTI_LANG_SUPPORT.hasOwnProperty(e,i)===!0&&r==="."+e)return n="//"+fs.statSync(i).mtime.getTime(),fs.existsSync(i+".__UPPERCASE_COMPILED")===!1||fs.readFileSync(i+".__UPPERCASE_COMPILED").toString().substring(0,n.length)!==n?(o=n+"\n"+MULTI_LANG_SUPPORT[e](fs.readFileSync(i).toString(),i),fs.writeFileSync(i+".__UPPERCASE_COMPILED",o)):o=fs.readFileSync(i+".__UPPERCASE_COMPILED").toString(),void(securedBrowserScript+=o+"\n");".js"===r?(o=fs.readFileSync(i).toString(),securedBrowserScript+=o+"\n"):".__UPPERCASE_COMPILED"===r&&fs.existsSync(i.substring(0,i.length-".__UPPERCASE_COMPILED".length))===!1&&fs.unlinkSync(i)},r=function(t){n(t),o(t)},s=function(e,n){var o=function(e){var i,r;if(fs.existsSync(e)===!0)for(i=[],fs.readdirSync(e).forEach(function(o){var r=e+"/"+o;t({path:r,name:o})===!0?i.push(r):fs.statSync(rootPath+"/"+r).isDirectory()!==!0&&n(r)}),r=0;r<i.length;r+=1)o(i[r])};FOR_BOX(function(t){o(t.boxName+"/"+e)})},a=function(t){s(t,n)},c=function(t){s(t,o)},S=function(t){s(t,i)},E=function(t){s(t,r)},l=function(){void 0!==params&&(void 0!==params.CONFIG&&(EXTEND_DATA({origin:global.CONFIG,extend:params.CONFIG}),browserScript+="EXTEND_DATA({ origin : global.CONFIG, extend : "+stringifyJSONWithFunction(params.CONFIG)+" });\n",securedBrowserScript+="EXTEND_DATA({ origin : global.CONFIG, extend : "+stringifyJSONWithFunction(params.CONFIG)+" });\n"),void 0!==params.SERVER_CONFIG&&(EXTEND_DATA({origin:global.SERVER_CONFIG,extend:params.SERVER_CONFIG}),SERVER_CONFIG.rootPath=rootPath),void 0!==params.BROWSER_CONFIG&&(browserScript+="EXTEND_DATA({ origin : global.BROWSER_CONFIG, extend : "+stringifyJSONWithFunction(params.BROWSER_CONFIG)+" });\n",securedBrowserScript+="EXTEND_DATA({ origin : global.BROWSER_CONFIG, extend : "+stringifyJSONWithFunction(params.BROWSER_CONFIG)+" });\n")),CONFIG.version=String((new Date).getTime()),browserScript+="CONFIG.version = "+CONFIG.version+";\n",securedBrowserScript+="CONFIG.version = "+CONFIG.version+";\n"},C=function(){var t=UPPERCASE.MODULE("mongolian");UPPERCASE.db=(new t).db(SERVER_CONFIG.dbName),SERVER_CONFIG.isNotRequiringDBAuth!==!0&&UPPERCASE.db.auth(SERVER_CONFIG.dbUsername,SERVER_CONFIG.dbPassword)},d=function(t){var e=rootPath+"/"+t,n=path.extname(t),o=fs.readFileSync(e).toString();".css"===n&&(css+=o)},_=function(){var t=UPPERCASE.MODULE("uglify-js"),e=UPPERCASE.MODULE("sqwish");browserScript=t.minify(browserScript,{fromString:!0,mangle:!0}).code,securedBrowserScript=t.minify(securedBrowserScript,{fromString:!0,mangle:!0}).code,css=e.minify(css)},f=function(){logoText=fs.readFileSync(rootPath+"/UPPERCASE/LOGO"),browserScript="/* Welcome to JavaScript World! :)\n"+logoText+"\n  Contact: "+CONFIG.contactAddress+"\n\n*/"+browserScript,css="/* Welcome to CSS World! :)\n"+logoText+"\n  Contact: "+CONFIG.contactAddress+"\n\n*/"+css},r("UPPERCASE/METHOD.js"),r("UPPERCASE/CLASS.js"),r("UPPERCASE/OBJECT.js"),r("UPPERCASE/BOX.js"),e(),r("UPPERCASE/FOR_BOX.js"),E("COMMON"),a("SERVER"),c("BROWSER"),S("BROWSER_SECURED"),o("UPPERCASE/BROWSER_FIX.js"),l(),SERVER_CONFIG.isNotUsingDB!==!0&&C(),o("UPPERCASE/BROWSER_INIT.js"),d("UPPERCASE/STYLE.css"),CONFIG.isDevMode!==!0&&_(),f()},generatePageContent=function(){pageContent+="<!DOCTYPE html>",pageContent+="<!--\n\n  Welcome! :)\n"+logoText+"\n  Contact: "+CONFIG.contactAddress+"\n\n-->",pageContent+="<html>",pageContent+="<head>",pageContent+='<meta charset="utf-8">',pageContent+='<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">',pageContent+='<meta name="google" value="notranslate">',void 0!==CONFIG.googleSiteVerificationKey&&(pageContent+='<meta name="google-site-verification" content="'+CONFIG.googleSiteVerificationKey+'" />'),pageContent+="<title>"+CONFIG.defaultTitle+"</title>",pageContent+='<link rel="stylesheet" type="text/css" href="__CSS?'+CONFIG.version+'" />',pageContent+="</head>",pageContent+="<body>",pageContent+="<noscript>",pageContent+='<p style="padding:15px;">',pageContent+="자바스크립트 기능이 꺼져있습니다. 브라우저의 자바스크립트 기능을 켜 주시기 바랍니다. 감사합니다~! ^-^",pageContent+="<br>",pageContent+="JavaScript is disabled. Please enable JavaScript in your browser. Thank you~! :)",pageContent+="</p>",pageContent+="</noscript>",pageContent+='<script type="text/javascript" src="__SCRIPT?'+CONFIG.version+'"></script>',pageContent+="</body>",pageContent+="</html>"},startServer=function(){var t,e,n,o,i=require("http"),r=require("https"),s=UPPERCASE.MODULE("socket.io"),a=UPPERCASE.MODULE("formidable").IncomingForm,c=UPPERCASE.MODULE("imagemagick");o=function(t,e){var n,o,i,r,s,S,E,l,C,d,_,f,u,P,g,p,O,R,I,N,h,F,m,v,y,A=t.url,T={};s=function(t){var e=path.extname(t);return".png"===e?"image/png":".jpg"===e||".jpeg"===e?"image/jpeg":".gif"===e?"image/gif":".js"===e?"text/javascript":".css"===e?"text/css":".txt"===e?"text/plain":".html"===e?"text/html":".swf"===e?"application/x-shockwave-flash":"application/octet-stream"},S=function(t){return"text/javascript"===t?"utf-8":"text/css"===t?"utf-8":"text/plain"===t?"binary":"text/html"===t?"utf-8":"image/png"===t?"binary":"image/jpeg"===t?"binary":"image/gif"===t?"binary":"application/x-shockwave-flash"===t?"binary":"binary"},E=function(){var t=A.indexOf("?");-1!==t&&(o=A.substring(t+1),A=A.substring(0,t))},l=function(){n=A.substring(1)},C=function(){var t=n.indexOf("/");-1===t?i=CONFIG.defaultBoxName:(i=n.substring(0,t),n=n.substring(t+1))},d=function(){var t=n.indexOf("/");-1===t?r="":(r=n.substring(0,t),n=n.substring(t+1))},_=function(){var e;return void 0===t.headers.authorization?!1:(e=new Buffer(t.headers.authorization.split(" ")[1],"base64").toString().split(":"),console.log("Decoded authorization: "+e),e[0]===SERVER_CONFIG.securedUsername&&e[1]===SERVER_CONFIG.securedPassword)},f=function(e){return void 0===e?void 0!==t.headers["if-none-match"]:t.headers["if-none-match"]===e},u=function(t){e.writeHead(302,{Location:t}),e.end()},P=function(){console.log("Someone is trying to AUTH!: "+t.connection.remoteAddress),e.statusCode=401,e.setHeader("WWW-Authenticate",'Basic realm="AUTH"'),e.end()},g=function(){e.statusCode=304,e.end()},p=function(t){var n=t.key,o=t.content,i=t.contentType,r=t.encoding;e.setHeader("Content-Type",i),void 0!==n&&e.setHeader("ETag",n),e.statusCode=200,e.end(o,r)},O=function(){u("/"+CONFIG.defaultBoxName+"/R/favicon.ico")},R=function(){return void 0===t.headers.authorization?void P():_()===!0?void u(SERVER_CONFIG.authedPageUrl):void u("/UPPERCASE/R/AUTH_ERROR.html")},I=function(){p({content:pageContent,contentType:"text/html",encoding:"utf-8"})},N=function(){f(CONFIG.version)===!0&&CONFIG.isDevMode!==!0?g():o!==CONFIG.version&&CONFIG.isDevMode!==!0?u(A+"?"+CONFIG.version):p(_()===!0?{key:CONFIG.version,content:securedBrowserScript,contentType:"text/javascript",encoding:"utf-8"}:{key:CONFIG.version,content:browserScript,contentType:"text/javascript",encoding:"utf-8"})},h=function(){f(CONFIG.version)===!0&&CONFIG.isDevMode!==!0?g():o!==CONFIG.version&&CONFIG.isDevMode!==!0?u(A+"?"+CONFIG.version):p({key:CONFIG.version,content:css,contentType:"text/css",encoding:"utf-8"})},F=function(){var n=new a,o=[],r={};n.uploadDir="__RF/"+i+"/__TEMP/",fs.existsSync(rootPath+"/"+n.uploadDir)===!1&&console.log("Not exists folder: "+rootPath+"/"+n.uploadDir),void 0!==global[i]&&fs.existsSync(rootPath+"/"+n.uploadDir)===!0?(n.on("field",function(t,e){r[t]=e}).on("file",function(t,e){o.push({tempPath:e.path,size:e.size,name:e.name,type:e.type,lastModifiedDate:e.lastModifiedDate})}).on("end",function(){var t=global[i].DB("__UPLOAD_FILE"),n=0;EACH(o,function(s){var a=s.tempPath;return s.size>1024*CONFIG.maxUploadFileMB*1024?(e.writeHead(200,{"Content-Type":"text/html"}),e.end("<script>errorCode='SIZE'</script>","utf-8"),!1):(EACH(r,function(t,e){""!==t.trim()&&(s[e]=t)}),REMOVE_AT({data:s,key:"tempPath"}),void c.readMetadata(a,function(r,S){var E=function(){t.createData(s,function(t,r){var s=UPPERCASE.MODULE("mv"),c=rootPath+"/__RF/"+i+"/"+r.id;void 0===t&&s(a,c,function(){n+=1,n===o.length&&(EACH(o,function(t,e){o[e]=PACK_DATA(t)}),e.writeHead(200,{"Content-Type":"text/html"}),e.end("<script>fileDatas="+JSON.stringify(o)+"</script>","utf-8")),console.log("File '"+c+"' ("+r.name+", "+r.size+" byte) uploaded.")})})};void 0!==S.exif?(s.exif=S.exif,c.convert([a,"-auto-orient",a],function(){E()})):E()}))})}).on("error",function(){e.writeHead(200,{"Content-Type":"text/html"}),e.end("<script>errorCode='ERROR'</script>","utf-8")}),n.parse(t)):(e.writeHead(200,{"Content-Type":"text/html"}),e.end("<script>errorCode='ERROR'</script>","utf-8"))},m=function(){var t,e,r;f(CONFIG.version)===!0?g():o!==CONFIG.version?u(A+"?"+CONFIG.version):(t=rootPath+"/"+i+"/R/"+n,void 0!==T[t]?p(T[t]):(e=s(n),r=S(e),fs.exists(t,function(n){n===!0?fs.readFile(t,r,function(n,o){null!==n?y():p(T[t]={key:CONFIG.version,content:o,contentType:e,encoding:r})}):y()})))},v=function(){var t;f()===!0?g():(t=rootPath+"/__RF/"+i+"/"+n,fs.exists(t,function(e){e===!0?fs.readFile(t,"binary",function(e,n){null!==e?y():fs.stat(t,function(t,e){null!==t?y():p({key:e.size+"-"+Date.parse(e.mtime),content:n,contentType:"application/octet-stream",encoding:"binary"})})}):y()}))},y=function(){u(SERVER_CONFIG.errorPageUrl)},E(),l(),"favicon.ico"===n?O():"__AUTH"===n?R():""===n?I():"__SCRIPT"===n?N():"__CSS"===n?h():(C(),d(),"R"===r?m(i):"RF"===r?v(i):"__UPLOAD"===n&&"POST"===t.method.toUpperCase()?F():y())},t=i.createServer(o).listen(CONFIG.port),void 0!==SERVER_CONFIG.securedPort&&(e=r.createServer({key:fs.readFileSync(rootPath+"/"+SERVER_CONFIG.securedKeyFileName),cert:fs.readFileSync(rootPath+"/"+SERVER_CONFIG.securedCrtFileName)},o).listen(SERVER_CONFIG.securedPort)),n=s.listen(t),CONFIG.isDevMode===!0?n.set("log level",2):n.set("log level",1),n.set("transports",["websocket","flashsocket","xhr-polling","jsonp-polling"]),CONNS.type.socketPack=n.sockets,OBJECT.init(),FOR_BOX(function(t){void 0!==t.MAIN&&t.MAIN()}),console.log("[UPPERCASE SERVER STARTED] http://localhost:"+CONFIG.port+(void 0!==SERVER_CONFIG.securedPort?" and secured server started. https://localhost:"+SERVER_CONFIG.securedPort:""))},loadAll(),generatePageContent(),startServer()};