jQuery(function ($) {

    $('#name').change(function () {
        console.log('Имя: '+ $(this).val());
    });

    $('#surname').change(function () {
        console.log('Фамилия: '+ $(this).val());
    });

    $('#age').change(function () {
        console.log('Возраст: '+ $(this).val());
    });

    $('#Ua').change(function () {
        console.log(('Language ')+$("#Ua:checked").val()+ " is checked!");
    });

    $('#Ru').change(function () {
        console.log(('Language ')+$("#Ru:checked").val()+ " is checked!");
    });

    $('#Eng').change(function () {
        console.log(('Language ')+$("#Eng:checked").val()+ " is checked!");
    });

    $('#Other').change(function () {
        console.log($("#Other:checked").val()+ " Language is checked!");
    });

    $('#first-select').change(function () {
        console.log(('Пол: ')+$("select#first-select").val());
    });

    $('#second-select').change(function () {
        console.log(('Color: ')+$("select#second-select").val());
    });

    $('#radio').change(function () {
       console.log($('input:radio:checked').val())
    });

    $('#form').submit(function () {
        var name = $('#name').val(),
            surname = $('#surname').val(),
            age = $('#age').val(),
            firstSelect = $('#first-select').val(),
            secondSelect = $('#second-select').val(),
            radio = $('input:radio:checked').val(),
            lang = $('input:checkbox:checked').val();
        console.log('Имя: '+name, 'Фамилия: '+surname, 'Возраст: '+age,
                    'Language: '+lang, 'Пол: '+firstSelect, 'Color: '+secondSelect, 'radio: '+radio);
        return false;
    });

    $('#input-first').keyup(function () {
        $('#input-second').val($(this).val());
    });

    $('#cod').keypress(function(eventObject){
        alert('Вы ввели символ с клавиатуры. Его код равен ' + eventObject.which);
    });

    $("#bg").keydown(function(){
        $("#bg").css("background-color", "yellow");
    });
});