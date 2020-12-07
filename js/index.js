const thumbnails = $('.photo');
const searchbar = $('#search');

const searchHandler = () => {
  const text = searchbar.val().toLowerCase();
  // take list of photos
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
