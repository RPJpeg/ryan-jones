    var skillhtml=d3.select(document.getElementById('skillhtml'));
    var skillcss=d3.select(document.getElementById('skillcss'));
    var skilljs=d3.select(document.getElementById('skilljs'));
    var skillhtml=d3.select(document.getElementById('skillboot'));
    var skillcss=d3.select(document.getElementById('skillphotoshop'));
    var skilljs=d3.select(document.getElementById('skillillustrator'));

    start();

    function onClick1() {
        deselect();
        skillhtml.attr("class","selectedRadial");
    }

    function onClick2() {
        deselect();
        skillcss.attr("class","selectedRadial");
    }

    function onClick3() {
        deselect();
        skilljs.attr("class","selectedRadial");
    }
    function onClick4() {
        deselect();
        skillhtml.attr("class","selectedRadial");
    }

    function onClick5() {
        deselect();
        skillcss.attr("class","selectedRadial");
    }

    function onClick6() {
        deselect();
        skilljs.attr("class","selectedRadial");
    }

    function labelFunction(val,min,max) {

    }

    function deselect() {
        skillhtml.attr("class","radial");
        skillcss.attr("class","radial");
        skilljs.attr("class","radial");
        skillboot.attr("class","radial");
        skillphotoshop.attr("class","radial");
        skillillustrator.attr("class","radial");
    }

    function start() {

        var rp1 = radialProgress(document.getElementById('skillhtml'))
                .label("HTML")
                .onClick(onClick1)
                .diameter(150)
                .value(85)
                .render();

        var rp2 = radialProgress(document.getElementById('skillcss'))
                .label("CSS")
                .onClick(onClick2)
                .diameter(150)
                .value(80)
                .render();

        var rp3 = radialProgress(document.getElementById('skilljs'))
                .label("Javascript/jQuery")
                .onClick(onClick3)
                .diameter(150)
                .value(45)
                .render();

        var rp4 = radialProgress(document.getElementById('skillboot'))
                .label("Bootstrap")
                .onClick(onClick1)
                .diameter(150)
                .value(95)
                .render();

        var rp5 = radialProgress(document.getElementById('skillphotoshop'))
                .label("Photoshop")
                .onClick(onClick2)
                .diameter(150)
                .value(80)
                .render();

        var rp6 = radialProgress(document.getElementById('skillillustrator'))
                .label("Illustrator")
                .onClick(onClick3)
                .diameter(150)
                .value(100)
                .render();

    }
