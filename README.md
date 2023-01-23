# Photo Gallery with Search & Lightbox

## Project Overview

An interactive photo gallery using JavaScript and jQuery. When the user clicks on a thumbnail the photo will display in a lightbox. There should be a back and previous buttons to cycle through photos.

## Screenshots

<img width="300px" src="https://user-images.githubusercontent.com/19231569/214116476-026b9053-109b-462a-b904-8d35ff6f1395.png"> <img width="300px" src="https://user-images.githubusercontent.com/19231569/214116657-3311ee54-bf9a-40be-9e78-65b96388c04c.png"> <img width="300px" src="https://user-images.githubusercontent.com/19231569/214116669-338879dd-d850-4236-8960-3b7348f89533.png">

## Client Instructions

1. Create a web page using HTML and CSS. The page should have a title, a search box, and a place where a photo gallery will be placed.

2. Add the provided images to the gallery using the design in the gallery_mockup.png file.

3. Find a jQuery plugin for creating a photo gallery or write your own script.

   - The gallery must include the ability to click on photos and view them in a lightbox (see the photo_lightbox.png file for the design).

4. Add text captions to the images when viewed in the lightbox.

   - See the photo_lightbox.png file for the design.

5. Add back and forward buttons when the lightbox is visible to switch between photos.

6. Implement the search box at the top of the page that filters photos based on the captions.

   - The photos should filter in real-time as you type.
   - This could be a jQuery plugin that you find on the web, or code that you write yourself.

7. Make sure to check your code is valid by running it through an HTML and CSS validator.

   - Links to the validators can be found in the Project Resources. This will help you spot any errors that might be in your code.
   - There are a few exceptions that you don’t need to fix:
     - Don’t worry about any warnings, we just need you to check any errors that might be there.
     - If CSS validator flags use of calc, vendor prefixes or pseudo-elements/pseudo-classes these errors should be ignored.
     - If HTML validator flags use of pipe (‘|’) in Google font links/URLs this error can also be ignored.

8. You should also check for issues with your JavaScript code using JSHint, linked in the Project Resources.
   - JSHint may show you some warnings, so make sure to check through those for any potential problems.
   - You do not need to fix every warning listed but reviewing them can be useful.

## Extra Features

1. Include a responsive design.

   - Make sure that the photos and layout adjusts for mobile-friendly experience.

2. Keyboard navigation for browsing photos.

3. Support for additional media types like YouTube videos.

4. Write your own JavaScript or jQuery code instead of using a jQuery plugin.

5. Add animation effects when filtering the gallery of photos.

# Notes from the build

Tested on Firefox 84.0b8, Chrome 87 and Safari 14.01 with no notable issues.

## Principles

I returned to this project after some years had passed. Tools like Flexbox, Grid and ES6 JS Syntax are more widely used now. However, the project was built initially without these. Instead it used jQuery and plugins. When I opened it the plugins were now broken but the basic markup and styling was still there. I decided that as I now start new projects with these newer technologies, I would place a restriction on this one to rebuild it without using them. This gave me a chance to see if I could 'fix' legacy code.

## Key issues and chosen solutions

- As the plugins were broken and did not seem to allow enough customisation to meet the modal design brief, I removed them.

- I added Media Queries for the thumbnails so that a right margin was added or removed on the correct one to keep the page aligned. When I came to add the search facility, elements disappear, I realised I couldn't select the rightmost elements with just CSS (even if they were set to 'display: none') as they were still present in the DOM. Media Queries now have calculations based on the width of the screen with slight adjustments for a 60px margin.

- On the modal page, initial code only created elements to show if they were called upon. This had the adverse effect that the arrow elements would 'flash' to the top of the page as the image element would be absent for a hundredth of a second. I placed all items in the DOM and hid them with opacity for smoother transitions.

- On the modal set up elements are now only hidden with opacity. When adding a YouTube iframe, you couldn't access the controls as the other elements were above it, just invisible. To keep the smooth transitions, the CSS property 'pointer-events' was used.

- The search function selects thumbnails to remove and a connection was needed to bind that result with the images to show in the modal view. Initial thoughts were to create an array of objects containing the details (present in the source folder) and filter what should be rendered to the page. This presented two problems: ES6 import modules were not available under my own brief and I was reluctant to add such a large document together in one JS file, the second is that the thought process was going to use ES6 filter method which again I was looking to avoid.
