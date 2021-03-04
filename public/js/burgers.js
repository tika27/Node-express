// const { response } = require("express");

document.addEventListener("DOMContentLoaded", (event) =>{
    if (event){
        console.log("DOM loaded");
    }

    const changeDevoured = document.querySelectorAll(".change-devoured");

    if(changeDevoured)
    changeDevoured.forEach((button) =>{
        button.addEventListener("click", (e) => {
            event.preventDefault()

            const id = e.target.getAttribute("data-id");
            const newBurger = e.target.getAttribute("data-newburger");

            console.log(id);

            const newBurgerState = {
                devoured: newBurger,
            };
            console.log(newBurgerState);

            fetch(`/api/burger/${id}`, {
                method: "put",
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                body:JSON.stringify(newBurgerState),
            }).then((response) => {
                if (response.ok) {
                    console.log(`changed devoured to: ${newBurger}`);
                    location.reload('/');

                } else {
                    alert("Something wrong!");
                }
            });
            
        });
    });

});

const burgerInt = document.getElementById('create-form');


if (burgerInt) {
    burgerInt.addEventListener('submit', (e) => {
        e.preventDefault();

        const newBurger = {
            burger_name: document.getElementById('creatingBurger').value.trim(),
            devour: document.getElementById('devoured').checked,
        }
        fetch(`/api/burger`, {
            method: "POST",
            headers:
            {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBurger),
        }).then(() => {
            document.getElementById('creatingBurger').value = '';

            console.log("New Burger created");
            location.reload();
        });
    });
}
