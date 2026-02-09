const NoiseOverlay = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[99999] opacity-[0.03]">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
        </div>
    );
};

export default NoiseOverlay;
