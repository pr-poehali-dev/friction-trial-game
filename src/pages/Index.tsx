import { useState } from 'react';
import { Button } from '@/components/ui/button';
import MainTab from '@/components/MainTab';
import GameTab from '@/components/GameTab';
import TheoryTab from '@/components/TheoryTab';

type Character = 'judge' | 'prosecutor' | 'defense' | null;
type Tab = 'main' | 'game' | 'theory';

const Index = () => {
  const [activeCharacter, setActiveCharacter] = useState<Character>(null);
  const [currentTab, setCurrentTab] = useState<Tab>('main');
  const [gameStarted, setGameStarted] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [prosecutorScore, setProsecutorScore] = useState(0);
  const [defenseScore, setDefenseScore] = useState(0);

  const handleStartGame = () => {
    setGameStarted(true);
    setCurrentStage(0);
    setProsecutorScore(0);
    setDefenseScore(0);
    setCurrentTab('game');
  };

  const handleVote = (side: 'prosecutor' | 'defense') => {
    if (side === 'prosecutor') {
      setProsecutorScore(prosecutorScore + 1);
    } else {
      setDefenseScore(defenseScore + 1);
    }

    if (currentStage < 3) {
      setCurrentStage(currentStage + 1);
    }
  };

  const handleReset = () => {
    setGameStarted(false);
    setCurrentStage(0);
    setProsecutorScore(0);
    setDefenseScore(0);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Суд над Силой Трения
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Интерактивная образовательная игра о самой противоречивой силе в физике
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          <Button
            variant={currentTab === 'main' ? 'default' : 'outline'}
            onClick={() => setCurrentTab('main')}
          >
            Главная
          </Button>
          <Button
            variant={currentTab === 'game' ? 'default' : 'outline'}
            onClick={() => setCurrentTab('game')}
          >
            Игра
          </Button>
          <Button
            variant={currentTab === 'theory' ? 'default' : 'outline'}
            onClick={() => setCurrentTab('theory')}
          >
            Теория
          </Button>
        </div>

        {currentTab === 'main' && (
          <MainTab onStartGame={handleStartGame} />
        )}

        {currentTab === 'game' && (
          <GameTab
            gameStarted={gameStarted}
            currentStage={currentStage}
            prosecutorScore={prosecutorScore}
            defenseScore={defenseScore}
            activeCharacter={activeCharacter}
            onStartGame={handleStartGame}
            onVote={handleVote}
            onReset={handleReset}
            onSetActiveCharacter={setActiveCharacter}
            onGoToTheory={() => setCurrentTab('theory')}
          />
        )}

        {currentTab === 'theory' && <TheoryTab />}
      </div>
    </div>
  );
};

export default Index;
