# Programmer's Guide
* Defined in markup
* Keyboard functionality
* Focus behavior
* Presentation
* Bypass content
* Error recovery
* Timing

## TO-DO LIST
* Annotate code snippet vs. illustration needed (all)
* Finalize writing descriptions (all)
* Verify WCAG numbers (all)
* Edit quotes to focus more on tech problem than person

***

## Defined in markup

### P1. Make info, structure, & relationships defined in markup
> Where are all the titles? You're telling me that my screen reader has to read through all this?

Separate structure from style. Use semantic elements (h1, h2, p, a, blockquote) to convey structure instead of relying only on visual style so that assistive tech can understand hierarchy.

**Disabilities**: visual
**WCAG number + conformance**: 1.3.1 A

##### HMTL
```html
<header>
	<nav class=”main-nav” aria-labelledby=”main-nav-label”>
		<h2 class = “visually-hidden” id=””main-nav-label>Main Navigation</h2>
		<ul>
			<li><a href=”why-a11y.html”>Why Accessibility?</a></li>
			<li><a href=”disability-advocacy.html”>Disability Advocacy</a></li>
			<li><a href=”ada.html”>The ADA</a></li>
		</ul>
</nav>
<nav class =”utility-nav” aria-labelledby=”utility-nav-label”>
		<h2 class = “visually-hidden” id=”utility-nav-label”>Secondary Navigation</h2>
		<ul>
			<li><a href=”about.html”>About</a></li>
			<li><a href=”faq.html”>FAQ</a></li>
			<li><a href=”contact.html”>Contact</a></li>
		</ul>
</nav>
</header>

<main>
	<article>
		<h1>Why Accessibility?</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam sapien, sollicitudin a mauris eget, ornare semper eros. Donec in velit sit amet est porta condimentum.</p>
		<p>Phasellus elit orci, feugiat eu pellentesque sit amet, dignissim id diam. Donec vitae lectus ipsum. Proin dui quam, pharetra quis vulputate sit amet, cursus id ante.</p>
	</article>
	<aside>
		<h2>User Impact</h2>
		<p>Aenean dignissim mauris nec enim cursus posuere. Sed porta ante nulla, et ornare tellus efficitur et. Proin molestie nisi massa. Nam maximus nec nisi non dictum.</p>
	</aside>
</main>
<footer>© Accessibility Is Awesome 2019</footer>
```

### P2. Make an intuitive sequence defined in markup
> [write user quote]

Order focusable elements in a logical and intuitive way for screen reader and keyboard interface users. Make sure that the visual order matches the DOM order (document object model).

**Disabilities**: visual
**WCAG number + conformance**: 1.3.2 A

#### Good example: Order of elements makes logical and hierarchical sense.

##### HMTL

```html
<h1>Search Results</h1>
<button>filter search results</button>
<button>sort search results</button>
<ul class=”search-results”>
	<li>
		<a href=”burrito.html”>
			<img src=”burrito.jpg” alt=”burrito”>
			<h2>Burrito</h2>
		</a>
	</li>
	<li>
		<a href=”nachos.html”>
			<img src=”nachos.jpg” alt=”nachos”>
			<h2>Nachos</h2>
		</a>
	</li>
	<li>
		<a href=”tacos.html”>
			<img src=”tacos.jpg” alt=”tacos”>
			<h2>Tacos</h2>
		</a>
	</li>
</ul>
```

#### Bad example: The filter button is placed last in the DOM. 
Screen readers will find the filter button only after having gone through all of the search results. 

##### HMTL
```html
<button>sort search results</button>
<h1>Search Results</h1>
<ul class=”search-results”>
	<li>
		<a href=”burrito.html”>
			<img src=”burrito.jpg” alt=”burrito”>
			<h2>Burrito</h2>
		</a>
	</li>
	<li>
		<a href=”nachos.html”>
			<img src=”nachos.jpg” alt=”nachos”>
			<h2>Nachos</h2>
		</a>
	</li>
	<li>
		<a href=”tacos.html”>
			<img src=”tacos.jpg” alt=”tacos”>
			<h2>Tacos</h2>
		</a>
	</li>
</ul>
<button>filter search results</button>
```

### P3. Make the human language defined in markup.
> What's going on, my screen reader is saying everything wrong. Oh, some words are in Hungarian.

Define the default human language on each page. To be more advanced, define the language of individual passages or phrases.

**Disabilities**: cognitive, visual
**WCAG number + conformance**: 3.1.1 A, 3.1.2 AA

