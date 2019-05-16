---
title: "BEM may be no longer necessary - Here's Why"
date: "2017-08-21"
published: false
---

CSS was designed for a simpler age. An age in which web pages were small and plain. In which everything was on the page at the same time. Where changing the DOM meant reloading the whole page, and JavaScript was a strange and foreign thing.

This is not the world we live in today.

A modern webapp loads content and templates dynamically using JavaScript. An app might have hundreds, or thousands of different components, any or all of which might be on the page at once in a thousand diffent configurations, and CSS does not cope well with this, because CSS is inherantly global.

> CSS is inherantly global.

## View Encapsulation

And so, we looked for ways to make our CSS more local, to make rules apply in one place only. At first glance, this is a simple problem. Say we have a component.


<div class="catList">
	<h1>All the little cats in the world</h1>
	<p>And they all love you</p>
</div>


View encapulation is a very cool thing.

The purpose of BEM is to create view encapsulation. We do this by adding a unique class to each and evey element we want to style. The developer is responsible for creating that class, and following the rules to ensure that it is indeed unique.

The style rules we write then match those specific classes, without nesting, or any of the other more interesting selectors that CSS gives us.

## BEM addressses a genuine problem

In old school web design, CSS is disconnected from HTML. This means that:

1. It's easy to forget an old rule. Pruning CSS is hard work
2. It's easy to write messy rules.
3. Especially, it's easy to write rules that apply to parts of the page they shouldn't.

Let's assume we have a simple email form component:


```html
<input name="email">
<button>Hello</button>
```

BEM would have us decorate it like so:


```html
<button class="">Hello</button>
```

We already have several lovely ways to acieve view encapsulation. First up, good old SASS does the job perfectly reasonably:

```sass
app-button {
	button {
	  background:red
	}
}
```


Any rules we apply to the component will only apply to the component and it's children. This will generate

```sass
app-button button {
	color:red;
}
```
