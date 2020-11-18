var i=1;
 
            function addtask() {
                var text = document.getElementById("taskname").value;
                var t = document.createElement("label");
                var li = document.createElement("li");
                var check = document.createElement("input");
                t.id="label"+i;
                t.innerHTML=text;	
                check.type = "checkbox";
                check.id = "check"+i;
                check.checked = false;
                

                var ut = document.createElement("input");
                ut.type = "text";
                ut.id = "name"+i;

                var edit = document.createElement("button");
                edit.innerHTML = "Edit Task";
                edit.id = "edit";
                console.log(edit.id);
                edit.addEventListener("click", edittask, false);
                edit.myParam = i;

                var dlt = document.createElement("button");
                dlt.innerHTML = "Delete Task";
                dlt.id = "delete";
                console.log(dlt.id);
                dlt.addEventListener("click", deletetask);



                if (text == '') {
                    alert("PLease add A Task");
                } else {
                    li.appendChild(check);
                    li.appendChild(t);
                    li.appendChild(ut);
                    li.appendChild(edit);
                    li.appendChild(dlt);
                    document.getElementById("show").appendChild(li);
                    console.log(text);
                }

            document.getElementById("taskname").value = "";
            i++;
            }

            function deletetask() {
                var mytask = document.querySelectorAll("li");
                var i;
                for (i = 0; i < mytask.length; i++) {
                    this.closest("li").remove();
                }


            }
            function edittask(evt) {
            	var j = evt.currentTarget.myParam;
                var mytask = document.getElementById("name"+j).value;
                document.getElementById("label"+j).innerHTML= mytask;

            document.getElementById("name"+j).value = "";

            }

