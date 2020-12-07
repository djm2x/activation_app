!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],o=!0,i=!1,n=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(c){i=!0,n=c}finally{try{o||null==s.return||s.return()}finally{if(i)throw n}}return r}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Yj9t:function(t,o,n){"use strict";n.r(o),n.d(o,"AuthModule",function(){return X});var a=n("ofXK"),s=n("tyNb"),c=n("mrSG"),u=n("3Pt+"),m=n("V2kc"),l=n("fXoL"),b=n("7q3A"),d=n("M0ag"),f=n("0kbX"),h=n("Wp6s"),p=n("r3Nu"),y=n("kmnG"),g=n("qFsG"),v=n("NFeN"),w=n("bTqV");function k(e,t){1&e&&(l.Sb(0,"mat-error"),l.Ac(1,"Email non valide"),l.Rb())}var S,R=((S=function(){function e(t,o,i,n,a,s){r(this,e),this.fb=t,this.uow=o,this.router=i,this.session=n,this.route=a,this.snackBar=s,this.o=new m.d,this.hide=!0,this.code=""}return i(e,[{key:"ngOnInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.o.email="admin@angular.io",this.o.password="123",this.createForm(),this.code=this.route.snapshot.paramMap.get("code"),this.code&&""!==this.code&&this.submitCodeCommingFromEmail();case 1:case"end":return e.stop()}},e,this)}))}},{key:"createForm",value:function(){this.myForm=this.fb.group({email:[this.o.email,[u.t.required,u.t.email]],password:[this.o.password,[u.t.required]]})}},{key:"submit",value:function(e){var t=this;this.uow.accounts.login(e).subscribe(function(e){e.code<0?t.snackBar.notifyAlert(400,e.message):(t.snackBar.notifyOk(200,e.message),t.session.doSignIn(e.user,e.token),t.router.navigate(["/admin"]))})}},{key:"submitCodeCommingFromEmail",value:function(){var e=this;this.uow.accounts.activeAccount(this.code).subscribe(function(t){t.code<0?e.snackBar.notifyAlert(400,t.message):(e.snackBar.notifyOk(200,t.message),e.session.doSignIn(t.user,t.token),e.router.navigate(["/admin"]))})}},{key:"resetForm",value:function(){this.o=new m.d,this.createForm()}},{key:"ngOnDestroy",value:function(){console.log("ngOnDestroy")}},{key:"email",get:function(){return this.myForm.get("email")}},{key:"password",get:function(){return this.myForm.get("password")}},{key:"emailError",get:function(){return this.email.hasError("required")?"You must enter a value":this.email.hasError("email")?"Not a valid email":""}},{key:"passwordError",get:function(){return this.password.hasError("required")?"You must enter a value":""}}]),e}()).\u0275fac=function(e){return new(e||S)(l.Mb(u.d),l.Mb(b.a),l.Mb(s.e),l.Mb(d.b),l.Mb(s.a),l.Mb(f.a))},S.\u0275cmp=l.Gb({type:S,selectors:[["app-login"]],decls:26,vars:5,consts:[[1,"mat-elevation-z8","mywith"],[3,"formGroup","ngSubmit"],[1,"d-flex","flex-column","justify-content-center","align-items-center"],["src","assets/logo-mini.png","alt","logo","width","80%",1,"mb-4"],[1,""],["appearance","fill",1,"col-md-12","p-0"],["matInput","","formControlName","email","placeholder","Email address"],[4,"ngIf"],["appearance","fill",1,"col-md-12","p-0","mb-4"],["matInput","","formControlName","password","placeholder","Mot de passe",3,"type"],["matSuffix","",3,"click"],["mat-raised-button","","color","primary","type","submit",1,"col-md-12","mb-2",3,"disabled"],[1,"d-flex","mt-2","mb-2"],["mat-stroked-button","","color","primary","type","button",2,"width","33%",3,"click"],["mat-stroked-button","","color","accent","type","button",2,"width","33%",3,"click"],["mat-stroked-button","","color","warn","type","button",2,"width","33%",3,"click"]],template:function(e,t){1&e&&(l.Sb(0,"mat-card",0),l.Nb(1,"app-theme"),l.Sb(2,"form",1),l.Zb("ngSubmit",function(){return t.submit(t.myForm.value)}),l.Sb(3,"div",2),l.Nb(4,"img",3),l.Sb(5,"div",4),l.Sb(6,"mat-form-field",5),l.Sb(7,"mat-label"),l.Ac(8,"Email"),l.Rb(),l.Nb(9,"input",6),l.yc(10,k,2,0,"mat-error",7),l.Rb(),l.Sb(11,"mat-form-field",8),l.Sb(12,"mat-label"),l.Ac(13,"Mot de passe"),l.Rb(),l.Nb(14,"input",9),l.Sb(15,"mat-icon",10),l.Zb("click",function(){return t.hide=!t.hide}),l.Ac(16),l.Rb(),l.Rb(),l.Sb(17,"button",11),l.Ac(18,"Connexion"),l.Rb(),l.Sb(19,"div",12),l.Sb(20,"button",13),l.Zb("click",function(){return t.myForm.get("email").patchValue("sa@angular.io")}),l.Ac(21,"Super admin"),l.Rb(),l.Sb(22,"button",14),l.Zb("click",function(){return t.myForm.get("email").patchValue("admin@angular.io")}),l.Ac(23,"Admin"),l.Rb(),l.Sb(24,"button",15),l.Zb("click",function(){return t.myForm.get("email").patchValue("user@angular.io")}),l.Ac(25,"user"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&e&&(l.Bb(2),l.jc("formGroup",t.myForm),l.Bb(8),l.jc("ngIf",t.myForm.get("email").invalid),l.Bb(4),l.jc("type",t.hide?"password":"text"),l.Bb(2),l.Cc("",t.hide?"visibility_off":"visibility"," "),l.Bb(1),l.jc("disabled",t.myForm.invalid))},directives:[h.a,p.a,u.u,u.o,u.h,y.c,y.f,g.b,u.c,u.n,u.g,a.l,v.a,y.g,w.a,y.b],styles:["h1[_ngcontent-%COMP%]{color:var(--warn)}.mywith[_ngcontent-%COMP%]{margin:0 auto}@media screen and (min-width:600px){.mywith[_ngcontent-%COMP%]{width:25rem}}"]}),S);function E(e,t){1&e&&(l.Sb(0,"mat-error"),l.Ac(1,"Email non valide"),l.Rb())}function A(e,t){if(1&e&&(l.Sb(0,"mat-error"),l.Ac(1),l.Rb()),2&e){var r=l.dc();l.Bb(1),l.Bc(r.passwordError)}}function B(e,t){if(1&e&&(l.Sb(0,"mat-error"),l.Ac(1),l.Rb()),2&e){var r=l.dc();l.Bb(1),l.Bc(r.checkPasswordError)}}var C,j,F=function(){return["/auth/login"]},I=((j=function(){function e(t,o,i,n,a){r(this,e),this.fb=t,this.uow=o,this.router=i,this.session=n,this.snackBar=a,this.o=new m.d,this.hide=!0,this.hide2=!0,this.checkPassword=new u.e("",[u.t.required])}return i(e,[{key:"ngOnInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.createForm();case 1:case"end":return e.stop()}},e,this)}))}},{key:"createForm",value:function(){this.myForm=this.fb.group({id:[this.o.id],nom:[this.o.nom],prenom:[this.o.prenom],matricule:[this.o.matricule],email:[this.o.email,[u.t.required,u.t.email]],password:[this.o.password,[u.t.required]],isActive:[this.o.isActive]})}},{key:"submit",value:function(e){var t=this;this.uow.accounts.create("auth/login".replace(/\//g,"%2F"),e).subscribe(function(e){e.code<0?t.snackBar.notifyAlert(400,e.message):(t.snackBar.notifyOk(200,"Lien d'activation a \xe9t\xe9 envoyer a votre email"),t.router.navigate(["/auth"]))})}},{key:"resetForm",value:function(){this.o=new m.d,this.createForm()}},{key:"email",get:function(){return this.myForm.get("email")}},{key:"password",get:function(){return this.myForm.get("password")}},{key:"emailError",get:function(){return this.email.hasError("required")?"You must enter a value":this.email.hasError("email")?"Not a valid email":""}},{key:"passwordError",get:function(){return this.password.hasError("required")?"You must enter a value":""}},{key:"checkPasswordError",get:function(){return this.checkPassword.hasError("required")?"You must enter a value":this.checkPassword.value!==this.password.value?"les mot de pass sont pas les m\xeame":""}}]),e}()).\u0275fac=function(e){return new(e||j)(l.Mb(u.d),l.Mb(b.a),l.Mb(s.e),l.Mb(d.b),l.Mb(f.a))},j.\u0275cmp=l.Gb({type:j,selectors:[["app-create"]],decls:37,vars:12,consts:[[3,"formGroup","ngSubmit"],[1,"d-flex","flex-column","justify-content-center","align-items-center"],["src","assets/logo.png","alt","logo","width","100%",1,"mb-4","mt-3"],[1,""],["appearance","fill",1,"col-md-12","p-0"],["matInput","","formControlName","nom"],["matInput","","formControlName","prenom"],["matInput","","formControlName","email","placeholder","Email address"],[4,"ngIf"],["matInput","","formControlName","password","placeholder","Mot de passe",3,"type"],["matSuffix","",3,"click"],["appearance","fill",1,"col-md-12","p-0","mb-4"],["matInput","","placeholder","R\xe9p\xe9ter le mot de pass",3,"formControl","type"],["mat-raised-button","","color","accent","type","submit",1,"col-md-12","mb-2",3,"disabled"],["mat-raised-button","","color","primary","type","button",1,"col-md-12",3,"routerLink"]],template:function(e,t){1&e&&(l.Sb(0,"form",0),l.Zb("ngSubmit",function(){return t.submit(t.myForm.value)}),l.Sb(1,"mat-card-content",1),l.Nb(2,"img",2),l.Sb(3,"h1"),l.Ac(4,"Bienvenue"),l.Rb(),l.Sb(5,"div",3),l.Sb(6,"mat-form-field",4),l.Sb(7,"mat-label"),l.Ac(8,"Nom"),l.Rb(),l.Nb(9,"input",5),l.Rb(),l.Sb(10,"mat-form-field",4),l.Sb(11,"mat-label"),l.Ac(12,"Prenom"),l.Rb(),l.Nb(13,"input",6),l.Rb(),l.Sb(14,"mat-form-field",4),l.Sb(15,"mat-label"),l.Ac(16,"Email"),l.Rb(),l.Nb(17,"input",7),l.yc(18,E,2,0,"mat-error",8),l.Rb(),l.Sb(19,"mat-form-field",4),l.Sb(20,"mat-label"),l.Ac(21,"Mot de passe"),l.Rb(),l.Nb(22,"input",9),l.Sb(23,"mat-icon",10),l.Zb("click",function(){return t.hide=!t.hide}),l.Ac(24),l.Rb(),l.yc(25,A,2,1,"mat-error",8),l.Rb(),l.Sb(26,"mat-form-field",11),l.Sb(27,"mat-label"),l.Ac(28,"R\xe9p\xe9ter le mot de pass"),l.Rb(),l.Nb(29,"input",12),l.Sb(30,"mat-icon",10),l.Zb("click",function(){return t.hide2=!t.hide2}),l.Ac(31),l.Rb(),l.yc(32,B,2,1,"mat-error",8),l.Rb(),l.Sb(33,"button",13),l.Ac(34,"Inscription"),l.Rb(),l.Sb(35,"button",14),l.Ac(36," Connexion"),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&e&&(l.jc("formGroup",t.myForm),l.Bb(18),l.jc("ngIf",t.emailError),l.Bb(4),l.jc("type",t.hide?"password":"text"),l.Bb(2),l.Cc("",t.hide?"visibility_off":"visibility"," "),l.Bb(1),l.jc("ngIf",t.passwordError),l.Bb(4),l.jc("formControl",t.checkPassword)("type",t.hide2?"password":"text"),l.Bb(2),l.Cc("",t.hide2?"visibility_off":"visibility"," "),l.Bb(1),l.jc("ngIf",t.checkPassword.touched&&t.checkPasswordError),l.Bb(1),l.jc("disabled",t.myForm.invalid||""!==t.checkPasswordError),l.Bb(2),l.jc("routerLink",l.kc(11,F)))},directives:[u.u,u.o,u.h,h.c,y.c,y.f,g.b,u.c,u.n,u.g,a.l,v.a,y.g,u.f,w.a,s.f,y.b],styles:["h1[_ngcontent-%COMP%]{color:#e85412}"]}),j),M=((C=function(){function e(){r(this,e)}return i(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||C)},C.\u0275cmp=l.Gb({type:C,selectors:[["app-auth"]],decls:3,vars:0,consts:[[1,"row","justify-content-center","align-items-center","m-0","pl-2","pr-2"],[1,"container","justify-content-center","align-items-cente"]],template:function(e,t){1&e&&(l.Sb(0,"div",0),l.Sb(1,"div",1),l.Nb(2,"router-outlet"),l.Rb(),l.Rb())},directives:[s.i],styles:[".row[_ngcontent-%COMP%]{height:100vh;width:100vw}"]}),C);function P(e,t){1&e&&(l.Sb(0,"mat-error"),l.Ac(1,"Email non valide"),l.Rb())}function N(e,t){if(1&e&&(l.Sb(0,"mat-error"),l.Ac(1),l.Rb()),2&e){var r=l.dc(2);l.Bb(1),l.Bc(r.passwordError)}}function x(e,t){if(1&e){var r=l.Tb();l.Sb(0,"mat-form-field",4),l.Sb(1,"mat-label"),l.Ac(2,"Mot de passe"),l.Rb(),l.Nb(3,"input",13),l.Sb(4,"mat-icon",14),l.Zb("click",function(){l.qc(r);var e=l.dc();return e.hide=!e.hide}),l.Ac(5),l.Rb(),l.yc(6,N,2,1,"mat-error",6),l.Rb()}if(2&e){var o=l.dc();l.Bb(3),l.jc("type",o.hide?"password":"text"),l.Bb(2),l.Cc("",o.hide?"visibility_off":"visibility"," "),l.Bb(1),l.jc("ngIf",o.passwordError)}}function O(e,t){if(1&e&&(l.Sb(0,"mat-error"),l.Ac(1),l.Rb()),2&e){var r=l.dc(2);l.Bb(1),l.Bc(r.checkPasswordError)}}function q(e,t){if(1&e){var r=l.Tb();l.Sb(0,"mat-form-field",15),l.Sb(1,"mat-label"),l.Ac(2,"R\xe9p\xe9ter le mot de pass"),l.Rb(),l.Nb(3,"input",16),l.Sb(4,"mat-icon",14),l.Zb("click",function(){l.qc(r);var e=l.dc();return e.hide2=!e.hide2}),l.Ac(5),l.Rb(),l.yc(6,O,2,1,"mat-error",6),l.Rb()}if(2&e){var o=l.dc();l.Bb(3),l.jc("formControl",o.checkPassword)("type",o.hide2?"password":"text"),l.Bb(2),l.Cc("",o.hide2?"visibility_off":"visibility"," "),l.Bb(1),l.jc("ngIf",o.checkPassword.touched&&o.checkPasswordError)}}var G,Z,L,_=function(){return["/auth/create"]},Y=function(){return["/auth/login"]},T=((G=function(){function t(e,o,i,n,a,s){r(this,t),this.fb=e,this.uow=o,this.router=i,this.session=n,this.route=a,this.snackBar=s,this.o=new m.d,this.code="",this.hide=!0,this.hide2=!0,this.checkPassword=new u.e("",[u.t.required]),this.isEmailChecked=!1}return i(t,[{key:"ngOnInit",value:function(){if(this.code=this.route.snapshot.paramMap.get("code"),this.code){var t=e(atob(this.code).split("*"),3),r=t[0];t[1],t[2],this.o.email=r,this.isEmailChecked=!0}this.createForm()}},{key:"createForm",value:function(){this.myForm=this.fb.group({email:[this.o.email,[u.t.required,u.t.email]],password:[this.o.password,this.isEmailChecked?[u.t.required]:[]]})}},{key:"sendEmailForResetPassword",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.uow.accounts.sendEmailForResetPassword(e,"auth%2Freset","fr").subscribe(function(e){-1===e.code?(console.log(e.message),r.snackBar.notifyAlert(400,e.message)):(console.log(e.message),r.snackBar.notifyOk(200,e.message),r.router.navigate(["/auth/login"]))},function(e){console.log(e.error)});case 1:case"end":return t.stop()}},t,this)}))}},{key:"resetPassword",value:function(e){var t=this;this.uow.accounts.resetPassword({email:this.o.email,password:e}).subscribe(function(e){-1===e.code?console.log("Email Incorrect"):1===e.code&&(console.log(e.message),t.router.navigate(["/auth/login"]))},function(e){console.log(e.error)})}},{key:"email",get:function(){return this.myForm.get("email")}},{key:"password",get:function(){return this.myForm.get("password")}},{key:"emailError",get:function(){return this.email.hasError("required")?"You must enter a value":this.email.hasError("email")?"Not a valid email":""}},{key:"passwordError",get:function(){return this.password.hasError("required")?"You must enter a value":""}},{key:"checkPasswordError",get:function(){return this.checkPassword.hasError("required")?"You must enter a value":this.checkPassword.value!==this.password.value?"les mot de pass sont pas les m\xeame":""}}]),t}()).\u0275fac=function(e){return new(e||G)(l.Mb(u.d),l.Mb(b.a),l.Mb(s.e),l.Mb(d.b),l.Mb(s.a),l.Mb(f.a))},G.\u0275cmp=l.Gb({type:G,selectors:[["app-reset"]],decls:20,vars:10,consts:[[3,"formGroup"],[1,"d-flex","flex-column","justify-content-center","align-items-center"],["src","assets/logo.png","alt","logo","width","100%",1,"mb-4","mt-3"],[1,""],["appearance","fill",1,"col-md-12","p-0"],["matInput","","formControlName","email","placeholder","Email address",3,"readonly"],[4,"ngIf"],["appearance","fill","class","col-md-12 p-0",4,"ngIf"],["appearance","fill","class","col-md-12 p-0 mb-4",4,"ngIf"],["mat-raised-button","","color","primary",1,"col-md-12","mb-2",3,"disabled","click"],["mat-raised-button","","color","accent","type","button",1,"col-md-12",3,"routerLink"],[1,"d-flex","flex-row-reverse","mt-2","mb-2","text-muted"],[2,"cursor","pointer",3,"routerLink"],["matInput","","formControlName","password","placeholder","Mot de passe",3,"type"],["matSuffix","",3,"click"],["appearance","fill",1,"col-md-12","p-0","mb-4"],["matInput","","placeholder","R\xe9p\xe9ter le mot de pass",3,"formControl","type"]],template:function(e,t){1&e&&(l.Sb(0,"form",0),l.Sb(1,"mat-card-content",1),l.Nb(2,"img",2),l.Sb(3,"h3"),l.Ac(4,"VEUILLEZ SAISIR VOTRE ADRESSE EMAIL"),l.Rb(),l.Sb(5,"div",3),l.Sb(6,"mat-form-field",4),l.Sb(7,"mat-label"),l.Ac(8,"Email"),l.Rb(),l.Nb(9,"input",5),l.yc(10,P,2,0,"mat-error",6),l.Rb(),l.yc(11,x,7,3,"mat-form-field",7),l.yc(12,q,7,4,"mat-form-field",8),l.Sb(13,"button",9),l.Zb("click",function(){return t.isEmailChecked?t.resetPassword(t.checkPassword.value):t.sendEmailForResetPassword(t.email.value)}),l.Ac(14," R\xe9initialiser "),l.Rb(),l.Sb(15,"button",10),l.Ac(16," Inscription "),l.Rb(),l.Sb(17,"div",11),l.Sb(18,"span",12),l.Ac(19,"Connexion ?"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&e&&(l.jc("formGroup",t.myForm),l.Bb(9),l.jc("readonly",t.isEmailChecked),l.Bb(1),l.jc("ngIf",t.emailError),l.Bb(1),l.jc("ngIf",t.isEmailChecked),l.Bb(1),l.jc("ngIf",t.isEmailChecked),l.Bb(1),l.jc("disabled",t.myForm.invalid||t.isEmailChecked&&""!==t.checkPasswordError),l.Bb(2),l.jc("routerLink",l.kc(8,_)),l.Bb(3),l.jc("routerLink",l.kc(9,Y)))},directives:[u.u,u.o,u.h,h.c,y.c,y.f,g.b,u.c,u.n,u.g,a.l,w.a,s.f,y.b,v.a,y.g,u.f],styles:["h3[_ngcontent-%COMP%]{color:#e85412}"]}),G),V=[{path:"",redirectTo:"",pathMatch:"full"},{path:"",component:M,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login/:code",component:R},{path:"login",component:R},{path:"create",component:I},{path:"reset/:code",component:T},{path:"reset",component:T}]}],J=((Z=function e(){r(this,e)}).\u0275mod=l.Kb({type:Z}),Z.\u0275inj=l.Jb({factory:function(e){return new(e||Z)},imports:[[s.h.forChild(V)],s.h]}),Z),D=n("tk/3"),K=n("2thQ"),X=((L=function e(){r(this,e)}).\u0275mod=l.Kb({type:L}),L.\u0275inj=l.Jb({factory:function(e){return new(e||L)},imports:[[a.c,J,u.i,u.r,D.c,K.a,p.b]]}),L)}}])}();