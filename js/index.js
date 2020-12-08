const thumbnails = $('.photo');
const searchbar = $('#search');
let currentImage;

/*************************
 Search
*************************/

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

/*************************
 Modal
*************************/

const imageLoader = () => {
  $('#modal').css('display', 'block');
  $('.modal__image').css('opacity', 0);
  $('.modal__image')[currentImage].style.opacity = 1;

  if (currentImage === 0) {
    $('#left_arrow').css('color', 'rgb(30,30,30)');
  } else if (currentImage === thumbnails.length - 1) {
    $('#right_arrow').css('color', 'rgb(30,30,30)');
  } else {
    $('.arrow').css('color', '#fff');
  }
};

thumbnails.click(function (e) {
  e.preventDefault();
  currentImage = $(this).index();
  imageLoader();
});

$('#close').click(function () {
  $('#modal').css('display', 'none');
  $('.arrow').css('color', '#fff');
});

function moveLeft() {
  if (currentImage > 0) {
    currentImage--;
    imageLoader();
  }
}

function moveRight() {
  if (currentImage < thumbnails.length - 1) {
    currentImage++;
    imageLoader();
  }
}

$('#left_arrow').click(moveLeft);
$('#right_arrow').click(moveRight);

$('html').keyup(function (e) {
  // left key code = 37
  if (e.which === 37) {
    moveLeft();
  }
  // right key code = 39
  if (e.which === 39) {
    moveRight();
  }
});
