function getImages(breedType) {
    fetch('https://dog.ceo/api/breed/' + breedType + '/images/random')
    .then(response => response.json())
    .then(responseJson => logResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function logResults(responseJson) {
    console.log(responseJson);
    
    $(".pictures").append("<img src='" + responseJson.message + "'>")

    $(".images").removeClass('hidden');
}

function submitForm() {
    $('form').submit(function(event) {
        event.preventDefault();
        
        let breedType = $("#breed").val();

        $(".pictures").empty();

        getImages(breedType);
    });
}

$(submitForm);