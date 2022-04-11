let target = document.getElementById('currentLink');

function showTooltip() {
    let tooltip = document.createElement('p');
    tooltip.textContent = 'Series F startup in sales enablement industry';
    tooltip.style.backgroundColor = 'green';
}

target.onmouseover = showTooltip;