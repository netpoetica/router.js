document.onreadystatechange = function(){
    // Poor man's ready function.
    if(document.readyState !== "complete") return;

    // For a static app with multiple html files and 1 main JS file.
    var router = new Router();
    
    // Remove filetype from end of pathname
    var r = /(.*)\.[^.]+$/;

    /* All code for individual pages should go through the router like this */
    router.registerRoute("/", function homeHandler(){
      console.log("Welcome to the home page!");
    });

    router.registerRoute(["/about", "/team" ], function aboutHandler(){
      console.log("The home and about page both utilize the same handler because the code in this handler is abstract enough to work on the same layout.");
    });

    /* On Page Load, determine the current route and run appropriate functions */
    console.log("Serving JS for route: " + window.location.pathname);

    // If you initialize this JS file on page / you
    // will use homeHandler, but if you initialize on
    // about/ or team/ you will use the aboutHandler
    router.handleRoute(window.location.pathname);

};