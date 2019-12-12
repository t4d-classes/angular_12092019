
// modern Angular has not constant service
.constant // inject some kind of constant value in a config block


.value // inject a value/object as is, there is no configuration

// default, preferred
.service // new up a function constructor or class to create the service

// most popular way for AngularJS in the golden years
.factory // when you want to control how the object was created

// register the service with a module in modern Angular
.provider // configured the process by which you created the service

// in AngularJS - services are singletons

// in Modern Angular - servies not singletons, but generally are used as singletons
