$(function () {

//Laat de opties zien als degoede drop down gezelecteerd is
    $('#options').change(function () {
        $('.vraag').hide();
        $('#' + $(this).val()).show();
    });
//

// Als op de verzend knop is gedrukt doe dit
    $("#submit").on("click", function () {
//Vallisatie velden
        $("#naam").attr("required", "required");
        $("#letter").attr("required", "required");
        $("#achternaam").attr("required", "required");
        $("#man").attr("required", "required");
        $("#vrouw").attr("required", "required");
        $("#options").attr("required", "required");

//Als de checkbox niet geselecteerd is mag je het document niet verzenden
        // het dagelijkse id div is niet zichtbaar dus kan hij dit ook niet uitvoeren.
        var checked = $('input[name="CHECKBOX"]:checked').length;
        if ($('#dagenlijks').is(":visible")) {
            if (!checked) {
                $('.box1').show();
                return false;
            }
        }
        ;


    });


});