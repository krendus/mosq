import React, { useState, useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import { FaShareNodes } from "react-icons/fa6";

interface TelegramUser {
  id: number;
  username?: string;
  first_name: string;
}

interface UserData {
  id: number;
  username?: string;
  firstName: string;
  referralCode: string;
  referredBy: string | null;
  referralCount: number;
  referralEarnings: number;
}

interface Friend {
  id: number;
  name: string;
  image?: string;
  joinedAt: string;
}

// Load user data from localStorage or create a new user
const loadUserData = async (telegramUser: TelegramUser): Promise<UserData> => {
  const savedData = localStorage.getItem(`user_${telegramUser.id}`);

  if (savedData) {
    return JSON.parse(savedData);
  }

  const newUser: UserData = {
    id: telegramUser.id,
    username: telegramUser.username,
    firstName: telegramUser.first_name,
    referralCode: generateReferralCode(telegramUser),
    referredBy: new URLSearchParams(window.location.search).get('ref'),
    referralCount: 0,
    referralEarnings: 0
  };

  localStorage.setItem(`user_${telegramUser.id}`, JSON.stringify(newUser));
  return newUser;
};

// Generate unique referral code based on user data
const generateReferralCode = (telegramUser: TelegramUser): string => {
  const username = telegramUser.username || telegramUser.first_name;
  return `DOGHOPE_${username.toUpperCase()}_${telegramUser.id.toString().slice(-6)}`;
};

const Friends: React.FC = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [referralCode, setReferralCode] = useState<string>('');
  const [friends, setFriends] = useState<Friend[]>([]);
  const [totalEarned, setTotalEarned] = useState<number>(0);

  // Initialize user and load referral data
  useEffect(() => {
    const initializeUser = async () => {
      try {
        WebApp.ready();
        const telegramUser = WebApp.initDataUnsafe?.user as TelegramUser;

        if (telegramUser) {
          const userData = await loadUserData(telegramUser);
          setUser(userData);

          // Generate or retrieve referral code
          const code = generateReferralCode(telegramUser);
          setReferralCode(code);

          // Load referred friends
          const referredFriends = await loadReferredFriends(telegramUser.id);
          setFriends(referredFriends);

          // Calculate total earnings from referrals
          const earned = referredFriends.length * 500; // 500 points per referral
          setTotalEarned(earned);
        }
      } catch (error) {
        console.error('Error initializing user:', error);
      }
    };

    initializeUser();
  }, []);

  // Load referred friends from localStorage
  const loadReferredFriends = async (userId: number): Promise<Friend[]> => {
    const referralsData = localStorage.getItem(`referrals_${userId}`);
    return referralsData ? JSON.parse(referralsData) : [];
  };

  // Handle invite friends button click
  const handleInvite = (): void => {
    if (!user) return;

    const shareUrl = `https://gameUrl?ref=${referralCode}`;
    const shareText = `Join me in playing Dog of Hope! Use my referral code: ${referralCode} and get bonus points! ${shareUrl}`;

    // Use Telegram's native sharing if available
    if (WebApp.isExpanded) {
      WebApp.switchInlineQuery(shareText, ['users']);
    } else {
      // Fallback to Web Share API
      if (navigator.share) {
        navigator.share({
          title: 'Join Dog of Hope!',
          text: shareText,
          url: shareUrl
        });
      }
    }
  };

  return (
    <div className="h-screen w-full relative">
      <div className="h-[75vh] overflow-y-auto">
        <div className="flex items-center justify-center flex-col">
          <div className="header mt-10">
            <div className="flex items-center flex-col justify-center gap-5 mt-5">
              <h1 className="text-white font-semibold text-2xl text-center">
                Invite friends <br /> and get more MOSQ
              </h1>
              <img
                src="/assets/image 16.png"
                alt="Dog with hope"
                className="w-16 h-16 object-cover"
              />

              {/* Referral Code Display */}
              <div className="bg-white/10 rounded-lg p-4 mt-4 w-[90%] max-w-sm">
                <p className="text-white text-sm mb-2">Your Referral Code:</p>
                <div className="bg-white/20 rounded flex items-center justify-between p-3">
                  <code className="text-yellow-300 font-mono">{referralCode}</code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(referralCode);
                      WebApp.HapticFeedback.impactOccurred('light');
                    }}
                    className="text-white text-sm"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-white/60 text-xs mt-2 text-center">
                  Earn 500 MOSQ for each friend who joins!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Friends List */}
        <div className="friend-list w-full flex items-start justify-start flex-col px-5 mt-5">
          <div className="w-full flex justify-between items-center">
            <h4 className="text-white text-lg font-semibold">
              {friends.length} {friends.length === 1 ? 'friend' : 'friends'}
            </h4>
            <span className="text-yellow-300 font-semibold">
              +{totalEarned} MOSQ earned
            </span>
          </div>

          {friends.map((friend) => (
            <div
              key={friend.id}
              className="main flex w-full items-center justify-between mt-4 rounded-md"
            >
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm overflow-hidden">
                  {friend.image ? (
                    <img
                      src={friend.image}
                      alt={friend.name}
                      className="h-full object-cover rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <span>{friend.name[0]}</span>
                  )}
                </div>
                <div className="text">
                  <h3 className="font-medium text-sm text-white name">
                    {friend.name}
                  </h3>
                  <p className="text-white/60 text-xs">
                    Joined {new Date(friend.joinedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div>
                <div className="text mr-3">
                  <p className="text-[#ffb246] font-bold text-sm">
                    +500 <span>DGH</span>
                  </p>
                </div>
              </div>
            </div>
          ))}

          {friends.length === 0 && (
            <div className="w-full text-center mt-8 text-white/60">
              No friends have joined using your referral code yet
            </div>
          )}
        </div>
      </div>

      {/* Invite Button */}
      <div className="flex items-center justify-center">
        <button
          onClick={handleInvite}
          className="flex items-center justify-center gap-2 w-[90%] bg-[#FFD700] text-black absolute bottom-20 font-bold rounded-full py-3"
        >
          <FaShareNodes size={20} />
          Invite friends
        </button>
      </div>
    </div>
  );
};

export default Friends;
