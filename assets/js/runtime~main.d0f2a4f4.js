!function(){"use strict";var e,b,f,c,a,d={},t={};function n(e){var b=t[e];if(void 0!==b)return b.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(f.exports,f,f.exports,n),f.loaded=!0,f.exports}n.m=d,n.c=t,e=[],n.O=function(b,f,c,a){if(!f){var d=1/0;for(u=0;u<e.length;u++){f=e[u][0],c=e[u][1],a=e[u][2];for(var t=!0,r=0;r<f.length;r++)(!1&a||d>=a)&&Object.keys(n.O).every((function(e){return n.O[e](f[r])}))?f.splice(r--,1):(t=!1,a<d&&(d=a));if(t){e.splice(u--,1);var o=c();void 0!==o&&(b=o)}}return b}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[f,c,a]},n.n=function(e){var b=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(b,{a:b}),b},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var a=Object.create(null);n.r(a);var d={};b=b||[null,f({}),f([]),f(f)];for(var t=2&c&&e;"object"==typeof t&&!~b.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((function(b){d[b]=function(){return e[b]}}));return d.default=function(){return e},n.d(a,d),a},n.d=function(e,b){for(var f in b)n.o(b,f)&&!n.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:b[f]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(b,f){return n.f[f](e,b),b}),[]))},n.u=function(e){return"assets/js/"+({53:"935f2afb",78:"6680f482",147:"09cb7767",150:"8225840b",174:"184b427d",225:"177b27d5",306:"d16648a0",332:"e5a2aa72",351:"13b807b3",375:"38959279",403:"d850dedd",483:"8b212c01",489:"c1a5d891",492:"4bc15cfd",533:"b2b675dd",547:"e858457f",552:"49665e23",556:"7c46c2fc",606:"8bbe215b",661:"0f29ad0a",991:"87d5e9bf",1022:"7ef562a0",1054:"365a236a",1069:"7ff3d5e0",1074:"767b6115",1077:"801e1629",1086:"96a6b759",1111:"97b6f42b",1116:"03ade8ef",1140:"bce6b196",1141:"d700bc26",1176:"6abff520",1239:"2db57ea2",1274:"41cd652c",1294:"3e52fb75",1303:"1ebcaf33",1473:"cbd4f9cc",1477:"b2f554cd",1525:"f49bc208",1540:"6b6701e3",1543:"e3134f1a",1551:"f997b5b0",1594:"39bc5b70",1613:"66fec65a",1639:"1ebe3126",1640:"009eb52a",1673:"49c06d29",1687:"0348770d",1692:"7405b8c4",1713:"a7023ddc",1732:"3e238482",1751:"4d5d1eee",1792:"5d2bb87c",1805:"804b5f1b",1920:"29446dc6",1926:"01dc0a8c",1948:"6875b538",1955:"63acd3cb",1993:"69b00f74",2026:"c2bcdf4e",2092:"622b7dd8",2149:"1ceed9e0",2171:"c8968567",2226:"c7cad40b",2229:"4dfa488c",2336:"bca44ee2",2379:"d6f72b72",2395:"bc11fc61",2430:"6aff7e55",2531:"dd301a21",2535:"814f3328",2538:"bc32921e",2550:"54a2bf4d",2552:"b52076f7",2627:"8b80c7d5",2639:"d10994c4",2663:"27dc59c4",2696:"3bb3669b",2737:"e063fce9",2784:"70f35be9",2788:"7bbd3961",2849:"4dbf4eb8",2864:"b183c136",2911:"d7a3c5fe",3006:"6b1591cb",3045:"47f57e3d",3085:"1f391b9e",3089:"a6aa9e1f",3195:"05963d75",3210:"61fe4f0a",3211:"84d668ad",3234:"58afa47c",3239:"0093a5e1",3260:"8c1d7474",3333:"fe031ad3",3374:"42425825",3489:"c70c820e",3567:"d9a65cd1",3608:"9e4087bc",3616:"64bc78c2",3625:"f734d6f6",3691:"657e8bbb",3696:"db0670d8",3701:"bbe905dd",3763:"3ebff72d",3835:"81bdaa54",3840:"882aecb3",3877:"583183f9",3880:"2207788b",3909:"7795d192",3966:"dd67e022",4013:"01a85c17",4026:"326465e9",4073:"a25c50e2",4106:"da86fa20",4107:"9e1ff6e7",4163:"14d15377",4178:"e92d91e5",4195:"c4f5d8e4",4218:"49900b44",4308:"fff1f962",4502:"f2c43689",4604:"f2100821",4624:"c83d66e8",4708:"93bbc137",4744:"ebf7a0fe",4794:"06b274de",4921:"4a953f16",4946:"6ab1d2f1",4970:"ab2625ee",5205:"4fa4a477",5223:"4700fa5a",5259:"f39eb8a4",5292:"9e433940",5344:"7f276dad",5411:"516fd653",5434:"626998cb",5528:"73b32a5b",5600:"32cd6df2",5633:"9d974a5e",5635:"df78a211",5683:"cb0c9649",5740:"f4c8f522",5762:"e99309bf",5823:"bf7911eb",5900:"91814bbb",5958:"2e258e3a",5989:"35889b3e",6019:"0417f534",6052:"a5d06043",6065:"ad9b752c",6069:"ff8b9bdc",6103:"ccc49370",6120:"bdfb1c9e",6137:"d5924650",6165:"b26db4d4",6213:"ba091c13",6356:"86c8cab7",6388:"12774e86",6423:"066b43c4",6478:"cf908d6e",6514:"5a4b8376",6527:"db0695a0",6606:"5bc7d62e",6625:"a4197f59",6736:"e10a7a36",6750:"306c7e1f",6762:"7bfaa7a7",6788:"d5fb448b",6808:"2f7138b5",6825:"d5cb086c",6920:"02e33f55",6945:"44ecf8a6",6954:"e257170c",7080:"44abebfd",7111:"dd13abe7",7149:"9f4dd427",7195:"6193f2d9",7205:"a177ea91",7207:"226c1cb2",7266:"1bfa7bce",7328:"ab9da6ad",7363:"d17de44a",7423:"7325c450",7450:"95e441ef",7536:"819e66f4",7557:"a840a036",7572:"fed8c847",7597:"82ed57b1",7627:"4bd38c62",7643:"8d048fcf",7742:"44ab2b56",7794:"5607f733",7813:"54ab11f2",7875:"14fa4720",7908:"089aee01",7918:"17896441",7919:"144f3f1f",8020:"4d8d2612",8026:"235ff534",8049:"6ec3393d",8055:"101840d8",8085:"95ec15b9",8105:"fb1f3d53",8106:"33008a42",8109:"f90a7149",8121:"b20edaec",8243:"fb92bdab",8332:"68bc7e0c",8377:"109adb3e",8411:"a7eb5f03",8460:"b2969291",8507:"d95c475e",8515:"06b85272",8528:"6d8e52b2",8552:"693bf4ae",8605:"c11ec7ac",8610:"6875c492",8694:"7565bac2",8731:"55cb4bdc",8735:"07fba2ef",8759:"53c3e70a",8776:"b08b1849",8793:"2a802b1a",8823:"08ad3cfb",8858:"1b0819b8",8888:"3c1a4748",8926:"0acd62cf",8968:"ba176ed1",9032:"c9b6341b",9034:"2a3c31ef",9041:"26a4c592",9149:"3d1bd001",9151:"39bd0d30",9165:"e667da56",9379:"80edec15",9506:"d744c02e",9514:"1be78505",9528:"2a37bc3b",9549:"c029f627",9642:"a5a35206",9821:"9e987ba0",9823:"14218d87",9880:"5f461460",9922:"7cb2f213",9934:"6dd3abba",9966:"2f64b5cd",9983:"f6bc4841"}[e]||e)+"."+{53:"2215c1d4",78:"2d85de80",147:"25f2446d",150:"f424d062",174:"6f6c731d",225:"783eeb3a",306:"a40a61e5",332:"d5ea70dd",351:"4e5e3a5c",375:"b3792bf0",403:"b455a34c",483:"1e90b09c",489:"6e5cd0b0",492:"094b1be3",533:"bb273ff7",547:"094bc3fd",552:"f1c8547a",556:"ea36164a",606:"4bd261c2",661:"16172408",991:"0db5d661",1022:"2c61bb11",1054:"a64d9da2",1069:"c7039b3d",1074:"1d8705c9",1077:"7e02b27d",1086:"ff093419",1111:"7f320ea1",1116:"308ae3b0",1140:"c1454b6e",1141:"150ef35b",1176:"16cc9969",1239:"d35d7420",1245:"c941ba97",1274:"654da556",1294:"223dcc69",1303:"d42c55cd",1473:"60df40bc",1477:"49c34d6c",1482:"d6439f3a",1525:"a88df420",1540:"b710a488",1543:"48b5a9eb",1551:"8da1aced",1594:"766b36e2",1613:"0a7c7f94",1639:"fc081495",1640:"0f15af66",1673:"55cc0829",1687:"37fad5a2",1692:"88a980ce",1713:"b86b36d9",1732:"51a37d30",1751:"173bb2c7",1792:"7b5ce839",1805:"ff9e7000",1920:"9292a511",1926:"626b8240",1948:"6a43559d",1955:"37b6360d",1993:"d6a411b8",2026:"895c4908",2092:"7875c4d9",2149:"bbb30973",2171:"ae5b6a8f",2226:"f6ea7461",2229:"e22e9f98",2336:"4409e1c3",2379:"cc9c72e5",2395:"a03f0883",2430:"1c42d0e1",2531:"c0677821",2535:"5570b803",2538:"f868de66",2550:"756138c2",2552:"90be3d3a",2627:"b34e9975",2639:"84ed3db6",2663:"e97e5f49",2696:"59a6eb4b",2737:"7cbe059e",2784:"546b9a77",2788:"899f787d",2849:"e444c09a",2864:"943bfc23",2911:"1d989f01",3006:"54cd64b9",3045:"fe3cb4c3",3085:"58afc052",3089:"b79ec536",3195:"5762aa00",3210:"4ef465ee",3211:"1e0d05d8",3234:"56a2fb2b",3239:"1b0c9e26",3260:"c0a90290",3333:"16185e15",3343:"8e1af355",3374:"2a067738",3489:"d6e9eace",3567:"708a8d1f",3608:"c2ea93c6",3616:"e42687d3",3625:"b9119f1c",3691:"c9caca33",3696:"78d46f57",3701:"cce95ace",3763:"5eda10ed",3835:"e235939d",3840:"aa8cbf54",3877:"00577b82",3880:"4aebb6dc",3909:"3ffa4177",3966:"d87a11b3",4013:"713d0abb",4026:"8b8e13df",4073:"cb5fc821",4106:"ff18620e",4107:"d3def29d",4163:"01231a53",4178:"36165ba8",4195:"4f1948e5",4218:"fddd0f05",4308:"258e4c2f",4502:"d0749cf5",4604:"1292951e",4608:"0e40bf12",4624:"29e69090",4708:"ebb15998",4744:"f44044b6",4794:"50aad3d5",4921:"7b2819af",4946:"ae3a2b1c",4970:"90415bcc",5205:"8cf4244a",5223:"0a5c7226",5259:"442e2f0d",5292:"a7b39cd7",5344:"55987853",5411:"ab4403cc",5434:"30b1830a",5528:"41a073d9",5600:"a0ed87c9",5633:"6ab9ff38",5635:"0af8ea0b",5683:"a30393fd",5740:"02440b4c",5762:"59687a4a",5823:"15929603",5900:"cd43832a",5958:"97574159",5989:"411b288f",6019:"4578b130",6052:"11766980",6065:"1ddf25a0",6069:"c892ee2e",6103:"c4239e54",6120:"47a40c39",6137:"ab6b4bf9",6165:"824477c8",6213:"0af9e507",6356:"b94e1286",6388:"10f76c7d",6423:"c2c45131",6478:"928377cc",6514:"3ff70b53",6527:"9c21ef40",6606:"9dbec419",6625:"94600011",6736:"2c17a85d",6750:"fd7c91b3",6762:"af2f384c",6788:"879705d2",6808:"daa32e54",6825:"efdfe874",6920:"83fc4a0f",6945:"97f0b6f8",6954:"b2f48094",7080:"e939b2a5",7111:"c5ffd8f7",7149:"a0d94a73",7195:"91f22d84",7205:"86b49fa7",7207:"14a9f881",7266:"f4f63f4c",7328:"6f98ed26",7363:"11091a18",7423:"c230efa2",7450:"5bc6eedc",7536:"b351b885",7557:"77b2bb72",7572:"2b6b53f8",7597:"fe917de8",7627:"0827eacd",7643:"8ea861a6",7742:"48de4440",7794:"13739997",7813:"fec66dd5",7875:"37905ea6",7908:"64d11a39",7918:"58f58d9e",7919:"1840d46f",8020:"3bec68c1",8026:"16c7ef71",8049:"a481210b",8055:"e986b12b",8085:"b129a525",8105:"9646dcfa",8106:"ed9e4b02",8109:"f59d8c1a",8121:"ac627638",8243:"9b7b4537",8332:"026a3652",8377:"58538922",8411:"a0ab2353",8460:"627120f6",8507:"51706c34",8515:"f3242a03",8528:"0d8fda14",8552:"9f43c426",8605:"4a41d991",8610:"7766e5ce",8694:"94aca842",8731:"1d1106c0",8735:"2a2a8136",8759:"d37e1b91",8776:"fe7c623e",8793:"081df96b",8823:"95458f6e",8858:"a489690c",8888:"79b64340",8926:"e5f97cec",8968:"46d057b7",9032:"a9256a23",9034:"9117efb0",9041:"785a218f",9149:"774acf73",9151:"0fff7773",9165:"2ebffc9c",9379:"160dae66",9506:"85556949",9514:"3196d109",9528:"753d2476",9549:"027a1d62",9642:"59913568",9821:"766b37a3",9823:"8a357aa7",9878:"4a08fb5a",9880:"5e9eb4db",9922:"63c98be3",9934:"b1677d33",9966:"e930b38b",9983:"e785ceb0"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.ce4d273a.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,b){return Object.prototype.hasOwnProperty.call(e,b)},c={},a="data-for-good:",n.l=function(e,b,f,d){if(c[e])c[e].push(b);else{var t,r;if(void 0!==f)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==a+f){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",a+f),t.src=e),c[e]=[b];var l=function(b,f){t.onerror=t.onload=null,clearTimeout(s);var a=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),a&&a.forEach((function(e){return e(f)})),b)return b(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.gca=function(e){return e={17896441:"7918",38959279:"375",42425825:"3374","935f2afb":"53","6680f482":"78","09cb7767":"147","8225840b":"150","184b427d":"174","177b27d5":"225",d16648a0:"306",e5a2aa72:"332","13b807b3":"351",d850dedd:"403","8b212c01":"483",c1a5d891:"489","4bc15cfd":"492",b2b675dd:"533",e858457f:"547","49665e23":"552","7c46c2fc":"556","8bbe215b":"606","0f29ad0a":"661","87d5e9bf":"991","7ef562a0":"1022","365a236a":"1054","7ff3d5e0":"1069","767b6115":"1074","801e1629":"1077","96a6b759":"1086","97b6f42b":"1111","03ade8ef":"1116",bce6b196:"1140",d700bc26:"1141","6abff520":"1176","2db57ea2":"1239","41cd652c":"1274","3e52fb75":"1294","1ebcaf33":"1303",cbd4f9cc:"1473",b2f554cd:"1477",f49bc208:"1525","6b6701e3":"1540",e3134f1a:"1543",f997b5b0:"1551","39bc5b70":"1594","66fec65a":"1613","1ebe3126":"1639","009eb52a":"1640","49c06d29":"1673","0348770d":"1687","7405b8c4":"1692",a7023ddc:"1713","3e238482":"1732","4d5d1eee":"1751","5d2bb87c":"1792","804b5f1b":"1805","29446dc6":"1920","01dc0a8c":"1926","6875b538":"1948","63acd3cb":"1955","69b00f74":"1993",c2bcdf4e:"2026","622b7dd8":"2092","1ceed9e0":"2149",c8968567:"2171",c7cad40b:"2226","4dfa488c":"2229",bca44ee2:"2336",d6f72b72:"2379",bc11fc61:"2395","6aff7e55":"2430",dd301a21:"2531","814f3328":"2535",bc32921e:"2538","54a2bf4d":"2550",b52076f7:"2552","8b80c7d5":"2627",d10994c4:"2639","27dc59c4":"2663","3bb3669b":"2696",e063fce9:"2737","70f35be9":"2784","7bbd3961":"2788","4dbf4eb8":"2849",b183c136:"2864",d7a3c5fe:"2911","6b1591cb":"3006","47f57e3d":"3045","1f391b9e":"3085",a6aa9e1f:"3089","05963d75":"3195","61fe4f0a":"3210","84d668ad":"3211","58afa47c":"3234","0093a5e1":"3239","8c1d7474":"3260",fe031ad3:"3333",c70c820e:"3489",d9a65cd1:"3567","9e4087bc":"3608","64bc78c2":"3616",f734d6f6:"3625","657e8bbb":"3691",db0670d8:"3696",bbe905dd:"3701","3ebff72d":"3763","81bdaa54":"3835","882aecb3":"3840","583183f9":"3877","2207788b":"3880","7795d192":"3909",dd67e022:"3966","01a85c17":"4013","326465e9":"4026",a25c50e2:"4073",da86fa20:"4106","9e1ff6e7":"4107","14d15377":"4163",e92d91e5:"4178",c4f5d8e4:"4195","49900b44":"4218",fff1f962:"4308",f2c43689:"4502",f2100821:"4604",c83d66e8:"4624","93bbc137":"4708",ebf7a0fe:"4744","06b274de":"4794","4a953f16":"4921","6ab1d2f1":"4946",ab2625ee:"4970","4fa4a477":"5205","4700fa5a":"5223",f39eb8a4:"5259","9e433940":"5292","7f276dad":"5344","516fd653":"5411","626998cb":"5434","73b32a5b":"5528","32cd6df2":"5600","9d974a5e":"5633",df78a211:"5635",cb0c9649:"5683",f4c8f522:"5740",e99309bf:"5762",bf7911eb:"5823","91814bbb":"5900","2e258e3a":"5958","35889b3e":"5989","0417f534":"6019",a5d06043:"6052",ad9b752c:"6065",ff8b9bdc:"6069",ccc49370:"6103",bdfb1c9e:"6120",d5924650:"6137",b26db4d4:"6165",ba091c13:"6213","86c8cab7":"6356","12774e86":"6388","066b43c4":"6423",cf908d6e:"6478","5a4b8376":"6514",db0695a0:"6527","5bc7d62e":"6606",a4197f59:"6625",e10a7a36:"6736","306c7e1f":"6750","7bfaa7a7":"6762",d5fb448b:"6788","2f7138b5":"6808",d5cb086c:"6825","02e33f55":"6920","44ecf8a6":"6945",e257170c:"6954","44abebfd":"7080",dd13abe7:"7111","9f4dd427":"7149","6193f2d9":"7195",a177ea91:"7205","226c1cb2":"7207","1bfa7bce":"7266",ab9da6ad:"7328",d17de44a:"7363","7325c450":"7423","95e441ef":"7450","819e66f4":"7536",a840a036:"7557",fed8c847:"7572","82ed57b1":"7597","4bd38c62":"7627","8d048fcf":"7643","44ab2b56":"7742","5607f733":"7794","54ab11f2":"7813","14fa4720":"7875","089aee01":"7908","144f3f1f":"7919","4d8d2612":"8020","235ff534":"8026","6ec3393d":"8049","101840d8":"8055","95ec15b9":"8085",fb1f3d53:"8105","33008a42":"8106",f90a7149:"8109",b20edaec:"8121",fb92bdab:"8243","68bc7e0c":"8332","109adb3e":"8377",a7eb5f03:"8411",b2969291:"8460",d95c475e:"8507","06b85272":"8515","6d8e52b2":"8528","693bf4ae":"8552",c11ec7ac:"8605","6875c492":"8610","7565bac2":"8694","55cb4bdc":"8731","07fba2ef":"8735","53c3e70a":"8759",b08b1849:"8776","2a802b1a":"8793","08ad3cfb":"8823","1b0819b8":"8858","3c1a4748":"8888","0acd62cf":"8926",ba176ed1:"8968",c9b6341b:"9032","2a3c31ef":"9034","26a4c592":"9041","3d1bd001":"9149","39bd0d30":"9151",e667da56:"9165","80edec15":"9379",d744c02e:"9506","1be78505":"9514","2a37bc3b":"9528",c029f627:"9549",a5a35206:"9642","9e987ba0":"9821","14218d87":"9823","5f461460":"9880","7cb2f213":"9922","6dd3abba":"9934","2f64b5cd":"9966",f6bc4841:"9983"}[e]||e,n.p+n.u(e)},function(){var e={6552:0,532:0};n.f.j=function(b,f){var c=n.o(e,b)?e[b]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(53|655)2$/.test(b))e[b]=0;else{var a=new Promise((function(f,a){c=e[b]=[f,a]}));f.push(c[2]=a);var d=n.p+n.u(b),t=new Error;n.l(d,(function(f){if(n.o(e,b)&&(0!==(c=e[b])&&(e[b]=void 0),c)){var a=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.src;t.message="Loading chunk "+b+" failed.\n("+a+": "+d+")",t.name="ChunkLoadError",t.type=a,t.request=d,c[1](t)}}),"chunk-"+b,b)}},n.O.j=function(b){return 0===e[b]};var b=function(b,f){var c,a,d=f[0],t=f[1],r=f[2],o=0;if(d.some((function(b){return 0!==e[b]}))){for(c in t)n.o(t,c)&&(n.m[c]=t[c]);if(r)var u=r(n)}for(b&&b(f);o<d.length;o++)a=d[o],n.o(e,a)&&e[a]&&e[a][0](),e[d[o]]=0;return n.O(u)},f=self.webpackChunkdata_for_good=self.webpackChunkdata_for_good||[];f.forEach(b.bind(null,0)),f.push=b.bind(null,f.push.bind(f))}()}();