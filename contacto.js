document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('chat-form');
  const messagesContainer = document.getElementById('messages');
  const messageInput = document.getElementById('message-input');

  // Mensaje automático al cargar la página
  addMessage("¡Hola! Te acabas de comunicar con 'La mansión de los acordes'. ¿En qué te puedo ayudar?", 'admin');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const messageText = messageInput.value.trim();
    if (messageText) {
      addMessage(messageText, '', 'admin');
      messageInput.value = '';
      // Aquí puedes agregar lógica para enviar el mensaje al servidor
      simulateAdminResponse(messageText);
    }
  });

  function addMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.textContent = text;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function simulateAdminResponse(userMessage) {
    setTimeout(() => {
      const adminResponse = `Respuesta automática a: "${userMessage}"`; // Aquí iría la respuesta real del admin
      addMessage(adminResponse, 'admin');
    }, 1000); // Simula un retraso en la respuesta
  }
});
