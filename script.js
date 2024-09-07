<script>
    // Show chatbot when clicking the "Ask Bossa Nova" box
    document.getElementById('chatbot-box').addEventListener('click', function() {
        document.getElementById('chatbot-window').style.display = 'block';
    });

    // Close chatbot window when clicking the close button
    document.getElementById('close-chatbot').addEventListener('click', function() {
        document.getElementById('chatbot-window').style.display = 'none';
    });

    // Functionality for answering questions
    document.getElementById('send-btn').addEventListener('click', function() {
        const input = document.getElementById('chatbot-input').value.toLowerCase().trim();
        let response = '';

        // Check the user's input and provide the appropriate response
        switch(input) {
            case 'what is coffee?':
                response = "Coffee is a beverage made from roasted coffee beans.";
                break;
            case 'what are the characteristics of coffee beans?':
                response = "A coffee bean is the seed of the coffee plant that is roasted and ground and used to brew coffee.";
                break;
            case 'what are the characteristics of filter coffee?':
                response = "Filter coffee is a brewing method in which hot water is passed through ground coffee in a filter, producing a clean and smooth cup of coffee without grounds.";
                break;
            case 'what are the characteristics of turkish coffee?':
                response = "Turkish coffee is a strong, unfiltered coffee made by boiling finely ground coffee beans with water and usually sugar, then served in a cup with the grounds.";
                break;
            case 'what are the characteristics of espresso coffee?':
                response = "Espresso is a type of coffee obtained by brewing finely ground coffee beans under high pressure, served in small amounts and in large quantities.";
                break;
            case 'i had a problem with my coffee, what should i do?':
                response = "There are no returns on coffees. Please call customer service.";
                break;
            case 'are there any promotions and discounts?':
                response = "Our prices are fixed. There are no promotions or discounts.";
                break;
            default:
                response = "I don't know, please ask another question.";
        }

        // Display the chatbot's response
        const chatbotBody = document.querySelector('.chatbot-body');
        const userMessage = `<p><strong>You:</strong> ${input}</p>`;
        const botMessage = `<p><strong>Bossa Nova:</strong> ${response}</p>`;
        
        chatbotBody.innerHTML += userMessage + botMessage;

        // Scroll to the bottom of the chat
        chatbotBody.scrollTop = chatbotBody.scrollHeight;

        // Clear the input field
        document.getElementById('chatbot-input').value = '';
    });
</script>
