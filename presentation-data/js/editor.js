var u = 0;
console.log("hey");
d3.select("#editorEmbed").append("p").text("heeeey");

var htmlEditor = ace.edit("html_editor");
          htmlEditor.setTheme("ace/theme/monokai");
          htmlEditor.getSession().setMode("ace/mode/html");
          //htmlEditor.setValue("<h2>The second biggest header</h2>");
          //htmlEditor.setValue("<p>A paragraph</p>");
          //htmlEditor.insert("<p>A paragraph</p>");

var jsEditor = ace.edit("js_editor");
          jsEditor.setTheme("ace/theme/monokai");
          jsEditor.getSession().setMode("ace/mode/javascript");

var cssEditor = ace.edit("css_editor");
          cssEditor.setTheme("ace/theme/monokai");
          cssEditor.getSession().setMode("ace/mode/css");

/*Reveal.addEventListener( 'html', function() {
    // Called each time the slide with the "stats" state is made visible
    console.log("HTML!");
} );
Reveal.addEventListener( 'css', function() {
    // Called each time the slide with the "stats" state is made visible
    console.log("CSS");
} );*/

var selectedCode = htmlEditor.getValue();

var data_url1 = "data:text/html;charset=utf-8;base64," + $.base64.encode(selectedCode);
document.getElementById("result").src = data_url1;
//var codearr = [];

htmlEditor.getSession().on('change', function(e) {
    document.getElementById("result").src = "data:text/html;charset=utf-8;base64," + $.base64.encode(htmlEditor.getValue());
});
/*cssEditor.getSession().on('change', function(e) {
    document.getElementById("result").src = "data:text/html;charset=utf-8;base64," + $.base64.encode(cssEditor.getValue());
});
jsEditor.getSession().on('change', function(e) {
    document.getElementById("result").src = "data:text/html;charset=utf-8;base64," + $.base64.encode(jsEditor.getValue());
});*/

Reveal.addEventListener( 'fragmentshown', function( event ) {
  var codearr = [];
  for(var i = 0; i < $("div.col-xs-4.visible").length; i++) {
    //console.log($("div.col-xs-4.fragment.visible")[i].childNodes[3].id);
    //console.log(i);
    var ids = $("div.col-xs-4.visible")[i].childNodes[3].id;
    var codes = ace.edit(ids).getValue();
    //console.log(codes)

    codearr.push(codes);
  }

  var finalCode = "<script src='https://code.jquery.com/jquery-3.1.0.min.js' integrity='sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=' crossorigin='anonymous'></script>"+codearr[0] + "<style>"+codearr[1]+"</style>"+"<script>"+codearr[2]+"</script>";
  console.log(finalCode);

  data_url = "data:text/html;charset=utf-8;base64," + $.base64.encode(finalCode);
  document.getElementById("result").src = data_url;

  htmlEditor.getSession().on('change', function(e) {
    var htmlCode = "<script src='https://code.jquery.com/jquery-3.1.0.min.js' integrity='sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=' crossorigin='anonymous'></script>"+htmlEditor.getValue() + "<style>"+cssEditor.getValue()+"</style>"+"<script>"+jsEditor.getValue()+"</script>";

    data_url2 = "data:text/html;charset=utf-8;base64," + $.base64.encode(htmlCode);
    document.getElementById("result").src = data_url2;
  });
  cssEditor.getSession().on('change', function(e) {
    var cssCode = "<script src='https://code.jquery.com/jquery-3.1.0.min.js' integrity='sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=' crossorigin='anonymous'></script>"+htmlEditor.getValue() + "<style>"+cssEditor.getValue()+"</style>"+"<script>"+jsEditor.getValue()+"</script>";

    data_url2 = "data:text/html;charset=utf-8;base64," + $.base64.encode(cssCode);
    document.getElementById("result").src = data_url2;
  });
  jsEditor.getSession().on('change', function(e) {
    var jsCode = "<script src='https://code.jquery.com/jquery-3.1.0.min.js' integrity='sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=' crossorigin='anonymous'></script>"+htmlEditor.getValue() + "<style>"+cssEditor.getValue()+"</style>"+"<script>"+jsEditor.getValue()+"</script>";

    data_url3 = "data:text/html;charset=utf-8;base64," + $.base64.encode(jsCode);
    document.getElementById("result").src = data_url3;
  });

    // event.fragment = the fragment DOM element
    //console.log(event.fragment.childNodes[3].id);
    /*var editorID = event.fragment.childNodes[3].id;
    var code = ace.edit(editorID).getValue();

    selectedCode = htmlEditor.getValue() + "<style>"+code+"<style>";

    data_url1 = "data:text/html;charset=utf-8;base64," + $.base64.encode(selectedCode);
    document.getElementById("result").src = data_url1;

    console.log(ace.edit(editorID).getValue());*/
} );
Reveal.addEventListener( 'fragmenthidden', function( event ) {
  console.log($("div.col-xs-4.fragment.visible"));
    // event.fragment = the fragment DOM element
    //console.log("k...");
    //console.log(event.fragment.childNodes[3].id);
} );

console.log($(".visible"));

/*$("h2").click(function(){
  var html_code = htmlEditor.getValue();
  var js_code = jsEditor.getValue();
  var css_code = cssEditor.getValue();

  //<script src="processing-1.0.0.min.js"></script>
  //<canvas data-processing-sources="hello-web.pde"></canvas>

  var all_code = //"<script src='https://d3js.org/d3.v4.min.js'></script>"+
                  //"<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/css/bootstrap.min.css' integrity='sha384-MIwDKRSSImVFAZCVLtU0LMDdON6KVCrZHyVQQj6e8wIEJkW4tvwqXrbMIya1vriY' crossorigin='anonymous'>"+
                  "<style>"+css_code+"</style>"+
                  html_code+
                  "<script>"+js_code+"</script>";

  var data_url = "data:text/html;charset=utf-8;base64," + $.base64.encode(all_code);
  document.getElementById("result").src = data_url;

});*/