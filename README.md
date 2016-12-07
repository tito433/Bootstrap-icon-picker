# Bootstrap v4 Icon Picker - [Demo](http://tito433.github.io/Bootstrap-icon-picker)

[jQuery](https://jquery.com/) plugin for picking Bootstrap v4 Icons

## Dependencies
1. [jQuery 3.x](http://code.jquery.com/jquery-3.1.1.min.js)
2. [Bootstrap v4](https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css)


#### HTML:
```
<head>
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" integrity="sha384-AysaV+vQoT3kOAXZkl02PThvDr8HYKPZhNT5h/CXfBThSRXQ6jW5DO2ekP5ViFdi" crossorigin="anonymous">
 <link href="css/icon-picker.min.css"  rel="stylesheet" type="text/css" />
</head>
<body>
  <form method="post" >
   <input type="text" name="someName" class="icon-picker" />
  </form>
</body>
<script src="http://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="js/iconPicker.min.js"></script>
<script type="text/javascript">
    $(function () {
        $(".icon-picker").iconPicker();
    });
</script>
```