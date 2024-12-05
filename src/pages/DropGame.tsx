import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


type IParticle = {
  id: number;
  left: number;
  top: number;
  duration: number;
  type: "normal" | "danger" | "freeze";
  isFrozen: boolean;
};

const getRandomPosition = () => Math.floor(Math.random() * (window.innerWidth - 50));

const getRandomDuration = (type: "normal" | "danger" | "freeze") => {
  if (type === "danger") {
    return Math.random() * 5 + 10; // Danger particles fall slowly (5s to 10s)
  } else if (type === "freeze") {
    return Math.random() * 3 + 5; // Freeze particles fall at a normal pace (2s to 5s)
  } else {
    return Math.random() * 3 + 5; // Normal particles fall in 2-5 seconds
  }
};

interface IParticleProps {
  particle: IParticle,
  isFrozen: boolean,
  handleClick: (id: number, type: "normal" | "danger" | "freeze") => void
}

const Particle: React.FC<IParticleProps> = ({ particle, isFrozen, handleClick }) => {
  const [top, setTop] = useState(-60);
  const [left, setLeft] = useState(0);
  const particleRef = useRef<HTMLDivElement>(null)
  let interval: any;
  const removeParticle = () => {
    particleRef?.current?.remove()
  }
  useEffect(() => {
    if(isFrozen) {
      if(interval) {
        clearInterval(interval)
      }
    } else {
      setLeft(getRandomPosition())
      interval = setInterval(() => {
        setTop((top) => {
          if(top > (window.innerHeight - 60)) {
            clearInterval(interval);
            removeParticle();
            return top
          } else {
            return top + 1 
          }
        })
      }, 1000 / 60) // 60Hz frame rate 
    }
    return () => {
      clearInterval(interval);
    }
  }, [isFrozen])
  return (
    <div
      ref={particleRef}
      className="absolute cursor-pointer"
      style={{
        left: particle.left,
        top,
 // Apply freeze effect to stop falling and sync the animation
      }}
      onClick={() => {
        handleClick(particle.id, particle.type);
        particleRef.current?.remove();
      }}
    >
      {particle.type === "normal" && (
        <img src="/assets/image 16.png" alt="Falling particle" className="h-10 w-10" />
      )}
      {particle.type === "danger" && (
        <img src="/assets/danger.png" alt="Danger particle" className="h-16 w-auto" />
      )}
      {particle.type === "freeze" && (
        <img src="/assets/freeze.png" alt="Freeze particle" className="h-10 w-10" />
      )}
    </div>
  )
}

const DropGame: React.FC = () => {
  const [particles, setParticles] = useState<IParticle[]>([]);
  const [score, setScore] = useState(0);
  const [isFrozen, setIsFrozen] = useState(false);
  const [backgroundImage] = useState("/assets/night.jpeg");
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate()

  useEffect(() => {
    // Preload background images
    const normalBg = new Image();
    normalBg.src = "/assets/night.jpeg";
    const freezeBg = new Image();
    freezeBg.src = "/assets/night.jpeg";
  }, []);

  const createParticle = () => {
    const particlesToChooseFrom: ("normal" | "danger" | "freeze")[] = ["normal", "normal", "danger", "normal", "freeze", "normal", "normal", "normal", "normal", "normal"]
    const probability = Math.floor(Math.random() * 10);
    const newParticle: IParticle = {
      id: Date.now() + (Math.random() * 100000000000000),
      left: getRandomPosition(),
      top: -100,
      duration: getRandomDuration(particlesToChooseFrom[probability]), // TODO: remove
      type: particlesToChooseFrom[probability],
      isFrozen: false,
    };
    if(!isFrozen) {
      console.log("creating..")
      setParticles((prev: any) => {
        console.log(prev.length);
        return [...prev, newParticle]
      });
    } 
  };

  const handleParticleClick = (id: number, type: "normal" | "danger" | "freeze") => {
      if (type === "danger") {
        setScore(0); // Sets score to zero
      } else if (type === "normal") {
        setScore((prevScore) => prevScore + 1); // Normal particles award points
      } else if (type === "freeze") {
        handleFreezeParticles(); // Trigger freeze effect
      }
      setParticles((prevParticles) =>
        prevParticles.map((p) =>
          p.id === id
            ? { ...p, isFrozen: type === "freeze" ? true : p.isFrozen }
            : p
        )
      ); // Update particle freeze state
  };
  const handleFreezeParticles = () => {

    setIsFrozen(true);
    const timeout = setTimeout(() => {
      setIsFrozen(false); // Unfreeze after 5 secs
      clearTimeout(timeout)
    }, 5000);
  };


  
  useEffect(() => {
    let interval = JSON.parse(sessionStorage.getItem("game-session") ?? "0");
    if(interval && isFrozen) {
      console.log("cleared", interval)
      clearInterval(interval)
    } else if(interval && !isFrozen) {
      clearInterval(interval)
      let newInterval = setInterval(createParticle, 700); 
      sessionStorage.setItem("game-session", JSON.stringify(newInterval))
    } else {
      let newInterval = setInterval(createParticle, 700); 
      sessionStorage.setItem("game-session", JSON.stringify(newInterval))
      console.log(interval)
    }
    return () => clearInterval(interval);
  }, [isFrozen, createParticle]);

  // Timer Effect
  useEffect(() => {
    if (timeLeft <= 0) {
      // Clear game interval
      const interval = JSON.parse(sessionStorage.getItem("game-session") ?? "0");
      if (interval) {
        clearInterval(interval);
        sessionStorage.removeItem("game-session");
      }

      // Store the score in sessionStorage for the review page
      sessionStorage.setItem("finalScore", score.toString());

      // Redirect to score review page
      navigate('/score-review');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, score, navigate]);

  // Format time to MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className="relative h-[90vh] w-full overflow-y-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex items-center justify-between py-3 px-5 z-50">
        <div className="border rounded-3xl background-color border-gray-500 flex items-center gap-2 px-3 py-2">
          <span className="lancelot-regular">{formatTime(timeLeft)}</span>
        </div>
        <div className="border rounded-3xl background-color border-gray-500 flex items-center gap-2 px-3 py-2">
          <div className="h-5 w-5">
            <img src="/assets/fluent-color_reward-20.png" alt="Rewards" className="h-full w-full object-cover" />
          </div>
          <span>{score}</span>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-[90vh] overflow-y-hidden">
        {particles.map((particle) => (
          <Particle 
            key={particle.id}
            particle={particle}
            isFrozen={isFrozen}
            handleClick={handleParticleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default DropGame;