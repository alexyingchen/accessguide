# Designer's Guide
* Style guide
* Interaction behavior
* Navigation
* Error recovery
* Timing

***

## Style guide

### D1. Use high contrast
> I can’t see very well, so I have trouble reading when the text is very low contrast.

The contrast of text against background should be at least 4.5 to 1 (AA) or 7 to 1 (AAA). The contrast of UI components and diagrams against background should be at least 3 to 1 (AAa). Large text and logotypes are the exception to this rule.

**Disabilities**: visual
**WCAG number + conformance**: 1.4.3 AA, 1.4.6 AAA, 1.4.11 AA

### D2. Don’t use color alone to convey information
> I’m color blind so when I see things labeled only by color I have no idea what they mean.

Don’t use color alone, instead combine color with text and/or imagery to communicate information to people.

**Disabilities**: visual
**WCAG number + conformance**: 1.4.1 A

### D3. Use text spacing best practices
> I have a really strong eye prescription, and giant blocks of text sometimes just look like blobs to me.

Use these text spacing best practices for readability:
* Line spacing is at least 1.5
* Paragraph spacing is at least 2
* Tracking is at least 0.12
* Word spacing is at least 0.16

**Disabilities**: intellectual, learning, visual
**WCAG number + conformance**: 1.4.12 AA

### D4. Provide consistent UI components
> It takes me a while to learn how to use new apps, so seeing the same kind of button really helps.

For UI components that have the same functionality, such as a share button, make sure they are visually consistent and share the same text alternative.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 3.2.4 AA

### D5. Provide instructions that don’t rely on just one characteristic
> If an app is telling me to click on the round button to continue, I can’t find it because my vision is bad.

Make sure that people can access instructions that don’t rely on visual or auditory cues, provide additional information other than shape or location to help them understand.

**Disabilities**: visual
**WCAG number + conformance**: 1.3.3 A

***

## Interaction behavior

### D6. Use the appropriate target size
> I have a tremor in my hand that makes it hard to use my phone when the buttons are too small.

Make sure the target size is at least 44x44 CSS pixels.

The exceptions are:
* If there’s an equivalent control that meets the size
* The target is in a block of text
* The user determined the size
* A specific presentation that’s smaller is essential

**Disabilities**: physical, visual
**WCAG number + conformance**: 2.5.5 AAA

### D7. Provide single-pointer alternatives to path-based gestures
> I can’t move my fingers, so that makes it hard for me to do things like pinch to zoom into a map.

Wherever there is a path-based gesture (like pinch to zoom, drag and drop) provide another way to complete the operation that only requires a single pointer (like tap, double tap, and long press).

**Disabilities**: physical, visual
**WCAG number + conformance**: 2.5.1 A

### D8. Prevent accidents with single pointer gestures
> I’ve got limited mobility and often touch the wrong thing on my phone, so I need a way to avoid accidents.

Use at least one of these methods to prevent accidents:
* Undo
* The down-event doesn’t trigger anything
* The function completes on the up-event
* The up-event reverses the down-event

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 2.5.2 A

### D9. Provide UI alternatives to motion functions
> My friend shakes her phone to undo typing but I have a tremor in my hands, so I’d rather just press the undo button.

If a function is triggered by a device motion (like shaking or squeezing) or user motion (like waving to the camera), provide a more conventional alternative in the UI. Also, provide a way to turn off device or user motion activation so that they don’t accidentally trigger it.

**Disabilities**: physical
**WCAG number + conformance**: 2.5.4 A

### D10. Only change the context by user request
> I have low vision, and when a window randomly pops up without me doing anything I get very confused and not sure what I’m looking at.

Give users full control of the context and don’t change unless they request it. This includes automatically launching new windows, refreshing a content feed, and submitting forms.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 3.2.5 AAA

***

## Navigation

### D11. Create consistent navigation
> I get really overwhelmed with new apps so it helps when I see the same menu in the same place.

Make sure that the navigation is in the same location on all pages, and all the items in the navigation are always in the same order.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 3.2.3 AA

### D12. Make sure that the user knows where they are
> I get confused easily when I click on a bunch of links, I end up having no idea where I am.

Provide information about the user’s location within a set of pages, like a breadcrumbs trail or a site map.

**Disabilities**: intellectual
**WCAG number + conformance**: 2.4.8 AAA

### D13. Provide more than one way to locate a page
> I have low vision so instead of browsing all the pages I like to just search for what I need.

Given that people may find it easier to navigate in different ways, provide multiple ways to locate a page such as a site map, table of contents, search function, and links to related pages.

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 2.4.5 AA

***

## Error recovery

### D14. Identify and describe errors
> I make a lot of typos so I’m never sure exactly what the problem is when it’s showing me an error message.

If an input error is automatically detected, identify the error and describe it as specifically as possible.

**Disabilities**: intellectual, physical
**WCAG number + conformance**: 3.3.1 A

### D15. Suggest corrections to errors
> Since I have a learning disability, it’s a lot easier for me to get suggestions rather than having to figure out how to fix errors.

If possible, suggest corrections to input errors so that users can fix it.

**Disabilities**: intellectual, physical
**WCAG number + conformance**: 3.3.3 AA

### D16. Provide contextual help
> My memory isn’t so good as I’m getting older, so getting help while I’m filling out a form is really nice.

Provide contextual help on the same page or next to the input error in a way that’s obvious and easy to find. Users shouldn’t have to navigate away to access this.

**Disabilities**: intellectual, physical
**WCAG number + conformance**: 3.3.5 AAA

***

## Timing

### D17. Time limits are adjustable or not essential
> I’m slow when it comes to using a mouse, so time limits do nothing but stress me out.

If you need to give users a time limit to complete a task, also provide them with a way to adjust or turn off the time limit. To be very accessible, don’t require time limits at all.

**Disabilities**: intellectual, physical, visual
**WCAG number + conformance**: 2.2.1 A, 2.2.3 AAA

### D18. Provide the option to turn off interruptions
> I have ADD, so when I get pop-ups I get really distracted from what I’m doing.

Provide the option to turn off or postpone interruptions, such as a switch in the user settings.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 2.2.4 AAA
