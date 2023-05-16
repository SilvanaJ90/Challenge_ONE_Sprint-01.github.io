// Function for text encoding

function encryptText() {
    // Get a reference to the text
    let text = document.getElementById("text").value.toLowerCase();

    // Substitution dictionary for encryption
    let encryptions = {
      'e': 'enter',
      'i': 'imes',
      'a': 'ai',
      'o': 'ober',
      'u': 'ufat'
    };

    let textEncrypted = "";

    // Scrolls through each character of the entered text
    for (var i = 0; i < text.length; i++) {
      var character = text.charAt(i);

      // Checks if the character is in the substitution dictionary
      if (encryptions.hasOwnProperty(character)) {
        // If present, adds the encrypted value to the encrypted text.
        textEncrypted += encryptions[character];
      } else {
        // If it is not in the dictionary, it keeps the original character
        textEncrypted += character;
      }
    }
    // Displays the encrypted text in the retangle element
    document.getElementById("result").textContent = textEncrypted;
  }

// Function for copying text

function copyText() {
    // Get a reference to the textarea
    const textarea = document.getElementById('result');

    // Select textarea content
    textarea.select();

    // Copy the content to the clipboard
    document.execCommand('copy');
    
}


// Function for decrypting text
function decryptText() {
    // Get a reference to the textarea element
    let textarea = document.getElementById('result');
    // Get the encrypted text from the textarea
    let encryptedText = textarea.value;

    // Substitution dictionary for encryption
    let decrypter = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
      };
      // Perform the decryption by replacing the keys with their corresponding values
      for (var key in decrypter) {
        var regex = new RegExp(key, 'g');
        encryptedText = encryptedText.replace(regex, decrypter[key]);
      }
      // Update the value of the textarea with the decrypted text
      textarea.value = encryptedText;
    }