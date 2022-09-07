export class Index {
  configureRouter(config, router) {
    config.map([
        {route:['', '/list'],       moduleId:'./list',          name:'list',        nav:false,      title:'product-all'},
        {route:'view/:id',          moduleId:'./view',          name:'view',        nav:false,      title:'View:product-all'},
        {route:'edit/:id',          moduleId:'./edit',          name:'edit',        nav:false,      title:'Edit:product-all'},
        {route:'create',            moduleId:'./create',        name:'create',      nav:false,      title:'Create:product-all'}
    ]);

    this.router = router;
  }
}