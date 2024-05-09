// Select the target node (usually the body or a broader container)
const targetNode = document.body;

// Create a MutationObserver instance
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            const inputElement = document.querySelector('.composer__input__d6OQi');
            if (inputElement) {
                inputElement.setAttribute('data-placeholder', 'look I changed');
            }
        }
    });

});

// Configuration of the observer
const config = { childList: true, subtree: true };

// Start observing
observer.observe(targetNode, config);
