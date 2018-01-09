
// simple function to count occurance of "check" in array arr
//
function count(check, arr){
    var count = 0;
    for(var i = 0; i < arr.length; ++i){
        if(arr[i] == check) {
            count++;
        }
    }    
    return count;
}

// simple lematization function to remove redundant and low impact
// characters from string (s)
//
var lemma_list = ["and", "or", "the", "of", ":", ",", ".", "!", "for", "at",
     "in", '"', "'", "/", "(", ")", "-", "on", "it"]
function lemmatize(s){
    for(var i in lemma_list){
        s = s.replace(i, " ");
    }
    return s;
}

/* train data set provided by the user*/
var D = {};
var D_1 = {};
var D_2 = {};
var b = 0.0;

function train(){
    var tr_set_tb = document.getElementById("tr_set"); 
    var thr = parseFloat(document.getElementById("thr").value);
    var lemma = document.getElementById("lemma").checked;
    var lab_1 = "";
    var lab_2 = "";

    // First setup a dict (D) of all words in set (S)
    //
    for ( var y=1; y<tr_set_tb.rows.length; y++ ){
        var v = tr_set_tb.rows[y].cells[1].getElementsByTagName("INPUT")[0].value;
        var lab = tr_set_tb.rows[y].cells[0].getElementsByTagName("SELECT")[0].value;
        if (lemma == true){
            v = lemmatize(v);
        }
        v.split(" ").forEach( function(element, index) {
            if (v != ""){
                if (D[element]) {
                    D[element] += 1;
                }   
                else{
                    D[element] = 1;
                }
            }
        }); 
    }

    // Second, setup probability vectors
    //
    var m_1 = 0;
    var m_2 = 0;
    var w_1 = Object.keys(D).length;
    var w_2 = Object.keys(D).length;
    
    let m = tr_set_tb.rows.length;


    for(key in D){
        D_1[key] = 1;
        D_2[key] = 1;
    }

    // for each word in set (S) add values to each vector
    //
    for ( var y=1; y<tr_set_tb.rows.length; y++ ){
        var v = tr_set_tb.rows[y].cells[1].getElementsByTagName("INPUT")[0].value;
        var lab = tr_set_tb.rows[y].cells[0].getElementsByTagName("SELECT")[0].value;

        if (lemma == true){
            v = lemmatize(v);
        }
        var v_spl = v.split(" ");

        if (lab == "lab_1_opt"){
            m_1 += 1;
            v_spl.forEach( function(element, index) {
                var c = count(element, v_spl);       
                D_1[element] += c;
                w_1 += c;
            });     
        }
        else if (lab == "lab_2_opt") {
            m_2 += 1;
            v_spl.forEach( function(element, index) {
                var c = count(element, v_spl);
                D_2[element] += c;
                w_2 += c;
            });        
        }
    }

    // normalize data by converting to log scale rather than linear
    //
    for(var key in D){
        D_1[key] = parseFloat( (D_1[key]*1.0)/(w_1*1.0) );
        D_2[key] = parseFloat( (D_2[key]*1.0)/(w_2*1.0) );
        
    }

    // compute the threshold for accepting and denying
    //
    b = parseFloat(Math.log10(thr)*1.0 + Math.log10(m_1)*1.0 - Math.log10(m_2)*1.0);
}

function classify(){
    var X = document.getElementById("test").value;
    var lemma = document.getElementById("lemma").checked;
    let d_1_res = document.getElementById("lab_1");
    let d_2_res = document.getElementById("lab_2");
    let result = document.getElementById("result");
    var t = -1 * b;

    if (lemma == true){
        X = lemmatize(X);
        console.log(X);
    }

    var v_spl = X.split(" ");

    for(key in D){
        var c = count(key, v_spl);
        t += c * (Math.log10(D_2[key]) - Math.log10(D_1[key]))
    }
    
    if (t > 0){
         result.innerHTML = d_2_res.value + "  : " + t;
    }
    else{
        result.innerHTML = d_1_res.value + "  : " + t;
    }

}

// add rows to the training table
//
function tr_set_add(){
    var tr_set_tb = document.getElementById("tr_set");
    let lab_1 = document.getElementById("lab_1").value;
    let lab_2 = document.getElementById("lab_2").value;

    var tr = document.createElement("tr");
    var td_string = document.createElement("td");
    var td_label = document.createElement("td");
    
    var td_str = document.createElement("INPUT");
    td_str.style.width = "97%";
    var td_lab = document.createElement("SELECT");
    var lab_1_opt = document.createElement("OPTION");
    var lab_2_opt = document.createElement("OPTION");

    lab_1_opt.setAttribute("value", "lab_1_opt");
    lab_2_opt.setAttribute("value", "lab_2_opt");

    var t1 = document.createTextNode(lab_1);
    var t2 = document.createTextNode(lab_2);
    lab_1_opt.appendChild(t1);
    lab_2_opt.appendChild(t2);

    td_lab.appendChild(lab_1_opt);
    td_lab.appendChild(lab_2_opt);

    td_string.appendChild(td_str);
    td_label.appendChild(td_lab);
    tr.appendChild(td_label);
    tr.appendChild(td_string);
    tr_set_tb.appendChild(tr);
}

// delete rows from the training table
//
function tr_set_del(){
    var tr_set_tb = document.getElementById("tr_set");   
    if (tr_set_tb.rows.length > 1){
        tr_set_tb.deleteRow(-1);    
    } 
    
}
