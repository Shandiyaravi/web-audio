const audioEl= document.getElementById('audio');
const playbuttonEl = document.getElementById('play');
const pausebuttonEl = document.getElementById('pause');

const ctx=new AudioContext();

const sourceNode=ctx.createMediaElementSource(audioEl);

const biquadFilter=ctx.createBiquadFilter();
biquadFilter.type='lowpass';
biquadFilter.frequency.value=2000; 
sourceNode.connect(biquadFilter);
biquadFilter.connect(ctx.destination);


// const gainNode=ctx.createGain();
// sourceNode.connect(gainNode);
// gainNode.connect(ctx.destination);
// gainNode.gain.value=0.5;

// --------------------------------

// to have both gain and filter
// sourceNode.connect(gainNode);
// gainNode.connect(biquadFilter);
// biquadFilter.connect(ctx.destination);

playbuttonEl.addEventListener('click',()=>{
    ctx.resume();
    audioEl.play();
});

pausebuttonEl.addEventListener('click',()=>{
    audioEl.pause();
});






