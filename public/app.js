//added currency in the course card
document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('en-US', {
        currency: 'USD',
        style: 'currency'
    }).format(node.textContent)
})