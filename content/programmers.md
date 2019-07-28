# Programmer's Guide
* Programmatically determined
* Keyboard functionality
* Focus behavior
* Labels
* Presentation
* Bypass content
* Error recovery
* Timing

***

## Programmatically determined

### P1. Make information, structure, and relationships programmatically determined
> Since I’m blind, I can’t tell what the titles and sections are in an article just by looking at them. My screen reader figures that out for me.

Separate structure from style so that assistive tech can understand the information hierarchy. Use semantic elements to convey structure (such as headers h1, h2, h3, p, a, blockquote, strong, em). If semantic structure is not available, use text to convey the structure.

**Disabilities**: physical, visual
**WCAG number + conformance**: 1.3.1 A

```html
<header>
	<nav class=”main-nav” aria-labelledby=”main-nav-label”>
		<h2 class = “visually-hidden” id=””main-nav-label>Main Navigation</h2>
		<ul>
			<li><a href=”index.html”>link</a></li>
			<li><a href=”index.html”>link</a></li>
			<li><a href=”index.html”>link</a></li>
		</ul>
</nav>
<nav class =”utility-nav” aria-labelledby=”utility-nav-label”>
		<h2 class = “visually-hidden” id=”utility-nav-label”>Secondary Navigation</h2>
		<ul>
			<li><a href=”index.html”>link</a></li>
			<li><a href=”index.html”>link</a></li>
			<li><a href=”index.html”>link</a></li>
		</ul>
</nav>



</header>
<main>
	<article>
		<h1>Everything You Ever Wanted to Know about Dryer Lint</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam sapien, sollicitudin a mauris eget, ornare semper eros. Donec in velit sit amet est porta condimentum.</p>
<p>Phasellus elit orci, feugiat eu pellentesque sit amet, dignissim id diam. Donec vitae lectus ipsum. Proin dui quam, pharetra quis vulputate sit amet, cursus id ante.</p>
</article>
	<aside>
<h2>Fun Lint Facts</h2>
<p>Aenean dignissim mauris nec enim cursus posuere. Sed porta ante nulla, et ornare tellus efficitur et. Proin molestie nisi massa. Nam maximus nec nisi non dictum.</p>
</aside>
</main>
<footer>© Dryer Lint Fanclub 2019</footer>
```

### P2. Make an intuitive sequence programmatically determined
> I use my screen reader for everything, so when things are ordered in an illogical way I have trouble completing tasks.

Separate structure from style and write the content in a way that is logical and intuitive. Make sure that the visual order matches the DOM order (document object model).

**Disabilities**: physical, visual
**WCAG number + conformance**: 1.3.2 A

#### Good markup example
```html
<h1>Search Results</h1>
<button>filter search results</button>
<button>sort search results</button>
<ul class=”search-results”>
		<li>
<a href=””>
	<img src=”burrito.jpg” alt=”burrito”>
	<h2>Burrito</h2>
</a>
</li>
<li>
<a href=””>
	<img src=”nachos.jpg” alt=”nachos”>
	<h2>Nachos</h2>
</a>
</li>
<li>
<a href=””>
	<img src=”tacos.jpg” alt=”tacos”>
	<h2>Tacos</h2>
</a>
</li>
	</ul>
```

#### Bad markup example
```html
<button>sort search results</button>
<h1>Search Results</h1>
<ul class=”search-results”>
		<li>
<a href=””>
	<img src=”burrito.jpg” alt=”burrito”>
	<h2>Burrito</h2>
</a>
</li>
<li>
<a href=””>
	<img src=”nachos.jpg” alt=”nachos”>
	<h2>Nachos</h2>
</a>
</li>
<li>
<a href=””>
	<img src=”tacos.jpg” alt=”tacos”>
	<h2>Tacos</h2>
</a>
</li>
	</ul>
<button>filter search results</button>
```

### P3. Make the human language programmatically determined
> If my screen reader doesn’t know what language the website is written in, it has a hard time pronouncing everything.

Ensure the default human language of each web page is programmatically determined. To be more advanced, ensure the language of each passage or phrase in the content is programmatically determined except for proper names, technical terms, vernacular language, or words of indeterminate language.

**Disabilities**: language, physical, visual
**WCAG number + conformance**: 3.1.1 A, 3.1.2 AA

