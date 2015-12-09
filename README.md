[Assemble]:                http://assemblecss.com
[Assemble Core]:           https://github.com/lukelarsen/assemble-core

# Assemble Tips
Assemble Tips is a component of the [Assemble] CSS Framework. It will give you a solid base for using media players in your project. It has some default styles that can easily be overridden so you can add your own look.

## Requirements
Assemble Tips requires [Assemble Core].

## Installation
npm install assemble-tips --save-dev<br>
You will then need to load the tips.js file in this repo into your project.

## Usage
### Gulp
```js
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var assembleCore = require('assemble-core');
var assembleTips = require('assemble-tips');

gulp.task('css', function () {
    var processors = [
        assembleCore,
        assembleTips
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});
```

## Options
Options are set with variables. These variables are already set with their default values so they will just work out of the box. If you wish to change them just define the variable you want to change before you load the _assemble-tips.css file. You may wish you see [Assemble Core] for more examples and directions for setting up a Assemble project.

### Design Variables

##### $tip-background-color
- Set the tip background color.
- Default: #002;
- Type: Color
```css
$tip-background-color: #CCC;
```

##### $tip-text-color
- Set the tip text color.
- Default: #FFF;
- Type: Color
```css
$tip-text-color: #000;
```

##### $tip-close-background-color
- Set the tip close background color.
- Default: #666;
- Type: Color
```css
$tip-close-background-color: #999;
```

##### $tip-close-background-hover-color
- Set the tip close background hover color.
- Default: #444;
- Type: Color
```css
$tip-close-background-hover-color: #555;
```

##### $tip-close-text-color
- Set the tip close text color.
- Default: #FFF;
- Type: Color
```css
$tip-close-text-color: #CCC;
```

##### $tip-close-text-hover-color:
- Set the tip close text hover color.
- Default: #FFF;
- Type: Color
```css
$tip-close-text-hover-color: #CCC;
```

##### $tip-padding
- Set the tip padding.
- Default: 5px 10px;
- Type: String
```css
$tip-padding: 15px;
```

##### $tip-close-padding
- Set the tip close padding.
- Default: 5px 9px 8px;
- Type: String
```css
$tip-close-padding: 3px;
```

##### $tip-font-size
- Set the tip font size.
- Default: 12px;
- Type: Number
```css
$tip-font-size: 14px;
```

##### $tip-line-height
- Set the tip line height.
- Default: 15px;
- Type: Number
```css
$tip-line-height: 18px;
```

##### $tip-transition
- Set what transition on tips should be.
- Default: 0.3s ease;
- Type: String
```css
$tip-transition: 0.5s bounce;
```


### Modifier Variables

##### $tip-container--right
- Turn on/off the ability to put the tip container at the right. If true a class of .tip-container--right will be generated. This class requires .tip-container.
- Default: false;
- Type: Boolean
```css
$tip-container--right: true;
```

##### $tip-enable-width
- Turn on/off the ability to allow tips to have fixed widths. If true a class of .tip--fixed-width will be generated. This class requires .tip. You will set the width with the $tip-width variable.
- Default: false;
- Type: Boolean
```css
$tip-enable-width: true;
```

##### $tip-width
- Set the width of tips. Needs $tip-enable-width to be true.
- Default: 210px;
- Type: Number
```css
$tip-width: 250px;
```


### Placement Variables

##### $tip-enable-top
- Turn on/off the ability to show the tip on top of the trigger point. If true a class of .tip--top will be generated. This class requires .tip.
- Default: false;
- Type: Boolean
```css
$tip-enable-top: true;
```

##### $tip-top-top-position
- Set how far from the top the top tips should be.
- Default: 20px;
- Type: Number
```css
$tip-top-top-position: 10px;
```

##### $tip-top-right-position
- Set how far from the rigft the top tips should be.
- Default: 26px;
- Type: Number
```css
$tip-top-right-position: 20px;
```

##### $tip-enable-bottom
- Turn on/off the ability to show the tip on bottom of the trigger point. If true a class of .tip--bottom will be generated. This class requires .tip.
- Default: false;
- Type: Boolean
```css
$tip-enable-bottom: true;
```

##### $tip-bottom-bottom-position
- Set how far from the bottom the top tips should be.
- Default: 20px;
- Type: Number
```css
$tip-bottom-bottom-position: 10px;
```

##### $tip-bottom-right-position
- Set how far from the rigft the bottom tips should be.
- Default: 26px;
- Type: Number
```css
$tip-bottom-right-position: 20px;
```

##### $tip-enable-right
- Turn on/off the ability to show the tip on right of the trigger point. If true a class of .tip--right will be generated. This class requires .tip.
- Default: false;
- Type: Boolean
```css
$tip-enable-right: true;
```

##### $tip-right-right-position
- Set how far from the right the right tips should be.
- Default: calc(-$tip-width - 8);
- Type: Number
```css
$tip-top-top-position: calc(-$tip-width - 10);
```

##### $tip-right-top-position
- Set how far from the top the right tips should be.
- Default: -7px;
- Type: Number
```css
$tip-top-right-position: -10px;
```

##### $tip-enable-left
- Turn on/off the ability to show the tip on left of the trigger point. If true a class of .tip--left will be generated. This class requires .tip.
- Default: false;
- Type: Boolean
```css
$tip-enable-left: true;
```

##### $tip-left-left-position
- Set how far from the left the left tips should be.
- Default: calc(-$tip-width - 33);
- Type: Number
```css
$tip-top-top-position: calc(-$tip-width - 38);
```

##### $tip-left-top-position
- Set how far from the top the left tips should be.
- Default: -7px;
- Type: Number
```css
$tip-top-right-position: -10px;
```