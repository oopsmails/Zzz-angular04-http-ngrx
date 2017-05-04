angular04-http

This is a tutorial for angular 4 http.

The backend (REST service provider) is currently using SpringBoot, spring-boot-103-rest-mongodb.

Later on, will be changed to use NodeJS.

-----------------------------------------------------

Using ngrx store in version 2

=> for ngrx

put following in angular-02/Notes-Angular4-20170402.txt

and put this instruction in general-info

- npm install @ngrx/core @ngrx/store --save
- make reducer and action
- add store in app.module.ts
imports: [
...
StoreModule.provideStore({ customers: customerReducer })
]
- subscribe up store in Components
ngOnInit() and unsubscribe in ngOnDestroy
- to get/load initial list state, 
call REST service in ngOnInit()
- get/load list in Service and use subscribe (action ->) to update Store
this will initialize the list to be shown in the page through Store!
- The REST ws returning a List, this is not recognized by *ngFor
showing error "Cannot find a differ supporting object '[object Object]'"
Solution: write a @Pipe for this!

all ok:
return { ...state, customers: action.payload };
return { ...state, ...action.payload };
return Object.assign({}, state, action.payload);



- npm install @ngrx/core @ngrx/store --save
- make reducer and action
- add store in app.module.ts
imports: [
...
StoreModule.provideStore({ customers: customerReducer })
]
- subscribe up store in Components
ngOnInit() and unsubscribe in ngOnDestroy
- to get/load initial list state, 
call REST service in ngOnInit()
- get/load list in Service and use subscribe (action ->) to update Store
this will initialize the list to be shown in the page through Store!
- The REST ws returning a List, this is not recognized by *ngFor
showing error "Cannot find a differ supporting object '[object Object]'"
Solution: write a @Pipe for this!








