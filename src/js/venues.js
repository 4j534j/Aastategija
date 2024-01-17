console.log('venues.js loaded');
console.log($)
const buttons = [{ id: "1", location: "Tartu Vocational College<br>Kopli 1, Tartu, Estonia", img: "./img/kopli.png", url: "https://www.google.com/maps/place/Tartu+Rakenduslik+Kolled%C5%BE/@58.3496346,26.7116099,17z/data=!4m15!1m8!3m7!1s0x46eb3747db90ed05:0x387b666bb555e743!2sKopli+1,+50115+Tartu!3b1!8m2!3d58.3496318!4d26.7141848!16s%2Fg%2F11c2ddf665!3m5!1s0x46eb37487c7817f9:0x31f91313d1bbe0ee!8m2!3d58.3498339!4d26.7155093!16s%2Fg%2F1tgnks1t?entry=ttu"}, { id: "2", location: "Variku Sports Hall<br>Aianduse 4, Tartu, Estonia", img: "./img/Aianduse 4 1.png", url: "https://www.google.com/maps/place/Variku+Spordihoone/@58.3508031,26.7083267,15.62z/data=!4m10!1m2!2m1!1sVariku+Sports+Hall!3m6!1s0x46eb3777fd794641:0xeb095ca8e76cbb0f!8m2!3d58.3513551!4d26.7154575!15sChJWYXJpa3UgU3BvcnRzIEhhbGySAQtzcG9ydHNfY2x1YuABAA!16s%2Fg%2F11l2lm0x9l?entry=ttu"}, {id: "3", location: "Estonian National Museum<br>Muuseumi tee 2, Tartu, Estonia", img: "./img/Muuseumitee2 1.png", url: "https://www.google.com/maps/place/Muuseumi+tee+2,+60532+Tartu/@58.3953876,26.7419728,17z/data=!3m1!4b1!4m6!3m5!1s0x46eb36bfe0bb2f0f:0xf914b9b68ef7b41a!8m2!3d58.3953848!4d26.7445477!16s%2Fg%2F11fx0yc8tn?entry=ttu"}]

window.onload = function() {

    for (const button of buttons) {
        console.log(button)
        $(`#${button.id}`).on("click", function() {
            console.log(`#${button} clicked`);
            for (let i = 0; i < buttons.length; i++) {
                $("#" + buttons[i].id).removeClass("green");
                $("#" + buttons[i].id).addClass("black");
            }
            $(`#${button.id}`).removeClass("black");
            $(`#${button.id}`).addClass("green");
            $("#button_text").html(button.location);
            $("#map-image").attr("src", button.img);
            $("#map-url").attr("onclick", `window.location.href = '${button.url}';`);
        });
    }
}
