document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("dealPopup").style.display = "block";
});

function closeDeal() {
    document.getElementById("dealPopup").style.display = "none";
}

function startOrder() {
    window.location.href = "coffee_slection.html"; 
}

function startSubscribe() {
    window.location.href = "specical_offer.html"; 
}