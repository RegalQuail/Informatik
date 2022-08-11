# Informatik

3.y Informatik  

## Important information

Github link: <https://github.com/mpsteenstrup/InformatikRysensteen>

## Making a website

### Modul 11/8/2022

Files:

```text
index.html
index.css
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
