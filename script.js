document.querySelector("#caret").addEventListener("click", () => {
    document.querySelector("#itemList").classList.toggle("hidden");
})

document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector("#selected").innerHTML = item.innerHTML;
    })
})