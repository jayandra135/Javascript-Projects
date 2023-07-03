const button = document.getElementById("btn1");
const res = document.getElementById("result");

function getValue() {
    var selectItems = document.getElementById("selectItems").value;
    //console.log(selectItems);
    return selectItems;

}
button.addEventListener("click", () => {

    var selectItems = getValue();

    if (selectItems === "Text") {
        console.log("inside text");
        let div = document.createElement("div");
        div.className = "box1";
        res.appendChild(div);

        let labelInput = document.createElement("input");
        labelInput.setAttribute("id", "inp1");
        labelInput.setAttribute("type", "text")
        div.appendChild(labelInput);

        let labelBtn = document.createElement("button");
        labelBtn.className = "btn2";
        labelBtn.innerHTML = "ADD";
        div.appendChild(labelBtn);

        labelBtn.addEventListener("click", () => {
            let TextLabel = document.createElement("label");
            TextLabel.className = "newlabel";
            TextLabel.innerHTML = labelInput.value;
            div.appendChild(TextLabel);
            labelInput.style.display = "none";
            labelBtn.remove();
        });
        let div1 = document.createElement("div");
        div1.className = "box2";
        res.appendChild(div1);


        let addTextInput = document.createElement("input");
        // addTextInput.className = "input1";
        addTextInput.setAttribute("id", "inp1");
        addTextInput.placeholder = "text";
        addTextInput.setAttribute("type", "text");
        div1.appendChild(addTextInput);

        let closeBtn = document.createElement("button");
        closeBtn.className = "closebtn"
        closeBtn.innerHTML = "X";
        closeBtn.addEventListener("click", () => {
            div.innerHTML = "";
            div1.innerHTML = "";
        });
        div1.appendChild(closeBtn);
    }
    if (selectItems === "Number") {
        console.log("inside text");
        let div = document.createElement("div");
        div.className = "box1";
        res.appendChild(div);

        let labelInput = document.createElement("input");
        labelInput.setAttribute("id", "inp1");
        labelInput.setAttribute("type", "text")
        div.appendChild(labelInput);

        let labelBtn = document.createElement("button");
        labelBtn.className = "btn2";
        labelBtn.innerHTML = "ADD";
        div.appendChild(labelBtn);

        labelBtn.addEventListener("click", () => {
            let TextLabel = document.createElement("label");
            TextLabel.className = "newlabel";
            TextLabel.innerHTML = labelInput.value;
            div.appendChild(TextLabel);
            labelInput.style.display = "none";
            labelBtn.remove();
        });
        let div1 = document.createElement("div");
        div1.className = "box2";
        res.appendChild(div1);


        let addNumberInput = document.createElement("input");
        addNumberInput.setAttribute("id", "inp1");
        // addNumberInput.className = "input2";
        addNumberInput.placeholder = "Number";
        addNumberInput.setAttribute("type", "text");
        div1.appendChild(addNumberInput);

        let closeBtn = document.createElement("button");
        closeBtn.className = "closebtn"
        closeBtn.innerHTML = "X";
        closeBtn.addEventListener("click", () => {
            div.innerHTML = "";
            div1.innerHTML = "";
        });
        div1.appendChild(closeBtn);
    }
    if (selectItems === "Email") {
        let div = document.createElement("div");
        div.className = "box1";
        res.appendChild(div);

        let labelInput = document.createElement("input");
        labelInput.setAttribute("id", "inp1");
        labelInput.setAttribute("type", "text")
        div.appendChild(labelInput);

        let labelBtn = document.createElement("button");
        labelBtn.className = "btn2";
        labelBtn.innerHTML = "ADD";
        div.appendChild(labelBtn);

        labelBtn.addEventListener("click", () => {
            let TextLabel = document.createElement("label");
            TextLabel.className = "newlabel";
            TextLabel.innerHTML = labelInput.value;
            div.appendChild(TextLabel);
            labelInput.style.display = "none";
            labelBtn.remove();
        });
        let div1 = document.createElement("div");
        div1.className = "box2";
        res.appendChild(div1);


        let addEmailInput = document.createElement("input");
        addEmailInput.setAttribute("id", "inp1");
        // addNumberInput.className = "input2";
        addEmailInput.placeholder = "Email";
        addEmailInput.setAttribute("type", "text");
        div1.appendChild(addEmailInput);

        let closeBtn = document.createElement("button");
        closeBtn.className = "closebtn"
        closeBtn.innerHTML = "X";
        closeBtn.addEventListener("click", () => {
            div.innerHTML = "";
            div1.innerHTML = "";
        });
        div1.appendChild(closeBtn);
    }
    if (selectItems === "Radio") {
        let div = document.createElement("div");
        div.className = "box1";
        res.appendChild(div);

        let labelInput = document.createElement("input");
        labelInput.setAttribute("id", "inp1");
        labelInput.setAttribute("type", "text")
        div.appendChild(labelInput);

        let labelBtn = document.createElement("button");
        labelBtn.className = "btn2";
        labelBtn.innerHTML = "ADD";
        div.appendChild(labelBtn);

        labelBtn.addEventListener("click", () => {
            let TextLabel = document.createElement("label");
            TextLabel.className = "newlabel";
            TextLabel.innerHTML = labelInput.value;
            div.appendChild(TextLabel);
            labelInput.style.display = "none";
            labelBtn.remove();
        });

        let div7 = document.createElement("div");
        div7.className = "box2";
        res.appendChild(div7);

        let newinp3 = document.createElement("input");
        newinp3.className = "inp1";
        newinp3.setAttribute("type", "text");
        newinp3.setAttribute("id", "inp1");
        div7.appendChild(newinp3);

        let addbtn = document.createElement("button");
        addbtn.className = "btn2";
        addbtn.innerHTML = "ADD";
        div7.appendChild(addbtn);
        let counter = 0;

        addbtn.addEventListener("click", () => {
            let newdiv = document.createElement("div");
            newdiv.className = "newbox";
            div7.appendChild(newdiv);


            let newinp = document.createElement("input");
            newinp.className = "newinp";
            newinp.setAttribute("type", "radio");
            newinp.setAttribute("name", "gender");
            newdiv.appendChild(newinp);
            newlabel = document.createElement("label");
            newlabel.className = "newlabel1";
            newlabel.innerHTML = newinp3.value;
            newinp.setAttribute("value", newlabel.innerHTML);

            newdiv.appendChild(newlabel);
            counter++;
            if (counter == 2) {
                newinp3.remove();
                addbtn.remove();
            }
        })

        let closeBtn = document.createElement("button");
        closeBtn.className = "closebtn"
        closeBtn.innerHTML = "X";
        closeBtn.addEventListener("click", () => {
            div.innerHTML = "";
            div7.innerHTML = "";
        });
        div7.appendChild(closeBtn);
    }
    if (selectItems === "Select") {
        let div = document.createElement("div");
        div.className = "box1";
        res.appendChild(div);

        let labelInput = document.createElement("input");
        labelInput.setAttribute("id", "inp1");
        labelInput.setAttribute("type", "text")
        div.appendChild(labelInput);

        let labelBtn = document.createElement("button");
        labelBtn.className = "btn2";
        labelBtn.innerHTML = "ADD";
        div.appendChild(labelBtn);

        labelBtn.addEventListener("click", () => {
            let TextLabel = document.createElement("label");
            TextLabel.className = "newlabel";
            TextLabel.innerHTML = labelInput.value;
            div.appendChild(TextLabel);
            labelInput.style.display = "none";
            labelBtn.remove();
        });

        let div9 = document.createElement("div");
        div9.className = "box2";
        res.appendChild(div9);

        let newselect = document.createElement("select");
        newselect.className = "newselect";
        div9.appendChild(newselect);

        let newinp4 = document.createElement("input");
        //newinp4.className = "inp1";
        newinp4.setAttribute("id", "inp1");
        newinp4.setAttribute("type", "text");
        div9.appendChild(newinp4);

        let addbtn1 = document.createElement("button");
        addbtn1.className = "btn2";
        addbtn1.innerHTML = "Add";
        div9.appendChild(addbtn1);
        let count1 = 0;

        addbtn1.addEventListener("click", () => {
            let newoption = document.createElement("option");

            newselect.appendChild(newoption);
            newoption.innerHTML = newinp4.value;
            newoption.setAttribute("value", newoption.innerHTML);

            count1++;
            if (count1 == 3) {
                newinp4.remove();
                addbtn1.remove();
            }
        });

        let closeBtn = document.createElement("button");
        closeBtn.className = "closebtn"
        closeBtn.innerHTML = "X";
        closeBtn.addEventListener("click", () => {
            div.innerHTML = "";
            div9.innerHTML = "";
        });
        div9.appendChild(closeBtn);
    }
    if (selectItems == "Checkbox") {
        let div10 = document.createElement("div");
        div10.className = "box1";
        res.appendChild(div10);

        let inp6 = document.createElement("input");
        inp6.className = "inp1";
        inp6.setAttribute("type", "text");
        inp6.setAttribute("id", "inp1");
        div10.appendChild(inp6);


        let btn7 = document.createElement("button");
        btn7.innerHTML = "Add";
        btn7.className = "btn2";
        div10.appendChild(btn7);


        btn7.addEventListener("click", () => {
            let label6 = document.createElement("label");
            label6.className = "newlabel";
            label6.innerHTML = inp6.value;
            div10.appendChild(label6);
            inp6.style.display = "none";
            btn7.remove();
        });

        let div11 = document.createElement("div");
        div11.className = "box2";
        res.appendChild(div11);

        let newinp5 = document.createElement("input");
        newinp5.className = "inp1";
        newinp5.setAttribute("type", "text");
        newinp5.setAttribute("id", "inp1");
        div11.appendChild(newinp5);

        let addbtn2 = document.createElement("button");
        addbtn2.className = "btn2";
        addbtn2.innerHTML = "Add";
        div11.appendChild(addbtn2);

        let count = 0;

        addbtn2.addEventListener("click", () => {
            let newdiv1 = document.createElement("div");
            newdiv1.className = "newbox";
            div11.appendChild(newdiv1);

            let newinp1 = document.createElement("input");
            newinp1.className = "newinp";
            newinp1.setAttribute("type", "checkbox");
            newdiv1.appendChild(newinp1);
            newlabel1 = document.createElement("label");
            newlabel1.className = "newlabel1";
            newlabel1.innerHTML = newinp5.value;
            newinp1.setAttribute("value", newlabel1.innerHTML);
            newdiv1.appendChild(newlabel1);

            count++;
            if (count == 3) {
                newinp5.remove();
                addbtn2.remove();
            }
        })

        let closeBtn = document.createElement("button");
        closeBtn.className = "closebtn"
        closeBtn.innerHTML = "X";
        closeBtn.addEventListener("click", () => {
            div10.innerHTML = "";
            div9.innerHTML = "";
        });
        div11.appendChild(closeBtn);
    }
    if (selectItems == "submit") {

        var innerbox1 = document.createElement("div");
        innerbox1.className = "subdiv";
        res.appendChild(innerbox1);
        var submitBtn = document.createElement("button");
        submitBtn.innerHTML = "submit";
        submitBtn.setAttribute("id", "displayData");
        innerbox1.appendChild(submitBtn);

        submitBtn.addEventListener("click", submitData)


    }
})

