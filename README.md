# Informatik

3.y Informatik  

## Making a website

### Modul 11/8/2022

Files:

```text
index.html
index.css
index.js
```

We can use the `<link>` and `<script>` tags for the CSS and JS file respectively to connect them
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
