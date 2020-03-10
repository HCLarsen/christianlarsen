(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e){e.exports=[{name:"Electric Star Productions",url:"https://www.electricstarproductions.ca/",description:"Electric Star Productions is a DJ and Events company in Toronto. They wanted a website with editable information about their DJs. I used ReactJS on the front end, to provide smooth transition between the standard view and the forms that enable editing. The back end uses Ruby on Rails to store the content in a PostgreSQL Database."}]},15:function(e,t,n){e.exports=n.p+"static/media/menu-icon.34e5b502.png"},18:function(e,t,n){e.exports=n(28)},23:function(e,t,n){},24:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),l=(n(23),n(3)),i=n(4),s=n(6),u=n(5),m=n(7),p=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-info"},r.a.createElement("ul",{className:"contact-info"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/chris-larsen-58347214/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/HCLarsen",target:"_blank",rel:"noopener noreferrer"},"Github")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://hclarsenblog.wordpress.com/",target:"_blank",rel:"noopener noreferrer"},"Blog"))),r.a.createElement("ul",{className:"contact-info"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.hackerrank.com/HCLarsen",target:"_blank",rel:"noopener noreferrer"},"HackerRank")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://codefights.com/profile/hclarsen",target:"_blank",rel:"noopener noreferrer"},"CodeFights")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.codingame.com/profile/ef9dbf586fe48edbd0ca1e569084a33f2941112",target:"_blank",rel:"noopener noreferrer"},"CodinGame"))))}}]),t}(a.Component),h=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"content"},r.a.createElement("h2",null,"Hello"),r.a.createElement("p",null,"I'm Chris Larsen, a freelance web developer, electronics technologist, rubyist, and general technology fanatic."),r.a.createElement("p",null,"My main stack for web development is Ruby on Rails, with ReactJS on the front end. My IoT projects are mostly done with Ruby and C. The hardware for my IoT projects is usually Raspberry Pi, but I also work with other platforms."),r.a.createElement("p",null,"This site contains links to my open source contributions, projects that I've been commissioned to create, and some side projects that I've created for my own interest."),r.a.createElement("p",null,"If you wish to contact me, please do so through my ",r.a.createElement("a",{href:"https://www.linkedin.com/in/chris-larsen-58347214/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn profile"),"."))}}]),t}(a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"project"},r.a.createElement("dt",{className:"project-name"},r.a.createElement("a",{href:this.props.url,target:"_blank",rel:"noopener noreferrer"},this.props.name)),r.a.createElement("dd",{className:"project-description"},this.props.description))}}]),t}(a.Component),d=n(14),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=d.map(function(e,t){return r.a.createElement(f,{key:t,name:e.name,url:e.url,description:e.description})});return r.a.createElement("section",{className:"content"},r.a.createElement("h2",null,"Freelance Work"),r.a.createElement("p",null,"Below is the paid work I've done as a freeelance web developer."),r.a.createElement("dl",null,e))}}]),t}(a.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.projects.map(function(e,t){return r.a.createElement(f,{key:t,name:e.name,url:e.html_url,description:e.description,target:"_blank",rel:"noopener noreferrer"})});return r.a.createElement("section",{className:"content"},r.a.createElement("p",null,"These are the open source libraries that I've contributed to."),r.a.createElement("dl",null,e))}}]),t}(a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.projects.map(function(e,t){return r.a.createElement(f,{key:t,name:e.name,url:e.html_url,description:e.description,target:"_blank",rel:"noopener noreferrer"})});return r.a.createElement("section",{className:"content"},r.a.createElement("p",null,"This is a list of software that I've created on my own."),r.a.createElement("dl",null,e))}}]),t}(a.Component),j=function(e){if(e.status>=200&&e.status<300)return e.json();var t=new Error("HTTP Error ".concat(e.statusText," ").concat(e.url));throw t.status=e.statusText,t.response=e,console.log(e.status+e.url),console.log(t),t},v={search:function(e){return fetch("https://api.github.com/users/HCLarsen/repos?sort=updated",{accept:"application/json"}).then(j).then(e)}},g=(n(24),n(29)),k=n(31),y=n(32),O=n(15),N=n.n(O),C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={dropDown:!1,projects:[],contributions:[]},n.closeMenu=function(){n.state.dropDown&&n.setState({dropDown:!1})},n.menuToggle=function(){n.setState({dropDown:!n.state.dropDown})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;v.search(function(t){var n=t.filter(function(e){return!e.fork&&e.stargazers_count>0}).slice(0,5),a=t.filter(function(e){return e.fork&&e.stargazers_count>0}).slice(0,2);e.setState({projects:n,contributions:a})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"title-bar"},r.a.createElement("h1",{className:"title"},"Chris Larsen"),r.a.createElement(p,null)),r.a.createElement("nav",{className:this.state.dropDown?"show-nav":"",onClick:this.closeMenu},r.a.createElement("button",{className:"menu-button",onClick:this.menuToggle},r.a.createElement("img",{className:"menu",alt:"",src:N.a})),r.a.createElement("ul",{className:this.state.dropDown?"navbar show-nav":"navbar"},r.a.createElement("li",null,r.a.createElement(g.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/freelance"},"Freelance Work")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/openSource"},"Open Source")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/projects"},"Side Projects"))))),r.a.createElement("div",{className:"content-container"},r.a.createElement(k.a,null,r.a.createElement(y.a,{exact:!0,path:"/",onLeave:this.routeChange,component:h}),r.a.createElement(y.a,{path:"/freelance",component:b}),r.a.createElement(y.a,{path:"/opensource",render:function(t){return r.a.createElement(E,Object.assign({projects:e.state.contributions},t))}}),r.a.createElement(y.a,{path:"/projects",render:function(t){return r.a.createElement(w,Object.assign({projects:e.state.projects},t))}}))))}}]),t}(a.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var _=n(30);c.a.render(r.a.createElement(_.a,null,r.a.createElement(y.a,{path:"/",component:C})),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/christianlarsen",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/christianlarsen","/service-worker.js");T?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):I(e)})}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.e00e165b.chunk.js.map