# Designer's Guide
* Style guide
* Interaction behavior
* Navigation
* Error recovery
* Timing

## TO-DO LIST
* Create illustrations (all)
* Get industry expert feedback (all)

***

## Style guide

### D1. Use high contrast
> This text is so light, I can barely see it.

Use high contrast so that users can easily read and see content. For text, the contrast should be at least 4.5:1 (AA) or 7:1 (AAA). For UI components like buttons, at least 3:1 (AA). Logotypes are the exception.

**Disabilities**: visual
**WCAG number + conformance**: 1.4.3 AA, 1.4.6 AAA, 1.4.11 AA

**illustration idea**: hand lettering design against background comparing different contrast ratios

-

### D2. Don’t use color alone to convey information
> Oh, this was on? It looked the same to me when it was off.

Don’t use color alone to convey information (such as error alerts). Instead, combine color with text and/or imagery so that colorblind people can understand it.

**Disabilities**: visual
**WCAG number + conformance**: 1.4.1 A

**illustration idea**: data viz chart with only color to differentiate vs. same chart with color, patterns, and labels to differentiate

-

### D3. Use text spacing best practices
> I can barely read this, the letters are all over each other.

Use these text spacing best practices for readability:
* Line spacing is at least 1.5
* Paragraph spacing is at least 2
* Tracking is at least 0.12
* Word spacing is at least 0.16

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 1.4.12 AA

**illustration idea**: side by side comparison of good vs. bad example of text spacing

-

### D4. Provide consistent UI components
> These buttons do the same thing, but they look completely different.

For UI components that have the same functionality, make sure they are visually consistent and are labeled the same way in code.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 3.2.4 AA

**illustration idea**: same button with different background and contexts (button needs to be clear, background can be abstract)

***

## Interaction behavior

### D5. Provide buttons with a large target size
> This buttons are too tiny and close together, I keep accidentally button mashing.

Make sure the [target size](glossary link) for buttons is at least 44x44 CSS pixels. The exceptions are if:
* There’s an equivalent control that meets the size
* The target is in a block of text
* The user customized the size
* A smaller presentation is essential

**Disabilities**: physical
**WCAG number + conformance**: 2.5.5 AAA

**illustration idea**: person holding phone with giant button on it, dimension showing that it's 44 px

-

### D6. Provide single-pointer alternatives to path-based gestures
> My prosthetic hand doesn't move like that, how am I supposed to zoom in on this map?

If users need to make a [path-based gesture](glossary link) (like pinch to zoom, drag and drop), provide another way to complete the operation that only requires a [single-pointer gesture](glossary link) (like tap, double tap, and long press).

**Disabilities**: physical
**WCAG number + conformance**: 2.5.1 A

**illustration idea**: hand making path-based gestures (pinch to zoom, drag and drop) vs hand making single tap

-

### D7. Provide conventional alternatives to motion functions
> Don't make me shake my phone to undo, I'm literally shaking all the time.

If a function is triggered by a [motion function](glossary link) (like shaking the device or waving at the camera), provide a more conventional alternative (like a button) and a way to turn off motion activation so that users don’t accidentally trigger it.

**Disabilities**: physical
**WCAG number + conformance**: 2.5.4 A

**illustration idea**: hand shaking phone and accidentally undoing everything (this hand feels stressed out) vs. hand calmly pressing undo button

-

### D8. Only change the context by user request
> Another newsletter pop-up! I hate it when that happens.

Don't change the context (such as automatically launching new windows or refreshing the content feed) unless it's by user request.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 3.2.2 A, 3.2.5 AAA

**illustration idea**: newsletter pop-up on computer with person next to it looking distressed

***

## Navigation

### D9. Use consistent navigation
> Is this a different site? Oh, it's the same site but with a different menu. Weird.

Make sure that the navigation is presented in the same way on all pages, and that all the items are presented in the same order.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 3.2.3 AA

**illustration idea**: same navigation with different pages, contexts, etc. (similar to consistent UI components)

-

### D10. Make sure that the user knows where they are
> I just clicked on a bunch of links, now I'm not sure how to get back to the homepage.

Provide information about the user’s location within a set of pages, like a breadcrumbs trail or a site map.

**Disabilities**: intellectual
**WCAG number + conformance**: 2.4.8 AAA

**illustration idea**: breadcrumbs trail of navigation showing where user is

-

### D11. Provide more than one way to locate a page
> Sometimes I like to browse, sometimes I know exactly what I'm looking for.

Because people prefer finding content in different ways, provide multiple ways to locate a page, such as a site map, table of contents, search function, and links to related pages.

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 2.4.5 AA

**illustration idea**: sample table of contents, search bar, and related page links

-

### D12. Write descriptive page titles
> I can't find the contact page, all the tabs say the same thing for this site.

Write descriptive page titles to help people navigate content.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 2.4.2 A

**illustration idea**: bad example with vague titles, good example with specific titles

***

## Error recovery

### D13. Identify and describe errors to users
> This form is telling me something's wrong, but what is it?

If the system detects an input error, identify the error and describe it to users as specifically as possible.

**Disabilities**: intellectual
**WCAG number + conformance**: 3.3.1 A

**illustration idea**: error message next to text field saying "password must be in the form of a haiku" (or something similarly ridiculous)

-

### D14. Suggest corrections to errors
> I love it when it suggests the correct spelling to me; spelling is the bane of my existence.

If the system detects an input error, suggest corrections so that users can easily fix it.

**Disabilities**: intellectual
**WCAG number + conformance**: 3.3.3 AA

**illustration idea**: search results that ay "We could not find anything for 'x' did you mean 'y'?"
(maybe come up with clever joke for this)

-

### D15. Provide contextual help
> Damn it, the help link took me away from the page. Why can't I see both at the same time?

Provide contextual help on the same page or next to content it's referencing in a way that’s obvious and easy to find. Users should not have to navigate away from the current page to access this.

**Disabilities**: intellectual
**WCAG number + conformance**: 3.3.5 AAA

**illustration idea**: [will think of later]

***

## Timing

### D16. Make time limits adjustable or not essential
> I only have 8 minutes to check out? This is so stressful.

If you give users a time limit to complete a task, provide them with a way to adjust or turn off the time limit. To be more accessible, don’t require time limits at all.

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 2.2.1 A, 2.2.3 AAA

**illustration idea**: (bad example) "You have 5 minutes to sign up for these concert tickets" with person looking stressed out (good example) no time limit, person can take their time

-

### D17. Provide the option to turn off interruptions
> Another ad in the middle of the video! I always forget where I am after these.

Provide the option to turn off or postpone interruptions (such as an on/off switch in the user settings) except in the case of an emergency. To be very accessible, don't create interruptions at all.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 2.2.4 AAA

**illustration idea**: (example of acceptable interruption) Pop up saying: Warning! Flood alert, seek shelter immediately
(example of bad interruption) Pop up saying: Would you like to fill out a quick survey?
