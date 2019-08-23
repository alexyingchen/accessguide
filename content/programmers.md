# Programmer's Guide
* Defined in markup
* Keyboard functionality
* Focus behavior
* Labels
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

**Disabilities**: physical, visual
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
> My screen reader went from the primary navigation straight to the footer and then the secondary navigation. Makes no sense at all.

Separate structure from style and write the content in a way that is logical and intuitive. Make sure that the visual order matches the DOM order (document object model).

**Disabilities**: physical, visual
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
> I like to read articles in both English and Portuguese, but if the language isn't defined then my screen reader can't do anything.

Ensure the default human language of each web page is programmatically determined. To be more advanced, ensure the language of each passage or phrase in the content is programmatically determined except for proper names, technical terms, vernacular language, or words of indeterminate language.

**Disabilities**: intellectual, physical, visual
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

Make the purpose of all UI components, icons, and regions programmatically determined. Provide each input field with a label (text inputs, radio buttons, checkboxes, and selection menus). The exceptions are buttons (since they are self-labeling) and hidden inputs (since they are unavailable).

**Disabilities**: intellectual, physical, visual
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

### P5. Make the name, role, and value of all UI components defined in markup
>  I need to use my screen reader to control my apps, so it needs to understand the state of all my settings so that I can change them if needed.

When creating custom interface components - including form elements, links, and components generated by scripts - that don't use standard markup, the name, role, and value must be programmatically determined. Notify users of any changes made to these items.

**Disabilities**: physical, visual
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

After the user submits information, provide text that has an error, warning, or success message that can be read by a screen reader. Using the attribute

```html
tabindex="-1"
```

makes status message programmatically focusable so that users can tab to it.

**Disabilities**: physical, visual
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
> Yep, this code is messy.

Ensure that, with markup languages, elements have complete start and end tags, they are nested according to their specifications, they don’t contain duplicate attributes, and any IDs are unique.

Tips: Using a text editor with customizable settings to highlight markup makes it easy to write semantic code. Install an html linter to call out syntax issues. And don't forget to build in time for internal review and QA so you can catch errors before they impact users.

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 4.1.1 A

Needs illustration

***

## Keyboard functionality

### P8. Make all functionality available through the keyboard
> I love using my keyboard; computer mice were not made for these hands.

Ensure all the functionality is operable through a keyboard interface without requiring specific timing for keystrokes (except where input is defined by the user’s movement and not just the endpoints). To be more advanced, there are no exceptions.

**Disabilities**: physical, visual
**WCAG number + conformance**: 2.1.1 A, 2.1.3 AAA

Needs illustration

### P9. Make sure there are no keyboard traps
> Help, I'm trapped inside this date picker and I can't get out.

If the user can focus on a component using a keyboard interface, ensure they can move the focus away by only using a keyboard interface. If this requires nonstandard exit methods, advise the user how to do so.

**Disabilities**: physical, visual
**WCAG number + conformance**: 2.1.2 A

Needs illustration

### P10. Provide a way to turn off character key shortcuts
> I was trying to type, and then I started triggering all these keyboard shortcuts.

If a keyboard shortcut uses only letter, punctuation, number, or symbol characters, then ensure that it is possible to turn it off, remap the shortcut to use a non-printable character (like ctrl or alt), or make the shortcut active only when focus is on a specific component.

**Disabilities**: physical, visual
**WCAG number + conformance**: 2.1.4 A

Needs illustration

***

## Focus behavior

### P11. Preserve focus order
> [write user quote]

If the navigation sequence affects its meaning, ensure that users focus on components in an order that preserves that meaning.

**Disabilities**: intellectual, physical, visual
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

### P12. Hover/focus behavior
> [write user quote]

Avoid making content appear and disappear on focus or hover, since this is disorienting. If hover or focus does make additional content visible and then hidden, the following are true:
* Dismissible: provide a way to dismiss the additional content without moving hover or focus
* Hoverable: if hover triggers additional content, then users can move the pointer over the additional content without it disappearing
* Persistent: the additional content remains visible until the user removes hover/focus, the user dismiss it, or the information is no longer valid

**Disabilities**: physical, visual
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

### P13. Ensure that focus does not change context
> I'm just trying to figure out the navigation, suddenly all the colors and pages are changing on me.

Ensure that focus on a component does not trigger a change of context, such as launching a new window or changing focus to another component.

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 3.2.1 A

Needs illustration

### P14. Ensure that focus indicator is visible
> The focus indicator just disappeared. So where am I exactly?

Ensure that the keyboard focus indicator is visible so that users can visually see what component they are focusing on.

**Disabilities**: intellectual, physical
**WCAG number + conformance**: 2.4.7 AA

Needs illustration

### P15. Prevent accidental pointer input
> [write user quote]

Make sure at least one of the following is true when operating a single pointer:
* The down-event doesn’t execute the function\*
* The up-event executes the function, and undo is available after completion
* The up-event reverses any outcome of the preceding down-event

\*There may be cases in which there is no other option but for the down-event to execute the function. 

**Disabilities**: intellectual, physical
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

Needs code snippet

### P16. Make multiple types of input available
> [write user quote]