#### English language applied to all markup

##### HMTL
```html
<html lang="en">
…
</html>
```

#### Hungarian language applied to a single word

##### HMTL
```html
<p>Hungarians refer to themselves as <span lang="hu">magyarok</span>.</p>
```

### P4. Make the purpose of UI components defined in markup
> I can't sign up for soccer because this form won't tell me what it wants from me.

Identify the purpose of all UI components and label all input fields (text inputs, radio buttons, checkboxes, and selection menus). The exceptions are buttons and hidden inputs.

**Disabilities**: cognitive, visual
**WCAG number + conformance**: 1.3.5 A, 1.3.6 AAA

#### Good example: Text input has a label

##### HMTL
```html
<label for=”dogsname”>What is your dog’s name?</label>
<input type=”text” id=”dogsname” name=”dogsname”>
```

#### Bad example: Text input has a placeholder attribute, but not a label

##### HMTL
```html
<input type=”text” name=”dogsname” placeholder=”What is your dog’s name?”>
```

### P5. Make the name, role, & value of all UI components defined in markup
>  Is this menu open or closed? I have no idea, my screen reader can't tell me.

Identify the name, role, and value of custom UI components and notify users of any changes.

**Disabilities**: visual
**WCAG number + conformance**: 4.1.2 A

##### HMTL

```html
<div id="accordionGroup" class="Accordion">
  <h3>
    <button aria-expanded="true"
      class="Accordion-trigger"
      aria-controls="sect1"
      id="accordion1id">
     	<span class="Accordion-title">
      	Universal Design
        <span class="Accordion-icon"></span>
      </span>
    </button>
  </h3>
  <div id="sect1"
    role="region"
    aria-labelledby="accordion1id"
    class="Accordion-panel">
	  <div>
	    <p>Universal design is. . . </p>
	  </div>
 	</div>
  <h3>
    <button aria-expanded="false"
    	class="Accordion-trigger"
    	aria-controls="sect2"
      id="accordion2id">
    	<span class="Accordion-title">
      	Inclusive Design
      	<span class="Accordion-icon"></span>
    	</span>
   	</button>
  </h3>
  <div id="sect2"
    role="region"
    aria-labelledby="accordion2id"
    class="Accordion-panel"
    hidden="">
   <div>
    <p>Inclusive design is. . .</p>
   </div>
  </div>
  <h3>
    <button aria-expanded="false"
    	class="Accordion-trigger"
      aria-controls="sect3"
      id="accordion3id">
      <span class="Accordion-title">
        Accessibility
       	<span class="Accordion-icon"></span>
      </span>
    </button>
  </h3>
  <div id="sect3"
  	role="region"
    aria-labelledby="accordion3id"
    class="Accordion-panel"
    hidden="">
    <div>
      <p>Accessibiliyt is. . .</p>
    </div>
  </div>
</div>
```
Source: [w3c](https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html)

### P6. Make status messages defined in markup
> Did I just get a notification? My screen reader didn't get it.

Use the attribute 

```html
tabindex="-1"
```

to make status messages programmatically focusable so that screen reader uses can tab to them.

**Disabilities**: visual
**WCAG number + conformance**: 4.1.3 AA

##### HMTL
```html
<div class=”error” tabindex=”-1” aria-labelledby=”error-title”>
	<h1 id=”error-title”>Something went wrong!</h1>
	<ul>
		<li><a href=”#password”>Your password must contain an uppercase letter, a number, a haiku, a hieroglyph, and the blood of a virgin.</a></li>
	</ul>
</div>
```

### P7. Make sure that assistive tech can parse content
> This code is messy. My screen reader can barely get through it.

Ensure that, with markup languages, elements have complete start and end tags, they are nested according to their specifications, they don’t contain duplicate attributes, and any IDs are unique.

Tips: Using a text editor with customizable settings to highlight markup makes it easy to write semantic code. Install an html linter to call out syntax issues. And don't forget to build in time for internal review and QA so you can catch errors before they impact users.

**Disabilities**: visual
**WCAG number + conformance**: 4.1.1 A

Needs illustration

***

## Keyboard functionality

### P8. Make all functionality available through the keyboard
> I love using my keyboard; computer mice were not made for these hands.

Ensure that users can complete all tasks using a keyboard interface without requiring specific timing for keystrokes.

**Disabilities**: physical
**WCAG number + conformance**: 2.1.1 A, 2.1.3 AAA

Needs illustration

