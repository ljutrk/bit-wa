const createPostDiv = (post) => {
    const $row = $('<div>').addClass('row');
    $('.container').append($row);
    const $col12 = $('<div>').addClass('col s12');
    $row.append($col12);
    const $card1 = $('<div>').addClass('card blue-grey darken-1');
    $col12.append($card1);
    const $card2 = $('<div>').addClass('card-content white-text');
    $card1.append($card2);
    const $span = $('<span>').addClass('card-title').text(post.title);
    $card2.append($span);
    const $p = $('<p>').text(post.intro);
    $span.append($p);

}


export{
    createPostDiv
}
