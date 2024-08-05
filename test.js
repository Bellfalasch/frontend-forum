javascript:(function() {
    var metaID = document.querySelector('meta[name="pageID"]').content;
    if (metaID) { 
        var rootUrl = "gjensidige-builders-admin.gjensidige.io";
        var currentUrl = window.location.href;
        if (currentUrl.substring(8,45) === "gjensidige-builders.testgjensidige.io") { rootUrl = "gjensidige-builders-admin.apps-int.testgjensidige.io"; }
        if (currentUrl.substring(8,39) === "gjensidige-no.testgjensidige.io") { rootUrl = "gjensidige-no-admin.apps-int.testgjensidige.io"; }
        if (currentUrl.substring(8,39) === "gjensidige-se.testgjensidige.io") { rootUrl = "gjensidige-se-admin.apps-int.testgjensidige.io"; }
        if (currentUrl.substring(8,39) === "gjensidige-dk.testgjensidige.io") { rootUrl = "gjensidige-dk-admin.apps-int.testgjensidige.io"; }
        if (currentUrl.substring(8,40) === "gjensidige-com.testgjensidige.io") { rootUrl = "gjensidige-com-admin.apps-int.testgjensidige.io"; }
        if (currentUrl.substring(8,25) === "www.gjensidige.no") { rootUrl = "gjensidige-no-admin.apps-int.gjensidige.io"; }
        if (currentUrl.substring(8,25) === "www.gjensidige.se") { rootUrl = "gjensidige-se-admin.apps-int.gjensidige.io"; }
        if (currentUrl.substring(8,25) === "www.gjensidige.dk") { rootUrl = "gjensidige-dk-admin.apps-int.gjensidige.io"; }
        if (currentUrl.substring(8,26) === "www.gjensidige.com") { rootUrl = "gjensidige-com-admin.apps-int.gjensidige.io"; }
        var targetUrl = "https://" + rootUrl + "/admin/tool/com.enonic.app.contentstudio/main/default/edit/";
        window.open(targetUrl + metaID)
    }
})();