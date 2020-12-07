const thumbnails = $('.photo');
const searchbar = $('#search');

const searchHandler = () => {
  const text = searchbar.val().toLowerCase();

  thumbnails.each(function () {
    const alt = $(this)
      .children()
      .first()
      .children()
      .first()
      .attr('alt')
      .toLowerCase();
    if (alt.match(text)) {
      $(this).attr('style', 'opacity: 1');
    } else {
      $(this).attr('style', 'opacity: 0');
    }
  });
};

searchbar.on('keyup', searchHandler);

thumbnails.click(function (e) {
  e.preventDefault();
  $('.modal').toggle();

  const path = $(this).children().first().attr('href');
  const alt = $(this).children().first().children().first().attr('alt');
  const caption = $(this).children().first().attr('data-title');
  const input = `<img src="${path}" alt="${alt}" />
  <p>${caption}</p>`;
  $('#modal__image').html(input);
});

$('#close').click(function () {
  $('#modal').toggle();
});
