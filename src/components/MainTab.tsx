import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface MainTabProps {
  onStartGame: () => void;
}

const MainTab = ({ onStartGame }: MainTabProps) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-3xl">О проекте</CardTitle>
          <CardDescription className="text-base">
            Познакомьтесь с необычным форматом изучения физики
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            Сила трения — одна из фундаментальных сил природы, которая имеет как положительные, 
            так и отрицательные стороны. В этой игре мы рассмотрим её роль в судебном формате.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-muted rounded-lg">
              <Icon name="Users" className="text-primary mb-2" size={32} />
              <h3 className="font-semibold mb-2">3 персонажа</h3>
              <p className="text-sm text-muted-foreground">Судья, прокурор и адвокат защиты</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <Icon name="BookOpen" className="text-secondary mb-2" size={32} />
              <h3 className="font-semibold mb-2">Научные факты</h3>
              <p className="text-sm text-muted-foreground">Формулы, диаграммы и примеры</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <Icon name="Brain" className="text-accent mb-2" size={32} />
              <h3 className="font-semibold mb-2">Обучение</h3>
              <p className="text-sm text-muted-foreground">Интерактивное изучение физики</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button 
          size="lg" 
          onClick={onStartGame}
          className="text-lg px-8 py-6"
        >
          <Icon name="Play" className="mr-2" />
          Начать судебное заседание
        </Button>
      </div>
    </div>
  );
};

export default MainTab;