#### English language
```html
<html lang="en">
…
</html>
```

#### Hungarian language
```html
<p>Hungarians refer to themselves as <span lang="hu">magyarok</span>.</p>
```

### P4. Make the purpose of UI components programmatically determined
> When my screen reader can’t detect the purpose of an input field, I don’t know what information to enter.

Make the purpose of all UI components, icons, and regions programmatically determined. Provide each input field with a label (text inputs, radio buttons, checkboxes, and selection menus). The exceptions are buttons (since they are self-labeling) and hidden inputs (since they are unavailable).

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 1.3.5 A, 1.3.6 AAA

### P5. Make the purpose of links programmatically determined
> When my screen reader finds a link that only says "Learn more" that doesn't tell me where it's taking me.

Ensure the purpose of links can be determined from the link text alone, or from the link text together with this programmatically determined link context (except for when the purpose is supposed to be ambiguous).

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 2.4.4 A, 2.4.9 AAA

#### Example 1
```html
<p>To learn more about accessibility, visit <a href=”https://www.w3.org/WAI/”>The Web Accessibility Initiative (WAI) website</a>.</p>
```

#### Example 2 using visually hidden text:
```html
<h1>Taco Consumption up 1000% in Chicago</h1>
<p>As tacos become increasingly popular, studies have shown that Chicagoans ate 1000% more tacos in 2019 than they did in 2018. <a href=”welovetacos.com”>Read more <span class=”visually-hidden”>about taco consumption in Chicago</span></a></p>
```

### P6. Make the name, role, and value of all UI components programmatically determined
>  I need to use my screen reader to control my apps, so it needs to understand the state of all my settings so that I can change them if needed.

Make the name, role, and value of all UI components - including form elements, links, and components generated by scripts - programmatically determined. Notify users of any changes made to these items.

**Disabilities**: physical, visual
**WCAG number + conformance**: 4.1.2 A

### P7. Make status messages programmatically determined
> If my screen reader can’t read the status message, then I don’t know of the form I just submitted failed or succeeded.

After the user submits information, provide text that has an error, warning, or success message that can be read by a screen reader.

**Disabilities**: physical, visual
**WCAG number + conformance**: 4.1.3 AA

```html
<div class=”error” tabindex=”-1” aria-labelledby=”error-title”>
	<h1 id=”error-title”>Something went wrong!</h1>
	<ul>
		<li><a href=”#password”>Your password must contain an uppercase letter, a number, a haiku, a gang sign, a hieroglyph, and the blood of a virgin.</a></li>
	</ul>
</div>
```

### P8. Make sure that assistive tech can parse content
> Sometimes when there are syntax errors in the code, my screen reader can’t interpret it and it comes out like a jumbled mess.

Ensure that, with content implemented using markup languages, elements have complete start and end tags, they are nested according to their specifications, they don’t contain duplicate attributes, and any IDs are unique.

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 4.1.1 A

***

## Keyboard functionality

### P9. Make all functionality available through the keyboard
> My hand tremor makes it difficult to use a mouse, so I prefer using the keyboard instead.

Ensure all the functionality is operable through a keyboard interface without requiring specific timing for keystrokes (except where input is defined by the user’s movement and not just the endpoints). To be more advanced, there are no exceptions.

**Disabilities**: physical, visual
**WCAG number + conformance**: 2.1.1 A, 2.1.3 AAA

### P10. Make sure there are no keyboard traps
> Since I’m blind, I rely on my keyboard and screen reader to use the web. Sometimes I fall into a keyboard trap and I can’t get out because I don’t use a mouse.

If the user can focus on a component using a keyboard interface, ensure they can move the focus away by only using a keyboard interface. If this requires nonstandard exit methods, advise the user how to do so.

**Disabilities**: physical, visual
**WCAG number + conformance**: 2.1.2 A

### P11. Provide a way to turn off character key shortcuts
> Sometimes I accidentally hit keys, and then I end up triggering things that I never meant to through shortcuts.

If a keyboard shortcut uses only letter, punctuation, number, or symbol characters, then ensure that it is possible to turn it off, remap the shortcut to use a non-printable character (like ctrl or alt), or make the shortcut active only when focus is on a specific component.

**Disabilities**: physical, visual
**WCAG number + conformance**: 2.1.4 A

