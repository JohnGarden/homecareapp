$(document).ready(function() {
    $.getScript('scripts/jOWL.js', function() {
        $.getScript('scripts/jOWL_UI.js', function() {
            renderList();
            testOntology();
        });
    });
});

function testOntology() {
    var options = {
        locale: 'en'
    };
    jOWL.load("data/homecare.owl", function() {
        $('.loader').hide();
        $('#demo').show();
        //initialize UI components
        var tree = $('#treeview').owl_treeview({
            rootThing: true
        });
    }, options);
};

function renderList() {
    var db;
    db = window.openDatabase("BrainTumorDB", "1.0", "Brain Tumor Database", 2 * 1024 * 1024);
    db.transaction(createDB, errorCB, successCB);

    function createDB(tx) {
        //tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS PROTOCOL (title, image, description)');

    }

    function errorCB(err) {
        alert("Error processing SQL: " + err.code);
    }

    function successCB() {
        // alert("YEAH!!!!");
    }

    function getData() {
        var results = [];
        $.get('db_example.json', function(data) {
            var dataSize = Object.keys(data).length;
            for (var i = dataSize - 1; i >= 0; i--) {
                results.push(data[i]);
            }

            console.log("first = " + results);
            // console.log(Object.keys(data).length);
            // dbHandler.populateDB(JSON.parse(data));
            return results;
        });
    }
    var results = [];
    results = getData();

    console.log(results);

    var htmlstring = '';

    // // var len = results.length;

    // for (var i = 0; i < len; i++) {
    //     htmlstring += '<li>' + results[i].title + ' image= ' + results[i].image + '</li>';
    // }

    $('#resultList').html(htmlstring);
    $('#resultList').listview('refresh');

}