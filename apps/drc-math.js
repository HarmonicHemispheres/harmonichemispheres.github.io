
function opt_timeType(cur) {
    if (cur.innerHTML == "Time (standard)"){
       cur.innerHTML = "Time (military)";
        cur.value = 1;
    }
    else if (cur.innerHTML == "Time (military)"){
        cur.innerHTML = "Time (standard)";
        cur.value = 0;
    }
    tmpt_gen();
}

function tmpt_settings() {
    document.getElementById("timepts_options").innerHTML = "";
    var length = document.getElementById("i_timepoints").value;
    var output = "";
    if (length < 1){ length = 1 }

    /* Add the headings */
    output += "<tr>";
    for ( i=0; i < length; i++ ){
        output += "<td><input type='text' placeholder='titles' id='"+i+"_tpt_title' style='width:85%; font-size: 15px; padding: 5px;' onchange='update_titles()'/></th>";
    }
    output += "</tr>";

    /* Add the actual values for the headings */
    output += "<tr>";
    for ( i=0; i < length; i++ ){
        output += "<td><input type='number' placeholder='values (min)' id='"+i+"_tpt' style='width:85%; padding: 5px;' onchange='update_times();'/></td>";
    }
    output += "</tr>";
    document.getElementById("timepts_options").innerHTML += output;
}

function get_times() {
    var rows = document.getElementById("i_treatments").value;
    var cols = document.getElementById("i_timepoints").value;
    var genList = new Array(rows);
    for (var y=0; y<rows; y++){
        genList[y] = new Array(cols);
        for (var x=0; x<cols; x++){
            genList[y][x] = x+y;
        }
    }
    return genList;
}

// takes string --> returns int
function time_to_int(t){
    var ret = parseInt( t.split(":")[0] * 60 ) + parseInt( t.split(":")[1] );
    if (t.includes("pm")){
        ret += 720;
    }
    return ret;
}

function mil_to_std_time(t) {
    t = time_to_int(t);
    return int_to_time(t, mil=0);
}

// takes int --> returns string
function int_to_time(i, mil=1){
    var mins = i%60;
    if (mins < 10){
        mins = "0" + mins;
    }
    if (mil == 1){
        if (1440 <= i && i < 1500){
            return "24:"+mins;
        }
        return Math.floor((i%1440)/60)+":"+mins; 
    }
    else{
        if (720 <= i && i < 780 || 1440 <= i && i < 1500){
            return "12:"+mins;
        }
        return Math.floor((i%720)/60)+":"+mins; 
    }
}

// calculates the timepoints in mil time for the treatment
function calc_time(start){
    var tmPts = document.getElementById("i_timepoints").value;
    //start = time_to_int(start);
    var output = new Array(tmPts+1);
    
    for (var i=0; i<tmPts; i++){
        output[i] = int_to_time(start); 
        start += parseInt( document.getElementById(i+"_tpt").value );  
    }
    output[tmPts] = int_to_time(start); 
    return output;
}

function tmpt_status(t){
    var date = new Date;
    var cur_hr = date.getHours();
    var cur_min = date.getMinutes();
    var cur = cur_hr + ":" + cur_min;
    cur = time_to_int(cur);
    t = time_to_int(t);
    // within 5min urgent upcoming
    if (0 < (t - cur) && (t - cur) <= 5){
        return "#ff4d4d";
    }
    // upcoming but not urgent
    else if (t - cur > 5){
        return "#66ff66";
    }
    else{
        return "#006666";
    }
}