***

## Focus behavior

### P12. Preserve focus order
> I use my keyboard to navigate, and when the focus moves all out of order it’s very unexpected and throws me off.

If the navigation sequence affects its meaning, ensure that users focus on components in an order that preserves that meaning.

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 2.4.3 A

### P13. Hover/focus behavior
> I have low vision and I need to really focus when I read. When I move my mouse over the menu, it’s disorienting when stuff automatically pops up.

Avoid making content appear and disappear on focus or hover, since this is disorienting. If hover or focus does make additional content visible and then hidden, the following are true:
* Dismissible: provide a way to dismiss the additional content without moving hover or focus
* Hoverable: if hover triggers additional content, then users can move the pointer over the additional content without it disappearing
* Persistent: the additional content remains visible until the user removes hover/focus, the user dismiss it, or the information is no longer valid

**Disabilities**: physical, visual
**WCAG number + conformance**: 1.4.13 AA

#### HMTL
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

#### CSS
```css
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
}

.dropdown-content a {
   display: block;
}

.dropdown:hover .dropdown-content {
 display: block;
}
```

### P14. Ensure that focus does not change context
> I have unsteady hands that tend to make my mouse move around, and it’s annoying when this accidentally pops something up and I can’t figure out how to get rid of it.

Ensure that focus on a component does not trigger a change of context, such as launching a new window or changing focus to another component.

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 3.2.1 A

### P15. Ensure that focus indicator is visible
> Since I have short term memory loss, I often forget what I’m looking at. It’s helpful to see a visual reminder of what page I’m on when I forget.

Ensure that the keyboard focus indicator is visible so that users can visually see what component they are focusing on.

**Disabilities**: intellectual, physical
**WCAG number + conformance**: 2.4.7 AA

### P16. Prevent accidental pointer input
> I have a tremor in my hands that causes me to accidentally click around, and I don’t want this to gravely affect my work.

Make sure at least one of the following is true when operating a single pointer:
* The down-event doesn’t execute the function
* The up-event executes the function, and undo is available after completion
* The up-event reverses any outcome of the preceding down-event
* It’s essential that the down-event executes the function

**Disabilities**: intellectual, physical
**WCAG number + conformance**: 2.5.2 A

### P17. Make multiple types of input available
> I usually prefer using speech input to navigate because it’s easier for me to talk than use a mouse, but when company is around I turn it off and use the mouse.

Ensure that people can use multiple different types of input mechanisms, such as keyboard or keyboard-like interfaces, speech input, and pointer devices like a computer mouse, stylus, or touch screen.

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 2.5.6 AAA

### P18. Don’t automatically change the context based on user input
> I have Down Syndrome, and when webpages change unexpectedly on me, I get really disoriented and takes me awhile to figure out what happened.

Ensure that people experience predictable results when entering data or selecting a form control. Don’t open a new window, move focus to a different component, go to a new page, or significantly re-arrange the content of a page.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 3.2.2 A

***

## Labels

### P19. Give all pages a descriptive title
> It’s so helpful when a page title describes its purpose, since I’m blind and need a screen reader to read that out loud to me.

Ensure that all pages have a title that describes its topic or purpose so that users can easily find content and orient themselves within the navigation.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 2.4.2 A

### P20. Use section headings to organize the content
> I have a reading disability that makes it hard for me to read long texts. Seeing the section headers helps me understand content a lot more.

When the page has sections, provide section headings to organize the content, facilitate navigation, and provide cues to help understanding.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 2.4.10 AAA

### P21. Label user input fields
> I’ve always made mistakes filling out forms since I have a learning disability. A clearly labeled input field helps me understand exactly what I need to do.

Provide a label or instructions for user input fields so that users know what type of data to input.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 3.3.2 A

### P22. Include the label in the name
> I use text-to-speech to control my apps, but sometimes it doesn’t understand me because the programmatic label is slightly different than what I’m seeing.

Ensure the programmatic label is also in the visual text label of an input field. Users have a better experience if the two match, especially if they use both sight and speech input to navigate the app.

**Disabilities**: physical, visual
**WCAG number + conformance**: 2.5.3 A

***

## Presentation

### P23. Use text instead of images of text
> I use a screen reader to interact with websites, so when there’s text that’s presented as an image I don’t know what it says.

