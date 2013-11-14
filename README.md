#Bootstrap 3.0 Icon Picker

***

If you are looking for a way to create dynamic items(menu,tab,button) with dynamic icon provided by Bootstrap 3 as [glyphicon](http://getbootstrap.com/components/) and need a picker like color picker or date picker from where you can select the icon and corresponding icon-class goes to your form field(input) you are in right place!

## Demo

Do you want to see directives in action? Visit http://titosust.github.io/Bootstrap-icon-picker

## Installation

#### HTML HEAD:
```
&lt;link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" /&gt;
&lt;link href="css/icon-picker.min.css"  rel="stylesheet" type="text/css" /&gt;
&lt;script src="js/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="js/iconPicker.min.js"&gt;&lt;/script&gt;
```

#### JavaScript:
```
&lt;script type="text/javascript"&gt;
        $(function () {
            $(".icon-picker").iconPicker();
        });
&lt;/script&gt;
```

#### HTML BODY:
```
&lt;form method="post" &gt;
&lt;input type="text" name="someName" class="icon-picker" /&gt;
&lt;/form&gt;
```

<p>And you are done!</p>s 
