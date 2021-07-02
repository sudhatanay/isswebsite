document.getElementById("NavigationBar").style.position = 'fixed';

document.getElementById("home").addEventListener("mouseover", function() {
    this.style.backgroundColor = "cornflowerblue";
});
document.getElementById("home").addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
});

document.getElementById("skills").addEventListener("mouseover", function() {
    this.style.backgroundColor = "cornflowerblue";
});
document.getElementById("skills").addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
});

document.getElementById("education").addEventListener("mouseover", function() {
    this.style.backgroundColor = "cornflowerblue";
});
document.getElementById("education").addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
});

document.getElementById("contact").addEventListener("mouseover", function() {
    this.style.backgroundColor = "cornflowerblue";
});
document.getElementById("contact").addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
});

document.getElementById("form").addEventListener("mouseover", function() {
    this.style.backgroundColor = "cornflowerblue";
});
document.getElementById("form").addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
});

document.getElementById("NavigationBar").style.position = 'fixed';

var dict = {};
if (typeof (Storage) !== "undefined") 
{
    for (var key in sessionStorage) 
    {
        try 
        {
            var data = JSON.parse(sessionStorage.getItem(key));
            if (data.check === "ThisIsFormData") 
            {
                document.getElementById('InsertHere').innerHTML += '<tr><td>' + key + '</td><td>' + data.lastname + '</td><td>' + data.skill +
                    '</td><td>' + data.level + '</td></tr>';
            }
        } 
        
        catch (err) 
        {
            ;
        }
    }
}

function validateForm() 
{
    var x = document.forms["skillform"]["fname"].value;
    if (x == "") {
        alert("First Name must be entered");
        return false;
    }

    x = document.forms["skillform"]["lname"].value;
    if (x == "") {
        alert("Last Name must be entered");
        return false;
    }

    x = document.forms["skillform"]["skillname"].value;
    if (x == "") {
        alert("Skill must be entered");
        return false;
    }
    
    x = document.forms["skillform"]["proficiency"].value;
    if (x == "") {
        alert("Proficiency must be entered");
        return false;
    }
    addData();
    reset();
    alert("Table Updated");
    return false;
}

function addData() {
    var firstname = document.forms["skillform"]["fname"].value;
    var lastname = document.forms["skillform"]["lname"].value;
    var skill = document.forms["skillform"]["skillname"].value;
    var level = document.forms["skillform"]["proficiency"].value;
    var check = "ThisIsFormData";
    dict[firstname] = { lastname, skill, level, check };
    if (typeof (Storage) !== "undefined") 
    {
        sessionStorage.setItem(firstname, JSON.stringify(dict[firstname]));
    }
    document.getElementById('InsertHere').innerHTML += '<tr><td>' + firstname + '</td><td>' + lastname + '</td><td>' + skill +
        '</td><td>' + level + '</td></tr>';
}

function reset() 
{
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("skillname").value = "";
    document.getElementById("level").value = "";
    //document.getElementById
}