Convey information through text instead of images of text, except for when the user can visually customize the image or when a particular presentation is essential, like a logotype.

**Disabilities**: visual
**WCAG number + conformance**: 1.4.5 AA, 1.4.9 AAA

### P24. Provide a way to resize text up to 200%
>Because I’m very near-sighted, I have to zoom in the text a lot in order to read. Sometimes zooming in causes navigation and other elements that I need to disappear.

(add description)

**Disabilities**: visual
**WCAG number + conformance**: 1.4.4 AA

### P25. Use text presentation best practices
> I have dyslexia, and when I’m reading I prefer that text looks a certain way so that I can understand it.

* Provide a way to select foreground and background colors
* Set maximum width to 80 characters
* Align the text, don’t justify
* Provide a way to resize text up to 200% without assistive tech that doesn’t require horizontal scrolling

**Disabilities**: visual
**WCAG number + conformance**: 1.4.8 AAA

### P26. Make sure there’s no double scrolling
> I have trouble reading so I zoom in a lot to make the text bigger, but when this makes the content scroll in different directions it gets disorienting.

Ensure the content is responsive and fits within the viewport. If the user resizes the viewport, make sure that this doesn’t hide content or cause scrolling in two directions.

**Disabilities**: physical, visual
**WCAG number + conformance**: 1.4.10 AA

### P27. Don’t restrict content to portrait or landscape
> My phone is mounted to the arm of my wheelchair so I can’t just rotate my phone. When there’s a view that’s landscape-only that makes it really hard for me to use.

Don’t restrict content to a single display orientation, like portrait or landscape, unless a specific display orientation is essential.

**Disabilities**: physical, visual
**WCAG number + conformance**: 1.3.4 AA

### P28. Provide a way to pause audio that plays automatically
> Whenever I hear an ad playing, I can’t hear my screen reader at all and I’m not sure how to turn it off.

If any audio plays automatically for more than 3 seconds, provide a way to pause or stop the audio, or a way to control that audio volume independent from the overall system volume.

**Disabilities**: visual
**WCAG number + conformance**: 1.4.2 A

***

## Bypass content

### P29. Provide a way to bypass repeating content
> I’m a screen reader user, and I hate having to go through the same dozen links on every page before I get to the main content.

Provide a way to bypass blocks of content that are repeated on multiple web pages. For example, a link at the top of the page that jumps to the main story.

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 2.4.1 A

### P30. Provide a way to disable animation triggered by interaction
> A lot of animations I see make me dizzy because I have vertigo, so I have to go lie down.

Provide a way to disable motion animation triggered by interaction, like parallax scrolling or page-flipping animations, unless the animation is essential to the functionality or information.

**Disabilities**: physical
**WCAG number + conformance**: 2.3.3 AAA

### P31. Provide a way to hide moving content
> I have ADHD and I get distracted really easily, so when I see moving or blinking content I always forget what I was doing.

For moving, blinking, or scrolling content that starts automatically, lasts more than 5 seconds, and is presented with other content, provide a way for people to pause, stop, or hide it (unless this movement is essential to an activity). For auto-updating information, provide a way for people to pause, stop, or hide it or control the frequency of updating.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 2.2.2 A

***

## Error recovery

### P32. Prevent errors when handling legal and financial data
> (add user quote)

Prevent errors by providing at least one of these:
* Submissions are reversible
* Check data for errors and give users the opportunity to correct them
* Provide a way to review and confirm information before submitting
* This is required when handling legal or financial information.

**Disabilities**: intellectual, physical
**WCAG number + conformance**: 3.3.4 AA, 3.3.6 AAA

***

## Timing

### P33. Warn users about timeouts
> I have short term memory loss and sometimes forget that I’m in the middle of something.

If inactivity in the user session leads to a timeout and causes data loss, warn users about this through a notification.

**Disabilities**: intellectual
**WCAG number + conformance**: 2.2.6 AAA

### P34. Allow users to re-authenticate without losing data
> I have ADHD, so sometimes I start shopping online and then get distracted by something else. I don’t want to have to start all over again when I go back to shopping.

When an authenticated session expires, allow users to re-authenticate by providing a login and restoring the same information and user’s stage in the process.

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 2.2.5 AAA
