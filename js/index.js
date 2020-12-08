const thumbnails = $('.photo');
const searchbar = $('#search');
let currentImage;

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
      $(this).fadeIn();
    } else {
      $(this).fadeOut();
    }
  });
};

searchbar.on('keyup', searchHandler);

const imageLoader = (element) => {
  $('#modal').css('display', 'block');

  const path = $(element).children().first().attr('href');
  const alt = $(element).children().first().children().first().attr('alt');
  const caption = $(element).children().first().attr('data-title');
  const imageInput = `<img src="${path}" alt="${alt}" />`;
  $('#modal__image').html(imageInput);
  $('#modal__caption').html(caption);
};

thumbnails.click(function (e) {
  e.preventDefault();
  imageLoader(this);
  currentImage = $(this).index();
});

$('#close').click(function () {
  $('#modal').toggle();
});

$('#left_arrow').click(function () {
  if (currentImage > 0) {
    imageLoader(thumbnails[currentImage - 1]);
    currentImage--;
  }
  if (currentImage === 0) {
    $(this).css('color', 'rgb(30,30,30)');
  } else {
    $('.arrow').css('color', '#fff');
  }
});

$('#right_arrow').click(function () {
  if (currentImage < thumbnails.length - 1) {
    imageLoader(thumbnails[currentImage + 1]);
    currentImage++;
  }
  if (currentImage === thumbnails.length - 1) {
    $(this).css('color', 'rgb(30,30,30)');
  } else {
    $('.arrow').css('color', '#fff');
  }
});
