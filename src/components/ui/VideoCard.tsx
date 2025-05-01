
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  expReward: number;
  coinReward: number;
}

const VideoCard = ({ id, title, thumbnail, duration, expReward, coinReward }: VideoCardProps) => {
  const [watching, setWatching] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const { toast } = useToast();

  const handleWatchClick = () => {
    if (completed) {
      toast({
        title: "Уже просмотрено",
        description: "Вы уже получили награду за это видео",
        variant: "destructive",
      });
      return;
    }
    
    setWatching(true);
    
    // Имитация просмотра видео с прогрессом
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setWatching(false);
          setCompleted(true);
          toast({
            title: "Получена награда!",
            description: `+${expReward} опыта, +${coinReward} монет`,
            variant: "default",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 1000);
  };

  return (
    <div className="rpg-card">
      <div className="relative rounded-md overflow-hidden aspect-video mb-3">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        {!watching && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            {completed ? (
              <div className="bg-green-500 bg-opacity-80 text-white rounded-full p-2">
                <Icon name="CheckCircle" className="h-10 w-10" />
              </div>
            ) : (
              <div className="bg-rpg-primary bg-opacity-80 text-white rounded-full p-4 animate-pulse-glow">
                <Icon name="Play" className="h-8 w-8" />
              </div>
            )}
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      
      {watching && (
        <div className="my-2">
          <div className="text-sm text-gray-400 mb-1">Просмотр... {progress}%</div>
          <Progress value={progress} className="h-2">
            <div 
              className="h-full bg-rpg-primary"
              style={{ width: `${progress}%` }}
            />
          </Progress>
        </div>
      )}
      
      <div className="flex justify-between items-center mt-3">
        <div className="flex space-x-3">
          <div className="rpg-exp text-sm flex items-center">
            <Icon name="Star" className="h-4 w-4 mr-1" />
            {expReward} опыта
          </div>
          <div className="rpg-coin text-sm flex items-center">
            <Icon name="Coins" className="h-4 w-4 mr-1" />
            {coinReward} монет
          </div>
        </div>
        
        <Button 
          size="sm" 
          onClick={handleWatchClick}
          disabled={watching}
          className={completed ? "bg-gray-600" : "bg-rpg-primary"}
        >
          {completed ? "Просмотрено" : watching ? "Смотрим..." : "Смотреть"}
        </Button>
      </div>
    </div>
  );
};

export default VideoCard;
