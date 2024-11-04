javascript: (function () {
  var metaID = document.querySelector("meta[name=pageID]").content;
  if (metaID) {
    var currentUrl = window.location.href;
    var siteUrlMap = {
      "gjensidige-builders.testgjensidige": "builders",
      "gjensidige-no.testgjensidige": "no",
      "gjensidige-se.testgjensidige": "se",
      "gjensidige-dk.testgjensidige": "dk",
      "gjensidige-com.testgjensidige": "com",
      "www.gjensidige.builders": "builders",
      "www.gjensidige.no": "no",
      "www.gjensidige.se": "se",
      "www.gjensidige.dk": "dk",
      "www.gjensidige.co": "com",
    };
    var isTestServer = currentUrl.includes(".testgjensidige");
    var addAppsInt = !currentUrl.includes("www.gjensidige.builders");
    console.log(currentUrl);

    for (var key in siteUrlMap) {
      if (currentUrl.includes(key)) {
        siteUrl = siteUrlMap[key];
        break;
      }
    }

    var editUrl =
      "https://gjensidige-" +
      siteUrl +
      "-admin" +
      (addAppsInt ? ".apps-int" : "") +
      "." +
      (isTestServer ? "test" : "") +
      "gjensidige.io/admin/tool/com.enonic.app.contentstudio/main/default/edit/";
    console.log(editUrl);
    window.open(editUrl + metaID);
  }
})();

/*
    Reference: all our admin URLs:
    * https://gjensidige-builders-admin.gjensidige.io/admin
    * https://gjensidige-no-admin.apps-int.gjensidige.io/admin
    * https://gjensidige-se-admin.apps-int.gjensidige.io/admin
    * https://gjensidige-dk-admin.apps-int.gjensidige.io/admin
    * https://gjensidige-com-admin.apps-int.gjensidige.io/admin

    * https://gjensidige-builders-admin.apps-int.testgjensidige.io/admin
    * https://gjensidige-no-admin.apps-int.testgjensidige.io/admin
    * https://gjensidige-se-admin.apps-int.testgjensidige.io/admin
    * https://gjensidige-dk-admin.apps-int.testgjensidige.io/admin
    * https://gjensidige-com-admin.apps-int.testgjensidige.io/admin
*/

/*
 javascript:(function()%7Bvar%20metaID%20%3D%20document.querySelector('meta%5Bname%3DpageID%5D').content%3Bif%20(metaID)%20%7Bvar%20rootUrl%20%3D%20'gjensidige-builders-admin.gjensidige.io'%3Bvar%20currentUrl%20%3D%20window.location.href%3Bvar%20testServer%20%3D%20true%3Bif%20(currentUrl.substring(8%2C25)%20%3D%3D%3D%20'gjensidige-builde')%20%7B%20rootUrl%20%3D%20'builders'%3B%7Dif%20(currentUrl.substring(8%2C25)%20%3D%3D%3D%20'gjensidige-no.tes')%20%7B%20rootUrl%20%3D%20'no'%3B%7Dif%20(currentUrl.substring(8%2C25)%20%3D%3D%3D%20'gjensidige-se.tes')%20%7B%20rootUrl%20%3D%20'se'%3B%7Dif%20(currentUrl.substring(8%2C25)%20%3D%3D%3D%20'gjensidige-dk.tes')%20%7B%20rootUrl%20%3D%20'dk'%3B%7Dif%20(currentUrl.substring(8%2C25)%20%3D%3D%3D%20'gjensidige-com.te')%20%7B%20rootUrl%20%3D%20'com'%3B%7Dif%20(currentUrl.substring(8%2C25)%20%3D%3D%3D%20'www.gjensidige.no')%20%7B%20rootUrl%20%3D%20'no'%3BtestServer%20%3D%20false%3B%7Dif%20(currentUrl.substring(8%2C25)%20%3D%3D%3D%20'www.gjensidige.se')%20%7B%20rootUrl%20%3D%20'se'%3BtestServer%20%3D%20false%3B%7Dif%20(currentUrl.substring(8%2C25)%20%3D%3D%3D%20'www.gjensidige.dk')%20%7B%20rootUrl%20%3D%20'dk'%3BtestServer%20%3D%20false%3B%7Dif%20(currentUrl.substring(8%2C25)%20%3D%3D%3D%20'www.gjensidige.co')%20%7B%20rootUrl%20%3D%20'com'%3BtestServer%20%3D%20false%3B%7Dvar%20targetUrl%20%3D%20'https%3A%2F%2Fgjensidige-'%20%2B%20rootUrl%20%2B%20'-admin.apps-int.'%20%2B%20(testServer%20%3F%20'test'%20%3A%20'')%20%2B%20'gjensidige.io%2Fadmin%2Ftool%2Fcom.enonic.app.contentstudio%2Fmain%2Fdefault%2Fedit%2F'%3Bwindow.open(targetUrl%20%2B%20metaID)%3B%7D%7D)()%3B

 https%3A%2F%2Fgjensidige-builders-admin.apps-int.testgjensidige.io%2Fadmin%2Ftool%2Fcom.enonic.app.contentstudio%2Fmain%2F_%2Fidprovider%2Fazure-ad
*/