// updates the times in the table without modifying the titles.
function update_times(){
    var tm_type = parseInt( document.getElementById("opt_timeType").value );
    if (document.getElementById("timepts_options").rows.length < 1){
        tmpt_settings();
    }
    var t = document.getElementById("i_start").value;
    var stagger = parseInt( document.getElementById("i_stagger").value );
    t = time_to_int(t);
    var rows = document.getElementById("i_treatments").value;
    var cols = document.getElementById("i_timepoints").value;
    var table = document.getElementById("timepts_tbl");
    cols = parseInt(cols) + 1;

    for (var r=0; r <= rows; r++) {
        if (r > 0) {
            var t_L = calc_time( t + stagger * (r-1));
        }
        for (var c=0; c <= cols; c++) {
            if (c > 0 && r > 0){
                tm_color = tmpt_status(t_L[c-1]);
                tm_out = time_to_int(t_L[c-1]);
                tm_out = int_to_time(tm_out, tm_type);
                table.rows[r].cells[c].innerHTML = tm_out;
                table.rows[r].cells[c].style.backgroundColor = tm_color;
            }
        }
    }
}

// updates the titles of the table.
function update_titles(){
    var rows = document.getElementById("i_treatments").value;
    var cols = document.getElementById("i_timepoints").value;
    var table = document.getElementById("timepts_tbl");

    for (var r=0; r <= rows; r++) {
        for (var c=0; c <= cols; c++) {
            if (c > 0 && r == 0){
                var idTest = (c-1)+"_tpt_title";
                table.rows[r].cells[c].innerHTML = document.getElementById(idTest).value;
            }
        }
    }
}

// generate the output table
function tmpt_gen(){
    //var myVar = setInterval(tmpt_gen_comp, 100);
    var tm_type = parseInt( document.getElementById("opt_timeType").value );
    var tbl = tmpt_gen_comp(tm_type);
}

function tmpt_gen_comp(tm_type=1){
    if (document.getElementById("timepts_options").rows.length < 1){
        tmpt_settings();
    }
    console.log("generating timepoints");
    var t = document.getElementById("i_start").value;
    var stagger = parseInt( document.getElementById("i_stagger").value );
    t = time_to_int(t);
    var rows = document.getElementById("i_treatments").value;
    var cols = document.getElementById("i_timepoints").value;
    cols = parseInt(cols) + 1;
    var output = "";
    var tm_color, tm_out;

    for ( var y=0; y<=rows; y++ ){
        output += "<tr>";
        if (y > 0) {
            var t_L = calc_time( t + stagger * (y-1));
        }
        for ( var x=0; x<=cols; x++ ){
            /*
            if (y > 0 && x == cols){
                output += "<td><input type='text' placeholder='data," +
                    "seperate with spaces' id='trtmnt_"+y+"_data'" +
                    "style='width:90%; padding:5px;' onchange='update_data()'/></td>";
            }
            */

            // cells with col titles
            if (y == 0){

                //if (x == cols){
                //    output += "<td style='padding:5px;'>Data</td>";
                //}
                if (x == 0){
                    output += "<td style='padding:5px;'>Groups</td>";
                }
                else if (x == cols){
                    output += "<td style='padding:5px;'>End</td>";
                }
                else if (x < cols){
                    var idTest = (x-1)+"_tpt_title";
                    output += "<td style='padding:5px;'>"+ document.getElementById(idTest).value+"</td>";
                }
            }

            // cells with timepoints
            else if (x > 0 && y > 0) {
                tm_color = tmpt_status(t_L[x-1]);
                tm_out = time_to_int(t_L[x-1]);
                tm_out = int_to_time(tm_out, tm_type);
                output += "<td style='padding:5px; background-color:"+tm_color+"'>"+ tm_out +"</td>";
            }
            else if (x == 0 && y > 0){
                output += "<td><input type='text' placeholder='group' id='trtmnt_"+y+"'" +
                    " style='width:90%; padding:5px;'/></td>";
            }
            
            else{
                output += "<td style='padding:5px;'>void</td>";
            }
        }
        output += "</tr>";
    }
    document.getElementById("timepts_tbl").innerHTML = output;
}

function printPage() {
    window.print();
}
function showInfo(){
    var x = document.getElementById("info");
    if (x.style.display == "none"){
        x.style.display = "block";
    }
    else{ x.style.display = "none"; }
}


