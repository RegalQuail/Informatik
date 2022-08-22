# Informatik

3.y Informatik  

## Important information

Github link: <https://github.com/mpsteenstrup/InformatikRysensteen>

## Making a website

### Modul 1: 11/8/2022

Files:

```text
index.html
style.css
index.js
```

We can use the `<link>` and `<script>` tags for the CSS and JS files respectively to connect them
to the HTML file:

```html
<link rel="stylesheet" href="style.css">
<script src="index.js" defer></script>
```

The `defer` keyword makes the JS load after the rest of the page has loaded.

We can also just write CSS and JS code inside the HTML file without the need for any additional  
file by writing inside `<style>` and `<script>` tags respectively, all in the header of the HTML file:

```html
<head>
    <style>Some CSS</style>
    <script>Some JS</script>
</head>
```

We can use the `<a>` tag to insert links:
`<a href="http://google.com">This is a link to google.com</a>`

Or an `<img>` tag to insert images:
`<img src="myImage.png" width="100" alt="This is an image">`

The unordered list tag `<ul>` creates a list with no specific order:

```html
<ul>
    <li>This is a list item</li>
    <li>This is a list item</li>
    <li>This is a list item</li>
</ul>
```

Contrary to the ordered list `<ol>`:

```html
<ol>
    <li>This</li>
    <li>is</li>
    <li>an</li>
    <li>ordered</li>
    <li>list</li>
</ol>
```

### Modul 2: 15/8/2022

#### Homework

Tekst om internettets historie:
<https://github.com/mpsteenstrup/webteknologier/blob/master/filer/Historien_om_internettet_politiken2014.pdf>

Paul Otlet: forsøgt at samle alle viden på mikrofilm
Internettets "fødselsdag": juli 1945, når Memex blev først præsenteret. En maskine med netværk og viden.

CSS stands for Cascading Style Sheet. It can be written inside the HTML file, or in its own file. Here, our CSS file is `style.css`. As said before, the CSS file needs to be linked to the HTML file via the `<link>` tag inside the `<head>` tag, as so:

`<link rel="stylesheet" href="style.css">`

To style a component:  

```css
h1 {
    font-family: sans-serif;
    color: red;
    text-aligned: center;
}
```

Tags can also have specifications/identifications, so you can style them individually:  

```html
<p id="para1"></p>
<p id="para2"></p>
```

Global styling (every `<p>` tag):  

```css
p {
    font-family: sans-serif;
    text-align: center;
}
```

Individual styling using their ID:  

```css
#para1 {
    color: red;
    font-size: 24px;
}

#para2 {
    color: blue;
    font-size: 18px;
}
```

Just like IDs, we can use classes:  

```html
<div class="red"></div>
<div class="blue"></div>
```

Their selector is a ".":  

```css
.red {
    color: red;
}

.blue {
    color: blue;
}
```

### Modul 3: 22/08/2022

Making a new website
The website will be a Portfolio

Files:  

```text
myWebsite.html
myStyle.css
contact.html
```
