const showMoreStyles = (trigger, style) => {

    const cards = document.querySelectorAll(style),
          btn = document.querySelector(trigger)

    cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp')
    });

    btn.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        })
        btn.remove();
    })


};

export default showMoreStyles;