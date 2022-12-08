//added currency in the course card
document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('en-US', {
        currency: 'USD',
        style: 'currency'
    }).format(node.textContent)
})


//set the event handler for the button 'Delete' on the page 'Cart'
const $card = document.querySelector('#card');

if ($card) {

    $card.addEventListener('click', event => {
        if (event.target.classList.contains('js-remove')) {
            const id = event.target.dataset.id;

            //read an ajax-requestres
            fetch('/card/remove/' + id, {
                method: 'delete'
            }).then(res => res.json())
                .then(card => {
                    console.log(card)
                })

        }
    });

}
