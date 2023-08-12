// Get all elements with the "popup-trigger" class (in case there are multiple clickable words)
const popupTriggers = document.querySelectorAll('.popup-trigger');

// Add a click event listener to each trigger
popupTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        // Specify the content for the popup
        const popupContent = 'maar niet met mijn laptop ik had er net nog ram in gestoken en een nieuwe sdd en ubuntu er op gezet en nu zit ik op de trein en ik word misselijk van het schommelen van de trein en de bomen en plantjes en huizen en een andere trein die voorbij golven laptop is 1 raam en treinraam is 1 raam en nu ik me er begin op te focussen wordt het weeëig gevoel in mijn maag erger en erger ik zag twee insectenlijkjes toen ik mijn laptop openvees, 1 bij de cpu en 1 goh ergens bij de koeling of zo ik weet het al niet meer en ik weet ook niet hoe lang ze geleefd zouden hebben, misschien waren ze op slag dood, misschien hadden ze een lang volwaardig leven in de warmte van mijn cpu met koelpasta van 14 jaar oud. Hoeveel zou ik kunnen schrijven als ik blijf schrijven en schrijven en schrijven, ik had al een aantal woorden maar mijn SSD werkt precies niet op linux';

        // Open a new window with the specified content
        const popupWindow = window.open('', '_blank', 'width=300,height=200');

        // Write the content into the new window
        popupWindow.document.write(`
            <html>
            <head>
                <title>Popup Window</title>
                <style>
                    body {
                        font-family: Arial, sans-serif; /* Set the font to Arial */
                    }
                    p {
                        margin: 10px;
                    }
                </style>
            </head>
            <body>
                <p>${popupContent}</p>
            </body>
            </html>
        `);
    });
});
