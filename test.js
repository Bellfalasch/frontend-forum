javascript:(function() {
    var metaID = document.querySelector('meta[name="pageID"]').content;
    if (metaID) { 
        var rootUrl = "gjensidige-builders-admin.gjensidige.io";
        var currentUrl = window.location.href;
        var testServer = true;
        if (currentUrl.substring(8,25) === "gjensidige-builde") { rootUrl = "builders"; }
        if (currentUrl.substring(8,25) === "gjensidige-no.tes") { rootUrl = "no"; }
        if (currentUrl.substring(8,25) === "gjensidige-se.tes") { rootUrl = "se"; }
        if (currentUrl.substring(8,25) === "gjensidige-dk.tes") { rootUrl = "dk"; }
        if (currentUrl.substring(8,25) === "gjensidige-com.te") { rootUrl = "com"; }
        if (currentUrl.substring(8,25) === "www.gjensidige.no") { rootUrl = "no"; testServer = false; }
        if (currentUrl.substring(8,25) === "www.gjensidige.se") { rootUrl = "se"; testServer = false; }
        if (currentUrl.substring(8,25) === "www.gjensidige.dk") { rootUrl = "dk"; testServer = false; }
        if (currentUrl.substring(8,25) === "www.gjensidige.co") { rootUrl = "com"; testServer = false; }
        var targetUrl = "https://gjensidige-" + rootUrl + "-admin.apps-int." + testServer ? "test" : "" + "gjensidige.io/admin/tool/com.enonic.app.contentstudio/main/default/edit/";
        window.open(targetUrl + metaID)
    }
})();