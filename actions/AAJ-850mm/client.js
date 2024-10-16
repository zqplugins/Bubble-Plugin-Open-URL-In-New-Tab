function(properties, context) {
    const { url, HTMLid, open_a_link } = properties;

    if (!url || !HTMLid) {
        window.alert("Remember to fill out the HTMLid field and destination URL in the workflow section");
        return;
    }

    const element = document.getElementById(HTMLid);
    if (!element) {
        window.alert(`We couldn't find a HTML element with id=${HTMLid} on your page.`);
        return;
    }

    let c = document.getElementById("onelink" + HTMLid)

    element.addEventListener("mousehover", function() {
        //тут проверка если <a> уже создана, то не создаём второй раз
        c || ($("#" + properties.HTMLid).wrap("<a id='onelink" + HTMLid + "' href='" + url + "' target='_blank'  style='display: contents;'>				</a>"),
             open_a_link ? element.click() : '' )
    }())

}