# Content

## Introduction
Content is the media that we create. Usually, this media is meaningful to us in some way - like photos that document our travels, articles about our favorite recipes, or podcasts that investigate a unique perspective.

When we make content accessible, we are inviting everyone to be a part of the story. However, most content is widely inaccessible. This isolates and removes disabled people from the conversation. Here are guiding principles to make these accessible, with action items based on WCAG.

Don't assume people can see. Blind and visually impaired people use assistive tech, namely screen readers and screen magnifiers, to interact with the web. This means visual content such as photos and videos should include written descriptions that they listen to or read with Braille.

Don't assume people can hear. Audio content should be transcribed and made available through closed captions and transcripts. Many Deaf and hard of hearing people also know sign language. Keep in mind that you should always pay interpreters, and there are different languages and regional dialects fo sign language.

Don't assume people understand the world in a neurotypical way. When writing about or explaining something, avoid unneeded complexity and use simple language instead.

***

## Multimedia

### C1. Provide image descriptions
> What’s this photo? It doesn’t have alt text, so it just shows up on my screen reader as nothing.

Provide image descriptions that describe the essential elements and actions of images so that Blind people can access them.

#### Disabilities
visual

#### WCAG number + conformance
1.1.1 A

#### Best practices
* Be brief, concise, and objective
* Define foreground (or object of focus), action, and background
* Add detail as necessary depending on context
* Define terms that might be unfamiliar to people (e.g. Jiu Jitsu)
* Do not unnecessarily racialize or gender people
* Transcribe all text, as screen readers cannot detect text in images

Keep in mind that image descriptions should communicate enough information to allow screen reader users to quickly browse through a page. Use your intuition to determine what level of detail is necessary.

A helpful template is object-action-background. For example, "photo of bunnies jumping in a field" or "cartoon drawing of Beyonce singing in a stadium." This describes the essential elements in a simple and direct way.

Descriptions are also highly context dependent. If you have a page full of images of different animals, it may suffice to describe photos as "dogs," "cats," and "pigeons." If all the photos are of dogs, it's worth adding detail on how they look, what type of breed, and what they're doing.

It's worth adding a brief description of technical or uncommon terms, such as "Jiu Jitsu, a Brazilian grappling martial art" or "Baybayin, a Filipino writing script."

In terms of describing race and gender, use your intuition for whether that's essential to understanding the image. Do not misgender people, misidentify their race, or only identify people of color by race. It's perfectly acceptable to describe an image as, "a large group of people smiling with a beautiful mountain range behind them" without mentionining identity.

Since screen readers cannot detect text, make sure to transcribe all text. There are tools out there to help detect and extract text from images to speed up this process.

If the process of writing descriptions is inaccessible to you, consider joining a group to crowd-source them, such as "People's Image Descriptions" on Facebook.

Special thanks to Bex Leon for their consultation on this subject.

-

### C2. Provide transcripts of audio
> There's a cool new podcast that I want to read, but it doesn't have a transcript.

Provide transcripts of pre-recorded audio (like podcasts) and live audio (like speeches) so that Deaf and hard of hearing people can access them.

#### Disabilities
hearing

#### WCAG number + conformance**
1.2.1 A, 1.2.9 AAA

#### Best practices
A helpful workflow to speed up this process is to use a speech recognition tool to create the first pass of the transcript. From there, enlist the help of people to listen and correct any typos, mispellings, and formatting issues.

Ensure the transcript is easily accessible and noticeable. Excellent examples of this include the Disability Visibility podcast, which uses Google docs, and the 99% Invisible podcast, which presents the transcript like a blog post.

-

### C3. Provide closed captions of video
> What are these people saying? I wish this movie had captions.

Provide closed captions of pre-recorded video (like movies) and live video (like newscasts) so that Deaf and hard of hearing people can access them.

#### Disabilities
hearing

#### WCAG number + conformance**
1.2.2 A, 1.2.4 AA

#### Best practices
Some video streaming services include automatic closed captions, which use speech recognition. While this is sometimes effective, these captions are often inaccurate and experience difficulty accurately transcribing non-native English speakers and people with speech disabilities. Therefore, it's more accessible to provide your own.

Ensure the closed captions are:
* Easy to see against the video
* Presented in small phrases rather than large paragraphs
* Timed correctly with the video

-

