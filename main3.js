
'use strict';



function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[1]);
    }
    return vars;
}



var getUser = getUrlVars();


var userVideoElement = 'video' + getUser;
var userAudioInputSelect = 'select#audioSource' + getUser;
var userAudioOutputSelect = 'select#audioOutput' + getUser;
var userAudioOutputSelect2 = 'audiooutput' + getUser;
var userVideoSelect = 'select#videoSource' + getUser;



const videoElement = document.getElementById(userVideoElement);
const audioInputSelect = document.querySelector(userAudioInputSelect);
const audioOutputSelect = document.querySelector(userAudioOutputSelect);
const videoSelect = document.querySelector(userVideoSelect);
const selectors = [audioInputSelect, audioOutputSelect, videoSelect];

audioOutputSelect.disabled = !('sinkId' in HTMLMediaElement.prototype);

function gotDevices(deviceInfos) {
    // Handles being called several times to update labels. Preserve values.
    const values = selectors.map(select => select.value);
    selectors.forEach(select => {
        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
    });
    for (let i = 0; i !== deviceInfos.length; ++i) {
        const deviceInfo = deviceInfos[i];
        const option = document.createElement('option');
        option.value = deviceInfo.deviceId;
        if (deviceInfo.kind === 'audioinput') {
            option.text = deviceInfo.label || `microphone ${audioInputSelect.length + 1}`;
            audioInputSelect.appendChild(option);
        } else if (deviceInfo.kind === userAudioOutputSelect2) {
            option.text = deviceInfo.label || `speaker ${audioOutputSelect.length + 1}`;
            audioOutputSelect.appendChild(option);
        } else if (deviceInfo.kind === 'videoinput') {
            option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`;
            videoSelect.appendChild(option);
        } else {
            console.log('Some other kind of source/device: ', deviceInfo);
        }
    }
    selectors.forEach((select, selectorIndex) => {
        if (Array.prototype.slice.call(select.childNodes).some(n => n.value === values[selectorIndex])) {
            select.value = values[selectorIndex];
        }
    });
}

navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);

// Attach audio output device to video element using device/sink ID.
function attachSinkId(element, sinkId) {
    if (typeof element.sinkId !== 'undefined') {
        element.setSinkId(sinkId)
            .then(() => {
                console.log(`Success, audio output device attached: ${sinkId}`);
            })
            .catch(error => {
                let errorMessage = error;
                if (error.name === 'SecurityError') {
                    errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`;
                }
                console.error(errorMessage);
                // Jump back to first output device in the list as it's the default.
                audioOutputSelect.selectedIndex = 0;
            });
    } else {
        console.warn('Browser does not support output device selection.');
    }
}

function changeAudioDestination() {
    const audioDestination = audioOutputSelect.value;
    attachSinkId(videoElement, audioDestination);
}

function gotStream(stream) {
    window.stream = stream; // make stream available to console
    videoElement.srcObject = stream;
    // Refresh button list in case labels have become available
    return navigator.mediaDevices.enumerateDevices();
}

function handleError(error) {
    console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}

function start() {
    if (window.stream) {
        window.stream.getTracks().forEach(track => {
            track.stop();
        });
    }
    const audioSource = audioInputSelect.value;
    const videoSource = videoSelect.value;
    const constraints = {
        audio: { deviceId: audioSource ? { exact: audioSource } : undefined },
        video: { deviceId: videoSource ? { exact: videoSource } : undefined }
    };
    navigator.mediaDevices.getUserMedia(constraints).then(gotStream).then(gotDevices).catch(handleError);
}

audioInputSelect.onchange = start;
audioOutputSelect.onchange = changeAudioDestination;

videoSelect.onchange = start;

start();



if (getUser == 1) {
    $("#user2").css("display", "none");
    $("#user3").css("display", "none");
    $("#user4").css("display", "none");
    $("#user5").css("display", "none");
    $("#user6").css("display", "none");
    $("#user7").css("display", "none");
    $("#user8").css("display", "none");
}
else
    if (getUser == 2) {
        $("#user1").css("display", "none");
        $("#user3").css("display", "none");
        $("#user4").css("display", "none");
        $("#user5").css("display", "none");
        $("#user6").css("display", "none");
        $("#user7").css("display", "none");
        $("#user8").css("display", "none");
    }
    else
        if (getUser == 3) {
            $("#user1").css("display", "none");
            $("#user2").css("display", "none");
            $("#user4").css("display", "none");
            $("#user5").css("display", "none");
            $("#user6").css("display", "none");
            $("#user7").css("display", "none");
            $("#user8").css("display", "none");
        }
        else
            if (getUser == 4) {
                $("#user1").css("display", "none");
                $("#user2").css("display", "none");
                $("#user3").css("display", "none");
                $("#user5").css("display", "none");
                $("#user6").css("display", "none");
                $("#user7").css("display", "none");
                $("#user8").css("display", "none");
            }
            else
                if (getUser == 5) {
                    $("#user1").css("display", "none");
                    $("#user2").css("display", "none");
                    $("#user3").css("display", "none");
                    $("#user4").css("display", "none");
                    $("#user6").css("display", "none");
                    $("#user7").css("display", "none");
                    $("#user8").css("display", "none");
                }
                else
                    if (getUser == 6) {
                        $("#user1").css("display", "none");
                        $("#user2").css("display", "none");
                        $("#user3").css("display", "none");
                        $("#user4").css("display", "none");
                        $("#user5").css("display", "none");
                        $("#user7").css("display", "none");
                        $("#user8").css("display", "none");
                    }
                    else
                        if (getUser == 7) {
                            $("#user1").css("display", "none");
                            $("#user2").css("display", "none");
                            $("#user3").css("display", "none");
                            $("#user4").css("display", "none");
                            $("#user5").css("display", "none");
                            $("#user6").css("display", "none");
                            $("#user8").css("display", "none");
                        }
                        else
                            if (getUser == 8) {
                                $("#user1").css("display", "none");
                                $("#user2").css("display", "none");
                                $("#user3").css("display", "none");
                                $("#user4").css("display", "none");
                                $("#user5").css("display", "none");
                                $("#user6").css("display", "none");
                                $("#user7").css("display", "none");
                            }