let canvas = document.getElementById("signature-pad");

function resizeCanvas() {
    let ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    let ctx = canvas.getContext("2d");
    ctx.scale(ratio, ratio);
}

window.onresize = resizeCanvas;
resizeCanvas();

let signaturePad = new SignaturePad(canvas, {
    backgroundColor: "rgb(250, 250, 250)"
});

document.getElementById("clear").addEventListener("click", function () {
    signaturePad.clear();
});
