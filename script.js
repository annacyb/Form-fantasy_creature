"use strict";

const endpoint = "https://exercise1-11c3.restdb.io/rest/fantasy-creatures";
const apiKey = "617696a08597142da1745a33";

const form = document.querySelector("form");
form.setAttribute("novalidate", true);
console.log(form.elements);
get();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sth();
    if (form.checkValidity()) {
        let horns = true;
        if (form.elements.horns.value === "No") {
            horns = false;
        }
        console.log("WESZLO");
        const newData = {
            name: form.elements.name.value,
            species: form.elements.species.value,
            age: form.elements.age.value,
            mythology: "sth()",
            color: form.elements.color.value,
            horns: horns,
            textures: "form.elements.texture.value",
            alignment: form.elements.alignment.value,
            abilities: "form.elements.abilities.value",
        };
        console.log(newData);
        const postData = JSON.stringify(newData);
        fetch(endpoint, {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-apikey": apiKey,
                "cache-control": "no-cache",
            },
            body: postData,
        }).then((res) => res.json());
        console.log("PO");
    } else {
        form.reportValidity();
    }
});

function sth() {
    let something = form.elements.radioMythology;
    // costam.forEach((e) => {
    //     if (e.checked) {
    //         console.log(e, "TRUE");
    //     }
    // });
    console.log("NEXT CHECK");
    document.querySelector('input[name="radioMythology"]:checked').value;
}

function get() {
    fetch(endpoint, {
        method: "get",
        headers: {
            Accept: "application/json",
            "x-apikey": apiKey,
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            // showObjects(data);
        });
}
