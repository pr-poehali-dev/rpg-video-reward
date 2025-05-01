
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";

interface ProfileCardProps {
  username: string;
  level: number;
  experience: number;
  nextLevelExp: number;
  coins: number;
  characterClass: string;
  characterImage: string;
}

const ProfileCard = ({
  username,
  level,
  experience,
  nextLevelExp,
  coins,
  characterClass,
  characterImage,
}: ProfileCardProps) => {
  const expPercentage = (experience / nextLevelExp) * 100;

  return (
    <div className="rpg-card flex flex-col md:flex-row gap-6 items-center">
      <div className="relative">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-rpg-primary">
          <img
            src={characterImage}
            alt={username}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-rpg-dark rounded-full border-2 border-rpg-gold p-1">
          <div className="flex items-center justify-center bg-rpg-gold rounded-full w-8 h-8 text-rpg-dark font-bold">
            {level}
          </div>
        </div>
      </div>

      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl font-bold text-white">{username}</h2>
        <p className="text-gray-400">{characterClass}</p>
        
        <div className="mt-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-gray-300 text-sm">Опыт</span>
            <span className="text-gray-300 text-sm">{experience} / {nextLevelExp}</span>
          </div>
          <Progress value={expPercentage} className="h-2">
            <div 
              className="h-full bg-rpg-exp"
              style={{ width: `${expPercentage}%` }}
            />
          </Progress>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <div className="bg-gray-700 rounded-full px-3 py-1 flex items-center">
            <Icon name="Coins" className="text-rpg-gold h-5 w-5 mr-1" />
            <span>{coins} монет</span>
          </div>
          <div className="bg-gray-700 rounded-full px-3 py-1 flex items-center">
            <Icon name="Swords" className="text-red-500 h-5 w-5 mr-1" />
            <span>Сила: 25</span>
          </div>
          <div className="bg-gray-700 rounded-full px-3 py-1 flex items-center">
            <Icon name="Shield" className="text-blue-500 h-5 w-5 mr-1" />
            <span>Защита: 18</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
