console.log('venues.js loaded');
console.log($)
const buttons = [{ id: "1", location: "Tartu Vocational College<br>Kopli 1, Tartu, Estonia", img: "./img/kopli.png", url: "https://google.com/sus"}, { id: "2", location: "Variku Sports Hall<br>Aianduse 4, Tartu, Estonia", img: "./img/Aianduse 4 1.png", url: "map-url"}, {id: "3", location: "Estonian National Museum<br>Muuseumi tee 2, Tartu, Estonia", img: "./img/Muuseumitee2 1.png", url: "map-url"}]

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
            $("#map-url").attr("href", button.url);
        });
    }
}
