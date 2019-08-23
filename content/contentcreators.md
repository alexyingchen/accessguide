# Content Creator's Guide
* Multimedia
* Media writing
* Writing

## TO-DO LIST
* Finalize illustrations (C1-C8)
* Finish writing text examples (C9-16)
* Get industry expert feedback (all)

***

## Multimedia

### C1. Provide text descriptions of imagery
> What's in this photo? It doesn't have alt text, so my [screen reader](glossary link) can't read it.

Provide [text descriptions](glossary link) of imagery (like photos and diagrams) to describe it to people who are blind or visually impaired. Descriptions also help people with intellectual disabilities understand imagery.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 1.1.1 A

-

### C2. Provide transcripts of audio
> There's a cool new podcast that I want to read, but it doesn't have a transcript.

Provide transcripts of audio content that’s pre-recorded (like podcasts) and live (like speeches) for people who are deaf or hard of hearing.

**Disabilities**: hearing
**WCAG number + conformance**: 1.2.1 A, 1.2.9 AAA

-

### C3. Provide closed captions of video
> What are these people saying? I wish this movie had captions.

Provide closed captions of video that’s pre-recorded (like movies) and live (like newscasts) for people who are deaf or hard of hearing.

**Disabilities**: hearing
**WCAG number + conformance**: 1.2.2 A, 1.2.4 AA

-

### C4. Provide audio descriptions of video
> Can you do me a favor and tell me what's happening in the movie?

Provide [audio descriptions](glossary link) of video that’s pre-recorded (like movies) that fully describe visuals and actions to people blind or visually impaired. Embed the audio description between character dialogue. If necessary, pause the visuals to allow enough time.

**Disabilities**: visual
**WCAG number + conformance**: 1.2.3 A, 1.2.5 AA, 1.2.7 AAA

-

### C5. Provide text descriptions of video
> I love appreciating cinema and documentaries with my assistant, who signs in my hand.

Provide [text descriptions](glossary link) of video that’s pre-recorded (like movies) that fully describe visuals and actions to people who are blind and/or deaf. This reads like a screenplay. See also [media alternative](glossary link).

**Disabilities**: hearing, visual
**WCAG number + conformance**: 1.2.3 A, 1.2.8 AAA

-

### C6. Provide sign language interpretation of video
> I wish they had an ASL interpreter, reading lips doesn't always work.

Provide sign language interpretation of the audio content in videos that's pre-recorded (like movies) for deaf and hard of hearing people. You can use a split screen or add a smaller frame in the corner so that people can see both the content and interpreter.

**Disabilities**: hearing
**WCAG number + conformance**: 1.2.6 AAA

***

## Media editing

### C7. Don’t use more than 3 flashes per second
> I can't go to the concert with you, the strobe lights might give me a seizure.

Don’t use more than 3 flashes per second in your visuals to avoid triggering a seizure. Especially avoid bright flashes and the color red.

**Disabilities**: physical
**WCAG number + conformance**: 2.3.1 A, 2.3.2 AAA

-

### C8. Get rid of background noise in audio
> The traffic sounds makes it impossible to hear what the people are saying.

Edit the audio so there is little to no background noise in audio, or provide a way to turn off the background noise so that hard of hearing people can hear the important audio content.

**Disabilities**: hearing
**WCAG number + conformance**: 1.4.7 AAA

***

## Writing

### C9. Provide a way to understand unusual words
> Half of this conversation is jargon. What does it all mean?!

Provide a way to understand unusual words like idioms and jargon, such as a glossary that the unusual word links to. Otherwise, people may find these words difficult to read and understand.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 3.1.3 AAA

`The birthday party wasn’t a surprise because my sister _spilled the beans_.
-> _Spill the beans_: to reveal a secret unintentionally or indiscreetly`

-

### C10. Provide a way to expand abbreviations
> This just looks like a bunch of letters to me.

Provide a way to expand abbreviations, such as a glossary that the abbreviation links to or an explanation in the text. Otherwise, poeple may not know or remember what they stand for.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 3.1.4 AAA

`Our next guests for our AMA (Ask Me Anything) are the amazing Frida Kahlo and Georgia O'Keeffe!`

-

### C11. Write content at an 8th grade reading level
> The reading is so dense and complicated, who could ever finish it?

Write clearly and simply so that it reads at an 8th grade reading level. If the main content is too complex to simplify (like a scientific article), then provide a simple summary at an 8th grade level. This also makes it accessible to people with different educational, class, and cultural backgrounds.

**Disabilities**: intellectual
**WCAG number + conformance**: 3.1.5 AAA

`Bad: The juxtaposition of positive and negative perspectives will be explored in this essay on the topic of visibly branding one's identity onto transportation vehicles in paradigms of public space.

Good: This essay explores pros and cons of bumpers stickers on cars.`

-

### C12. Provide pronunciation for ambiguous words
> My [screen reader](link to glossary) can't pronounce this word, so not sure what it actually says.

Provide a way to determine the specific pronunciation for ambiguous words, such as the phonetic spelling right after the word, the reading of the word by ruby element, or a link to a glossary.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 3.1.6 AAA

-

### C13. Write descriptive page titles
> I can't find the contact page, all the tabs say the same thing for this site.

Write descriptive page titles to help people navigate content.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 2.4.2 A

-

### C14. Write descriptive headings and labels
> When long articles don't have any section titles, it's impossible to find what I want.

Use section headings to organize content and write headings and labels that describe the topic/purpose to help people navigate content.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 2.4.6 AA, 2.4.10 AAA

`h1 Ingredients
• Lemonade
• Frozen fruit chunks

h1 Steps
1. Place frozen fruit chunks in ice cube tray
2. Pour lemonade over them
3. Freeze for 1 hour

h1 Notes
• Enjoy with a jug of lemonade in the summer!`

-

### C15. Write descriptive link text
> Links that say 'Learn more' don't actually mean anything!

Write links so that user's can understand the purpose of the link from the link text alone.

**Disabilities**: intellectual, visual
**WCAG number + conformance**: 2.4.4 A, 2.4.9 AAA

(example from programming)

#### Example 1
```html
<p>To learn more about accessibility, visit <a href=”https://www.w3.org/WAI/”>The Web Accessibility Initiative (WAI) website</a>.</p>
```

#### Example 2 using visually hidden text:
```html
<h1>Taco Consumption up 1000% in Chicago</h1>
<p>As tacos become increasingly popular, studies have shown that Chicagoans ate 1000% more tacos in 2019 than they did in 2018. <a href=”welovetacos.com”>Read more <span class=”visually-hidden”>about taco consumption in Chicago</span></a></p>
```

-

### C16. Write instructions that don’t rely on just one characteristic
> These instructions are telling me to press the blue button to save. Which one's blue?

If you are providing instructions for how to use something, use more than one characteristic to describe components (such as color, location, text, size, etc.) for people who are blind or visually impaired.

**Disabilities**: visual
**WCAG number + conformance**: 1.3.3 A
