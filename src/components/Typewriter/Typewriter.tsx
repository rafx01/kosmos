import React, { useState, useEffect, useRef } from 'react';
import { Text, View } from 'react-native';

export const TypewriterText = ({
  texts = ['Olá!', 'Bem-vindo!', 'React Native é incrível!'],
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  style = {},
  cursorStyle = {},
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex];

        if (!isDeleting) {
          // Digitando
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.substring(0, currentText.length + 1));
          } else {
            // Texto completo, começar a apagar após pausa
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          // Apagando
          if (currentText.length > 0) {
            setCurrentText(fullText.substring(0, currentText.length - 1));
          } else {
            // Texto apagado, ir para próximo texto
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, typeSpeed, deleteSpeed, pauseTime]);

  // Cursor piscando
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <View className="my-5">
      <Text className={` text-3xl font-bold text-white ${style}`}>
        {currentText}
        <Text className={`text-[#e06236] ${cursorStyle}`} style={{ opacity: showCursor ? 1 : 0 }}>
          |
        </Text>
      </Text>
    </View>
  );
};

// Versão com efeito de scramble/glitch
const ScrambleText = ({
  texts = ['Desenvolvedor', 'Designer', 'Criativo'],
  scrambleSpeed = 50,
  revealSpeed = 100,
  pauseTime = 2000,
  style = {},
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isRevealing, setIsRevealing] = useState(false);
  const revealIndex = useRef(0);

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  useEffect(() => {
    const targetText = texts[currentTextIndex];

    if (!isRevealing) {
      // Fase de scramble
      const scrambleInterval = setInterval(() => {
        let scrambled = '';
        for (let i = 0; i < targetText.length; i++) {
          if (targetText[i] === ' ') {
            scrambled += ' ';
          } else {
            scrambled += characters[Math.floor(Math.random() * characters.length)];
          }
        }
        setDisplayText(scrambled);
      }, scrambleSpeed);

      // Começar revelação após um tempo
      const revealTimeout = setTimeout(() => {
        clearInterval(scrambleInterval);
        setIsRevealing(true);
        revealIndex.current = 0;
      }, 500);

      return () => {
        clearInterval(scrambleInterval);
        clearTimeout(revealTimeout);
      };
    } else {
      // Fase de revelação
      const revealTimeout = setTimeout(() => {
        if (revealIndex.current < targetText.length) {
          let newText = targetText.substring(0, revealIndex.current + 1);

          // Adicionar caracteres aleatórios para o resto
          for (let i = revealIndex.current + 1; i < targetText.length; i++) {
            if (targetText[i] === ' ') {
              newText += ' ';
            } else {
              newText += characters[Math.floor(Math.random() * characters.length)];
            }
          }

          setDisplayText(newText);
          revealIndex.current++;
        } else {
          // Texto revelado, pausar e ir para próximo
          setTimeout(() => {
            setIsRevealing(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }, pauseTime);
        }
      }, revealSpeed);

      return () => clearTimeout(revealTimeout);
    }
  }, [currentTextIndex, isRevealing, texts, scrambleSpeed, revealSpeed, pauseTime]);

  return (
    <View className="my-5">
      <Text className={`text-center text-2xl font-bold text-white ${style}`}>{displayText}</Text>
    </View>
  );
};

// Exemplo de uso
const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-black px-5">
      <Text className="mb-2 text-center text-base text-gray-400">Efeito Typewriter:</Text>
      <TypewriterText
        texts={['React Native', 'é incrível!', 'Vamos codar?']}
        typeSpeed={150}
        deleteSpeed={100}
        style="text-green-400 text-3xl"
      />

      <Text className="mb-2 text-center text-base text-gray-400">Efeito Scramble:</Text>
      <ScrambleText
        texts={['DESENVOLVEDOR', 'DESIGNER', 'CRIATIVO']}
        style="text-red-400 text-4xl tracking-wider"
      />
    </View>
  );
};

export default App;