Ensure that people can use multiple different types of input mechanisms, such as keyboard or keyboard-like interfaces, speech input, and pointer devices like a computer mouse, stylus, or touch screen.

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 2.5.6 AAA

***

## Labels

### P17. Label user input fields
> [write user quote]

Provide a label or instructions for user input fields so that users know what type of data to input.

**Disabilities**: intellectual, visual
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

### P18. Include the label in the name
> [write user quote]

Ensure the programmatic label is also in the visual text label of an input field. Users have a better experience if the two match, especially if they use both sight and speech input to navigate the app.

**Disabilities**: physical, visual
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

***

## Presentation

### P19. Use text instead of images of text
> Where was the title? Oh, it's this image with no alt text, awesome.

Convey information through text instead of images of text, except for when the user can visually customize the image or when a particular presentation is essential, like a logotype.

**Disabilities**: visual
**WCAG number + conformance**: 1.4.5 AA, 1.4.9 AAA

Needs code snippet of CSS styling

### P20. Provide a way to resize text up to 200%
> Why is this text so tiny? I have to zoom in a ton just to read anything.

Provide a way to resize text up to 200% without losing any functionality, such as navigation.

**Disabilities**: visual
**WCAG number + conformance**: 1.4.4 AA

### P21. Use text presentation best practices
> I have dyslexia, and when I’m reading I prefer that text looks a certain way so that I can understand it.

* Provide a way to select foreground and background colors
* Set maximum width to 80 characters
* Align the text, don’t justify
* Provide a way to resize text up to 200% without assistive tech that doesn’t require horizontal scrolling

**Disabilities**: visual
**WCAG number + conformance**: 1.4.8 AAA

### P22. Make sure there’s no double scrolling
> I don't think this website was built for my phone, every time I try to scroll it just moves around.

Ensure the content is responsive and fits within the viewport. If the user resizes the viewport, make sure that this doesn’t hide content or cause scrolling in two directions.

**Disabilities**: physical, visual
**WCAG number + conformance**: 1.4.10 AA

### P23. Don’t restrict content to portrait or landscape
> I mounted my phone to my wheelchair in portrait to make it easier to use. Landscape-only pages mess up my setup.

Don’t restrict content to a single display orientation, like portrait or landscape, unless a specific display orientation is essential.

**Disabilities**: physical, visual
**WCAG number + conformance**: 1.3.4 AA

### P24. Provide a way to pause audio that plays automatically
> Whenever I hear an ad playing, I can’t hear my screen reader at all and I’m not sure how to turn it off.

If any audio plays automatically for more than 3 seconds, provide a way to pause or stop the audio, or a way to control that audio volume independent from the overall system volume.

**Disabilities**: visual
**WCAG number + conformance**: 1.4.2 A

***

## Bypass content

### P25. Provide a way to bypass repeating content
> My screen reader doesn't need to go through the same content every time, I just want to skip to the good stuff.

Provide a way to bypass blocks of content that are repeated on multiple web pages. For example, a link at the top of the page that jumps to the main story.

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 2.4.1 A

### P26. Provide a way to disable animation triggered by interaction
> Every time I click "next" the slides bounce around everywhere and it's making me dizzy.

Provide a way to disable motion animation triggered by interaction, like parallax scrolling or page-flipping animations, unless the animation is essential to the functionality or information.

**Disabilities**: physical
**WCAG number + conformance**: 2.3.3 AAA

### P27. Provide a way to hide moving content
> I can't focus, the animation in the background keeps distracting me.

For moving, blinking, or scrolling content that starts automatically, lasts more than 5 seconds, and is presented with other content, provide a way for people to pause, stop, or hide it (unless this movement is essential to an activity). For auto-updating information, provide a way for people to pause, stop, or hide it or control the frequency of updating.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 2.2.2 A

***

## Error recovery

### P28. Prevent errors when handling legal and financial data
> If I make mistakes on my direct deposit form, I won't be able to get my paycheck.

Prevent errors by providing at least one of these:
* Submissions are reversible
* Check data for errors and give users the opportunity to correct them
* Provide a way to review and confirm information before submitting
* This is required when handling legal or financial information.

**Disabilities**: intellectual, physical
**WCAG number + conformance**: 3.3.4 AA, 3.3.6 AAA

### P29. Prevent accidents with single pointer gestures
> I accidentally deleted everything. Where's the undo button?!

Use at least one of these methods to prevent accidents:
* Undo
* The [down-event](glossary link) doesn’t trigger anything
* The function completes on the [up-event](glossary link)
* The up-event reverses the down-event

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 2.5.2 A

***

## Timing

### P30. Warn users about timeouts
> Wait, no one told me there was a 10 minute timeout. I was on the phone!

If inactivity in the user session leads to a timeout and causes data loss, warn users about this through a notification.

**Disabilities**: intellectual
**WCAG number + conformance**: 2.2.6 AAA

### P31. Allow users to re-authenticate without losing data
> Damn, I got distracted and now I have to log in again. I hope my shopping cart still has all my stuff.

When an authenticated session expires, allow users to re-authenticate by providing a login and restoring the same information and user’s stage in the process.

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 2.2.5 AAA
