function createNewTask(title, description) {
    return `
        <div class="new-deal">
            <div class="new-deal-title">
                <span>${title}</span>
                <img src="icons/red-cross.bmp" alt="" class="img_red_cross">
                <img src="icons/cursor-list.bmp" alt="" class="img_cursor_list">
            </div> 
            <div class="new-deal-descript">
                <span id="new-task-tips">${description}</span>
            </div>
        </div>`
};

$(function () {
    const element1 = document.getElementById('area-name');
    const element2 = document.getElementById('area-descript');


    $('#deal-create').click(function () {
        if (element1.value) {
            $('#deals-comment').remove();
            const newTask = createNewTask(element1.value, element2.value);
            $('.column-left').append(newTask);
            $('textarea').val('');
        } else {
            return false;
        }
    });

    $('.column-left').on('click', '.img_red_cross', function () {
        $(this).parents('.new-deal').fadeOut(100);
        console.log('Bye!');
    });

    $('.column-left').on('click', '.img_cursor_list', function () {
        var descriptBlock = $(this).parent().siblings('.new-deal-descript');
        descriptBlock.toggleClass('hideBlock');
        $(this).toggleClass('rotate');
        console.log('Hello!');
    });

    $('textarea').on('focus', function () {
        $(this).css('background-color', 'pink');
    })

    $('textarea').on('blur', function () {
        $(this).css('background-color', '#fcfcfc');
    })

});


