export function onRouteDidUpdate() {
  if (typeof window === 'undefined') {
    return;
  }

  // 配置 Dify
  window.difyChatbotConfig = {
    token: 'bFqzV5YAiNX3OGNN',
    draggable: true,
  };

  // 添加 script 标签
  const script = document.createElement('script');
  script.src = 'https://udify.app/embed.min.js';
  script.id = 'bFqzV5YAiNX3OGNN';
  script.defer = true;
  document.body.appendChild(script);

  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    #dify-chatbot-bubble-button {
      background-color: #1C64F2 !important;
    }
    #dify-chatbot-bubble-window {
      width: 24rem !important;
      height: 40rem !important;
    }
  `;
  document.head.appendChild(style);
}