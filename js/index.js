const thumbnails = $('.photo');
const searchbar = $('#search');
let visibleArrayIndices = [];
let currentIndex;

/*************************
 Helper
*************************/

function randomTime() {
  // e.g. 0.000 to 0.999 * 4 gives possible 0 to 3
  // shift the resulting range up by 2
  // to give a range of 2 to 5 inclusive
  return 100 * Math.floor(Math.random() * (7 - 3 + 1) + 3);
}

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
      $(this).fadeIn(randomTime());
    } else {
      $(this).fadeOut(randomTime());
    }
  });
};

// fadeIn & fadeOut create animation

searchbar.on('keyup', searchHandler);

/*************************
 Modal
*************************/

function loadModal(currentImage) {
  // array of thumbnails that are NOT 'display:none'
  $('.photo')
    .not('.photo:hidden')
    .each(function () {
      let index = $('.photo').index($(this));
      visibleArrayIndices.push(index);
    });

  currentIndex = visibleArrayIndices.indexOf(currentImage);
  $('#modal').css('display', 'block');
  imageLoader();
}

function imageLoader() {
  $('.modal__image').css('opacity', 0).css('pointer-events', 'none');
  arrowStyling();
  let imageIndexToShow = visibleArrayIndices[currentIndex];
  $('.modal__image')[imageIndexToShow].style.opacity = 1;
  $('.modal__image')[imageIndexToShow].style.pointerEvents = 'all';
}

function arrowStyling() {
  // Arrow conditional styling
  if (currentIndex === 0) {
    $('#left_arrow').css('color', 'rgb(30,30,30)');
  } else if (currentIndex === visibleArrayIndices.length - 1) {
    $('#right_arrow').css('color', 'rgb(30,30,30)');
  } else {
    $('.arrow').css('color', '#fff');
  }
}

// thumnail click listener
// send index from full list
// and load images
thumbnails.click(function (e) {
  e.preventDefault();
  let currentImage = $(this).index();
  loadModal(currentImage);
});

// Close button and reset
$('#close').click(function () {
  $('#modal').css('display', 'none');
  $('.arrow').css('color', '#fff');
  visibleArrayIndices = [];
});

function moveLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    imageLoader();
  }
}

function moveRight() {
  if (currentIndex < visibleArrayIndices.length - 1) {
    currentIndex++;
    imageLoader();
  }
}

// Modal gallery listeners
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