### C4. Provide audio descriptions of video
> Can you do me a favor and tell me what's happening in the movie?

Provide audio descriptions of pre-recorded video (like movies) that fully describe visuals and actions to Blind people. Embed the description between character dialogue.

#### Disabilities
visual

#### WCAG number + conformance
1.2.3 A, 1.2.5 AA, 1.2.7 AAA

#### Best practices
To experience an example of audio descriptions, go to the entertainment streaming service of your choice and turn them on.

-

### C5. Provide text descriptions of video
> I hear battle cries, are they fighting in the mountains or in the fields right now?

Provide text descriptions of pre-recorded video (like movies) that describe visuals and actions to Blind people. This reads like a screenplay.

**Disabilities**: hearing, visual
**WCAG number + conformance**: 1.2.3 A, 1.2.8 AAA

-

### C6. Provide ASL interpretation of video
> I wish they had an ASL interpreter, reading lips doesn't always work.

Provide sign language interpretation in pre-recorded video (like movies) for Deaf people. You can use a split screen or add a smaller frame in the corner.

**Disabilities**: hearing
**WCAG number + conformance**: 1.2.6 AAA

***

## Media editing

### C7. Don’t use flashing lights
> I can't go to the concert with you, the strobe lights might give me a seizure.

Don’t use more than 3 flashes per second in your visuals to avoid triggering a seizure. Especially avoid bright flashes and the color red.

**Disabilities**: physical
**WCAG number + conformance**: 2.3.1 A, 2.3.2 AAA

-

### C8. Get rid of background noise in audio
> The traffic sounds makes it impossible to hear what the people are saying.

Edit the audio so there is little to no background noise in audio, or provide a way to turn off the background noise.

**Disabilities**: hearing
**WCAG number + conformance**: 1.4.7 AAA

***

## Writing

### C9. Provide a way to understand unusual words
> Half of this conversation is jargon. What does it all mean?!

Provide a way to understand unusual words like idioms and jargon, such as a glossary that the unusual word links to.

**Disabilities**: cognitive
**WCAG number + conformance**: 3.1.3 AAA

`The birthday party wasn’t a surprise because my sister _spilled the beans_.
-> _Spill the beans_: to reveal a secret unintentionally or indiscreetly`

-

### C10. Provide a way to expand abbreviations
> This just looks like a bunch of letters to me.

Provide a way to understand abbreviations, such as a glossary that the abbreviation links to or an explanation in the text.

**Disabilities**: cognitive
**WCAG number + conformance**: 3.1.4 AAA

`Our next guests for our AMA (Ask Me Anything) are the amazing Frida Kahlo and Georgia O'Keeffe!`

-

### C11. Write content at an 8th grade reading level
> The reading is so dense and complicated, who could ever finish it?

Write clearly and simply so that it reads at an 8th grade reading level. If the main content is too complex to simplify (like a scientific article), then provide a simple summary.

**Disabilities**: cognitive
**WCAG number + conformance**: 3.1.5 AAA

`Bad: The juxtaposition of positive and negative perspectives will be explored in this essay on the topic of visibly branding one's identity onto transportation vehicles in paradigms of public space.

Good: This essay explores pros and cons of bumpers stickers on cars.`

-

### C12. Provide pronunciation for ambiguous words
> My screen reader can't pronounce this word, so not sure what it actually says.

Provide a way to determine the specific pronunciation for ambiguous words, such as a phonetic spelling, a reading by ruby element, or a link to a glossary.

**Disabilities**: cognitive
**WCAG number + conformance**: 3.1.6 AAA

-

### C13. Write descriptive headings
> When long articles don't have any section titles, it's impossible to find what I want.

Use section headings to organize content. These headings should describe the topic/purpose to help people navigate.

**Disabilities**: cognitive, visual
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

### C14. Write descriptive link text
> Links that say 'Learn more' don't actually mean anything!

Write links so that users can understand the purpose of the link from the link text alone.

**Disabilities**: cognitive, visual
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

-

### C15. Write instructions that don’t rely on just one characteristic
> These instructions are telling me to press the blue button to save. Which one's blue?

If you are providing instructions for how to use something, use more than one characteristic to describe components (such as color, location, text, size, etc.) for people who are blind or visually impaired.

**Disabilities**: visual
**WCAG number + conformance**: 1.3.3 A