### P9. Make sure there are no keyboard traps
> Help, I'm trapped inside this date picker and I can't get out.

If the user can focus on a component using a keyboard interface, ensure they can move the focus away by only using a keyboard interface. Provide help if needed.

**Disabilities**: physical
**WCAG number + conformance**: 2.1.2 A

Needs illustration

### P10. Provide a way to turn off character key shortcuts
> I was trying to type, then I set of all these keyboard shortcuts without realizing.

If a keyboard shortcut uses only letter, punctuation, number, or symbol characters, then ensure that it is possible to turn it off, remap it, or only sometimes active (depending on focus).

**Disabilities**: physical
**WCAG number + conformance**: 2.1.4 A

Needs illustration

### P11. Make multiple types of input available
> Depending on how my hands are feeling, sometimes I prefer talking and sometimes I prefer using the keyboard.

Ensure that people can use multiple different types of input mechanisms, such as keyboard interfaces, speech input, and pointer devices like a computer mouse, stylus, or touch screen.

**Disabilities**: cognitive, physical, visual
**WCAG number + conformance**: 2.5.6 AAA

***

## Focus behavior

### P12. Preserve focus order
> I tabbed from the header straight to the footer and skipped everything else. Makes no sense at all.

If the navigation sequence affects its meaning, ensure that users focus on components in an order that preserves that meaning.

**Disabilities**: cognitive, physical, visual
**WCAG number + conformance**: 2.4.3 A

#### Content appears in order of relevance in the DOM
The article element contains the primary content, and the aside contains supplementary content. In the DOM, the article appears first, followed by the aside. This allows the user to tab through the content in a logical order. CSS is used to position the aside to the left of the article.

##### HMTL
```html
<main class="site-wrapper">
  <article>
    <h1>What is accessibility?</h1>
    <p>Accessibility is the practice of creating products, 
experiences, and environments that meet the needs of individuals with disabilities. It encompasses:</p>
    <h2>Phyiscal Disabilities</h2>
    <ul>
      <li>low vision</li>
      <li>blindness</li>
      <li>deafness</li>
    </ul>
    <h2>Cognitive Disabilities</h2>
    <ul>
      <li>short attention span</li>
      <li>vertigo</li>
      <li>dyslexia</li>
    </ul>
    <h2>Situational or Temporary Disabilities</h2>
    <ul>
      <li>having broken arm</li>
      <li>being in a loud space</li>
      <li>having a poor internet connection</li>
    </ul>
  </article>
  <aside>
    <h2>Follow-up Questions</h2>
    <p>Now that you've learned why accessibility is important, what are some ways you can start to put it to practice in your life?</p>
  </aside>
</main>
```

##### CSS
```css
.site-wrapper {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: auto;
  grid-template-areas:
    "rail body";
}

article {
  grid-area: body;
}

aside {
  grid-area: rail;
}
```

