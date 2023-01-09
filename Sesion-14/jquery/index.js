//$(document).ready{() => {}}

$(() => {
    
    $(".hide-btn").click(() => {
        $("h1").fadeout()
        
    })

    $(".show-btn").click(() => {
        $("h1").fadein()
    })
})