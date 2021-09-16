txtinput = document.getElementById('txtinput');
rateIndicator = document.getElementById('rateIndicator');
rateInput = document.getElementById('rateInput');
pitchIndicator = document.getElementById('pitchIndicator');
pitchInput = document.getElementById('pitchInput');
voiceSelectInput = document.getElementById('voiceSelectInput');
speakButton = document.getElementById('speakButton');


rateInput.addEventListener('change',function(){
    rateIndicator.textContent = rateInput.value
})


pitchInput.addEventListener('change',function(){
    pitchIndicator.textContent = pitchInput.value
})







// initialize the api
 synth = window.speechSynthesis;

//  populate the select tag
 getVoices = () => {
    //  get all voice name from api
  allVoices = synth.getVoices();
  allVoices.forEach(voice => {
    option  = document.createElement('option')
    option.textContent = voice.name;
    option.setAttribute('data-voice',voice.name);
    voiceSelectInput.appendChild(option)
  }) 
} 
// call it using call back function
speechSynthesis.onvoiceschanged  = getVoices 
getVoices()

function speakIT(){
if(txtinput.value!=''){
sayThis = new SpeechSynthesisUtterance(txtinput.value); 
 selectedVoice = voiceSelectInput.selectedOptions[0].getAttribute('data-voice');

 allVoices.forEach(voice => {
if(selectedVoice == voice.name){
    sayThis.voice = voice;
}
}) 

sayThis.rate = rateInput.value
sayThis.pitch = pitchInput.value
synth.speak(sayThis)

} 
}



speakButton.addEventListener('click',function(){
    speakIT()
})