[focus order example on codepen](https://codepen.io/michellanneli/pen/WVaOVJ)

### P13. Use hover and focus best practices
> Whenever I move my mouse over the menu it disappears. This is unusable!

Avoid making content appear and disappear on focus/hover, since this is disorienting. If hover/focus does hide or show content, ensure that it's dismissible, hoverable, and persistent.

**Disabilities**: cognitive, physical, visual
**WCAG number + conformance**: 1.4.13 AA

#### When the user hovers over the button, content appears below, and the user can mouse over the content.

##### HMTL
```html
<div class="dropdown">
  <button class="dropdown__button">Dropdown</button>
  <div class="dropdown__content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
```

##### CSS
```css
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown__content {
  display: none;
  position: absolute;
  z-index: 1;
}

.dropdown__content a {
   display: block;
}

.dropdown:hover .dropdown__content {
 display: block;
}
```

[hover behavior example on codepen](https://codepen.io/michellanneli/pen/rXqzox)

### P14. Ensure that focus does not change context
> I'm just trying to figure out the navigation, suddenly new pages are popping up.

Ensure that focus on a component does not trigger unexpected changes, such as launching a new window or changing focus to another component.

**Disabilities**: cognitive, physical, visual
**WCAG number + conformance**: 3.2.1 A

Needs illustration

### P15. Ensure that focus indicator is visible
> The focus indicator just disappeared. So where am I exactly?

Ensure that the keyboard focus indicator is visible so that users can visually see what component they are focusing on.

**Disabilities**: cognitive, physical
**WCAG number + conformance**: 2.4.7 AA

Needs illustration

***

## Presentation

### P16. Label user input fields
> I can't fill out your survey, my screen reader is just showing me a bunch of text fields.

Provide a label or instructions for user input fields so that users know what type of data to input.

**Disabilities**: cognitive, visual
**WCAG number + conformance**: 3.3.2 A

##### HMTL
```html
<label for="hamilton">Please select your favorite song from the musical Hamilton.</label>
<select id="hamilton" name="hamilton">
  <option label="All Hamilton Songs" disabled selected>All Hamilton Songs</option>
  <option label="Alexander Hamilton">Alexander Hamilton</option>
  <option label="Aaron Burr, Sir">Aaron Burr, Sir</option>
  <option label="My Shot">My Shot</option>
  <option label="The Story of Tonight">The Story of Tonight</option>
  <option label="The Schuyler Sisters">The Schuyler Sisters</option>
</select>
```

### P17. Include the label in the name
> My screen reader's asking me for my twitter but this field says "general social media," so which is it?

Ensure the programmatic label matches visual text label of an input field. Users have a better experience if the two match, especially if they use both sight and screen readers to navigate the app.

**Disabilities**: visual
**WCAG number + conformance**: 2.5.3 A

#### Search input uses visually hidden label that matches the placeholder text.

##### HMTL
```html
<div role="search">
  <label for="search" class="visually-hidden">Search</label>
  <input type="search" name="search" id="search" placeholder="search" />
  <button type="submit"><span class="visually-hidden">Perform Search</span><img src="magnifying-glass.svg" alt="#"/></button>
</div>
```

Source: [a11y Style Guide](https://a11y-style-guide.com/style-guide/section-forms.html#kssref-forms-search)

### P18. Use text instead of images of text
> There was a 50% off banner? Oh it's an image, my screen reader can't read that.

Convey information through text in markup instead of images of text so that screen reader users can access it.

**Disabilities**: visual
**WCAG number + conformance**: 1.4.5 AA, 1.4.9 AAA

####Bad example: image of text
```html
  <img src="hello-world.png">
```

####Good example: text
```html
  <h1>Hello world!</h1>
```

```css
@import url('https://fonts.googleapis.com/css?family=Lemon&display=swap');

h1 {
  font-family: 'Lemon', cursive;
  font-size: 5em;
  color: #ecb7d3;
  text-shadow: 6px 4px #f25717;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #f25717;
}
```

[text example on codepen](https://codepen.io/michellanneli/pen/rNBzKoE)

####Markup for Logos
##### Using the alt attribute for an image element
```html
<a href="index.html"><img src="logo.png" alt="Access Guide"></a>
```

##### Using aria role attribute and the the title attribute for an svg
```html
<a href="index.html">
  <svg role="img" aria-labelledby="title">
    <title id="title">Access Guide</title>
    . . . 
  </svg>
</a>
```

Source for svg application: [Deque](https://www.deque.com/blog/creating-accessible-svgs/)

### P19. Provide a way to resize text up to 200%
> Why is this text so tiny? I can barely read it.

Provide a mechanism for users to resize text up to 200%. Examples: zoom in/out controls, buttons that specify a preferred text size.

**Disabilities**: visual
**WCAG number + conformance**: 1.4.4 AA

### P20. Use text presentation best practices
> I need really large, white on black text in order to read it.

For large blocks of text:
* Provide a way to select foreground and background colors
* Set max width to 80 characters
* Align the text, don’t justify
* Provide a way to resize text up to 200% without assistive tech

**Disabilities**: visual
**WCAG number + conformance**: 1.4.8 AAA

### P21. Use responsive layouts
> I don't think this website was built for phones, every time I try to scroll it just moves around.

Ensure the content is responsive and fits within the viewport. If the user resizes the viewport, make sure that this doesn’t hide content or cause scrolling in two directions.

#### CSS for a container that is constrained to the full width of the viewport
```css
.container {
  max-width: 100%;
}
```
```css
.container {
  max-width: 100vw;
}
```

#### CSS for a container with decorative elements that will extend beyond the viewport
```css
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}
```

**Disabilities**: physical, visual
**WCAG number + conformance**: 1.4.10 AA

### P22. Don’t restrict the layout to portrait or landscape
> I mounted my phone to my wheelchair in portrait to make it easier to use. Landscape-only pages mess with my setup.

Don’t restrict content to a single display orientation, like portrait or landscape, unless a specific display orientation is essential.

**Disabilities**: physical
**WCAG number + conformance**: 1.3.4 AA

***

## Bypass content

### P23. Provide a way to pause audio that plays automatically
> Whenever I hear an ad playing, I can’t hear my screen reader at all.

If any audio plays automatically for more than 3 seconds, provide a way to pause or stop the audio, or a way to control that audio volume independent from the overall system volume.

**Disabilities**: visual
**WCAG number + conformance**: 1.4.2 A

### P24. Provide a way to bypass repeating content
> I just want to skip to the good stuff, my screen reader doesn't need to go through the nav every time.

Provide a way to bypass blocks of content that are repeated on multiple web pages. For example, a link at the top of the page that jumps to the main story.

**Disabilities**: physical, visual
**WCAG number + conformance**: 2.4.1 A

#### HTML skip link
```html
<a href="#main" class="visible-on-focus">Skip to main</a>
```

#### CSS for skip link
```css
.visible-on-focus {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.visible-on-focus:active,
.visible-on-focus:focus {
  position: relative;
  width: auto;
  height: auto;
  left: auto;
}
```

Source: [WebAIM](https://webaim.org/techniques/css/invisiblecontent/)

### P25. Provide a way to disable animation triggered by interaction
> Every time I click "next" the slides bounce around everywhere and it's making me dizzy.

Provide a way to disable motion animation triggered by interaction, like parallax scrolling or page-flipping animations, unless the animation is essential to the functionality or information.

**Disabilities**: cognitive, physical, visual
**WCAG number + conformance**: 2.3.3 AAA

### P26. Provide a way to get rid of moving content
> I can't focus, the animation in the background keeps distracting me.

For moving, blinking, or scrolling content that starts automatically, lasts more than 5 seconds, and is presented with other content, provide a way for people to pause, stop, or hide it (unless it's essential).

**Disabilities**: cognitive, visual
**WCAG number + conformance**: 2.2.2 A

***

## Error recovery

### P27. Prevent accidental pointer input
> Noo! I did not mean to hit the like button.

Make sure at least one of the following is true when operating a single pointer:
* The down-event doesn’t execute the function\*
* The up-event executes the function, and undo is available after completion
* The up-event reverses any outcome of the preceding down-event

\*There may be cases in which there is no other option but for the down-event to execute the function. 

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 2.5.2 A

#### Good Example: Up event triggers deletion of photos, with option to recover

##### HMTL
```html
<button onmouseup="mouseUp()">
  Delete All Your Photos
</button>

<p class="up-event-delete-message">All your photos have been deleted! <button>Recover Photos</button></p>
```

##### CSS
```css
.up-event-delete-message {
  display: none;
}

```

##### Javascript
```javascript
function mouseUp() {
  var x = document.getElementsByClassName("up-event-delete-message")[0];
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
```

#### Bad Example: Down event triggers deletion of photos, with no option to recover

##### HMTL
```html
<button onmousedown="mouseDown()">
  Delete All Your Photos
</button>

<p class="down-event-delete-message">All your photos were deleted! Hope it wasn't an accident!</p>
```

##### CSS
```css
.down-event-delete-message {
  display: none;
}

```

##### Javascript
```javascript
function mouseDown() {
  var x = document.getElementsByClassName("down-event-delete-message")[0];
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
```

[pointer example on codepen](https://codepen.io/michellanneli/pen/xvyXGL)

### P28. Prevent errors when handling legal and financial data
> If I make mistakes on my direct deposit form, I won't be able to get my paycheck.

Prevent errors by providing at least one of these:
* Submissions are reversible
* Check data for errors and give users the opportunity to correct them
* Provide a way to review and confirm information before submitting
* This is required when handling legal or financial information.

**Disabilities**: intellectual, physical
**WCAG number + conformance**: 3.3.4 AA, 3.3.6 AAA

***

## Timing

### P29. Warn users about timeouts
> Wait, no one told me there was a 10 minute timeout. I was on the phone!

If inactivity in the user session leads to a timeout and causes data loss, warn users about this through a notification.

**Disabilities**: hearing, intellectual, physical, visual
**WCAG number + conformance**: 2.2.6 AAA

### P30. Allow users to re-authenticate without losing data
> Damn, I got distracted and now I have to log in again. I hope my shopping cart still has all my stuff.

When an authenticated session expires, allow users to re-authenticate by providing a login and restoring the same information and user’s stage in the process.

**Disabilities**: hearing, intellectual, physical, visual
**WCAG number + conformance**: 2.2.5 AAA
