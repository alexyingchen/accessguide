# Programmer's Guide
* Programmatically determined
* Keyboard functionality
* Focus behavior
* Bypass content
* Labels
* Timing
* Presentation

***

## Programmatically determined

### P1. Make information, structure, and relationships programmatically determined
> Since I’m blind, I can’t tell what the titles and sections are in an article just by looking at them. My screen reader figures that out for me.

Separate structure from style so that assistive tech can understand the information hierarchy. Use semantic elements to convey structure (such as headers h1, h2, h3, p, a, blockquote, strong, em). If semantic structure is not available, use text to convey the structure.

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 1.3.1 A

'''
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
'''

### P2. Make an intuitive sequence programmatically determined
> I use my screen reader for everything, so when things are ordered in an illogical way I have trouble completing tasks.

Separate structure from style and write the content in a way that is logical and intuitive. Make sure that the visual order matches the DOM order (document object model).

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 1.3.2 A

Good markup example
'''
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
'''

Bad markup example
'''
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
'''

### P3. Make the human language programmatically determined



***

## Keyboard functionality

***

## Focus behavior

***

## Labels

***

## Timing

***

## Presentation

***

## Bypass content