function submitData() {
    confirm("is your form completed");

    var printData = document.getElementById("printData");
    console.log(printData);
    let newbox1 = document.createElement("div");
    newbox1.className = "newbox1";
    printData.appendChild(newbox1);

    let classNodeList = document.getElementsByClassName("closebtn");
    for (var i = 0; i < classNodeList.length; i++) {
        classNodeList[i].style = "display:none";
    }

    console.log(printData.childNodes);
    document.getElementById("displayData").disabled = true;

    newbox1.innerHTML += res.innerHTML;
    console.log(printData.children);


    for (let a = 0; a < printData.children.length; a++) {
        if (printData.children[a].className === "newbox1") {
            for (let b = 0; b < printData.children[a].children.length; b++) {

                if (printData.children[a].children[b].className === 'subdiv') {
                    for (let c = 0; c < printData.children[a].children[b].children.length; c++) {
                        printData.children[a].children[b].children[c].disabled = false;
                        printData.children[a].children[b].children[c].style = "background-color:lightgreen;color:black";
                        printData.children[a].children[b].children[c].addEventListener("click", showDatas);
                    }
                }
                if (printData.children[a].children[b].className == "box2") {
                    for (let c = 0; c < printData.children[a].children[b].children.length; c++) {

                        if (printData.children[a].children[b].children[c] == printData.children[a].children[b].children[0]) {
                            printData.children[a].children[b].children[c].className = "jay";

                        }
                        else if (printData.children[a].children[b].children[c].className === "newbox") {
                            for (let d = 0; d < printData.children[a].children[b].children[c].children.length; d++) {
                                if (printData.children[a].children[b].children[c].children[d].className == "newinp") {
                                    let cd = printData.children[a].children[b].children[c].children[d];
                                    let flag = false;
                                    if (cd.type === "radio") {
                                        if (cd.checked === true) {
                                            flag = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}

function showDatas() {
    var printData = document.getElementById("printData");
    var showDataa = document.getElementById("showDataa");
    var box = document.querySelectorAll(".box2");


    let dd = [];
    showDataa.innerHTML = printData.innerHTML;

    for (let a = 0; a < showDataa.children.length; a++) {
        if (showDataa.children[a].className === "newbox1") {
            for (let b = 0; b < showDataa.children[a].children.length; b++) {
                if (showDataa.children[a].children[b].className == "box2") {
                    for (let c = 0; c < showDataa.children[a].children[b].children.length; c++) {

                        if (showDataa.children[a].children[b].children[c] == showDataa.children[a].children[b].children[0]) {

                            showDataa.children[a].children[b].children[c].className = "";

                            let cc = printData.children[a].children[b].children[c].value;
                            let newLabel = document.createElement("label");
                            newLabel.className = "newlabel";

                            newLabel.innerHTML += cc;

                            showDataa.children[a].children[b].append(newLabel);
                            showDataa.children[a].children[b].children[c].style = "display:none";
                        }
                        if (showDataa.children[a].children[b].children[c].className === "newbox") {
                            showDataa.children[a].children[b].children.style = "display:none";

                            for (let d = 0; d < printData.children[a].children[b].children[c].children.length; d++) {
                                console.log(printData.children[a].children[b].children[c].children.length);

                                let ab = printData.children[a].children[b].children[c].children[d];
                                if (ab.type === "radio") {
                                    if (ab.checked === true) {
                                        let dd = ab.value;
                                        console.log(dd);
                                        //showDataa.children[a].children[b].children[c].innerHTML = dd;

                                        if (showDataa.children[a].children[b].children[c].className == "newlable") {
                                            showDataa.children[a].children[b].children[c].style = "display:none";
                                        }

                                        let newLabel = document.createElement("label");
                                        newLabel.className = "newlabel3";

                                        newLabel.innerHTML = dd;
                                        showDataa.children[a].children[b].children[c].append(newLabel);
                                    }
                                }
                                if (ab.type === "checkbox") {
                                    if (ab.checked === true) {
                                        let dd = ab.value;
                                        console.log(dd);
                                        //showDataa.children[a].children[b].children[c].innerHTML = dd;

                                        if (showDataa.children[a].children[b].children[c].className == "newlable") {
                                            showDataa.children[a].children[b].children[c].style = "display:none";
                                        }

                                        let newLabel = document.createElement("label");
                                        newLabel.className = "newlabel3";

                                        newLabel.innerHTML = dd;
                                        showDataa.children[a].children[b].children[c].append(newLabel);
                                    }
                                }
                                showDataa.children[a].children[b].children[c].children[d].style = "display:none";




                            }
                        }
                    }
                }
                if (showDataa.children[a].children[b].className === 'subdiv') {
                    for (let c = 0; c < showDataa.children[a].children[b].children.length; c++) {
                        showDataa.children[a].children[b].children[c].style = "display:none";
                    }
                }

            }
        }
    }

}

