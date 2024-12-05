import { TonConnectButton} from '@tonconnect/ui-react';

const Wallet: React.FC = () => {

  return (
    <div className="min-h-screen w-full bg-black relative">
      <div className="h-[75vh] overflow-y-auto">
        <div className="flex items-center justify-center flex-col">
          <div className="mt-10">
            <div className="flex items-center flex-col justify-center gap-5">
              <img
                src="/assets/image 16.png"
                alt="App logo"
                className="w-16 h-16 object-cover rounded-full"
              />
              <h1 className="text-white font-semibold text-2xl text-center">
                TON Wallet
              </h1>
              <p className="text-white text-sm">
                Connect your TON wallet for future rewards
              </p>

              <div className="connect-wallet space-y-4">
                <div className="flex flex-col items-center gap-4">
                  {/* Native TON Connect Button */}
                  <TonConnectButton />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;