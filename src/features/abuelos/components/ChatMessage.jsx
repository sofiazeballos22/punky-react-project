import { useTypingEffect } from '@/hooks/useTypingEffect';

const ChatMessage = ({ emoji, name, text, isUser, speed = 50, delay = 0 }) => {
  const { displayedText, isTyping } = useTypingEffect(text, speed, delay);
  
  // Estilos según si es usuario o Punky
  const containerClasses = isUser
    ? 'flex items-end gap-3'
    : 'flex items-end gap-3 flex-row-reverse';
  
  // Colita más notoria (más grande y visible)
  const bubbleClasses = isUser
    ? 'bg-slate-100 text-slate-800 rounded-2xl relative before:content-[""] before:absolute before:bottom-0 before:-left-2 before:w-4 before:h-4 before:bg-slate-100 before:rounded-bl-full'
    : 'bg-gradient-to-r from-violet-100 to-purple-100 text-slate-800 rounded-2xl relative before:content-[""] before:absolute before:bottom-0 before:-right-2 before:w-4 before:h-4 before:bg-gradient-to-r before:from-violet-100 before:to-purple-100 before:rounded-br-full';

  const avatarClasses = 'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl';
  const avatarBg = isUser
    ? 'bg-gradient-to-br from-orange-200 to-amber-200'
    : 'bg-gradient-to-br from-violet-500 to-purple-500';

  return (
    <div className={containerClasses}>
      {/* Avatar */}
      <div className={`${avatarClasses} ${avatarBg}`}>
        <span>{emoji}</span>
      </div>

      {/* Globo de diálogo con colita */}
      <div className="flex flex-col max-w-[75%]">
        {/* Nombre del emisor */}
        <span className="text-[10px] font-medium text-slate-500 mb-1 px-2">
          {name}
        </span>
        
        {/* Contenido del mensaje */}
        <div className={`px-4 py-3 shadow-sm ${bubbleClasses}`}>
          <p className="text-sm leading-relaxed">
            {displayedText}
            {isTyping && <span className="typing-cursor">|</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
