import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

type Character = 'judge' | 'prosecutor' | 'defense' | null;

interface Evidence {
  id: number;
  title: string;
  description: string;
  formula: string;
  calculation: string;
  result: string;
  imageUrl: string;
  side: 'prosecutor' | 'defense';
}

interface GameTabProps {
  gameStarted: boolean;
  currentStage: number;
  prosecutorScore: number;
  defenseScore: number;
  activeCharacter: Character;
  onStartGame: () => void;
  onVote: (side: 'prosecutor' | 'defense') => void;
  onReset: () => void;
  onSetActiveCharacter: (char: Character) => void;
  onGoToTheory: () => void;
}

const GameTab = ({
  gameStarted,
  currentStage,
  prosecutorScore,
  defenseScore,
  activeCharacter,
  onStartGame,
  onVote,
  onReset,
  onSetActiveCharacter,
  onGoToTheory
}: GameTabProps) => {
  const evidences: Evidence[] = [
    {
      id: 1,
      title: 'Доказательство обвинения: Износ механизмов',
      description: 'Прокурор Кинетик представляет первое доказательство: сила трения разрушает детали двигателей и механизмов, вызывая колоссальные экономические потери.',
      formula: 'Q = Fтр × S',
      calculation: 'Тепловая энергия от трения = Сила трения × Путь перемещения',
      result: 'При торможении автомобиля выделяется до 500 кДж тепла, изнашивая тормозные колодки',
      imageUrl: 'https://cdn.poehali.dev/projects/b236b444-67f1-4409-aad2-4158607523cd/files/335ad598-b5a6-4259-b598-5647515158f3.jpg',
      side: 'prosecutor'
    },
    {
      id: 2,
      title: 'Доказательство защиты: Возможность ходьбы',
      description: 'Адвокат Статик контратакует: без силы трения человек не смог бы сделать ни шага! Попробуйте пройтись по идеально гладкой поверхности.',
      formula: 'Fтр ≥ ma',
      calculation: 'Сила трения покоя ≥ Масса × Ускорение при ходьбе',
      result: 'На льду (μ=0.1) ходить почти невозможно, на асфальте (μ=0.7) — легко и безопасно',
      imageUrl: 'https://cdn.poehali.dev/projects/b236b444-67f1-4409-aad2-4158607523cd/files/aa63f791-33ab-47c5-96fb-0c7964ba5ebf.jpg',
      side: 'defense'
    },
    {
      id: 3,
      title: 'Доказательство обвинения: Потеря энергии',
      description: 'Обвинение продолжает: 30% энергии в автомобиле теряется на преодоление трения! Это экологическая катастрофа и перерасход ресурсов.',
      formula: 'η = (Wполезная / Wзатраченная) × 100%',
      calculation: 'КПД двигателя с учётом потерь на трение',
      result: 'Двигатель мощностью 100 л.с. теряет ~30 л.с. только на трение внутренних деталей',
      imageUrl: 'https://cdn.poehali.dev/projects/b236b444-67f1-4409-aad2-4158607523cd/files/335ad598-b5a6-4259-b598-5647515158f3.jpg',
      side: 'prosecutor'
    },
    {
      id: 4,
      title: 'Доказательство защиты: Торможение — спасение жизней',
      description: 'Защита представляет решающий аргумент: тормозная система работает ТОЛЬКО благодаря трению! Миллионы жизней спасены этой силой.',
      formula: 'S = v² / (2μg)',
      calculation: 'Тормозной путь = Скорость² / (2 × Коэффициент трения × g)',
      result: 'При v=90 км/ч и μ=0.7: тормозной путь = 45 м. Без трения остановка невозможна!',
      imageUrl: 'https://cdn.poehali.dev/projects/b236b444-67f1-4409-aad2-4158607523cd/files/de36532c-6e7d-4877-b7ef-b2a4b4884d57.jpg',
      side: 'defense'
    }
  ];

  const characters = [
    {
      id: 'judge' as Character,
      name: 'Судья Ньютон',
      role: 'Судья',
      icon: 'Scale',
      color: 'text-primary',
      description: 'Беспристрастный арбитр, взвешивающий все аргументы',
      position: 'Моя задача — установить объективную истину о природе силы трения'
    },
    {
      id: 'prosecutor' as Character,
      name: 'Прокурор Кинетик',
      role: 'Обвинение',
      icon: 'AlertTriangle',
      color: 'text-accent',
      description: 'Обличает негативные стороны силы трения',
      position: 'Сила трения — это препятствие прогрессу! Она разрушает механизмы, тратит энергию и замедляет движение.'
    },
    {
      id: 'defense' as Character,
      name: 'Адвокат Статик',
      role: 'Защита',
      icon: 'Shield',
      color: 'text-secondary',
      description: 'Защищает силу трения и её пользу',
      position: 'Без силы трения жизнь невозможна! Она позволяет нам ходить, тормозить автомобили и удерживать предметы.'
    }
  ];

  const prosecutorArguments = [
    {
      title: 'Износ механизмов',
      description: 'Сила трения вызывает износ деталей машин, требуя постоянного ремонта и замены',
      example: 'Автомобильные тормоза изнашиваются и требуют замены каждые 30-50 тысяч км'
    },
    {
      title: 'Потеря энергии',
      description: 'До 20% энергии двигателя расходуется на преодоление силы трения',
      example: 'В двигателе внутреннего сгорания значительная часть топлива тратится впустую'
    },
    {
      title: 'Замедление движения',
      description: 'Трение препятствует свободному движению тел',
      example: 'Космические аппараты требуют топливо для преодоления сопротивления атмосферы'
    }
  ];

  const defenseArguments = [
    {
      title: 'Возможность ходьбы',
      description: 'Без трения мы не могли бы передвигаться — наши ноги скользили бы',
      example: 'На льду трение минимально — ходить практически невозможно'
    },
    {
      title: 'Торможение транспорта',
      description: 'Тормозные системы работают благодаря силе трения',
      example: 'Без трения между колесами и дорогой машина не смогла бы остановиться'
    },
    {
      title: 'Удержание предметов',
      description: 'Трение позволяет удерживать предметы в руках',
      example: 'Попробуйте взять мокрое мыло — без трения это невозможно'
    },
    {
      title: 'Передача энергии',
      description: 'Ремённые передачи, муфты работают за счёт трения',
      example: 'Генераторы электростанций используют силу трения для передачи вращения'
    }
  ];

  const isGameFinished = currentStage === evidences.length - 1 && (prosecutorScore > 0 || defenseScore > 0);
  const winner = prosecutorScore > defenseScore ? 'prosecutor' : 'defense';
  const currentEvidence = evidences[currentStage];
  const progress = ((currentStage + 1) / evidences.length) * 100;

  if (!gameStarted) {
    return (
      <div className="space-y-8 animate-fade-in">
        <div className="grid md:grid-cols-3 gap-6">
          {characters.map((char) => (
            <Card
              key={char.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                activeCharacter === char.id ? 'ring-2 ring-primary shadow-xl' : ''
              }`}
              onClick={() => onSetActiveCharacter(char.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon name={char.icon} className={char.color} size={40} />
                  <Badge variant="outline">{char.role}</Badge>
                </div>
                <CardTitle className="text-2xl">{char.name}</CardTitle>
                <CardDescription className="text-base">{char.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm italic border-l-4 border-primary pl-4">
                  "{char.position}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {activeCharacter === 'prosecutor' && (
          <Card className="border-accent/50 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="AlertTriangle" className="text-accent" />
                Аргументы обвинения
              </CardTitle>
              <CardDescription>
                Прокурор Кинетик представляет доказательства вреда силы трения
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {prosecutorArguments.map((arg, index) => (
                  <div key={index} className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      {arg.title}
                    </h3>
                    <p className="mb-2">{arg.description}</p>
                    <p className="text-sm text-muted-foreground italic">
                      <Icon name="Lightbulb" className="inline mr-1" size={16} />
                      Пример: {arg.example}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeCharacter === 'defense' && (
          <Card className="border-secondary/50 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Shield" className="text-secondary" />
                Аргументы защиты
              </CardTitle>
              <CardDescription>
                Адвокат Статик представляет доказательства пользы силы трения
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {defenseArguments.map((arg, index) => (
                  <div key={index} className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <span className="bg-secondary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      {arg.title}
                    </h3>
                    <p className="mb-2">{arg.description}</p>
                    <p className="text-sm text-muted-foreground italic">
                      <Icon name="Lightbulb" className="inline mr-1" size={16} />
                      Пример: {arg.example}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeCharacter === 'judge' && (
          <Card className="border-primary/50 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Scale" className="text-primary" />
                Вердикт судьи
              </CardTitle>
              <CardDescription>
                Судья Ньютон подводит итоги заседания
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 bg-primary/10 rounded-lg border-2 border-primary/30">
                <p className="text-lg leading-relaxed">
                  Выслушав обе стороны, суд приходит к выводу: <strong>сила трения — это не добро и не зло</strong>. 
                  Это фундаментальное физическое явление, которое необходимо понимать и использовать.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Icon name="ThumbsDown" className="text-accent" size={20} />
                    Негативные аспекты
                  </h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Износ механизмов</li>
                    <li>Потери энергии</li>
                    <li>Нагрев поверхностей</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Icon name="ThumbsUp" className="text-secondary" size={20} />
                    Позитивные аспекты
                  </h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Возможность движения</li>
                    <li>Торможение</li>
                    <li>Удержание предметов</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-secondary/10 rounded-lg">
                <p className="text-center italic">
                  "Задача инженеров и учёных — не бороться с силой трения, а научиться управлять ею!"
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={onStartGame}
            className="text-lg px-8 py-6"
          >
            <Icon name="Gavel" className="mr-2" />
            Начать рассмотрение доказательств
          </Button>
        </div>
      </div>
    );
  }

  if (isGameFinished) {
    return (
      <div className="space-y-6 animate-fade-in">
        <Card className="border-primary/50">
          <CardHeader>
            <div className="text-center">
              <Icon name="Scale" className="text-primary mx-auto mb-4" size={64} />
              <CardTitle className="text-4xl mb-4">Судебный вердикт</CardTitle>
              <CardDescription className="text-lg">
                Судья Ньютон выносит окончательное решение
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className={`p-6 rounded-lg ${winner === 'prosecutor' ? 'bg-accent/20 border-2 border-accent' : 'bg-muted'}`}>
                <div className="text-center">
                  <Icon name="AlertTriangle" className="text-accent mx-auto mb-2" size={40} />
                  <h3 className="font-bold text-xl mb-2">Обвинение</h3>
                  <p className="text-4xl font-bold text-accent">{prosecutorScore}</p>
                  {winner === 'prosecutor' && <Badge className="mt-2">Победитель</Badge>}
                </div>
              </div>
              <div className={`p-6 rounded-lg ${winner === 'defense' ? 'bg-secondary/20 border-2 border-secondary' : 'bg-muted'}`}>
                <div className="text-center">
                  <Icon name="Shield" className="text-secondary mx-auto mb-2" size={40} />
                  <h3 className="font-bold text-xl mb-2">Защита</h3>
                  <p className="text-4xl font-bold text-secondary">{defenseScore}</p>
                  {winner === 'defense' && <Badge className="mt-2">Победитель</Badge>}
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">Решение суда</h3>
              <p className="text-lg leading-relaxed mb-4">
                После тщательного рассмотрения всех доказательств, суд постановляет:
              </p>
              <p className="text-xl font-bold mb-4 text-center text-primary">
                {winner === 'defense' 
                  ? '⚖️ Сила трения ОПРАВДАНА! Польза превышает вред.'
                  : '⚖️ Сила трения признана ПРОБЛЕМНОЙ, но необходимой.'}
              </p>
              <p className="text-lg leading-relaxed">
                Независимо от вердикта, истина такова: <strong>сила трения — это фундаментальное явление природы</strong>, 
                которое невозможно отменить. Наша задача — не бороться с ней, а научиться использовать её 
                преимущества и минимизировать недостатки через инженерные решения и научный прогресс.
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={onReset}
              >
                <Icon name="RotateCcw" className="mr-2" />
                Начать заново
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={onGoToTheory}
              >
                <Icon name="BookOpen" className="mr-2" />
                Изучить теорию
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="text-lg px-4 py-2">
              Этап {currentStage + 1} из {evidences.length}
            </Badge>
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Обвинение</p>
                <p className="text-2xl font-bold text-accent">{prosecutorScore}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Защита</p>
                <p className="text-2xl font-bold text-secondary">{defenseScore}</p>
              </div>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
      </Card>

      <Card className={`border-2 ${currentEvidence.side === 'prosecutor' ? 'border-accent/50' : 'border-secondary/50'} animate-scale-in`}>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Icon 
              name={currentEvidence.side === 'prosecutor' ? 'AlertTriangle' : 'Shield'} 
              className={currentEvidence.side === 'prosecutor' ? 'text-accent' : 'text-secondary'} 
              size={32}
            />
            <CardTitle className="text-2xl">{currentEvidence.title}</CardTitle>
          </div>
          <CardDescription className="text-base">
            {currentEvidence.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg overflow-hidden border-2 border-primary/20">
            <img 
              src={currentEvidence.imageUrl} 
              alt={currentEvidence.title}
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="bg-primary/10 p-6 rounded-lg space-y-4">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">Физическая формула</h3>
              <p className="text-3xl font-mono text-primary mb-2">{currentEvidence.formula}</p>
              <p className="text-sm text-muted-foreground">{currentEvidence.calculation}</p>
            </div>
            
            <div className="bg-background p-4 rounded-lg">
              <p className="font-semibold mb-1">Практический результат:</p>
              <p className="text-lg">{currentEvidence.result}</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center pt-4">
            <Button
              size="lg"
              variant="outline"
              onClick={() => onVote('prosecutor')}
              className="flex-1 max-w-xs border-accent text-accent hover:bg-accent hover:text-white"
            >
              <Icon name="ThumbsDown" className="mr-2" />
              Обвинение право
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onVote('defense')}
              className="flex-1 max-w-xs border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              <Icon name="ThumbsUp" className="mr-2" />
              Защита права
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameTab;
