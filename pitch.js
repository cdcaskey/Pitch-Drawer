const ScaleFactor = 10;
const PitchLength = 120;
const PitchWidth = 80;
const LineWidth = 1 / 3;

var canvas = document.getElementById("pitch");
var context = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

window.onload = function() {
    updatePitch();
}

function updatePitch() {
    clearPitch()
    drawPitch();
}

function clearPitch() {
    context.setTransform(ScaleFactor, 0, 0, ScaleFactor, 0, 0);
    context.clearRect(0, 0, PitchWidth, PitchLength);
    
    context.fillStyle = "green";
    context.fillRect(0,0,width,height);
}

function drawPitch() {
    context.setTransform(ScaleFactor, 0, 0, ScaleFactor, width / 2 - PitchWidth * ScaleFactor / 2, height / 2 - PitchLength * ScaleFactor / 2);

    // Grass Banding
    context.fillStyle = "darkgreen";
    for (let i = 0; i < PitchLength; i += 24) {
        context.fillRect(0, i, PitchWidth, 12);
    }

    context.strokeStyle = "white";
    context.fillStyle = "white";
    context.lineWidth = LineWidth;
    context.strokeRect(0, 0, PitchWidth, PitchLength);

    // Perimiter
    context.beginPath();
    context.moveTo(0, PitchLength / 2);
    context.lineTo(PitchWidth, PitchLength / 2);
    context.stroke();

    // Centre Circle
    context.beginPath();
    context.arc(PitchWidth / 2, PitchLength / 2, 10, 0, Math.PI * 2);
    context.stroke();
    
    // Centre Spot
    context.beginPath();
    context.arc(PitchWidth / 2, PitchLength / 2, LineWidth / 2, 0, Math.PI * 2);
    context.fill();
    context.stroke();

    // Corner Arcs (Clockwise from Top Left)
    context.beginPath();
    context.arc(0, 0, 1.5, 0, Math.PI / 2);
    context.stroke();

    context.beginPath();
    context.arc(PitchWidth, 0, 1.5, Math.PI / 2, Math.PI);
    context.stroke();

    context.beginPath();
    context.arc(PitchWidth, PitchLength, 1.5, Math.PI, 3 * Math.PI / 2);
    context.stroke();

    context.beginPath();
    context.arc(0, PitchLength, 1.5, 3 * Math.PI / 2, 2 * Math.PI);
    context.stroke();

    // Top Penalty Area
    context.strokeRect(PitchWidth / 2 - 18 - 4, 0, 36 + 8, 18);
    context.strokeRect(PitchWidth / 2 - 6 - 4, 0, 12 + 8, 6);

    // Top Penalty Spot
    context.beginPath();
    context.arc(PitchWidth / 2, 12, LineWidth / 2, 0, 2 * Math.PI);
    context.stroke();

    // Top Penalty Arc
    context.beginPath();
    context.arc(PitchWidth / 2, 12, 10, 0.6435, Math.PI - 0.6435);
    context.stroke();

    // Bottom Penalty Area
    context.strokeRect(PitchWidth / 2 - 18 - 4, PitchLength - 18, 36 + 8, 18);
    context.strokeRect(PitchWidth / 2 - 6 - 4, PitchLength - 6, 12 + 8, 6);

    // Bottom Penalty Spot
    context.beginPath();
    context.arc(PitchWidth / 2, PitchLength - 12, LineWidth / 2, 0, 2 * Math.PI);
    context.stroke();

    // Bottom Penalty Arc
    context.beginPath();
    context.arc(PitchWidth / 2, PitchLength - 12, 10, Math.PI + 0.6435, 2 * Math.PI - 0.6435);
    context.stroke();
}